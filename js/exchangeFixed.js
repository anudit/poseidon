let tokenListChoices = undefined;
let dataTokenListChoices = undefined;
let manageExchangeChoices = undefined;
let exchangeChoices = undefined;

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

    document.getElementById("manageExchangeList").addEventListener("change", async ()=> {

        document.getElementById("enableExBtn").classList.add('disabled');
        document.getElementById("disableExBtn").classList.add('disabled');

        let selectedExId = document.querySelector('#manageExchangeList').value;

        getExchangeData(selectedExId).then(async (exchangeData)=>{
            console.log(exchangeData);

            if (exchangeData.active === true){
                document.getElementById("disableExBtn").classList.remove('disabled');
            }
            else{
                document.getElementById("enableExBtn").classList.remove('disabled');
            }


            let manageExApprovalBtn = document.querySelector('#manageExAppBtn');
            manageExApprovalBtn.onclick = function(){
                let amt=document.querySelector('#manageExAppAmt').value;
                erc20Approve(exchangeData.dataToken.tokenAddress, FixedRateExchange_Address[netId], amt, manageExApprovalBtn).then(()=>{
                    manageExApprovalBtn.classList.add('disabled');
                    manageExApprovalBtn.innerText ='Processing Txn ...';
                })
            };

            getExchangeRate(selectedExId).then((selectedEx_ExRate)=>{
                document.querySelector('#manageExCurrentRate').innerHTML = `1 ${exchangeData.dataToken.tokenName} = ${selectedEx_ExRate} ${exchangeData.baseToken.tokenName}`;
            });

            erc20Allowance(exchangeData.dataToken.tokenAddress, exchangeData.exchangeOwner, FixedRateExchange_Address[netId]).then((allowance)=>{
                document.querySelector('#manageExAllowance').innerHTML = `${allowance} ${exchangeData.dataToken.tokenSymbol}` ;
            });

        })
    });

    document.getElementById("fromExchangeList").addEventListener("change", async ()=> {
        let swapEx = document.querySelector('#fromExchangeList').value;
        let details = await getExchangeData(swapEx);
        document.querySelector('#selectedSwapDataTokenName').innerHTML = `${details.dataToken.tokenName} (${details.dataToken.tokenSymbol})`;
        document.querySelector('#selectedSwapBaseTokenName').innerHTML = `${details.baseToken.tokenName} (${details.baseToken.tokenSymbol})`;

    });

    document.getElementById("swapDataTokenAmount").addEventListener("keyup", async ()=>{
        document.querySelector('#swapTokensRequired').innerHTML = '...';
        let selectedEx_ExRate = await swapCalcInGivenOut(
            document.querySelector('#fromExchangeList').value,
            document.querySelector('#swapDataTokenAmount').value
        );
        document.querySelector('#swapTokensRequired').innerHTML = selectedEx_ExRate;
    });

    setupCreateExchangeUI();
    setupManageExchangeUI();
    setupExchangeUI();
}

async function setupCreateExchangeUI(){
    let dataTokenList = document.querySelector('#dataTokenList');
    let tokenList = document.querySelector('#tokenList');

    getUserDataTokens().then((userTokens)=>{
        dataTokenList.innerHTML = `<option value="">Choose a DataToken</option>`;
        userTokens.forEach((token) => {
            dataTokenList.innerHTML += `<option value="${token.tokenAddress}">${token.tokenName} (${token.tokenSymbol})</option>`;
        });
    })
    .then(()=>{
        dataTokenListChoices = new Choices(dataTokenList);
    });

    tokenListChoices = new Choices(tokenList, {
        placeholder: true,
        maxItemCount: 10,
        placeholderValue: 'Choose a Token',
        searchPlaceholderValue: 'Search for a token in these Token Lists',
      }).setChoices(async function() {
        return [
            {
                label: 'Ethereum Mainnet',
                id: 1,
                disabled: false,
                choices: [
                    {
                        'label':'OCEAN Token',
                        'value':'0x967da4048cD07aB37855c090aAF366e4ce1b9F48'
                    }
                ],
            },
            {
                label: 'Rinkeby Testnet',
                id: 2,
                disabled: false,
                choices: [
                    {
                        'label':'OCEAN Token',
                        'value':'0x8967bcf84170c91b0d24d4302c2376283b0b3a07'
                    }
                ],
            }
        // ,
        // await fetch(
        //   'https://defiprime.com/defiprime.tokenlist.json'
        // )
        // .then(function(response) {
        //     return response.json();
        // })
        // .then(function(data) {
        //     let retData=  data.tokens.map(function(token) {
        //         return { value: token.address, label: `${token.name} (${token.symbol})` };
        //     });
        //     // console.log(retData);
        //     return {
        //         label: 'DefiPrime TokenList',
        //         id: 2,
        //         disabled: false,
        //         choices: retData,
        //       }
        // }),
        // await fetch(
        //     'https://wispy-bird-88a7.uniswap.workers.dev/?url=http://defi.cmc.eth.link'
        //   )
        //   .then(function(response) {
        //       return response.json();
        //   })
        //   .then(function(data) {
        //       let retData=  data.tokens.map(function(token) {
        //           return { value: token.address, label: `${token.name} (${token.symbol})` };
        //       });
        //     //   console.log(retData);
        //       return {
        //         label: 'CoinMarketCap Defi TokenList',
        //         id: 3,
        //         disabled: false,
        //         choices: retData,
        //       }
        //   })
        ];
      });
}

async function setupManageExchangeUI(){
    let me = document.querySelector('#manageExchangeList');

    getExchangesCreated(getAddress()).then(async (exchanges)=>{
        // console.log(exchanges);
        await sleep(2000);
        me.innerHTML = `<option value="">Choose an Exchange</option>`;
        exchanges.forEach((exchange) => {
            me.innerHTML += `<option value="${exchange.exchangeId}">${exchange.baseToken.tokenName} ➡ ${exchange.dataToken.tokenName} (${exchange.baseToken.tokenSymbol} ➡ ${exchange.dataToken.tokenSymbol})</option>`;
        });
    })
    .then(()=>{
        manageExchangeChoices = new Choices(me, {
            placeholder: true,
            maxItemCount: 10,
            placeholderValue: 'Choose an Exchange',
            searchPlaceholderValue: 'Search for an Exchange',
        });
    });

}

async function setupExchangeUI(){
    let fe = document.querySelector('#fromExchangeList');

    getExchangesCreated().then(async (exchanges)=>{
        console.log(exchanges);
        await sleep(2000);
        fe.innerHTML = `<option value="">Choose an Exchange</option>`;
        exchanges.forEach((exchange) => {
            fe.innerHTML += `<option value="${exchange.exchangeId}">${exchange.baseToken.tokenName} ➡ ${exchange.dataToken.tokenName} (${exchange.baseToken.tokenSymbol} ➡ ${exchange.dataToken.tokenSymbol})</option>`;
        });
    })
    .then(()=>{
        exchangeChoices = new Choices(fe, {
            placeholder: true,
            maxItemCount: 10,
            placeholderValue: 'Choose an Exchange',
            searchPlaceholderValue: 'Search for an Exchange',
        });
    });

}

function createEx(){
    let baseTokenAddr = document.querySelector('#tokenList').value;
    let dataTokenAddr  = document.querySelector('#dataTokenList').value;
    let rate = document.querySelector('#exRate').value;
    createExchange(baseTokenAddr, dataTokenAddr, rate)
}

function setExchangeRateUI(){
    let ex=document.querySelector('#manageExchangeList').value;
    let newRate=document.querySelector('#newExRate').value;
    setExchangeRate(ex, newRate);
}

function enableExchangeUI(){
    let ex=document.querySelector('#manageExchangeList').value;
    toggleExchangeState(ex);
}

function disableExchangeUI(){
    let ex=document.querySelector('#manageExchangeList').value;
    toggleExchangeState(ex);
}

async function exchangeTokensUI(){
    let ex=document.querySelector('#fromExchangeList').value;
    let dataTokenAmt=parseFloat(document.querySelector('#swapDataTokenAmount').value);
    let baseTokenAmt= parseFloat(await swapCalcInGivenOut(ex, dataTokenAmt));
    let ctrlBtn = document.querySelector('#swapBtn');
    ctrlBtn.classList.add('disabled');

    getExchangeData(ex).then(async (exchangeData)=>{
        console.log(exchangeData)
        let exAllowanceAmt = parseFloat(await erc20Allowance(exchangeData.dataToken.tokenAddress, exchangeData.exchangeOwner, FixedRateExchange_Address[netId]));
        if (dataTokenAmt > exAllowanceAmt){
            console.log(`Insufficient Allowance/${exAllowanceAmt}`)
            Swal.fire({
                icon: 'warning',
                title: 'Insufficient Allowance',
                html: `Exchange Owner has allowed only ${exAllowanceAmt.toFixed(3)} ${exchangeData.dataToken.tokenSymbol} to be spent which exceeds the value for this transaction. Please consider reducing your swap amount.`,
            });
            ctrlBtn.classList.remove('disabled');
        }
        else {
            let userAllowanceAmt = parseFloat(await erc20Allowance(exchangeData.baseToken.tokenAddress, getAddress(), FixedRateExchange_Address[netId]));
            if(userAllowanceAmt >= baseTokenAmt ){
                ctrlBtn.innerText  = 'Swapping Tokens';
                ctrlBtn.classList.add('disabled');
                await exchangeSwap(ex, dataTokenAmt);
            }
            else{
                ctrlBtn.innerText  = 'Approving Tokens';
                ctrlBtn.classList.add('disabled');
                await baseTokenApproveAndSwap(exchangeData.exchangeId,  exchangeData.baseToken.tokenAddress, FixedRateExchange_Address[netId], baseTokenAmt, dataTokenAmt);
            }


        }
    })

}
