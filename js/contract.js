
async function createDataToken(_name ='', _symbol ='', _cap ='', _blob = ''){
    let promise = new Promise((res, rej) => {

        DTFactory.methods.createToken(_blob, _name, _symbol, _cap).send({from:web3.currentProvider.selectedAddress}, function(error, result) {
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
