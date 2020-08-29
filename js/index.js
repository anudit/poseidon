let DTFactory;

if (typeof window.ethereum !== 'undefined') {
    ethereum.autoRefreshOnNetworkChange = false;
}

window.addEventListener('load', async () => {
    setupWaves();
    if (window.ethereum) {

        let accounts = await ethereum.request({ method: 'eth_requestAccounts' });
        await setupApp(ethereum, accounts)
    }
    else if (window.web3) {

        try {
            let accounts = await web3.currentProvider.enable();
            await setupApp(web3.currentProvider, accounts);


        } catch (error) {
            console.log(error);
            alert(error);
        }

    } else{
        alert("No Web3.");
        setupApp(new Web3.providers.WebsocketProvider('wss://rinkeby.infura.io/ws/v3/9f34d0bf5e1b4b36914fd5bc66c50b05'))
    }
});

async function setupApp(provider, accounts = []){
    window.web3 = new Web3(provider);
    provider.on('disconnect', ()=>{
        window.location.reload()
    });
    provider.on('chainChanged', ()=>{
        window.location.reload()
    });
    provider.on('accountsChanged', ()=>{
        window.location.reload()
    });

    let netId = await web3.eth.net.getId();
    if(netId !== 4){
        alert("Please switch to Rinkeby");
    }
    else{
        DTFactory = new web3.eth.Contract(DTFactory_ABI, DTFactory_Address);
        init(accounts);
    }

}

function setupWaves(){

    const svg = d3.select('#waves'),
    width = window.innerWidth,
    height = +svg.attr('height'),
    x = d3.scaleLinear().range([0, width]);
    angles = d3.range(0, 4*Math.PI, Math.PI / 20);

    const path = svg
    .append('g')
    .attr('transform', `translate(${-width/24}, ${height/1.8})`)
    .attr('fill', 'none')
    .attr('stroke-width', 2)
    .selectAll('path')
    .data(['#FF4092','#E000CF','#8B98A9', '#E2E2E2'])
    .enter()
    .append('path')
    .attr('stroke', d => { return d })
    .style('mix-blend-mode', 'darken')
    .datum( (d, i) => {
    return d3
        .line()
        .curve(d3.curveBasisOpen)
        .x((angles) => {
            return x(angles / 4)
        })
        .y((angles) => {
            const t = d3.now() / 3000
            return (
            Math.cos(angles * 8 - (i * 2 * Math.PI) / 10 + t) *
            Math.pow((2 + Math.cos(angles - t)) / 2, 4) *
            15
            )
        })
    })

    d3.timer( () => {
    path.attr('d', d => {
    return d(angles)
    })
    })


}


function trimAddress(_add, l=3) {
    return _add.slice(0, 2+l) +'...' +_add.slice(_add.length-l);
}
