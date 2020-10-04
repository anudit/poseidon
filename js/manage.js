
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

    document.querySelector('#message').innerHTML = loadingQuote();
    refreshUI()

}

async function refreshUI(){

    getUserTokensFromBalance().then((tokens)=>{

        if (tokens.length <= 0){
            document.querySelector('#message').style.display = "block";
            document.querySelector('#message').innerHTML = `No Tokens found. <br/>Let's go create some <a href='./create.html'>here</a>.`;
        }
        else {
            document.querySelector('#message').style.display = "none";
            tokens.forEach(token => {
                let html =  `
                    <a href="./manage-token.html?add=${token.tokenAddress}" class="vacancy-item slide-top filter-token" data-name="${token.tokenName}">
                        <div class="vacancy-title">${token.tokenName}</div>
                        <div class="vacancy-text">${token.userBalance} ${token.tokenSymbol}</div>
                        <div class="vacancy-arrow">
                        <svg xmlns="http://www.w3.org/2000/svg" width="8" height="12" viewBox="0 0 8 12">
                            <polygon points="0 10.59 4.58 6 0 1.41 1.41 0 7.41 6 1.41 12" />
                        </svg>
                        </div>
                    </a>`;

                document.querySelector('#tokenList').innerHTML+=html;
            });
            document.querySelector('#searchBox').style.display ='flex';
            document.querySelector('#search').addEventListener("input",function () {
                filterTokens(document.querySelector('#search').value);
            })
        }

    }).then(()=>{
        let openSearchQuery = getParameterByName('n');
        if (openSearchQuery !== null){
            document.querySelector('#search').value = openSearchQuery;
            filterTokens(document.querySelector('#search').value);
        }
    })

}

function filterTokens(searchString) {
    var x, i;
    x = document.querySelectorAll(".filter-token");
    var noResults = true;
    for(i=0; i < x.length;i++){
        var e = x[i];
        if (searchString=="" || e.getAttribute("data-name").toLowerCase().includes(searchString.toLowerCase()) === true){
            document.querySelector('#message').style.display = "none";
            e.style.display = 'flex';
            noResults = false;
        }
        else{
            e.style.display = 'none';
        }
    }
    if (noResults === true){
        console.log('found no res')
        document.querySelector('#message').style.display = "block";
        document.querySelector('#message').innerHTML = `No Tokens found by this name. <br/>Let's go create one <a href='./create.html'>here</a>.`;
    }
  }
