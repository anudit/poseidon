
async function init(accounts = []){

    let tokenData = await getTokenData(getParameterByName('add'));
    if(tokenData === false){
        window.location='./index.html';
    }
    else{
        refreshUI(tokenData)
    }

    if (accounts.length === 0){
        document.querySelector('#walletDetails').innerText = 'Get Web3';
    }
    else{
        document.querySelector('#walletDetails').innerText = trimAddress(accounts[0]);
        document.querySelector('#walletDetails').addEventListener("click", ()=>{
            copyAddress(document.querySelector('#walletDetails'), accounts[0])
        });
    }

}


async function refreshUI(_tokenData){
    window.pageTokenData = _tokenData;
    document.querySelector('#tokenName').innerText = `${_tokenData.tokenName} (${_tokenData.tokenSymbol})`;
    document.querySelector('#tokenCreator').innerText = trimAddress(_tokenData.registeredBy);
    document.querySelector('#tokenCap').innerText = abbreviateNumber(parseFloat(web3.utils.fromWei(_tokenData.tokenCap)));
    document.querySelector('#tokenExplorerLink').setAttribute('href',`${chainExplorers[netId]}/address/${_tokenData.tokenAddress}` )
    document.querySelector('#tokenCreatorExplorerLink').setAttribute('href',`${chainExplorers[netId]}/address/${_tokenData.registeredBy}` )

    dataTokenBlob(pageTokenData.tokenAddress).then((blobData)=>{
        window.blobData = blobData;
        getIPFS(blobData).then((jsonData)=>{
            window.pageTokenInfo = jsonData;
            // console.log(jsonData);
            document.querySelector('#tokenDescription').innerText = jsonData.dataDescription;
            document.querySelector('#tokenType').innerText = jsonData.dataType;
            document.querySelector('#tokenLicense').innerText = jsonData.dataLicense;
            document.querySelector('#created').innerText = new Date(jsonData.created).toLocaleDateString();
        });
    });
    dataTokenBalanceOf(_tokenData.tokenAddress).then((balance)=>{
        document.querySelector('#userBalance').innerText = numberWithCommas(parseFloat(balance).toFixed(3)) + ' ' + _tokenData.tokenSymbol;
    });


}

function downloadSample(){
    window.open(`${pageTokenInfo.dataSample}`, '_blank');
}

function openOnIPFS(){
    window.open(`https://ipfs.io/ipfs/${blobData}`, '_blank');
}

async function getIPFS(_hash = ''){

    let promise = new Promise(async (res, rej) => {

        fetch(`https://ipfs.io/ipfs/${_hash}`)
        .then(response => response.json())
        .then((data) => {
            res(data);
        })
        .catch(e=>{
            rej(e);
        })
    });
    let result = await promise;
    return result;

}
