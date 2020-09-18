let poolList_choiceElement;
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
}


async function setupPoolLists(){
    let poolList = document.querySelector('#managePoolsList');

    getUserPools().then((pools)=>{
        poolList.innerHTML = `<option value="">Choose a Pool</option>`;
        pools.forEach((poolAddress) => {
            poolList.innerHTML += `<option value="${poolAddress}">${trimAddress(poolAddress)}</option>`;
        });
    })
    .then(()=>{
        poolList_choiceElement = new Choices(poolList);
    });
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
