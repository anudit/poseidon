
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

    if(pageTokenData.registeredBy.toLowerCase() !== getAddress().toLowerCase()){
        document.querySelector('#mintBtn').classList.add('disabled');
        document.querySelector('#mintBtn').innerText = 'Not Allowed ⚠';
    }

    document.querySelector('#token_name').innerText = ` ${_tokenData.tokenName} (${_tokenData.tokenSymbol})`;
    dataTokenBalanceOf(_tokenData.tokenAddress).then((balance)=>{
        document.querySelector('#token_bal').innerText = numberWithCommas(parseFloat(balance).toFixed(3));
    })
    dataTokenCap(_tokenData.tokenAddress).then((cap)=>{
        document.querySelector('#token_cap').innerText = `${abbreviateNumber(cap)}`;
    })


}

async function mint(){
    let to = document.querySelector('#inp_mintToAddress').value;
    let val = document.querySelector('#inp_mintToAmount').value;

    dataTokenMint(pageTokenData.tokenAddress, to, val);
}

async function approve(){
    let spender = document.querySelector('#inp_spenderAddress').value;
    let amt = document.querySelector('#inp_allowanceAmount').value;

    dataTokenApprove(pageTokenData.tokenAddress, spender, amt);
}

async function transfer(){
    let receiver = document.querySelector('#inp_transferAddress').value;
    let amt = document.querySelector('#inp_transferAmount').value;

    dataTokenTransfer(pageTokenData.tokenAddress, receiver, amt);
}

async function explore(){
    let blobData = await dataTokenBlob(pageTokenData.tokenAddress);
    console.log(blobData);
    let jsonData = await getIPFS(blobData);
    Swal.fire({
        icon: undefined,
        title: 'DataToken Details',
        html: `
        <pre style="text-align:left;">${JSON.stringify(jsonData, undefined, 4)}</pre>
        `,
        showCancelButton: false,
        showCloseButton: true,
        confirmButtonColor: '#3085d6',
        confirmButtonText: 'Copy Details',
        footer: `
            <a href="https://ipfs.io/ipfs/${blobData}" target='_blank'>
                View on IPFS&nbsp;
                <svg fill="#0d6efd" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" width="20px" height="20px" style=" margin-top: -3px; "><path d="M 25.980469 2.9902344 A 1.0001 1.0001 0 0 0 25.869141 3 L 20 3 A 1.0001 1.0001 0 1 0 20 5 L 23.585938 5 L 13.292969 15.292969 A 1.0001 1.0001 0 1 0 14.707031 16.707031 L 25 6.4140625 L 25 10 A 1.0001 1.0001 0 1 0 27 10 L 27 4.1269531 A 1.0001 1.0001 0 0 0 25.980469 2.9902344 z M 6 7 C 4.9069372 7 4 7.9069372 4 9 L 4 24 C 4 25.093063 4.9069372 26 6 26 L 21 26 C 22.093063 26 23 25.093063 23 24 L 23 14 L 23 11.421875 L 21 13.421875 L 21 16 L 21 24 L 6 24 L 6 9 L 14 9 L 16 9 L 16.578125 9 L 18.578125 7 L 16 7 L 14 7 L 6 7 z"/></svg>
            </a>`
      }).then((result) => {
        if (result.isConfirmed) {
            copyToClipboard(JSON.stringify(jsonData));
        }
      })
}


async function addToMetamask(){
    const tokenAddress = pageTokenData.tokenAddress;
    const tokenSymbol = pageTokenData.tokenSymbol;
    const tokenDecimals = 18;
    const tokenImage = `https://poseidon.anudit.dev/images/favicon-black.png`;

    try {
    const wasAdded = await ethereum.request({
        method: 'wallet_watchAsset',
        params: {
        type: 'ERC20', // Initially only supports ERC20, but eventually more!
        options: {
            address: tokenAddress,
            symbol: tokenSymbol.slice(0, 6),
            decimals: tokenDecimals,
            image: tokenImage,
        },
        },
    });

    if (wasAdded) {
        swal.fire('All Done.');
    } else {
        swal.fire('Maybe Next Time.');
    }
    } catch (error) {
        swal.fire(error.message);
    }
}

function explorer(){
    window.open(`${chainExplorers[netId]}/address/${pageTokenData.tokenAddress}`, '_blank');
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

