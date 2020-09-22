let DTFactory;
let FixedRateExchange;
let BPoolFactory;
let BPool;

if (typeof window.ethereum !== 'undefined') {
    ethereum.autoRefreshOnNetworkChange = false;
}

window.addEventListener('load', async () => {
    setupWaves();

    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-toggle="tooltip"]'))
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
    })

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
    if (provider.on){
        provider.on('disconnect', ()=>{
            window.location.reload()
        });
        provider.on('chainChanged', ()=>{
            window.location.reload()
        });
        provider.on('accountsChanged', ()=>{
            window.location.reload()
        });
    }

    let netId = await web3.eth.net.getId();
    window.netId = netId;
    if(Object.keys(supportedChains).includes(netId.toString()) === false){
        Swal.fire({
            icon: 'error',
            title: "Incorrect Network",
            text: `Please switch to ${Object.values(supportedChains).join(' or ')}`
        });
    }
    else{
        DTFactory = new web3.eth.Contract(DTFactory_ABI, DTFactory_Address[netId]);
        FixedRateExchange = new web3.eth.Contract(FixedRateExchange_ABI, FixedRateExchange_Address[netId]);
        BPoolFactory = new web3.eth.Contract(BPoolFactory_ABI, BPoolFactory_Address[netId])
        BPool = new web3.eth.Contract(BPool_ABI, BPool_Address[netId])
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

function getParameterByName(name) {
    url = window.location.href;
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

function abbreviateNumber(value) {
    var newValue = parseInt(value);
    if (value >= 1000) {
        var suffixes = ["", "K", "M", "B","T"];
        var suffixNum = Math.floor( (""+value).length/3 );
        var shortValue = '';
        for (var precision = 2; precision >= 1; precision--) {
            shortValue = parseFloat( (suffixNum != 0 ? (value / Math.pow(1000,suffixNum) ) : value).toPrecision(precision));
            var dotLessShortValue = (shortValue + '').replace(/[^a-zA-Z 0-9]+/g,'');
            if (dotLessShortValue.length <= 2) { break; }
        }
        if (shortValue % 1 != 0)  shortValue = shortValue.toFixed(1);
        newValue = shortValue+suffixes[suffixNum];
    }
    return newValue;
}

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function copyAddress(_btn, _add){
    copyToClipboard(_add);
    _btn.innerText = 'Copied';
    setTimeout(()=>{
        document.querySelector('#walletDetails').innerText = trimAddress(_add);
    }, 1000)
}

function copyToClipboard(text) {
    if (window.clipboardData && window.clipboardData.setData) {
        return clipboardData.setData("Text", text);
    }
    else if (document.queryCommandSupported && document.queryCommandSupported("copy")) {
        var textarea = document.createElement("textarea");
        textarea.textContent = text;
        textarea.style.position = "fixed";
        document.body.appendChild(textarea);
        textarea.select();
        try {
            return document.execCommand("copy");
        }
        catch (ex) {
            console.warn("Copy to clipboard failed.", ex);
            return false;
        }
        finally {
            document.body.removeChild(textarea);
        }
    }
}

function loadingQuote(){
    const quotes = [
        "Your patience is much appreciated.",
        "Part of the pleasure is the build up. Are you ready?",
        "If you're happy and you know it, clap your hands!",
        "Dehydration is your worst enemy. Drink up while this page loads.",
        "Here's your chance to catch a few blinks.",
    ]
    return quotes[Math.floor(Math.random() * quotes.length)];
}


function alertInfo(title="", text="", type=""){
    Swal.fire({
        icon: type,
        title: title,
        text: text
    })
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function openTokenEtherscan(id=''){
    let add = document.querySelector(id).value;
    if (add != ''){
        window.open(`${chainExplorers[netId]}/address/${add}`, '_blank');
    }
}
