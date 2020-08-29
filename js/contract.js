
async function createDataToken(_link = ''){
    let promise = new Promise((res, rej) => {

        DTFactory.methods.createToken(_link).send({from:web3.currentProvider.selectedAddress}, function(error, result) {
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
            res(events);
        })
        .catch(function(error){
           rej(error);
        });

    });
    let result = await promise;
    return result;
}
