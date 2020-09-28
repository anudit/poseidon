
async function init(accounts = []){

    Ipfs.create({ repo: 'ipfs-' + Math.random() }).then(node=>{
        window.node = node;
        const status = node.isOnline() ? 'online' : 'offline';
        console.log(`Node status: ${status}`);
    });

    let tokenData = await isUserDataToken(getParameterByName('add'));
    if(tokenData  === false){
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
        <pre style="text-align:left;">${JSON.stringify(JSON.parse(jsonData), undefined, 4)}</pre>
        `,
        showCancelButton: false,
        showCloseButton: true,
        confirmButtonColor: '#3085d6',
        confirmButtonText: 'Copy Details',
        footer: `<a href="https://ipfs.io/ipfs/${blobData}" target='_blank'>View on IPFS</a>`
      }).then((result) => {
        if (result.isConfirmed) {
            copyToClipboard(JSON.stringify(JSON.parse(jsonData)));
        }
      })
}


async function addToMetamask(){
    const tokenAddress = pageTokenData.tokenAddress;
    const tokenSymbol = pageTokenData.tokenSymbol;
    const tokenDecimals = 18;
    const tokenImage = `https://oceanv3.anudit.dev/images/favicon-black.png`;

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

        for await (const data of node.cat(_hash)) {
            res(data.toString())
        }

    });
    let result = await promise;
    return result;

}

