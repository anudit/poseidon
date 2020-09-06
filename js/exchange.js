
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

}

async function showInfo(type){
    if(type=='fixed'){
        Swal.fire({
            icon: 'info',
            title: "About Fixed Rate Exchange",
            text: "This allows you to exchange DataTokens with the OCEAN token using a fixed exchange rate."
        });
    }
    else if(type=='variable'){
        Swal.fire({
            icon: 'info',
            title: "About Variable Rate Exchange",
            text: "This allows you to create and exchange your datatokens with Balancer Pools"
        });
    }
}
