const supportedChains = {
  '4':'Rinkeby Testnet',
  '80001':'Matic Mumbai Testnet',
  '97': 'Binance Smart Chain Testnet',
  '77': 'POA Sokol xDAI Testnet'
}

const chainExplorers = {
  '4':'https://rinkeby.etherscan.io',
  '80001':'https://mumbai-explorer.matic.today',
  '97': 'https://testnet.bscscan.com',
  '77': 'https://blockscout.com/poa/sokol'
}

const DTFactory_ABI =[
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
]

const DTFactory_Address = {
  '4':'0x91b5e13cA3ea2A78Ba9b33777f92af15E8177c79',
  '80001':'0xCa68cb2CD799Eeb92D142Aa25E0E1f99f3eF2b2a',
  '97':'0x859c5Fd8be133510Fc5c7c15563Fb0a3ccDBb821',
  '77': '0x859c5Fd8be133510Fc5c7c15563Fb0a3ccDBb821'
};

const DTFactory_BlkNumber = {
  '4': 7235425,
  '80001': 4702660,
  '97': 2218075,
  '77':16971683
}

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

const ERC20Token_ABI = [{"inputs":[{"internalType":"string","name":"name","type":"string"},{"internalType":"string","name":"symbol","type":"string"},{"internalType":"uint8","name":"decimals","type":"uint8"},{"internalType":"uint256","name":"cap","type":"uint256"},{"internalType":"uint256","name":"initialSupply","type":"uint256"},{"internalType":"bool","name":"transferEnabled","type":"bool"},{"internalType":"bool","name":"mintingFinished","type":"bool"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[],"name":"MintFinished","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":true,"internalType":"address","name":"sender","type":"address"}],"name":"RoleGranted","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":true,"internalType":"address","name":"sender","type":"address"}],"name":"RoleRevoked","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[],"name":"TransferEnabled","type":"event"},{"inputs":[],"name":"BUILT_ON","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"DEFAULT_ADMIN_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"MINTER_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"OPERATOR_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"approveAndCall","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"approveAndCall","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"burn","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"burnFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"cap","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"}],"name":"getRoleAdmin","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"getRoleMember","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"}],"name":"getRoleMemberCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"grantRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"hasRole","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"tokenAddress","type":"address"},{"internalType":"uint256","name":"tokenAmount","type":"uint256"}],"name":"recoverERC20","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"renounceRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"revokeRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"transferAndCall","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"transferAndCall","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"transferFromAndCall","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"transferFromAndCall","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"mintingFinished","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"transferEnabled","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"mint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"finishMinting","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"enableTransfer","outputs":[],"stateMutability":"nonpayable","type":"function"}]


const FixedRateExchange_ABI =  [
  {
    "inputs": [

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
    "outputs": [

    ],
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
        "name": "exchangeId",
        "type": "bytes32"
      }
    ],
    "name": "activate",
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
        "name": "exchangeId",
        "type": "bytes32"
      }
    ],
    "name": "deactivate",
    "outputs": [

    ],
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
    "inputs": [

    ],
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
]

const FixedRateExchange_Address = {
  '4':'0xc8315a112f27aE905986c3a46B7c1b5257F07C6C',
  '80001':'0xFf0218B7E6F7fdFf4e1EAbCDCB5EEc018439bF02',
  '97':'0xE1D1D66A37C22cCCfbbbbD15Dc77B41c44BF681f',
  '77':''
};

const FixedRateExchange_BlkNumber = {
  '4': 7235436,
  '80001': 4702694,
  '97': 2218089,
  '77': 16971690,
};

const BPool_Address = {
  '4':'0x79012698b997865c2437F5920A371F819F454d8f',
  '80001':'0x855069310D7875a76a3c2fd91808831Ca907D1A5',
  '97':'0xa1f98C3dC4350AA3280c38Cb21B286A53b0b6B16',
  '77':'0xa1f98C3dC4350AA3280c38Cb21B286A53b0b6B16'
};

const BPoolFactory_Address = {
  '4':'0xc239e88F8921EE1Cb58E93945eAd95206A989142',
  '80001':'0x4fAF73709bDBab1e60b2a69822ea717C680FF842',
  '97':'0xc65889D17aa15F57D324Ce16B9296243Cc04824b',
  '77':'0xc65889D17aa15F57D324Ce16B9296243Cc04824b'
};

const BPoolFactory_BlkNumber = {
  '4': 7235434,
  '80001': 4702679,
  '97': 2218085,
  '77': 16971686,
};

const BPool_ABI = [
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
    "constant": false,
    "inputs": [
      {
        "name": "dst",
        "type": "address"
      },
      {
        "name": "amt",
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
    "name": "MAX_TOTAL_WEIGHT",
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
    "constant": true,
    "inputs": [

    ],
    "name": "BPOW_PRECISION",
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
    "name": "MIN_WEIGHT",
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
        "name": "src",
        "type": "address"
      },
      {
        "name": "dst",
        "type": "address"
      },
      {
        "name": "amt",
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
    "constant": true,
    "inputs": [

    ],
    "name": "decimals",
    "outputs": [
      {
        "name": "",
        "type": "uint8"
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
        "name": "tokenBalanceIn",
        "type": "uint256"
      },
      {
        "name": "tokenWeightIn",
        "type": "uint256"
      },
      {
        "name": "poolSupply",
        "type": "uint256"
      },
      {
        "name": "totalWeight",
        "type": "uint256"
      },
      {
        "name": "poolAmountOut",
        "type": "uint256"
      },
      {
        "name": "swapFee",
        "type": "uint256"
      }
    ],
    "name": "calcSingleInGivenPoolOut",
    "outputs": [
      {
        "name": "tokenAmountIn",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "pure",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "dst",
        "type": "address"
      },
      {
        "name": "amt",
        "type": "uint256"
      }
    ],
    "name": "decreaseApproval",
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
        "name": "whom",
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
    "constant": true,
    "inputs": [

    ],
    "name": "MIN_FEE",
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
        "name": "tokenBalanceOut",
        "type": "uint256"
      },
      {
        "name": "tokenWeightOut",
        "type": "uint256"
      },
      {
        "name": "poolSupply",
        "type": "uint256"
      },
      {
        "name": "totalWeight",
        "type": "uint256"
      },
      {
        "name": "tokenAmountOut",
        "type": "uint256"
      },
      {
        "name": "swapFee",
        "type": "uint256"
      }
    ],
    "name": "calcPoolInGivenSingleOut",
    "outputs": [
      {
        "name": "poolAmountIn",
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
        "name": "tokenBalanceIn",
        "type": "uint256"
      },
      {
        "name": "tokenWeightIn",
        "type": "uint256"
      },
      {
        "name": "poolSupply",
        "type": "uint256"
      },
      {
        "name": "totalWeight",
        "type": "uint256"
      },
      {
        "name": "tokenAmountIn",
        "type": "uint256"
      },
      {
        "name": "swapFee",
        "type": "uint256"
      }
    ],
    "name": "calcPoolOutGivenSingleIn",
    "outputs": [
      {
        "name": "poolAmountOut",
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

    ],
    "name": "MIN_BALANCE",
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
        "name": "tokenBalanceOut",
        "type": "uint256"
      },
      {
        "name": "tokenWeightOut",
        "type": "uint256"
      },
      {
        "name": "poolSupply",
        "type": "uint256"
      },
      {
        "name": "totalWeight",
        "type": "uint256"
      },
      {
        "name": "poolAmountIn",
        "type": "uint256"
      },
      {
        "name": "swapFee",
        "type": "uint256"
      }
    ],
    "name": "calcSingleOutGivenPoolIn",
    "outputs": [
      {
        "name": "tokenAmountOut",
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

    ],
    "name": "INIT_POOL_SUPPLY",
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
    "name": "MAX_OUT_RATIO",
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
        "name": "tokenBalanceIn",
        "type": "uint256"
      },
      {
        "name": "tokenWeightIn",
        "type": "uint256"
      },
      {
        "name": "tokenBalanceOut",
        "type": "uint256"
      },
      {
        "name": "tokenWeightOut",
        "type": "uint256"
      },
      {
        "name": "swapFee",
        "type": "uint256"
      }
    ],
    "name": "calcSpotPrice",
    "outputs": [
      {
        "name": "spotPrice",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "pure",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "dst",
        "type": "address"
      },
      {
        "name": "amt",
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
    "name": "MAX_BOUND_TOKENS",
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
    "name": "MIN_BOUND_TOKENS",
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
    "name": "MIN_BPOW_BASE",
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
        "name": "tokenBalanceIn",
        "type": "uint256"
      },
      {
        "name": "tokenWeightIn",
        "type": "uint256"
      },
      {
        "name": "tokenBalanceOut",
        "type": "uint256"
      },
      {
        "name": "tokenWeightOut",
        "type": "uint256"
      },
      {
        "name": "tokenAmountIn",
        "type": "uint256"
      },
      {
        "name": "swapFee",
        "type": "uint256"
      }
    ],
    "name": "calcOutGivenIn",
    "outputs": [
      {
        "name": "tokenAmountOut",
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

    ],
    "name": "MAX_FEE",
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
    "name": "MAX_BPOW_BASE",
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
    "name": "BONE",
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
    "name": "EXIT_FEE",
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
        "name": "dst",
        "type": "address"
      },
      {
        "name": "amt",
        "type": "uint256"
      }
    ],
    "name": "increaseApproval",
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
        "name": "src",
        "type": "address"
      },
      {
        "name": "dst",
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
    "name": "MAX_WEIGHT",
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
    "name": "MAX_IN_RATIO",
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
        "name": "tokenBalanceIn",
        "type": "uint256"
      },
      {
        "name": "tokenWeightIn",
        "type": "uint256"
      },
      {
        "name": "tokenBalanceOut",
        "type": "uint256"
      },
      {
        "name": "tokenWeightOut",
        "type": "uint256"
      },
      {
        "name": "tokenAmountOut",
        "type": "uint256"
      },
      {
        "name": "swapFee",
        "type": "uint256"
      }
    ],
    "name": "calcInGivenOut",
    "outputs": [
      {
        "name": "tokenAmountIn",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "pure",
    "type": "function"
  },
  {
    "inputs": [

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
        "name": "caller",
        "type": "address"
      },
      {
        "indexed": true,
        "name": "tokenIn",
        "type": "address"
      },
      {
        "indexed": true,
        "name": "tokenOut",
        "type": "address"
      },
      {
        "indexed": false,
        "name": "tokenAmountIn",
        "type": "uint256"
      },
      {
        "indexed": false,
        "name": "tokenAmountOut",
        "type": "uint256"
      }
    ],
    "name": "LOG_SWAP",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "name": "caller",
        "type": "address"
      },
      {
        "indexed": true,
        "name": "tokenIn",
        "type": "address"
      },
      {
        "indexed": false,
        "name": "tokenAmountIn",
        "type": "uint256"
      }
    ],
    "name": "LOG_JOIN",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "name": "caller",
        "type": "address"
      },
      {
        "indexed": true,
        "name": "tokenOut",
        "type": "address"
      },
      {
        "indexed": false,
        "name": "tokenAmountOut",
        "type": "uint256"
      }
    ],
    "name": "LOG_EXIT",
    "type": "event"
  },
  {
    "anonymous": true,
    "inputs": [
      {
        "indexed": true,
        "name": "sig",
        "type": "bytes4"
      },
      {
        "indexed": true,
        "name": "caller",
        "type": "address"
      },
      {
        "indexed": false,
        "name": "data",
        "type": "bytes"
      }
    ],
    "name": "LOG_CALL",
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
    "constant": false,
    "inputs": [
      {
        "name": "controller",
        "type": "address"
      },
      {
        "name": "factory",
        "type": "address"
      },
      {
        "name": "swapFee",
        "type": "uint256"
      },
      {
        "name": "publicSwap",
        "type": "bool"
      },
      {
        "name": "finalized",
        "type": "bool"
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
        "name": "dataTokenAaddress",
        "type": "address"
      },
      {
        "name": "dataTokenAmount",
        "type": "uint256"
      },
      {
        "name": "dataTokenWeight",
        "type": "uint256"
      },
      {
        "name": "baseTokenAddress",
        "type": "address"
      },
      {
        "name": "baseTokenAmount",
        "type": "uint256"
      },
      {
        "name": "baseTokenWeight",
        "type": "uint256"
      },
      {
        "name": "swapFee",
        "type": "uint256"
      }
    ],
    "name": "setup",
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
    "name": "isPublicSwap",
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
    "name": "isFinalized",
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
        "name": "t",
        "type": "address"
      }
    ],
    "name": "isBound",
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
    "name": "getNumTokens",
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
    "name": "getCurrentTokens",
    "outputs": [
      {
        "name": "tokens",
        "type": "address[]"
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
    "name": "getFinalTokens",
    "outputs": [
      {
        "name": "tokens",
        "type": "address[]"
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
        "name": "token",
        "type": "address"
      }
    ],
    "name": "getDenormalizedWeight",
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
    "name": "getTotalDenormalizedWeight",
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
        "name": "token",
        "type": "address"
      }
    ],
    "name": "getNormalizedWeight",
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
        "name": "token",
        "type": "address"
      }
    ],
    "name": "getBalance",
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
    "name": "getSwapFee",
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
    "name": "getController",
    "outputs": [
      {
        "name": "",
        "type": "address"
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
        "name": "swapFee",
        "type": "uint256"
      }
    ],
    "name": "setSwapFee",
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
        "name": "manager",
        "type": "address"
      }
    ],
    "name": "setController",
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
        "name": "public_",
        "type": "bool"
      }
    ],
    "name": "setPublicSwap",
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
    "name": "finalize",
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
        "name": "token",
        "type": "address"
      },
      {
        "name": "balance",
        "type": "uint256"
      },
      {
        "name": "denorm",
        "type": "uint256"
      }
    ],
    "name": "bind",
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
        "name": "token",
        "type": "address"
      },
      {
        "name": "balance",
        "type": "uint256"
      },
      {
        "name": "denorm",
        "type": "uint256"
      }
    ],
    "name": "rebind",
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
        "name": "token",
        "type": "address"
      }
    ],
    "name": "unbind",
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
        "name": "token",
        "type": "address"
      }
    ],
    "name": "gulp",
    "outputs": [

    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "tokenIn",
        "type": "address"
      },
      {
        "name": "tokenOut",
        "type": "address"
      }
    ],
    "name": "getSpotPrice",
    "outputs": [
      {
        "name": "spotPrice",
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
        "name": "tokenIn",
        "type": "address"
      },
      {
        "name": "tokenOut",
        "type": "address"
      }
    ],
    "name": "getSpotPriceSansFee",
    "outputs": [
      {
        "name": "spotPrice",
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
        "name": "poolAmountOut",
        "type": "uint256"
      },
      {
        "name": "maxAmountsIn",
        "type": "uint256[]"
      }
    ],
    "name": "joinPool",
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
        "name": "poolAmountIn",
        "type": "uint256"
      },
      {
        "name": "minAmountsOut",
        "type": "uint256[]"
      }
    ],
    "name": "exitPool",
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
        "name": "tokenIn",
        "type": "address"
      },
      {
        "name": "tokenAmountIn",
        "type": "uint256"
      },
      {
        "name": "tokenOut",
        "type": "address"
      },
      {
        "name": "minAmountOut",
        "type": "uint256"
      },
      {
        "name": "maxPrice",
        "type": "uint256"
      }
    ],
    "name": "swapExactAmountIn",
    "outputs": [
      {
        "name": "tokenAmountOut",
        "type": "uint256"
      },
      {
        "name": "spotPriceAfter",
        "type": "uint256"
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
        "name": "tokenIn",
        "type": "address"
      },
      {
        "name": "maxAmountIn",
        "type": "uint256"
      },
      {
        "name": "tokenOut",
        "type": "address"
      },
      {
        "name": "tokenAmountOut",
        "type": "uint256"
      },
      {
        "name": "maxPrice",
        "type": "uint256"
      }
    ],
    "name": "swapExactAmountOut",
    "outputs": [
      {
        "name": "tokenAmountIn",
        "type": "uint256"
      },
      {
        "name": "spotPriceAfter",
        "type": "uint256"
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
        "name": "tokenIn",
        "type": "address"
      },
      {
        "name": "tokenAmountIn",
        "type": "uint256"
      },
      {
        "name": "minPoolAmountOut",
        "type": "uint256"
      }
    ],
    "name": "joinswapExternAmountIn",
    "outputs": [
      {
        "name": "poolAmountOut",
        "type": "uint256"
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
        "name": "tokenIn",
        "type": "address"
      },
      {
        "name": "poolAmountOut",
        "type": "uint256"
      },
      {
        "name": "maxAmountIn",
        "type": "uint256"
      }
    ],
    "name": "joinswapPoolAmountOut",
    "outputs": [
      {
        "name": "tokenAmountIn",
        "type": "uint256"
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
        "name": "tokenOut",
        "type": "address"
      },
      {
        "name": "poolAmountIn",
        "type": "uint256"
      },
      {
        "name": "minAmountOut",
        "type": "uint256"
      }
    ],
    "name": "exitswapPoolAmountIn",
    "outputs": [
      {
        "name": "tokenAmountOut",
        "type": "uint256"
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
        "name": "tokenOut",
        "type": "address"
      },
      {
        "name": "tokenAmountOut",
        "type": "uint256"
      },
      {
        "name": "maxPoolAmountIn",
        "type": "uint256"
      }
    ],
    "name": "exitswapExternAmountOut",
    "outputs": [
      {
        "name": "poolAmountIn",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  }
]

const BPoolFactory_ABI = [{
  "constant": true,
  "inputs": [

  ],
  "name": "MAX_TOTAL_WEIGHT",
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
  "name": "BPOW_PRECISION",
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
  "name": "MIN_WEIGHT",
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
  "name": "MIN_FEE",
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
  "name": "MIN_BALANCE",
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
  "name": "INIT_POOL_SUPPLY",
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
  "name": "MAX_OUT_RATIO",
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
  "name": "MAX_BOUND_TOKENS",
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
  "name": "MIN_BOUND_TOKENS",
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
  "name": "MIN_BPOW_BASE",
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
  "name": "MAX_FEE",
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
  "name": "MAX_BPOW_BASE",
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
  "name": "BONE",
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
  "name": "EXIT_FEE",
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
  "name": "MAX_WEIGHT",
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
  "name": "MAX_IN_RATIO",
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
      "name": "bpoolTemplate",
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
      "name": "newBPoolAddress",
      "type": "address"
    },
    {
      "indexed": true,
      "name": "bpoolTemplateAddress",
      "type": "address"
    }
  ],
  "name": "BPoolCreated",
  "type": "event"
},
{
  "anonymous": false,
  "inputs": [
    {
      "indexed": false,
      "name": "bpoolAddress",
      "type": "address"
    },
    {
      "indexed": true,
      "name": "registeredBy",
      "type": "address"
    },
    {
      "indexed": true,
      "name": "registeredAt",
      "type": "uint256"
    }
  ],
  "name": "BPoolRegistered",
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

  ],
  "name": "newBPool",
  "outputs": [
    {
      "name": "bpool",
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
  "name": "getBPool",
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
]
