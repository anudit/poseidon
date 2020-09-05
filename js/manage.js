
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

    document.querySelector('#tokenList').innerHTML = `<h3>${loadingQuote()}</h3>`;
    refreshUI()

}

async function refreshUI(){

    getUserDataTokens().then((tokens)=>{

        if (tokens.length <= 0){
            document.querySelector('#tokenList').innerHTML = `No Tokens found. Lets go create some <a href='./create.html'>here</a>.`;
        }
        else {
            document.querySelector('#tokenList').innerHTML = "";
            tokens.forEach(token => {
                let html =  `
                    <a href="./manage-token.html?add=${token.tokenAddress}" class="vacancy-item slide-top filter-token" data-name="${token.tokenName}">
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
            document.querySelector('#search').style.display ='block';
            document.querySelector('#search').addEventListener("input",function () {
                filterTokens(document.querySelector('#search').value);
            })
        }

    })

}

function filterTokens(searchString) {
    var x, i;
    x = document.querySelectorAll(".filter-token");
    x.forEach((e)=>{
        if (searchString=="" || e.getAttribute("data-name").toLowerCase().includes(searchString.toLowerCase()) === true){
            e.style.display = 'flex';
        }
        else{
            e.style.display = 'none';
        }
    })
  }
