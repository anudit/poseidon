
async function init(accounts = []){
    if (accounts.length === 0){
        document.querySelector('#walletDetails').innerText = 'Get Web3';
    }
    else{
        document.querySelector('#walletDetails').innerText = trimAddress(accounts[0]);
    }
}


function create(e){
    if(e){
        e.preventDefault();
    }
    let createBtn = document.querySelector('#createBtn');
    createBtn.innerText = "Aww Yuss";
    createBtn.classList.add('disabled');
    createDataToken(
        document.querySelector('#inp_name').value,
        document.querySelector('#inp_sym').value,
        document.querySelector('#inp_cap').value,
        document.querySelector('#inp_blob').value,
    ).then(()=>{
        createBtn.classList.remove('disabled');
        createBtn.innerText = "Done!";
    }).catch((e)=>{
        alert(e.message);
        createBtn.classList.remove('disabled');
        createBtn.innerText = "Create";
    });
}
