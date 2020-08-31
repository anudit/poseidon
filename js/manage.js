
async function init(accounts = []){
    if (accounts.length === 0){
        document.querySelector('#walletDetails').innerText = 'Get Web3';
    }
    else{
        document.querySelector('#walletDetails').innerText = trimAddress(accounts[0]);
    }
    refreshUI()
}

async function refreshUI(){
    getUserDataTokens().then((tokens)=>{
        tokens.forEach(token => {
            let html =  `
                <a href="./manage-token.html?add=tokenAddress" class="vacancy-item">
                    <div class="vacancy-title">${token.tokenName}</div>
                    <div class="vacancy-text">${trimAddress(token.tokenAddress)}</div>
                    <div class="vacancy-arrow">
                    <svg xmlns="http://www.w3.org/2000/svg" width="8" height="12" viewBox="0 0 8 12">
                        <polygon points="0 10.59 4.58 6 0 1.41 1.41 0 7.41 6 1.41 12" />
                    </svg>
                    </div>
                </a>`;

            document.querySelector('#tokenList').innerHTML+=html;
        });

    })

}

async function getTokenDetails(){

}
