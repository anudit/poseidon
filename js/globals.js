const DTFactory_ABI = [
  {
    "inputs": [
      {
        "name": "_template",
        "type": "address"
      },
      {
        "name": "_collector",
        "type": "address"
      }
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "name": "newTokenAddress",
        "type": "address"
      },
      {
        "indexed": true,
        "name": "templateAddress",
        "type": "address"
      },
      {
        "indexed": true,
        "name": "tokenName",
        "type": "string"
      }
    ],
    "name": "TokenCreated",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "name": "tokenAddress",
        "type": "address"
      },
      {
        "indexed": false,
        "name": "tokenName",
        "type": "string"
      },
      {
        "indexed": false,
        "name": "tokenSymbol",
        "type": "string"
      },
      {
        "indexed": false,
        "name": "tokenCap",
        "type": "uint256"
      },
      {
        "indexed": true,
        "name": "registeredBy",
        "type": "address"
      },
      {
        "indexed": false,
        "name": "registeredAt",
        "type": "uint256"
      },
      {
        "indexed": true,
        "name": "blob",
        "type": "string"
      }
    ],
    "name": "TokenRegistered",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "name": "instance",
        "type": "address"
      }
    ],
    "name": "InstanceDeployed",
    "type": "event"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "blob",
        "type": "string"
      },
      {
        "name": "name",
        "type": "string"
      },
      {
        "name": "symbol",
        "type": "string"
      },
      {
        "name": "cap",
        "type": "uint256"
      }
    ],
    "name": "createToken",
    "outputs": [
      {
        "name": "token",
        "type": "address"
      }
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [

    ],
    "name": "getCurrentTokenIndex",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [

    ],
    "name": "getTokenTemplate",
    "outputs": [
      {
        "name": "",
        "type": "address"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }
];


const DataTokenTemplate_ABI = [
  {
    "constant": false,
    "inputs": [
      {
        "name": "spender",
        "type": "address"
      },
      {
        "name": "value",
        "type": "uint256"
      }
    ],
    "name": "approve",
    "outputs": [
      {
        "name": "",
        "type": "bool"
      }
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [

    ],
    "name": "totalSupply",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "from",
        "type": "address"
      },
      {
        "name": "to",
        "type": "address"
      },
      {
        "name": "value",
        "type": "uint256"
      }
    ],
    "name": "transferFrom",
    "outputs": [
      {
        "name": "",
        "type": "bool"
      }
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "spender",
        "type": "address"
      },
      {
        "name": "addedValue",
        "type": "uint256"
      }
    ],
    "name": "increaseAllowance",
    "outputs": [
      {
        "name": "",
        "type": "bool"
      }
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "account",
        "type": "address"
      }
    ],
    "name": "balanceOf",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "spender",
        "type": "address"
      },
      {
        "name": "subtractedValue",
        "type": "uint256"
      }
    ],
    "name": "decreaseAllowance",
    "outputs": [
      {
        "name": "",
        "type": "bool"
      }
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "to",
        "type": "address"
      },
      {
        "name": "value",
        "type": "uint256"
      }
    ],
    "name": "transfer",
    "outputs": [
      {
        "name": "",
        "type": "bool"
      }
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [

    ],
    "name": "BASE_COMMUNITY_FEE_PERCENTAGE",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "owner",
        "type": "address"
      },
      {
        "name": "spender",
        "type": "address"
      }
    ],
    "name": "allowance",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [

    ],
    "name": "BASE",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "name": "name",
        "type": "string"
      },
      {
        "name": "symbol",
        "type": "string"
      },
      {
        "name": "minter",
        "type": "address"
      },
      {
        "name": "cap",
        "type": "uint256"
      },
      {
        "name": "blob",
        "type": "string"
      },
      {
        "name": "feeCollector",
        "type": "address"
      }
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "name": "amount",
        "type": "uint256"
      },
      {
        "indexed": false,
        "name": "did",
        "type": "bytes32"
      },
      {
        "indexed": false,
        "name": "serviceId",
        "type": "uint256"
      },
      {
        "indexed": false,
        "name": "receiver",
        "type": "address"
      },
      {
        "indexed": false,
        "name": "startedAt",
        "type": "uint256"
      },
      {
        "indexed": false,
        "name": "feeCollector",
        "type": "address"
      },
      {
        "indexed": false,
        "name": "marketFee",
        "type": "uint256"
      }
    ],
    "name": "OrderStarted",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "name": "orderTxId",
        "type": "bytes32"
      },
      {
        "indexed": false,
        "name": "consumer",
        "type": "address"
      },
      {
        "indexed": false,
        "name": "amount",
        "type": "uint256"
      },
      {
        "indexed": false,
        "name": "did",
        "type": "bytes32"
      },
      {
        "indexed": false,
        "name": "serviceId",
        "type": "uint256"
      },
      {
        "indexed": false,
        "name": "provider",
        "type": "address"
      }
    ],
    "name": "OrderFinished",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "name": "from",
        "type": "address"
      },
      {
        "indexed": true,
        "name": "to",
        "type": "address"
      },
      {
        "indexed": false,
        "name": "value",
        "type": "uint256"
      }
    ],
    "name": "Transfer",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "name": "owner",
        "type": "address"
      },
      {
        "indexed": true,
        "name": "spender",
        "type": "address"
      },
      {
        "indexed": false,
        "name": "value",
        "type": "uint256"
      }
    ],
    "name": "Approval",
    "type": "event"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "name",
        "type": "string"
      },
      {
        "name": "symbol",
        "type": "string"
      },
      {
        "name": "minter",
        "type": "address"
      },
      {
        "name": "cap",
        "type": "uint256"
      },
      {
        "name": "blob",
        "type": "string"
      },
      {
        "name": "feeCollector",
        "type": "address"
      }
    ],
    "name": "initialize",
    "outputs": [
      {
        "name": "",
        "type": "bool"
      }
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "account",
        "type": "address"
      },
      {
        "name": "value",
        "type": "uint256"
      }
    ],
    "name": "mint",
    "outputs": [

    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "receiver",
        "type": "address"
      },
      {
        "name": "amount",
        "type": "uint256"
      },
      {
        "name": "did",
        "type": "bytes32"
      },
      {
        "name": "serviceId",
        "type": "uint256"
      },
      {
        "name": "feeCollector",
        "type": "address"
      },
      {
        "name": "feePercentage",
        "type": "uint256"
      }
    ],
    "name": "startOrder",
    "outputs": [

    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "orderTxId",
        "type": "bytes32"
      },
      {
        "name": "consumer",
        "type": "address"
      },
      {
        "name": "amount",
        "type": "uint256"
      },
      {
        "name": "did",
        "type": "bytes32"
      },
      {
        "name": "serviceId",
        "type": "uint256"
      }
    ],
    "name": "finishOrder",
    "outputs": [

    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [

    ],
    "name": "pause",
    "outputs": [

    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [

    ],
    "name": "unpause",
    "outputs": [

    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "minter",
        "type": "address"
      }
    ],
    "name": "setMinter",
    "outputs": [

    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [

    ],
    "name": "name",
    "outputs": [
      {
        "name": "",
        "type": "string"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [

    ],
    "name": "symbol",
    "outputs": [
      {
        "name": "",
        "type": "string"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [

    ],
    "name": "blob",
    "outputs": [
      {
        "name": "",
        "type": "string"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [

    ],
    "name": "decimals",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [

    ],
    "name": "cap",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "account",
        "type": "address"
      }
    ],
    "name": "isMinter",
    "outputs": [
      {
        "name": "",
        "type": "bool"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [

    ],
    "name": "isInitialized",
    "outputs": [
      {
        "name": "",
        "type": "bool"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [

    ],
    "name": "isPaused",
    "outputs": [
      {
        "name": "",
        "type": "bool"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "amount",
        "type": "uint256"
      },
      {
        "name": "feePercentage",
        "type": "uint256"
      }
    ],
    "name": "calculateFee",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "pure",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "amount",
        "type": "uint256"
      },
      {
        "name": "feePercentage",
        "type": "uint256"
      }
    ],
    "name": "calculateTotalFee",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "pure",
    "type": "function"
  }
]

const DTFactory_Address = '0x3ECd1429101f93149D799Ef257C07a2B1Dc30897';

const FixedRateExchange_ABI =  [
  {
    "inputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "name": "exchangeId",
        "type": "bytes32"
      },
      {
        "indexed": true,
        "name": "baseToken",
        "type": "address"
      },
      {
        "indexed": true,
        "name": "dataToken",
        "type": "address"
      },
      {
        "indexed": false,
        "name": "exchangeOwner",
        "type": "address"
      },
      {
        "indexed": false,
        "name": "fixedRate",
        "type": "uint256"
      }
    ],
    "name": "ExchangeCreated",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "name": "exchangeId",
        "type": "bytes32"
      },
      {
        "indexed": true,
        "name": "exchangeOwner",
        "type": "address"
      },
      {
        "indexed": false,
        "name": "newRate",
        "type": "uint256"
      }
    ],
    "name": "ExchangeRateChanged",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "name": "exchangeId",
        "type": "bytes32"
      },
      {
        "indexed": true,
        "name": "exchangeOwner",
        "type": "address"
      },
      {
        "indexed": false,
        "name": "timestamp",
        "type": "uint256"
      }
    ],
    "name": "ExchangeActivated",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "name": "exchangeId",
        "type": "bytes32"
      },
      {
        "indexed": true,
        "name": "exchangeOwner",
        "type": "address"
      },
      {
        "indexed": false,
        "name": "timestamp",
        "type": "uint256"
      }
    ],
    "name": "ExchangeDeactivated",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "name": "exchangeId",
        "type": "bytes32"
      },
      {
        "indexed": true,
        "name": "by",
        "type": "address"
      },
      {
        "indexed": false,
        "name": "baseTokenSwappedAmount",
        "type": "uint256"
      },
      {
        "indexed": false,
        "name": "dataTokenSwappedAmount",
        "type": "uint256"
      }
    ],
    "name": "Swapped",
    "type": "event"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "baseToken",
        "type": "address"
      },
      {
        "name": "dataToken",
        "type": "address"
      },
      {
        "name": "fixedRate",
        "type": "uint256"
      }
    ],
    "name": "create",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "baseToken",
        "type": "address"
      },
      {
        "name": "dataToken",
        "type": "address"
      },
      {
        "name": "exchangeOwner",
        "type": "address"
      }
    ],
    "name": "generateExchangeId",
    "outputs": [
      {
        "name": "",
        "type": "bytes32"
      }
    ],
    "payable": false,
    "stateMutability": "pure",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "exchangeId",
        "type": "bytes32"
      },
      {
        "name": "dataTokenAmount",
        "type": "uint256"
      }
    ],
    "name": "CalcInGivenOut",
    "outputs": [
      {
        "name": "baseTokenAmount",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "exchangeId",
        "type": "bytes32"
      },
      {
        "name": "dataTokenAmount",
        "type": "uint256"
      }
    ],
    "name": "swap",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "getNumberOfExchanges",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "exchangeId",
        "type": "bytes32"
      },
      {
        "name": "newRate",
        "type": "uint256"
      }
    ],
    "name": "setRate",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "exchangeId",
        "type": "bytes32"
      }
    ],
    "name": "activate",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "exchangeId",
        "type": "bytes32"
      }
    ],
    "name": "deactivate",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "exchangeId",
        "type": "bytes32"
      }
    ],
    "name": "getRate",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "exchangeId",
        "type": "bytes32"
      }
    ],
    "name": "getSupply",
    "outputs": [
      {
        "name": "supply",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "exchangeId",
        "type": "bytes32"
      }
    ],
    "name": "getExchange",
    "outputs": [
      {
        "name": "exchangeOwner",
        "type": "address"
      },
      {
        "name": "dataToken",
        "type": "address"
      },
      {
        "name": "baseToken",
        "type": "address"
      },
      {
        "name": "fixedRate",
        "type": "uint256"
      },
      {
        "name": "active",
        "type": "bool"
      },
      {
        "name": "supply",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "getExchanges",
    "outputs": [
      {
        "name": "",
        "type": "bytes32[]"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "exchangeId",
        "type": "bytes32"
      }
    ],
    "name": "isActive",
    "outputs": [
      {
        "name": "",
        "type": "bool"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }
];

const FixedRateExchange_Address = '0x991c08bD00761A299d3126a81a985329096896D4';
