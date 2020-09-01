
async function createDataToken(_name ='', _symbol ='', _cap ='', _blob = ''){
    let promise = new Promise((res, rej) => {

        DTFactory.methods.createToken(_blob, _name, _symbol, web3.utils.toWei(_cap)).send({from:web3.currentProvider.selectedAddress}, function(error, result) {
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

async function dataTokenAllowance(_tokenAddress, _spender , _amt){
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

async function dataToken(_tokenAddress, _account = web3.currentProvider.selectedAddress){
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
