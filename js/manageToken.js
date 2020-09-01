
async function init(accounts = []){


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

    dataTokenAllowance(pageTokenData.tokenAddress, spender, amt);
}

async function transfer(){
    let receiver = document.querySelector('#inp_transferAddress').value;
    let amt = document.querySelector('#inp_transferAmount').value;

    dataTokenTransfer(pageTokenData.tokenAddress, receiver, amt);
}

async function explore(){
    let blobData = await dataTokenBlob(pageTokenData.tokenAddress);
    Swal.fire({
        icon: 'info',
        title: 'DataToken Blob Storage',
        html: `
            <code>${blobData}</code>
        `,
    });
}

