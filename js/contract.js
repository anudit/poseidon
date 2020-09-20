
async function createDataToken(_name ='', _symbol ='', _cap ='', _blob = ''){
    let promise = new Promise((res, rej) => {

        DTFactory.methods.createToken(_blob, _name, _symbol, web3.utils.toWei(_cap)).send({from:web3.currentProvider.selectedAddress}, function(error, result) {
            if (!error)
                res(result);
            else{
                rej(error);
            }
        }).on('receipt', (receipt) => {
            console.log('receipt');
          }).on('confirmation', (confirmationNumber, receipt) => {
            console.log('confirmation');
          }).on('error', (err) => {
            console.log(err);
          }).then( (receipt) => {
              console.log(receipt);
            window.location=`./manage-token.html?add=${receipt.events.InstanceDeployed.returnValues.instance}`
          })

    });
    let result = await promise;
    return result;
}

async function getUserDataTokens(_address = web3.currentProvider.selectedAddress){
    let promise = new Promise((res, rej) => {

        DTFactory.getPastEvents('TokenRegistered', {
            filter: {registeredBy: _address},
            fromBlock: 7039273,
            toBlock: 'latest'
        })
        .then((events) => {
            let datatokensRegistered = [];
            events.forEach((event)=>{
                datatokensRegistered.push({
                    blob: event.returnValues.blob,
                    registeredAt: event.returnValues.registeredAt,
                    registeredBy: event.returnValues.registeredBy,
                    tokenAddress: event.returnValues.tokenAddress,
                    tokenCap: event.returnValues.tokenCap,
                    tokenName: event.returnValues.tokenName,
                    tokenSymbol: event.returnValues.tokenSymbol
                })
            })
            res(datatokensRegistered)

        })
        .catch(function(error){
           rej(error);
        });

    });
    let result = await promise;
    return result;
}

async function isUserDataToken(_tokenAddress, _address = web3.currentProvider.selectedAddress){
    let promise = new Promise((res, rej) => {

        DTFactory.getPastEvents('TokenRegistered', {
            filter: {registeredBy: _address},
            fromBlock: 7039273,
            toBlock: 'latest'
        })
        .then((events) => {
            events.forEach((event)=>{
                if (_tokenAddress === event.returnValues.tokenAddress){
                    res({
                        blob: event.returnValues.blob,
                        registeredAt: event.returnValues.registeredAt,
                        registeredBy: event.returnValues.registeredBy,
                        tokenAddress: event.returnValues.tokenAddress,
                        tokenCap: event.returnValues.tokenCap,
                        tokenName: event.returnValues.tokenName,
                        tokenSymbol: event.returnValues.tokenSymbol
                    })
                }
            })
            res(false);
        })
        .catch(function(error){
           rej(error);
        });

    });
    let result = await promise;
    return result;
}

async function dataTokenMint(_tokenAddress, _account , _amt){
    let promise = new Promise((res, rej) => {

        dataTokenContract = new web3.eth.Contract(DataTokenTemplate_ABI, _tokenAddress);

        dataTokenContract.methods.mint(_account, web3.utils.toWei(_amt)).send({from:web3.currentProvider.selectedAddress}, function(error, result) {
            if (!error)
                res(result);
            else{
                rej(error);
            }
        });

    });
    let result = await promise;
    return result;
}

async function dataTokenApprove(_tokenAddress, _spender , _amt){
    let promise = new Promise((res, rej) => {

        dataTokenContract = new web3.eth.Contract(DataTokenTemplate_ABI, _tokenAddress);

        dataTokenContract.methods.approve(_spender, web3.utils.toWei(_amt)).send({from:web3.currentProvider.selectedAddress}, function(error, result) {
            if (!error)
                res(result);
            else{
                rej(error);
            }
        });

    });
    let result = await promise;
    return result;
}

async function baseTokenApproveAndSwap(_exchangeId, _basetokenAddress, _spender , _allowanceAmt, _swapAmt){
    let promise = new Promise((res, rej) => {
        let ctrlBtn = document.querySelector('#swapBtn');

        baseTokenContract = new web3.eth.Contract(ERC20Token_ABI, _basetokenAddress);
        console.log(`Approving ${_allowanceAmt}`);
        baseTokenContract.methods.approve(_spender, web3.utils.toWei((_allowanceAmt).toString())).send({from:web3.currentProvider.selectedAddress}, function(error, result) {
            if (!error)
                res(result);
            else{
                rej(error);
            }
        }).on('receipt', (receipt) => {
            console.log('baseTokenContract/baseTokenApproveAndSwap/receipt\t', receipt);
            ctrlBtn.innerText  = 'Swapping Tokens';
            ctrlBtn.classList.add('disabled');

            if (confirmationNumber==1){
                exchangeSwap(_exchangeId, _swapAmt);
            }

        }).on('confirmation', (confirmationNumber, receipt) => {

        }).on('error', (err) => {
            ctrlBtn.innerText  = 'Swap';
            ctrlBtn.classList.remove('disabled');
            Swal.fire({
                icon: 'error',
                title: 'Transaction Error',
                html: err.message,
            });
            console.log(err);
        });

    });
    let result = await promise;
    return result;
}


async function dataTokenBalanceOf(_tokenAddress, _account = web3.currentProvider.selectedAddress){
    let promise = new Promise((res, rej) => {

        dataTokenContract = new web3.eth.Contract(DataTokenTemplate_ABI, _tokenAddress);

        dataTokenContract.methods.balanceOf(_account).call({from:web3.currentProvider.selectedAddress}, function(error, result) {
            if (!error)
                res(result);
            else{
                rej(error);
            }
        });

    });
    let result = await promise;
    return web3.utils.fromWei(result);
}

async function dataTokenTransfer(_tokenAddress, _to, _amt){
    let promise = new Promise((res, rej) => {

        dataTokenContract = new web3.eth.Contract(DataTokenTemplate_ABI, _tokenAddress);

        dataTokenContract.methods.balanceOf(_to, web3.utils.toWei(_amt)).call({from:web3.currentProvider.selectedAddress}, function(error, result) {
            if (!error)
                res(result);
            else{
                rej(error);
            }
        });

    });
    let result = await promise;
    return web3.utils.fromWei(result);
}

async function dataTokenCap(_tokenAddress){
    let promise = new Promise((res, rej) => {

        dataTokenContract = new web3.eth.Contract(DataTokenTemplate_ABI, _tokenAddress);

        dataTokenContract.methods.cap().call({from:web3.currentProvider.selectedAddress}, function(error, result) {
            if (!error)
                res(result);
            else{
                rej(error);
            }
        });

    });
    let result = await promise;
    return web3.utils.fromWei(result);
}

async function dataTokenBlob(_tokenAddress){
    let promise = new Promise((res, rej) => {

        dataTokenContract = new web3.eth.Contract(DataTokenTemplate_ABI, _tokenAddress);

        dataTokenContract.methods.blob().call({from:web3.currentProvider.selectedAddress}, function(error, result) {
            if (!error)
                res(result);
            else{
                rej(error);
            }
        });

    });
    let result = await promise;
    return result;
}

async function erc20Name(_tokenAddress, _account = web3.currentProvider.selectedAddress){
    let promise = new Promise((res, rej) => {

        tokenContract = new web3.eth.Contract(ERC20Token_ABI, _tokenAddress);

        tokenContract.methods.name().call({from:web3.currentProvider.selectedAddress}, function(error, result) {
            if (!error)
                res(result);
            else{
                rej(error);
            }
        });

    });
    let result = await promise;
    return result;
}

async function erc20Symbol(_tokenAddress, _account = web3.currentProvider.selectedAddress){
    let promise = new Promise((res, rej) => {

        tokenContract = new web3.eth.Contract(ERC20Token_ABI, _tokenAddress);

        tokenContract.methods.symbol().call({from:web3.currentProvider.selectedAddress}, function(error, result) {
            if (!error)
                res(result);
            else{
                rej(error);
            }
        });

    });
    let result = await promise;
    return result;
}


async function erc20Allowance(_tokenAddress, _owner, _spender){
    let promise = new Promise((res, rej) => {

        tokenContract = new web3.eth.Contract(ERC20Token_ABI, _tokenAddress);

        tokenContract.methods.allowance(_owner, _spender).call({from:web3.currentProvider.selectedAddress}, function(error, result) {
            if (!error)
                res(result);
            else{
                rej(error);
            }
        });

    });
    let result = await promise;
    return web3.utils.fromWei(result);
}

async function erc20Approve(_tokenAddress, _spender, _amount, control = null){
    let promise = new Promise((res, rej) => {

        tokenContract = new web3.eth.Contract(ERC20Token_ABI, _tokenAddress);

        tokenContract.methods.approve(_spender, web3.utils.toWei(_amount)).send({from:web3.currentProvider.selectedAddress}, function(error, result) {
            if (!error)
                res(result);
            else{
                rej(error);
            }
        }).on('receipt', (receipt) => {
            console.log('ERC20Token/erc20Approve/receipt\t', receipt);
        }).on('confirmation', (confirmationNumber, receipt) => {
            if (confirmationNumber<=1){
                if (control !== null){
                    control.innerText = 'Approve Exchange';
                    control.clasList.remove('disabled');
                }
                Swal.fire({
                    icon: 'success',
                    title: 'Sucessful',
                    html: `${_amount} tokens approved for expenditure.`,
                    backdrop: `rgba(0,0,123,0.4)
                        url("/images/nyan-cat.gif")
                        left top
                        no-repeat
                    `
                });
            }
        }).on('error', (err) => {
            Swal.fire({
                icon: 'error',
                title: 'Transaction Error',
                html: err.message,
            });
            console.log(err);
        })

    });
    let result = await promise;
    return result;
}

async function erc20ApproveP(_tokenAddress, _spender, _amount){
    let promise = new Promise((res, rej) => {

        tokenContract = new web3.eth.Contract(ERC20Token_ABI, _tokenAddress);

        tokenContract.methods.approve(_spender, web3.utils.toWei(_amount)).send({from:web3.currentProvider.selectedAddress}, function(error, result) {
            if (!error)
                res(result);
            else{
                rej(error);
            }
        })
    });
    let result = await promise;
    return result;
}

async function getTokenDetails(_add){
    const tokenDetails = await Promise.all([
        erc20Name(_add),
        erc20Symbol(_add),
    ]);

    return {
        tokenAddress: _add,
        tokenName: tokenDetails[0],
        tokenSymbol: tokenDetails[1]
    }
}


async function getExchangesCreated(_userAddress = null){
    let promise = new Promise((res, rej) => {

        FixedRateExchange.getPastEvents('ExchangeCreated', {
            fromBlock: 7114953,
            toBlock: 'latest'
        })
        .then(async (events) => {
            let exchanges = [];
            await events.forEach(async (event)=>{
                if (_userAddress === null || _userAddress.toLowerCase() === event.returnValues.exchangeOwner.toLowerCase()){
                    let data = {
                        exchangeOwner: event.returnValues.exchangeOwner,
                        exchangeId: event.returnValues.exchangeId,
                        baseToken: await getTokenDetails(event.returnValues.baseToken),
                        dataToken: await getTokenDetails(event.returnValues.dataToken),
                        fixedRate: parseFloat(web3.utils.fromWei(event.returnValues.fixedRate)),
                    }
                    exchanges.push(data)
                }
            })
            res(exchanges);
        })
        .catch(function(error){
           rej(error);
        });

    });
    let result = await promise;
    return result;
}

async function getExchangeData(_exchangeId){
    let promise = new Promise((res, rej) => {

        FixedRateExchange.methods.getExchange(_exchangeId).call({from:web3.currentProvider.selectedAddress}, async function(error, result) {
            if (!error){
                let data = {
                    exchangeOwner: result.exchangeOwner,
                    exchangeId: _exchangeId,
                    baseToken: await getTokenDetails(result.baseToken),
                    dataToken: await getTokenDetails(result.dataToken),
                    fixedRate: parseFloat(web3.utils.fromWei(result.fixedRate)),
                    active: result.active
                }
                res(data);
            }
            else{
                rej(error);
            }
        });

    });
    let result = await promise;
    return result;
}

async function createExchange(_baseToken, _dataToken, _fixedRate){
    let promise = new Promise((res, rej) => {

        FixedRateExchange.methods.create(_baseToken, _dataToken, web3.utils.toWei(_fixedRate)).send({from:web3.currentProvider.selectedAddress}, function(error, result) {
            if (!error)
                res(result);
            else{
                rej(error);
            }
        }).on('receipt', (receipt) => {
            console.log('FixedRateExchange/create/receipt\t', receipt);
        }).on('confirmation', (confirmationNumber, receipt) => {
            if (confirmationNumber<=1){
                Swal.fire({
                    icon: 'success',
                    title: 'Your Exchange has been created.',
                    html: `Anyone can now swap tokens using this exchange.`,
                    backdrop: `rgba(0,0,123,0.4)
                        url("/images/nyan-cat.gif")
                        left top
                        no-repeat
                    `
                });
            }
        }).on('error', (err) => {
            Swal.fire({
                icon: 'error',
                title: 'Transaction Error',
                html: err.message,
            });
            console.log(err);
        })

    });
    let result = await promise;
    return result;
}

async function setExchangeRate(_exchangeId, _newRate){
    let promise = new Promise((res, rej) => {

        FixedRateExchange.methods.setRate(_exchangeId, web3.utils.toWei(_newRate)).send({from:web3.currentProvider.selectedAddress}, function(error, result) {
            if (!error)
                res(result);
            else{
                rej(error);
            }
        }).on('receipt', (receipt) => {
            console.log('FixedRateExchange/setExchangeRate/receipt\t', receipt);
        }).on('confirmation', (confirmationNumber, receipt) => {
            if (confirmationNumber<=1){
                Swal.fire({
                    icon: 'success',
                    title: 'Successful',
                    html: `Fixed Rate for your exchange has been updated`
                });
            }
        }).on('error', (err) => {
            Swal.fire({
                icon: 'error',
                title: 'Transaction Error',
                html: err.message,
            });
            console.log(err);
        })

    });
    let result = await promise;
    return result;
}

async function getExchangeRate(_exchangeId){
    let promise = new Promise((res, rej) => {

        FixedRateExchange.methods.getRate(_exchangeId).call({from:web3.currentProvider.selectedAddress}, function(error, result) {
            if (!error)
                res(result);
            else {
                rej(error);
            }
        })

    });
    let result = await promise;
    return web3.utils.fromWei(result);
}

async function enableExchange(_exchangeId){
    let promise = new Promise((res, rej) => {

        FixedRateExchange.methods.activate(_exchangeId).send({from:web3.currentProvider.selectedAddress}, function(error, result) {
            if (!error)
                res(result);
            else{
                rej(error);
            }
        }).on('receipt', (receipt) => {
            console.log('FixedRateExchange/enableExchange/receipt\t', receipt);
        }).on('confirmation', (confirmationNumber, receipt) => {
            if (confirmationNumber<=1){
                Swal.fire({
                    icon: 'success',
                    title: 'Successful',
                    html: `Exchange has been Enabled.`
                });
            }
        }).on('error', (err) => {
            Swal.fire({
                icon: 'error',
                title: 'Transaction Error',
                html: err.message,
            });
            console.log(err);
        })

    });
    let result = await promise;
    return result;
}

async function disableExchange(_exchangeId){
    let promise = new Promise((res, rej) => {

        FixedRateExchange.methods.deactivate(_exchangeId).send({from:web3.currentProvider.selectedAddress}, function(error, result) {
            if (!error)
                res(result);
            else{
                rej(error);
            }
        }).on('receipt', (receipt) => {
            console.log('FixedRateExchange/disableExchange/receipt\t', receipt);
        }).on('confirmation', (confirmationNumber, receipt) => {
            if (confirmationNumber<=1){
                Swal.fire({
                    icon: 'success',
                    title: 'Successful',
                    html: `Exchange has been Disabled.`
                });
            }
        }).on('error', (err) => {
            Swal.fire({
                icon: 'error',
                title: 'Transaction Error',
                html: err.message,
            });
            console.log(err);
        })

    });
    let result = await promise;
    return result;
}

async function exchangeSwap(_exchangeId, _dataTokenAmount){
    let promise = new Promise((res, rej) => {
        let ctrlBtn = document.querySelector('#swapBtn');
        console.log(`To swap from ${_exchangeId} ${web3.utils.toWei((_dataTokenAmount).toString())}`);

        FixedRateExchange.methods.swap(_exchangeId, web3.utils.toWei((_dataTokenAmount).toString())).send({from:web3.currentProvider.selectedAddress}, function(error, result) {
            if (!error)
                res(result);
            else{
                rej(error);
            }
        }).on('receipt', (receipt) => {

            console.log('FixedRateExchange/exchangeTokensUI/receipt\t', receipt);
        }).on('confirmation', (confirmationNumber, receipt) => {
            ctrlBtn.innerText  = 'Swap';
            ctrlBtn.classList.remove('disabled');
            if (confirmationNumber<=1){
                Swal.fire({
                    icon: 'success',
                    title: 'Successful',
                    html: `Tokens Exchanged`
                });
            }
        }).on('error', (err) => {
            ctrlBtn.innerText  = 'Swap';
            ctrlBtn.classList.remove('disabled');
            Swal.fire({
                icon: 'error',
                title: 'Transaction Error',
                html: err.message,
            });
            console.log(err);
        })

    });
    let result = await promise;
    return result;
}


async function swapCalcInGivenOut(_exchangeId, _dataTokenAmount){
    let promise = new Promise((res, rej) => {

        if(_dataTokenAmount === ''){
            _dataTokenAmount = '0';
        }
        FixedRateExchange.methods.CalcInGivenOut(_exchangeId, web3.utils.toWei((_dataTokenAmount).toString())).call({from:web3.currentProvider.selectedAddress}, function(error, result) {
            if (!error)
                res(result);
            else {
                rej(error);
            }
        })

    });
    let result = await promise;
    return web3.utils.fromWei(result);
}


async function createBPool(ctrlBtn = null){
    let promise = new Promise((res, rej) => {

        BPoolFactory.methods.newBPool().send({from:web3.currentProvider.selectedAddress}, function(error, result) {
            if (!error){
                ctrlBtn.innerText  = 'Creating Pool...';
                ctrlBtn.classList.add('disabled');
                res(result);
            }
            else {
                rej(error);
            }
        }).on('receipt', (receipt) => {
            console.log('BPoolFactory/createBPool/receipt\t', receipt);
        }).on('confirmation', (confirmationNumber, receipt) => {
            ctrlBtn.innerText  = 'Create Pool';
            ctrlBtn.classList.remove('disabled');
            if (confirmationNumber<=1){
                Swal.fire({
                    icon: 'success',
                    title: 'Successful',
                    html: `Balancer Pool Created`
                });
            }
        }).on('error', (err) => {
            ctrlBtn.innerText  = 'Create Pool';
            ctrlBtn.classList.remove('disabled');
            Swal.fire({
                icon: 'error',
                title: 'Transaction Error',
                html: err.message,
            });
            console.log(err);
        })

    });
    let result = await promise;
    return result;
}

async function getPools(_userAddress = web3.currentProvider.selectedAddress){
    let promise = new Promise((res, rej) => {

        BPoolFactory.methods.newBPool().send({from:web3.currentProvider.selectedAddress}, function(error, result) {
            if (!error){
                ctrlBtn.innerText  = 'Creating Pool...';
                ctrlBtn.classList.add('disabled');
                res(result);
            }
            else {
                rej(error);
            }
        }).on('receipt', (receipt) => {
            console.log('BPoolFactory/createBPool/receipt\t', receipt);
        }).on('confirmation', (confirmationNumber, receipt) => {
            ctrlBtn.innerText  = 'Create Pool';
            ctrlBtn.classList.remove('disabled');
            if (confirmationNumber<=1){
                Swal.fire({
                    icon: 'success',
                    title: 'Successful',
                    html: `Balancer Pool Created`
                });
            }
        }).on('error', (err) => {
            ctrlBtn.innerText  = 'Create Pool';
            ctrlBtn.classList.remove('disabled');
            Swal.fire({
                icon: 'error',
                title: 'Transaction Error',
                html: err.message,
            });
            console.log(err);
        })

    });
    let result = await promise;
    return result;
}


async function getUserPools(_address = web3.currentProvider.selectedAddress){
    let promise = new Promise((res, rej) => {

        BPoolFactory.getPastEvents('BPoolRegistered', {
            filter: {registeredBy: _address},
            fromBlock: 7039273,
            toBlock: 'latest'
        })
        .then((events) => {
            let poolAddresses = [];
            events.forEach((event)=>{
                poolAddresses.push(event.returnValues.bpoolAddress)
            })
            console.log(poolAddresses);
            res(poolAddresses)

        })
        .catch(function(error){
           rej(error);
        });

    });
    let result = await promise;
    return result;
}

async function isPoolFinalized(_poolAddress){
    let promise = new Promise((res, rej) => {

        poolContract = new web3.eth.Contract(BPool_ABI, _poolAddress);

        poolContract.methods.isFinalized().call({from:web3.currentProvider.selectedAddress}, function(error, result) {
            if (!error)
                res(result);
            else{
                rej(error);
            }
        });

    });
    let result = await promise;
    return result;
}


async function setupPool(_poolAddress,
    _dataTokenAddress, _dataTokenAmount, _dataTokenWeight,
    _baseTokenAddress, _baseTokenAmount, _baseTokenWeight,
    _swapFee
    ){

    let promise = new Promise((res, rej) => {

        console.log(_poolAddress,
            _dataTokenAddress, _dataTokenAmount, _dataTokenWeight,
            _baseTokenAddress, _baseTokenAmount, _baseTokenWeight,
            _swapFee)

        poolContract = new web3.eth.Contract(BPool_ABI, _poolAddress);

        poolContract.methods.setup(
            _dataTokenAddress, web3.utils.toWei(_dataTokenAmount), web3.utils.toWei(_dataTokenWeight),
            _baseTokenAddress, web3.utils.toWei(_baseTokenAmount), web3.utils.toWei(_baseTokenWeight),
            web3.utils.toWei(_swapFee)
        ).send({from:web3.currentProvider.selectedAddress}, function(error, result) {
            if (!error)
                res(result);
            else{
                rej(error);
            }
        });

    });
    let result = await promise;
    return result;
}
