let tokenListChoices = undefined;
let dataTokenListChoices = undefined;

async function init(accounts = []){

    if (accounts.length === 0){
        document.querySelector('#walletDetails').innerText = 'Get Web3';
    }
    else{
        document.querySelector('#walletDetails').innerText = trimAddress(accounts[0]);
        document.querySelector('#walletDetails').addEventListener("click", ()=>{
            copyAddress(document.querySelector('#walletDetails'), accounts[0])
        });
    }
    refreshUI();
}

async function refreshUI(){
    let dataTokenList = document.querySelector('#dataTokenList');
    dataTokenListChoices = new Choices(dataTokenList);
    let tokenList = document.querySelector('#tokenList');
    tokenListChoices = new Choices(tokenList);

    getUserDataTokens().then((userTokens)=>{
        userTokens.forEach((token) => {
            dataTokenListChoices._addChoice({'value':token.tokenAddress, 'label':`${token.tokenName} (${token.tokenSymbol})`})
        });
    });

    fetch('https://wispy-bird-88a7.uniswap.workers.dev/?url=http://tokens.1inch.eth.link')
    .then(response => response.json())
    .then((tokens) => {
        tokens['tokens'].forEach((token) => {
            tokenListChoices._addChoice({'value':token.address, 'label':`${token.name} (${token.symbol})`})
        })

    });
}

