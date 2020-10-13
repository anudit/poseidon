
async function init(accounts = []){

    Ipfs.create({ repo: 'ipfs-' + Math.random() }).then(node=>{
        window.node = node;
        const status = node.isOnline() ? 'online' : 'offline';
        console.log(`Node status: ${status}`);
    });

    if (accounts.length === 0){
        document.querySelector('#walletDetails').innerText = 'Get Web3';
    }
    else{
        document.querySelector('#walletDetails').innerText = trimAddress(accounts[0]);
        document.querySelector('#walletDetails').addEventListener("click", copyAddress(document.querySelector('#walletDetails'), accounts[0]));
    }
}


async function create(e){
    if(e){
        e.preventDefault();
    }

    if(document.querySelector('#inp_name').value === '' ||
    document.querySelector('#inp_sym').value === '' ||
    document.querySelector('#inp_cap').value === '' ||
    document.querySelector('#inp_source').value === '' ||
    document.querySelector('#inp_dataDesc').value === '' ||
    document.querySelector('#inp_dataType').value === '' ||
    document.querySelector('#inp_dataLicense').value === ''
    ){
        Swal.fire({
            icon: 'warning',
            title: 'Incomplete Submission',
            html: `Some values seem to be empty`,
        });
    }
    else{
        let createBtn = document.querySelector('#createBtn');
        createBtn.innerText = "Aww Yuss";
        createBtn.classList.add('disabled');

        let ipfsData = await storeIPFS({
            'created': new Date().toUTCString(),
            'createdBy': 'https://poseidon.world/',
            'dataTokenName':document.querySelector('#inp_name').value,
            'dataTokenSymbol': document.querySelector('#inp_sym').value,
            'dataTokenCap':document.querySelector('#inp_cap').value,
            'dataSource':document.querySelector('#inp_source').value,
            'dataSample':document.querySelector('#inp_sample').value,
            'dataDescription':document.querySelector('#inp_dataDesc').value,
            'dataType': document.querySelector('#inp_dataType').value,
            'dataLicense': document.querySelector('#inp_dataLicense').value,
        });

        console.log(ipfsData);
        console.log(`https://ipfs.io/ipfs/${ipfsData.cid}`)

        createDataToken(
            document.querySelector('#inp_name').value,
            document.querySelector('#inp_sym').value,
            document.querySelector('#inp_cap').value,
            ipfsData.path,
        ).then(()=>{
            createBtn.innerText = "Txn is being Mined...";
        }).catch((e)=>{
            alert(e.message);
            createBtn.classList.remove('disabled');
            createBtn.innerText = "Create";
        });
    }

}

function clearInput(){
    document.querySelector('#inp_name').value = '';
    document.querySelector('#inp_sym').value = '';
    document.querySelector('#inp_cap').value = '';
    document.querySelector('#inp_source').value = '';
    document.querySelector('#inp_dataDesc').value = '';
    document.querySelector('#inp_dataType').value = '';
    document.querySelector('#inp_dataLicense').value = '';
}

async function storeIPFS(_data) {
    let promise = new Promise(async (res, rej) => {
        console.log(_data)
        const data = await node.add(JSON.stringify(_data));
        res(data)

    });
    let result = await promise;
    return result;
}
