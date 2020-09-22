let setupPoolsList_choiceElement;
let setupDataTokenList_choiceElement;
let setupBaseTokenList_choiceElement;
let managePoolsList_choiceElement;

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
    setupPoolLists();
    swapPoolLists();
}


async function setupPoolLists(){
    let poolList = document.querySelector('#setupPoolsList');

    getUserPools().then(async (pools)=>{
        poolList.innerHTML = `<option value="">Choose a Pool</option>`;

        for(var poolInd = 0; poolInd < pools.length; poolInd+=1){
            let isFinal = await isPoolFinalized(pools[poolInd]);
            if(isFinal === false){
                console.log('isFinal', isFinal, pools[poolInd])
                poolList.innerHTML += `<option value="${pools[poolInd]}">${trimAddress(pools[poolInd])}</option>`;
            }
        }
        setupPoolsList_choiceElement = new Choices(poolList);
    });

    let dataTokenList = document.querySelector('#dataTokenList');
    let baseTokenList = document.querySelector('#baseTokenList');

    getUserDataTokens().then((userTokens)=>{
        dataTokenList.innerHTML = `<option value="">Choose a DataToken</option>`;
        userTokens.forEach((token) => {
            dataTokenList.innerHTML += `<option value="${token.tokenAddress}">${token.tokenName} (${token.tokenSymbol})</option>`;
        });
    })
    .then(()=>{
        setupDataTokenList_choiceElement = new Choices(dataTokenList);
    });

    setupBaseTokenList_choiceElement = new Choices(baseTokenList, {
        placeholder: true,
        maxItemCount: 10,
        placeholderValue: 'Choose a Token',
        searchPlaceholderValue: 'Search for a token in these Token Lists',
      }).setChoices(async function() {
        return [
            {
                label: '1a Rinkeby',
                id: 1,
                disabled: false,
                choices: [
                    {
                        'label':'TESTToken',
                        'value':'0x22c4fea29916b7e06cc11fb83f044321c1d01c5f'
                    },
                    {
                        'label':'OCEAN Token',
                        'value':'0x8967bcf84170c91b0d24d4302c2376283b0b3a07'
                    }
                ],
            }
        ,
        await fetch(
          'https://defiprime.com/defiprime.tokenlist.json'
        )
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            let retData=  data.tokens.map(function(token) {
                return { value: token.address, label: `${token.name} (${token.symbol})` };
            });
            // console.log(retData);
            return {
                label: 'DefiPrime TokenList',
                id: 2,
                disabled: false,
                choices: retData,
              }
        }),
        await fetch(
            'https://wispy-bird-88a7.uniswap.workers.dev/?url=http://defi.cmc.eth.link'
          )
          .then(function(response) {
              return response.json();
          })
          .then(function(data) {
              let retData=  data.tokens.map(function(token) {
                  return { value: token.address, label: `${token.name} (${token.symbol})` };
              });
            //   console.log(retData);
              return {
                label: 'CoinMarketCap Defi TokenList',
                id: 3,
                disabled: false,
                choices: retData,
              }
          })
        ];
      });


}

async function swapPoolLists(){
    let poolList = document.querySelector('#managePoolsList');

    let pools = await getUserPools();
    poolList.innerHTML = `<option value="">Choose a Pool</option>`;

    for(var poolInd = 0; poolInd < pools.length; poolInd+=1){
        let isFinal = await isPoolFinalized(pools[poolInd]);
        if(isFinal === true){
            console.log('isFinal', isFinal, pools[poolInd])
            let poolData = await getPoolTokens(pools[poolInd]);
            let poolString = '';
            poolData.forEach((poolToken)=>{
                poolString+=`${poolToken.symbol} `;
            })
            poolList.innerHTML += `<option value="${pools[poolInd]}">${trimAddress(pools[poolInd])} [${poolString}]</option>`;
        }
    }
    managePoolsList_choiceElement = new Choices(poolList);
}

function viewOnBalancer(){
    let selectedPool = document.querySelector('#managePoolsList').value;
    if (selectedPool !== '') {
        window.open(`https://pools.balancer.exchange/#/pool/${selectedPool}/`)
    }
    else{
        alert('Please Select a Pool.')
    }
}


async function setupPoolUI(){

    let poolAddress = document.querySelector('#setupPoolsList').value;
    let dataTokenList = document.querySelector('#dataTokenList');
    let baseTokenList = document.querySelector('#baseTokenList');
    let swapFee = document.querySelector('#swap_fee').value;
    let dt_wght = document.querySelector('#dt_wght').value;
    let bt_wght = document.querySelector('#bt_wght').value;

    if (parseFloat(swapFee) > 0 && parseFloat(swapFee) <= 0.1) {

        if (parseInt(dt_wght) > 0 && parseInt(dt_wght) <= 50 &&
            parseInt(bt_wght) > 0 && parseInt(bt_wght) <= 50
        ) {

            erc20ApproveP(dataTokenList.value, poolAddress, document.querySelector('#dt_amt').value).then(()=>{
                erc20ApproveP(baseTokenList.value, poolAddress, document.querySelector('#bt_amt').value).then(()=>{
                    setupPool(
                        poolAddress,
                        dataTokenList.value, document.querySelector('#dt_amt').value, dt_wght,
                        baseTokenList.value, document.querySelector('#bt_amt').value, bt_wght,
                        document.querySelector('#swap_fee').value
                    )
                }).catch((e)=>{
                    alert(e.message)
                })
            }).catch((e)=>{
                alert(e.message)
            })

        }
        else{
            alert('Weights have to be less than 50')
        }
    }
    else{
        alert('Swap Fee has to be between 0 & 0.1')
    }


}
