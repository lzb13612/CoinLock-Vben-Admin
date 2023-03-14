// Chain id includ testnet:
// bsc: (56, 97)
// eth: (1, 5)
// arb: (42161, 421611, 421613)
export const supportedChainIds: number[] = [1, 5, 56, 97, 42161, 421613, 421611];

// ETH币
// weth: 0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2
// weth test: 0xB4FBF271143F4FBf7B91A5ded31805e42b2208d6
// wbnb: 0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c
// wbnb test: 0xae13d989daC2f0dEbFf460aC112a837C89BAa7cd
export const ethAddress: string[] = [
	'0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
	'0xB4FBF271143F4FBf7B91A5ded31805e42b2208d6',
	'0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c',
	'0xae13d989daC2f0dEbFf460aC112a837C89BAa7cd',
]

// 无税通用模板
export const TemplateA_ABI = [
	{
		"inputs": [
			{
				"internalType": "string[]",
				"name": "stringParams",
				"type": "string[]"
			},
			{
				"internalType": "address[]",
				"name": "addressParams",
				"type": "address[]"
			},
			{
				"internalType": "uint256[]",
				"name": "numberParams",
				"type": "uint256[]"
			},
			{
				"internalType": "bool[]",
				"name": "boolParams",
				"type": "bool[]"
			}
		],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "Approval",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "previousOwner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "OwnershipTransferred",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "Transfer",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			}
		],
		"name": "allowance",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "approve",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "account",
				"type": "address"
			}
		],
		"name": "balanceOf",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "deadAddress",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "decimals",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "subtractedValue",
				"type": "uint256"
			}
		],
		"name": "decreaseAllowance",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getCirculatingSupply",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "addedValue",
				"type": "uint256"
			}
		],
		"name": "increaseAllowance",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "name",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "owner",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "renounceOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "symbol",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "totalSupply",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "recipient",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "transfer",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "sender",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "recipient",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "transferFrom",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "transferOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"stateMutability": "payable",
		"type": "receive"
	}
]

// 有税通用模板
export const TemplateB_ABI = [
	{
		"inputs": [
			{
				"internalType": "string[]",
				"name": "stringParams",
				"type": "string[]"
			},
			{
				"internalType": "address[]",
				"name": "addressParams",
				"type": "address[]"
			},
			{
				"internalType": "uint256[]",
				"name": "numberParams",
				"type": "uint256[]"
			},
			{
				"internalType": "bool[]",
				"name": "boolParams",
				"type": "bool[]"
			}
		],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "Approval",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [],
		"name": "Failed_AddLiquidity",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [],
		"name": "Failed_AddLiquidityETH",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [],
		"name": "Failed_swapExactTokensForETHSupportingFeeOnTransferTokens",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [],
		"name": "Failed_swapExactTokensForTokensSupportingFeeOnTransferTokens",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "previousOwner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "OwnershipTransferred",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "Transfer",
		"type": "event"
	},
	{
		"inputs": [],
		"name": "MAX",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "_allowances",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "_balances",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "_buyBurnFee",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "_buyFundFee",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "_buyLPFee",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "_feeWhiteList",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "_mainPair",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "_rewardList",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "_sellBurnFee",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "_sellFundFee",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "_sellLPFee",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "_swapPairList",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "_swapRouter",
		"outputs": [
			{
				"internalType": "contract IPancakeRouter02",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "_tokenDistributor",
		"outputs": [
			{
				"internalType": "contract TokenDistributor",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "airdropEnable",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "airdropNumbs",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			}
		],
		"name": "allowance",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "approve",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "account",
				"type": "address"
			}
		],
		"name": "balanceOf",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_maxBuyAmount",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_maxSellAmount",
				"type": "uint256"
			}
		],
		"name": "changeSwapLimit",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_amount",
				"type": "uint256"
			}
		],
		"name": "changeWalletLimit",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256[]",
				"name": "customs",
				"type": "uint256[]"
			}
		],
		"name": "completeCustoms",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "currency",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "currencyIsEth",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "decimals",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "disableChangeTax",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "disableSwapLimit",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "disableWalletLimit",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "enableChangeTax",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "enableKillBlock",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "enableOffTrade",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "enableRewardList",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "enableSwapLimit",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "enableTransferFee",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "enableWalletLimit",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "fundAddress",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "account",
				"type": "address"
			}
		],
		"name": "isReward",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "kb",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "launch",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "maxBuyAmount",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "maxSellAmount",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "maxWalletAmount",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address[]",
				"name": "addresses",
				"type": "address[]"
			},
			{
				"internalType": "bool",
				"name": "value",
				"type": "bool"
			}
		],
		"name": "multi_bclist",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "name",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "owner",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "renounceOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "bool",
				"name": "status",
				"type": "bool"
			}
		],
		"name": "setAirDropEnable",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "newValue",
				"type": "uint256"
			}
		],
		"name": "setAirdropNumbs",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "bool",
				"name": "status",
				"type": "bool"
			}
		],
		"name": "setEnableTransferFee",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address[]",
				"name": "addr",
				"type": "address[]"
			},
			{
				"internalType": "bool",
				"name": "enable",
				"type": "bool"
			}
		],
		"name": "setFeeWhiteList",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "addr",
				"type": "address"
			}
		],
		"name": "setFundAddress",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "addr",
				"type": "address"
			},
			{
				"internalType": "bool",
				"name": "enable",
				"type": "bool"
			}
		],
		"name": "setSwapPairList",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "a",
				"type": "uint256"
			}
		],
		"name": "setkb",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "startTradeBlock",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "symbol",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "totalSupply",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "recipient",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "transfer",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "sender",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "recipient",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "transferFrom",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "transferOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"stateMutability": "payable",
		"type": "receive"
	}
]

// 持币分红模版
export const TemplateC_ABI = [
	{
		"inputs": [
			{
				"internalType": "string[]",
				"name": "stringParams",
				"type": "string[]"
			},
			{
				"internalType": "address[]",
				"name": "addressParams",
				"type": "address[]"
			},
			{
				"internalType": "uint256[]",
				"name": "numberParams",
				"type": "uint256[]"
			},
			{
				"internalType": "bool[]",
				"name": "boolParams",
				"type": "bool[]"
			}
		],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "Approval",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [],
		"name": "Failed_addLiquidityETH",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [],
		"name": "Failed_swapExactTokensForETHSupportingFeeOnTransferTokens",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [],
		"name": "Failed_swapExactTokensForTokensSupportingFeeOnTransferTokens",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "previousOwner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "OwnershipTransferred",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "iterations",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "claims",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "lastProcessedIndex",
				"type": "uint256"
			},
			{
				"indexed": true,
				"internalType": "bool",
				"name": "automatic",
				"type": "bool"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "gas",
				"type": "uint256"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "processor",
				"type": "address"
			}
		],
		"name": "ProcessedDividendTracker",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "tokensSwapped",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "SendDividends",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "tokensSwapped",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "ethReceived",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "tokensIntoLiqudity",
				"type": "uint256"
			}
		],
		"name": "SwapAndLiquify",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "Transfer",
		"type": "event"
	},
	{
		"inputs": [],
		"name": "ETH",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "_feeWhiteList",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "_mainPair",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "_rewardList",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "_swapPairList",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "_swapRouter",
		"outputs": [
			{
				"internalType": "contract IUniswapV2Router02",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "_swapRouterAddress",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "airdropNumbs",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			}
		],
		"name": "allowance",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "approve",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "account",
				"type": "address"
			}
		],
		"name": "balanceOf",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "buy_ETHRewardsFee",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "buy_burnFee",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "buy_liquidityFee",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "buy_marketingFee",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "buy_totalFees",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_buyamount",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_sellamount",
				"type": "uint256"
			}
		],
		"name": "changeSwapLimit",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_amount",
				"type": "uint256"
			}
		],
		"name": "changeWalletLimit",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "claim",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256[]",
				"name": "customs",
				"type": "uint256[]"
			}
		],
		"name": "completeCustoms",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "deadWallet",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "decimals",
		"outputs": [
			{
				"internalType": "uint8",
				"name": "",
				"type": "uint8"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "subtractedValue",
				"type": "uint256"
			}
		],
		"name": "decreaseAllowance",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "disableChangeTax",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "disableSwapLimit",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "disableWalletLimit",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "dividendTracker",
		"outputs": [
			{
				"internalType": "contract ETHBackDividendTracker",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "enableChangeTax",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "enableKillBlock",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "enableOffTrade",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "enableRewardList",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "enableSwapLimit",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "enableTransferFee",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "enableWalletLimit",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "account",
				"type": "address"
			}
		],
		"name": "excludeFromDividends",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "fundAddress",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "gasForProcessing",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "addedValue",
				"type": "uint256"
			}
		],
		"name": "increaseAllowance",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "isLaunch",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "account",
				"type": "address"
			}
		],
		"name": "isReward",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "kb",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "launch",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "maxBuyAmount",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "maxSellAmount",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "maxWalletAmount",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address[]",
				"name": "addresses",
				"type": "address[]"
			},
			{
				"internalType": "bool",
				"name": "value",
				"type": "bool"
			}
		],
		"name": "multi_bclist",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "mushHoldNum",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "name",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "owner",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "gas",
				"type": "uint256"
			}
		],
		"name": "processDividendTracker",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "renounceOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "sell_ETHRewardsFee",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "sell_burnFee",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "sell_liquidityFee",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "sell_marketingFee",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "sell_totalFees",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "newValue",
				"type": "uint256"
			}
		],
		"name": "setAirdropNumbs",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "bool",
				"name": "status",
				"type": "bool"
			}
		],
		"name": "setEnableTransferFee",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address[]",
				"name": "addr",
				"type": "address[]"
			},
			{
				"internalType": "bool",
				"name": "enable",
				"type": "bool"
			}
		],
		"name": "setFeeWhiteList",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address payable",
				"name": "wallet",
				"type": "address"
			}
		],
		"name": "setFundAddress",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "killBlockNumber",
				"type": "uint256"
			}
		],
		"name": "setKillBlock",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "bool",
				"name": "status",
				"type": "bool"
			}
		],
		"name": "setSwapAndLiquifyEnabled",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "addr",
				"type": "address"
			},
			{
				"internalType": "bool",
				"name": "enable",
				"type": "bool"
			}
		],
		"name": "setSwapPairList",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "newValue",
				"type": "uint256"
			}
		],
		"name": "setSwapTokensAtAmount",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "startTradeBlock",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "swapAndLiquifyEnabled",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "swapTokensAtAmount",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "symbol",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "totalSupply",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "recipient",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "transfer",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "sender",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "recipient",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "transferFrom",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "transferOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"stateMutability": "payable",
		"type": "receive"
	}
]

// 加池分红模板
export const TemplateD_ABI = [
	{
		"inputs": [
			{
				"internalType": "string[]",
				"name": "stringParams",
				"type": "string[]"
			},
			{
				"internalType": "address[]",
				"name": "addressParams",
				"type": "address[]"
			},
			{
				"internalType": "uint256[]",
				"name": "numberParams",
				"type": "uint256[]"
			},
			{
				"internalType": "bool[]",
				"name": "boolParams",
				"type": "bool[]"
			}
		],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "Approval",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [],
		"name": "Failed_addLiquidity",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [],
		"name": "Failed_addLiquidityETH",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [],
		"name": "Failed_swapExactTokensForETHSupportingFeeOnTransferTokens",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "Failed_swapExactTokensForTokensSupportingFeeOnTransferTokens",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "previousOwner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "OwnershipTransferred",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "Transfer",
		"type": "event"
	},
	{
		"inputs": [],
		"name": "ETH",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "_buyFundFee",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "_buyLPFee",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "_buyRewardFee",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "_feeWhiteList",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "_mainPair",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "_rewardList",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "_rewardTokenDistributor",
		"outputs": [
			{
				"internalType": "contract TokenDistributor",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "_sellFundFee",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "_sellLPFee",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "_sellRewardFee",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "_swapPairList",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "_swapRouter",
		"outputs": [
			{
				"internalType": "contract ISwapRouter",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "_tokenDistributor",
		"outputs": [
			{
				"internalType": "contract TokenDistributor",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "airdropEnable",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "airdropNumbs",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			}
		],
		"name": "allowance",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "approve",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "account",
				"type": "address"
			}
		],
		"name": "balanceOf",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "batchBots",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "buy_burnFee",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_maxBuyAmount",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_maxSellAmount",
				"type": "uint256"
			}
		],
		"name": "changeSwapLimit",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_amount",
				"type": "uint256"
			}
		],
		"name": "changeWalletLimit",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "claimBalance",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "token",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			}
		],
		"name": "claimToken",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256[]",
				"name": "customs",
				"type": "uint256[]"
			}
		],
		"name": "completeCustoms",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "currency",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "decimals",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "disableChangeTax",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "disableKillBatchBot",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "disableSwapLimit",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "disableWalletLimit",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "enableChangeTax",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "enableKillBatchBots",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "enableKillBlock",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "enableOffTrade",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "enableRewardList",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "enableSwapLimit",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "enableTransferFee",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "enableWalletLimit",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "fundAddress",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "holderRewardCondition",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "isMaxEatExempt",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "account",
				"type": "address"
			}
		],
		"name": "isReward",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "kb",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "killBatchBlockNumber",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "launch",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "limitEnable",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "maxBuyAmount",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "maxSellAmount",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "maxWalletAmount",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address[]",
				"name": "addresses",
				"type": "address[]"
			},
			{
				"internalType": "bool",
				"name": "value",
				"type": "bool"
			}
		],
		"name": "multi_bclist",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "name",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "owner",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "processRewardWaitBlock",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "renounceOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "rewardPath",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "sell_burnFee",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "bool",
				"name": "status",
				"type": "bool"
			}
		],
		"name": "setAirDropEnable",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "newValue",
				"type": "uint256"
			}
		],
		"name": "setAirdropNumbs",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "bool",
				"name": "status",
				"type": "bool"
			}
		],
		"name": "setEnableTransferFee",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "addr",
				"type": "address"
			},
			{
				"internalType": "bool",
				"name": "enable",
				"type": "bool"
			}
		],
		"name": "setExcludeHolder",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address[]",
				"name": "addr",
				"type": "address[]"
			},
			{
				"internalType": "bool",
				"name": "enable",
				"type": "bool"
			}
		],
		"name": "setFeeWhiteList",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "addr",
				"type": "address"
			}
		],
		"name": "setFundAddress",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "setHolderRewardCondition",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "newValue",
				"type": "uint256"
			}
		],
		"name": "setProcessRewardWaitBlock",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "addr",
				"type": "address"
			},
			{
				"internalType": "bool",
				"name": "enable",
				"type": "bool"
			}
		],
		"name": "setSwapPairList",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "holder",
				"type": "address"
			},
			{
				"internalType": "bool",
				"name": "exempt",
				"type": "bool"
			}
		],
		"name": "setisMaxEatExempt",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "a",
				"type": "uint256"
			}
		],
		"name": "setkb",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "startLP",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "startLPBlock",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "startTradeBlock",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "stopLP",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "symbol",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "totalSupply",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "recipient",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "transfer",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "sender",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "recipient",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "transferFrom",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "transferOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "user2blocks",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"stateMutability": "payable",
		"type": "receive"
	}
]

export const templateA_bytecode = '60a0604052601260035561dead73ffffffffffffffffffffffffffffffffffffffff1660809073ffffffffffffffffffffffffffffffffffffffff168152503480156200004b57600080fd5b506040516200273a3803806200273a83398181016040528101906200007191906200089f565b600062000083620002a960201b60201c565b9050806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508073ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35060008351146200013057600080fd5b60008151146200013f57600080fd5b6000329050846000815181106200015b576200015a6200098d565b5b60200260200101516001908162000173919062000bfd565b50846001815181106200018b576200018a6200098d565b5b602002602001015160029081620001a3919062000bfd565b5082600081518110620001bb57620001ba6200098d565b5b602002602001015160038190555082600181518110620001e057620001df6200098d565b5b6020026020010151600681905550600654600460008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508073ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60065460405162000296919062000cf5565b60405180910390a3505050505062000d12565b600033905090565b6000604051905090565b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6200031582620002ca565b810181811067ffffffffffffffff82111715620003375762000336620002db565b5b80604052505050565b60006200034c620002b1565b90506200035a82826200030a565b919050565b600067ffffffffffffffff8211156200037d576200037c620002db565b5b602082029050602081019050919050565b600080fd5b600080fd5b600067ffffffffffffffff821115620003b657620003b5620002db565b5b620003c182620002ca565b9050602081019050919050565b60005b83811015620003ee578082015181840152602081019050620003d1565b60008484015250505050565b6000620004116200040b8462000398565b62000340565b90508281526020810184848401111562000430576200042f62000393565b5b6200043d848285620003ce565b509392505050565b600082601f8301126200045d576200045c620002c5565b5b81516200046f848260208601620003fa565b91505092915050565b60006200048f62000489846200035f565b62000340565b90508083825260208201905060208402830185811115620004b557620004b46200038e565b5b835b818110156200050357805167ffffffffffffffff811115620004de57620004dd620002c5565b5b808601620004ed898262000445565b85526020850194505050602081019050620004b7565b5050509392505050565b600082601f830112620005255762000524620002c5565b5b81516200053784826020860162000478565b91505092915050565b600067ffffffffffffffff8211156200055e576200055d620002db565b5b602082029050602081019050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006200059c826200056f565b9050919050565b620005ae816200058f565b8114620005ba57600080fd5b50565b600081519050620005ce81620005a3565b92915050565b6000620005eb620005e58462000540565b62000340565b905080838252602082019050602084028301858111156200061157620006106200038e565b5b835b818110156200063e5780620006298882620005bd565b84526020840193505060208101905062000613565b5050509392505050565b600082601f83011262000660576200065f620002c5565b5b815162000672848260208601620005d4565b91505092915050565b600067ffffffffffffffff821115620006995762000698620002db565b5b602082029050602081019050919050565b6000819050919050565b620006bf81620006aa565b8114620006cb57600080fd5b50565b600081519050620006df81620006b4565b92915050565b6000620006fc620006f6846200067b565b62000340565b905080838252602082019050602084028301858111156200072257620007216200038e565b5b835b818110156200074f57806200073a8882620006ce565b84526020840193505060208101905062000724565b5050509392505050565b600082601f830112620007715762000770620002c5565b5b815162000783848260208601620006e5565b91505092915050565b600067ffffffffffffffff821115620007aa57620007a9620002db565b5b602082029050602081019050919050565b60008115159050919050565b620007d281620007bb565b8114620007de57600080fd5b50565b600081519050620007f281620007c7565b92915050565b60006200080f62000809846200078c565b62000340565b905080838252602082019050602084028301858111156200083557620008346200038e565b5b835b818110156200086257806200084d8882620007e1565b84526020840193505060208101905062000837565b5050509392505050565b600082601f830112620008845762000883620002c5565b5b815162000896848260208601620007f8565b91505092915050565b60008060008060808587031215620008bc57620008bb620002bb565b5b600085015167ffffffffffffffff811115620008dd57620008dc620002c0565b5b620008eb878288016200050d565b945050602085015167ffffffffffffffff8111156200090f576200090e620002c0565b5b6200091d8782880162000648565b935050604085015167ffffffffffffffff811115620009415762000940620002c0565b5b6200094f8782880162000759565b925050606085015167ffffffffffffffff811115620009735762000972620002c0565b5b62000981878288016200086c565b91505092959194509250565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600081519050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000600282049050600182168062000a0f57607f821691505b60208210810362000a255762000a24620009c7565b5b50919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b60006008830262000a8f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8262000a50565b62000a9b868362000a50565b95508019841693508086168417925050509392505050565b6000819050919050565b600062000ade62000ad862000ad284620006aa565b62000ab3565b620006aa565b9050919050565b6000819050919050565b62000afa8362000abd565b62000b1262000b098262000ae5565b84845462000a5d565b825550505050565b600090565b62000b2962000b1a565b62000b3681848462000aef565b505050565b5b8181101562000b5e5762000b5260008262000b1f565b60018101905062000b3c565b5050565b601f82111562000bad5762000b778162000a2b565b62000b828462000a40565b8101602085101562000b92578190505b62000baa62000ba18562000a40565b83018262000b3b565b50505b505050565b600082821c905092915050565b600062000bd26000198460080262000bb2565b1980831691505092915050565b600062000bed838362000bbf565b9150826002028217905092915050565b62000c0882620009bc565b67ffffffffffffffff81111562000c245762000c23620002db565b5b62000c308254620009f6565b62000c3d82828562000b62565b600060209050601f83116001811462000c75576000841562000c60578287015190505b62000c6c858262000bdf565b86555062000cdc565b601f19841662000c858662000a2b565b60005b8281101562000caf5784890151825560018201915060208501945060208101905062000c88565b8683101562000ccf578489015162000ccb601f89168262000bbf565b8355505b6001600288020188555050505b505050505050565b62000cef81620006aa565b82525050565b600060208201905062000d0c600083018462000ce4565b92915050565b608051611a0562000d35600039600081816105b101526105dd0152611a056000f3fe6080604052600436106100f75760003560e01c806370a082311161008a578063a457c2d711610059578063a457c2d71461033b578063a9059cbb14610378578063dd62ed3e146103b5578063f2fde38b146103f2576100fe565b806370a0823114610291578063715018a6146102ce5780638da5cb5b146102e557806395d89b4114610310576100fe565b806327c8f835116100c657806327c8f835146101d35780632b112e49146101fe578063313ce567146102295780633950935114610254576100fe565b806306fdde0314610103578063095ea7b31461012e57806318160ddd1461016b57806323b872dd14610196576100fe565b366100fe57005b600080fd5b34801561010f57600080fd5b5061011861041b565b6040516101259190611294565b60405180910390f35b34801561013a57600080fd5b506101556004803603810190610150919061134f565b6104ad565b60405161016291906113aa565b60405180910390f35b34801561017757600080fd5b506101806104cb565b60405161018d91906113d4565b60405180910390f35b3480156101a257600080fd5b506101bd60048036038101906101b891906113ef565b6104d5565b6040516101ca91906113aa565b60405180910390f35b3480156101df57600080fd5b506101e86105af565b6040516101f59190611451565b60405180910390f35b34801561020a57600080fd5b506102136105d3565b60405161022091906113d4565b60405180910390f35b34801561023557600080fd5b5061023e610617565b60405161024b91906113d4565b60405180910390f35b34801561026057600080fd5b5061027b6004803603810190610276919061134f565b610621565b60405161028891906113aa565b60405180910390f35b34801561029d57600080fd5b506102b860048036038101906102b3919061146c565b6106d4565b6040516102c591906113d4565b60405180910390f35b3480156102da57600080fd5b506102e361071d565b005b3480156102f157600080fd5b506102fa610872565b6040516103079190611451565b60405180910390f35b34801561031c57600080fd5b5061032561089b565b6040516103329190611294565b60405180910390f35b34801561034757600080fd5b50610362600480360381019061035d919061134f565b61092d565b60405161036f91906113aa565b60405180910390f35b34801561038457600080fd5b5061039f600480360381019061039a919061134f565b6109fa565b6040516103ac91906113aa565b60405180910390f35b3480156103c157600080fd5b506103dc60048036038101906103d79190611499565b610a19565b6040516103e991906113d4565b60405180910390f35b3480156103fe57600080fd5b506104196004803603810190610414919061146c565b610aa0565b005b60606001805461042a90611508565b80601f016020809104026020016040519081016040528092919081815260200182805461045690611508565b80156104a35780601f10610478576101008083540402835291602001916104a3565b820191906000526020600020905b81548152906001019060200180831161048657829003601f168201915b5050505050905090565b60006104c16104ba610c61565b8484610c69565b6001905092915050565b6000600654905090565b60006104e2848484610e32565b506105a4846104ef610c61565b61059f8560405180606001604052806028815260200161198360289139600560008b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000610555610c61565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054610f259092919063ffffffff16565b610c69565b600190509392505050565b7f000000000000000000000000000000000000000000000000000000000000000081565b60006106126106017f00000000000000000000000000000000000000000000000000000000000000006106d4565b600654610f8990919063ffffffff16565b905090565b6000600354905090565b60006106ca61062e610c61565b846106c5856005600061063f610c61565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008973ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054610fd390919063ffffffff16565b610c69565b6001905092915050565b6000600460008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b610725610c61565b73ffffffffffffffffffffffffffffffffffffffff1660008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16146107b2576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107a990611585565b60405180910390fd5b61dead73ffffffffffffffffffffffffffffffffffffffff1660008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a361dead6000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b6060600280546108aa90611508565b80601f01602080910402602001604051908101604052809291908181526020018280546108d690611508565b80156109235780601f106108f857610100808354040283529160200191610923565b820191906000526020600020905b81548152906001019060200180831161090657829003601f168201915b5050505050905090565b60006109f061093a610c61565b846109eb856040518060600160405280602581526020016119ab6025913960056000610964610c61565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008a73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054610f259092919063ffffffff16565b610c69565b6001905092915050565b6000610a0e610a07610c61565b8484610e32565b506001905092915050565b6000600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b610aa8610c61565b73ffffffffffffffffffffffffffffffffffffffff1660008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614610b35576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b2c90611585565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1603610ba4576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b9b90611617565b60405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff1660008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a3806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b600033905090565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1603610cd8576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610ccf906116a9565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610d47576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610d3e9061173b565b60405180910390fd5b80600560008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92583604051610e2591906113d4565b60405180910390a3505050565b60008073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff1603610ea2576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610e99906117cd565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1603610f11576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610f089061185f565b60405180910390fd5b610f1c848484611031565b90509392505050565b6000838311158290610f6d576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610f649190611294565b60405180910390fd5b5060008385610f7c91906118ae565b9050809150509392505050565b6000610fcb83836040518060400160405280601e81526020017f536166654d6174683a207375627472616374696f6e206f766572666c6f770000815250610f25565b905092915050565b6000808284610fe291906118e2565b905083811015611027576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161101e90611962565b60405180910390fd5b8091505092915050565b60006110bc826040518060400160405280601481526020017f496e73756666696369656e742042616c616e6365000000000000000000000000815250600460008873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054610f259092919063ffffffff16565b600460008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555061115182600460008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054610fd390919063ffffffff16565b600460008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040516111f191906113d4565b60405180910390a3600190509392505050565b600081519050919050565b600082825260208201905092915050565b60005b8381101561123e578082015181840152602081019050611223565b60008484015250505050565b6000601f19601f8301169050919050565b600061126682611204565b611270818561120f565b9350611280818560208601611220565b6112898161124a565b840191505092915050565b600060208201905081810360008301526112ae818461125b565b905092915050565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006112e6826112bb565b9050919050565b6112f6816112db565b811461130157600080fd5b50565b600081359050611313816112ed565b92915050565b6000819050919050565b61132c81611319565b811461133757600080fd5b50565b60008135905061134981611323565b92915050565b60008060408385031215611366576113656112b6565b5b600061137485828601611304565b92505060206113858582860161133a565b9150509250929050565b60008115159050919050565b6113a48161138f565b82525050565b60006020820190506113bf600083018461139b565b92915050565b6113ce81611319565b82525050565b60006020820190506113e960008301846113c5565b92915050565b600080600060608486031215611408576114076112b6565b5b600061141686828701611304565b935050602061142786828701611304565b92505060406114388682870161133a565b9150509250925092565b61144b816112db565b82525050565b60006020820190506114666000830184611442565b92915050565b600060208284031215611482576114816112b6565b5b600061149084828501611304565b91505092915050565b600080604083850312156114b0576114af6112b6565b5b60006114be85828601611304565b92505060206114cf85828601611304565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000600282049050600182168061152057607f821691505b602082108103611533576115326114d9565b5b50919050565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b600061156f60208361120f565b915061157a82611539565b602082019050919050565b6000602082019050818103600083015261159e81611562565b9050919050565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b600061160160268361120f565b915061160c826115a5565b604082019050919050565b60006020820190508181036000830152611630816115f4565b9050919050565b7f45524332303a20617070726f76652066726f6d20746865207a65726f2061646460008201527f7265737300000000000000000000000000000000000000000000000000000000602082015250565b600061169360248361120f565b915061169e82611637565b604082019050919050565b600060208201905081810360008301526116c281611686565b9050919050565b7f45524332303a20617070726f766520746f20746865207a65726f20616464726560008201527f7373000000000000000000000000000000000000000000000000000000000000602082015250565b600061172560228361120f565b9150611730826116c9565b604082019050919050565b6000602082019050818103600083015261175481611718565b9050919050565b7f45524332303a207472616e736665722066726f6d20746865207a65726f20616460008201527f6472657373000000000000000000000000000000000000000000000000000000602082015250565b60006117b760258361120f565b91506117c28261175b565b604082019050919050565b600060208201905081810360008301526117e6816117aa565b9050919050565b7f45524332303a207472616e7366657220746f20746865207a65726f206164647260008201527f6573730000000000000000000000000000000000000000000000000000000000602082015250565b600061184960238361120f565b9150611854826117ed565b604082019050919050565b600060208201905081810360008301526118788161183c565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60006118b982611319565b91506118c483611319565b92508282039050818111156118dc576118db61187f565b5b92915050565b60006118ed82611319565b91506118f883611319565b92508282019050808211156119105761190f61187f565b5b92915050565b7f536166654d6174683a206164646974696f6e206f766572666c6f770000000000600082015250565b600061194c601b8361120f565b915061195782611916565b602082019050919050565b6000602082019050818103600083015261197b8161193f565b905091905056fe45524332303a207472616e7366657220616d6f756e74206578636565647320616c6c6f77616e636545524332303a2064656372656173656420616c6c6f77616e63652062656c6f77207a65726fa2646970667358221220bb40fb6fd6dc15fbfb872e805b9b02728375fc303e6226351c6f9f85f7b13dba64736f6c63430008120033'
export const templateB_bytecode = '60806040526000600355600060045560006005556101f460065560006007556000600855600060095561dead601260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506001601a60146101000a81548160ff0219169083151502179055506000601b556000601c60006101000a81548160ff021916908315150217905550348015620000b357600080fd5b5060405162006e7238038062006e728339818101604052810190620000d9919062001532565b6000620000eb62000f2e60201b60201c565b9050806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508073ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35083600081518110620001a0576200019f62001620565b5b6020026020010151600e9081620001b8919062001890565b5083600181518110620001d057620001cf62001620565b5b6020026020010151600f9081620001e8919062001890565b50816000815181106200020057620001ff62001620565b5b60200260200101516010819055508160018151811062000225576200022462001620565b5b6020026020010151601181905550826000815181106200024a576200024962001620565b5b6020026020010151600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555081600281518110620002a957620002a862001620565b5b602002602001015160038190555081600381518110620002ce57620002cd62001620565b5b602002602001015160058190555081600481518110620002f357620002f262001620565b5b60200260200101516004819055508160058151811062000318576200031762001620565b5b6020026020010151600681905550816006815181106200033d576200033c62001620565b5b60200260200101516008819055508160078151811062000362576200036162001620565b5b60200260200101516007819055508160088151811062000387576200038662001620565b5b602002602001015160098190555081600981518110620003ac57620003ab62001620565b5b6020026020010151600a8190555081600a81518110620003d157620003d062001620565b5b6020026020010151600c8190555081600b81518110620003f657620003f562001620565b5b6020026020010151600b81905550600a54600c5410156200044e576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016200044590620019fe565b60405180910390fd5b81600c8151811062000465576200046462001620565b5b6020026020010151601b819055506003601b541115620004bc576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620004b39062001a70565b60405180910390fd5b6109c4600354600454600554620004d4919062001ac1565b620004e0919062001ac1565b1062000523576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016200051a9062001b4c565b60405180910390fd5b6109c46006546007546008546200053b919062001ac1565b62000547919062001ac1565b106200058a576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620005819062001b4c565b60405180910390fd5b80600081518110620005a157620005a062001620565b5b6020026020010151600060146101000a81548160ff02191690831515021790555080600181518110620005d957620005d862001620565b5b6020026020010151600060156101000a81548160ff0219169083151502179055508060028151811062000611576200061062001620565b5b6020026020010151600060166101000a81548160ff0219169083151502179055508060038151811062000649576200064862001620565b5b6020026020010151600060176101000a81548160ff0219169083151502179055508060048151811062000681576200068062001620565b5b6020026020010151600060186101000a81548160ff02191690831515021790555080600581518110620006b957620006b862001620565b5b6020026020010151600060196101000a81548160ff02191690831515021790555080600681518110620006f157620006f062001620565b5b60200260200101516000601a6101000a81548160ff0219169083151502179055508060078151811062000729576200072862001620565b5b6020026020010151601c60006101000a81548160ff02191690831515021790555060008360018151811062000763576200076262001620565b5b60200260200101519050600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663095ea7b3826000196040518363ffffffff1660e01b8152600401620007ce92919062001b90565b6020604051808303816000875af1158015620007ee573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062000814919062001bbd565b5080601660006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550600019601460003073ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555060008173ffffffffffffffffffffffffffffffffffffffff1663c45a01556040518163ffffffff1660e01b8152600401602060405180830381865afa15801562000927573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200094d919062001bef565b905060008173ffffffffffffffffffffffffffffffffffffffff1663c9c6539630600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff166040518363ffffffff1660e01b8152600401620009b092919062001c21565b6020604051808303816000875af1158015620009d0573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620009f6919062001bef565b905080601960006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506001601760008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055506001601860008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff021916908315150217905550600060149054906101000a900460ff1662000b9a57600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1660405162000b2f9062000f36565b62000b3b919062001c4e565b604051809103906000f08015801562000b58573d6000803e3d6000fd5b50601a60006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505b60008660028151811062000bb35762000bb262001620565b5b60200260200101519050601154601360008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508073ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60115460405162000c65919062001c6b565b60405180910390a38660038151811062000c845762000c8362001620565b5b6020026020010151600260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550600160186000600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055506001601860008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055506001601860003073ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055506001601860003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055506001601860003273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff021916908315150217905550600160186000601260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff021916908315150217905550505050505050505062001c88565b600033905090565b61024c8062006c2683390190565b6000604051905090565b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b62000fa88262000f5d565b810181811067ffffffffffffffff8211171562000fca5762000fc962000f6e565b5b80604052505050565b600062000fdf62000f44565b905062000fed828262000f9d565b919050565b600067ffffffffffffffff82111562001010576200100f62000f6e565b5b602082029050602081019050919050565b600080fd5b600080fd5b600067ffffffffffffffff82111562001049576200104862000f6e565b5b620010548262000f5d565b9050602081019050919050565b60005b838110156200108157808201518184015260208101905062001064565b60008484015250505050565b6000620010a46200109e846200102b565b62000fd3565b905082815260208101848484011115620010c357620010c262001026565b5b620010d084828562001061565b509392505050565b600082601f830112620010f057620010ef62000f58565b5b8151620011028482602086016200108d565b91505092915050565b6000620011226200111c8462000ff2565b62000fd3565b9050808382526020820190506020840283018581111562001148576200114762001021565b5b835b818110156200119657805167ffffffffffffffff81111562001171576200117062000f58565b5b808601620011808982620010d8565b855260208501945050506020810190506200114a565b5050509392505050565b600082601f830112620011b857620011b762000f58565b5b8151620011ca8482602086016200110b565b91505092915050565b600067ffffffffffffffff821115620011f157620011f062000f6e565b5b602082029050602081019050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006200122f8262001202565b9050919050565b620012418162001222565b81146200124d57600080fd5b50565b600081519050620012618162001236565b92915050565b60006200127e6200127884620011d3565b62000fd3565b90508083825260208201905060208402830185811115620012a457620012a362001021565b5b835b81811015620012d15780620012bc888262001250565b845260208401935050602081019050620012a6565b5050509392505050565b600082601f830112620012f357620012f262000f58565b5b81516200130584826020860162001267565b91505092915050565b600067ffffffffffffffff8211156200132c576200132b62000f6e565b5b602082029050602081019050919050565b6000819050919050565b62001352816200133d565b81146200135e57600080fd5b50565b600081519050620013728162001347565b92915050565b60006200138f62001389846200130e565b62000fd3565b90508083825260208201905060208402830185811115620013b557620013b462001021565b5b835b81811015620013e25780620013cd888262001361565b845260208401935050602081019050620013b7565b5050509392505050565b600082601f83011262001404576200140362000f58565b5b81516200141684826020860162001378565b91505092915050565b600067ffffffffffffffff8211156200143d576200143c62000f6e565b5b602082029050602081019050919050565b60008115159050919050565b62001465816200144e565b81146200147157600080fd5b50565b60008151905062001485816200145a565b92915050565b6000620014a26200149c846200141f565b62000fd3565b90508083825260208201905060208402830185811115620014c857620014c762001021565b5b835b81811015620014f55780620014e0888262001474565b845260208401935050602081019050620014ca565b5050509392505050565b600082601f83011262001517576200151662000f58565b5b8151620015298482602086016200148b565b91505092915050565b600080600080608085870312156200154f576200154e62000f4e565b5b600085015167ffffffffffffffff81111562001570576200156f62000f53565b5b6200157e87828801620011a0565b945050602085015167ffffffffffffffff811115620015a257620015a162000f53565b5b620015b087828801620012db565b935050604085015167ffffffffffffffff811115620015d457620015d362000f53565b5b620015e287828801620013ec565b925050606085015167ffffffffffffffff81111562001606576200160562000f53565b5b6200161487828801620014ff565b91505092959194509250565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600081519050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b60006002820490506001821680620016a257607f821691505b602082108103620016b857620016b76200165a565b5b50919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b600060088302620017227fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82620016e3565b6200172e8683620016e3565b95508019841693508086168417925050509392505050565b6000819050919050565b6000620017716200176b62001765846200133d565b62001746565b6200133d565b9050919050565b6000819050919050565b6200178d8362001750565b620017a56200179c8262001778565b848454620016f0565b825550505050565b600090565b620017bc620017ad565b620017c981848462001782565b505050565b5b81811015620017f157620017e5600082620017b2565b600181019050620017cf565b5050565b601f82111562001840576200180a81620016be565b6200181584620016d3565b8101602085101562001825578190505b6200183d6200183485620016d3565b830182620017ce565b50505b505050565b600082821c905092915050565b6000620018656000198460080262001845565b1980831691505092915050565b600062001880838362001852565b9150826002028217905092915050565b6200189b826200164f565b67ffffffffffffffff811115620018b757620018b662000f6e565b5b620018c3825462001689565b620018d0828285620017f5565b600060209050601f831160018114620019085760008415620018f3578287015190505b620018ff858262001872565b8655506200196f565b601f1984166200191886620016be565b60005b8281101562001942578489015182556001820191506020850194506020810190506200191b565b868310156200196257848901516200195e601f89168262001852565b8355505b6001600288020188555050505b505050505050565b600082825260208201905092915050565b7f206d617853656c6c2073686f756c64206265203e207468616e206d617842757960008201527f2000000000000000000000000000000000000000000000000000000000000000602082015250565b6000620019e660218362001977565b9150620019f38262001988565b604082019050919050565b6000602082019050818103600083015262001a1981620019d7565b9050919050565b7f61697264726f704e756d62732073686f756c64206265203c3d20330000000000600082015250565b600062001a58601b8362001977565b915062001a658262001a20565b602082019050919050565b6000602082019050818103600083015262001a8b8162001a49565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600062001ace826200133d565b915062001adb836200133d565b925082820190508082111562001af65762001af562001a92565b5b92915050565b7f66656520746f6f20686967680000000000000000000000000000000000000000600082015250565b600062001b34600c8362001977565b915062001b418262001afc565b602082019050919050565b6000602082019050818103600083015262001b678162001b25565b9050919050565b62001b798162001222565b82525050565b62001b8a816200133d565b82525050565b600060408201905062001ba7600083018562001b6e565b62001bb6602083018462001b7f565b9392505050565b60006020828403121562001bd65762001bd562000f4e565b5b600062001be68482850162001474565b91505092915050565b60006020828403121562001c085762001c0762000f4e565b5b600062001c188482850162001250565b91505092915050565b600060408201905062001c38600083018562001b6e565b62001c47602083018462001b6e565b9392505050565b600060208201905062001c65600083018462001b6e565b92915050565b600060208201905062001c82600083018462001b7f565b92915050565b614f8e8062001c986000396000f3fe60806040526004361061039b5760003560e01c8063715018a6116101dc578063adc7955d11610102578063d5986433116100a0578063e5a6b10f1161006f578063e5a6b10f14610d5d578063e5c2b0a614610d88578063e82bef2914610db1578063f2fde38b14610ddc576103a2565b8063d598643314610c9f578063dac1dcfe14610cca578063dd62ed3e14610cf5578063e32759cf14610d32576103a2565b8063bd25bf29116100dc578063bd25bf2914610be1578063c92d567e14610c1e578063ce0192f914610c49578063d49d518114610c74576103a2565b8063adc7955d14610b60578063b02d757f14610b8b578063b9fbc49d14610bb6576103a2565b80638da5cb5b1161017a578063a842486111610149578063a842486114610aa6578063a9059cbb14610acf578063aa4bde2814610b0c578063aa582b4214610b37576103a2565b80638da5cb5b146109fc57806390d1dfa914610a2757806395d89b4114610a50578063a23270d714610a7b576103a2565b80637db1342c116101b65780637db1342c1461095457806385dc30041461097d5780638718b24f146109a657806388e765ff146109d1576103a2565b8063715018a6146108e957806379594736146109005780637abdc1ca14610929576103a2565b8063206c17bb116102c15780634d5ce0381161025f57806366d602ae1161022e57806366d602ae1461082d578063697cfc19146108585780636ebcf6071461086f57806370a08231146108ac576103a2565b80634d5ce03814610771578063553193ca146107ae5780635a7ba73c146107d95780636108a3db14610804576103a2565b8063313ce5671161029b578063313ce567146106b35780633bfe62ca146106de5780633c11100d146107095780634188bf5a14610746576103a2565b8063206c17bb1461062057806323b872dd1461064b5780632dab693f14610688576103a2565b8063095ea7b31161033957806315d07d821161030857806315d07d821461057457806316f2f1a81461059f57806318160ddd146105ca5780631846a5a4146105f5576103a2565b8063095ea7b3146104ce5780630f890b861461050b57806314a432c914610522578063150e4c471461054b576103a2565b806303da2b231161037557806303da2b2314610438578063063be69e1461046357806306fdde031461047a57806307313d8d146104a5576103a2565b806301339c21146103a757806301986fad146103be578063024c2ddd146103fb576103a2565b366103a257005b600080fd5b3480156103b357600080fd5b506103bc610e05565b005b3480156103ca57600080fd5b506103e560048036038101906103e09190613e63565b610ee8565b6040516103f29190613eab565b60405180910390f35b34801561040757600080fd5b50610422600480360381019061041d9190613ec6565b610f08565b60405161042f9190613f1f565b60405180910390f35b34801561044457600080fd5b5061044d610f2d565b60405161045a9190613eab565b60405180910390f35b34801561046f57600080fd5b50610478610f40565b005b34801561048657600080fd5b5061048f610ff1565b60405161049c9190613fca565b60405180910390f35b3480156104b157600080fd5b506104cc60048036038101906104c79190614018565b61107f565b005b3480156104da57600080fd5b506104f560048036038101906104f09190614071565b611131565b6040516105029190613eab565b60405180910390f35b34801561051757600080fd5b50610520611148565b005b34801561052e57600080fd5b50610549600480360381019061054491906140b1565b6111f9565b005b34801561055757600080fd5b50610572600480360381019061056d9190614143565b611298565b005b34801561058057600080fd5b506105896113d2565b6040516105969190613eab565b60405180910390f35b3480156105ab57600080fd5b506105b46113e5565b6040516105c19190613f1f565b60405180910390f35b3480156105d657600080fd5b506105df6113eb565b6040516105ec9190613f1f565b60405180910390f35b34801561060157600080fd5b5061060a6113f1565b6040516106179190613eab565b60405180910390f35b34801561062c57600080fd5b50610635611404565b6040516106429190614202565b60405180910390f35b34801561065757600080fd5b50610672600480360381019061066d919061421d565b61142a565b60405161067f9190613eab565b60405180910390f35b34801561069457600080fd5b5061069d6115d0565b6040516106aa9190613f1f565b60405180910390f35b3480156106bf57600080fd5b506106c86115d6565b6040516106d59190613f1f565b60405180910390f35b3480156106ea57600080fd5b506106f36115dc565b6040516107009190613f1f565b60405180910390f35b34801561071557600080fd5b50610730600480360381019061072b9190613e63565b6115e2565b60405161073d9190613eab565b60405180910390f35b34801561075257600080fd5b5061075b611602565b604051610768919061427f565b60405180910390f35b34801561077d57600080fd5b5061079860048036038101906107939190613e63565b611628565b6040516107a59190613f1f565b60405180910390f35b3480156107ba57600080fd5b506107c36116e5565b6040516107d09190613f1f565b60405180910390f35b3480156107e557600080fd5b506107ee6116eb565b6040516107fb9190613eab565b60405180910390f35b34801561081057600080fd5b5061082b60048036038101906108269190614143565b6116fe565b005b34801561083957600080fd5b50610842611895565b60405161084f9190613f1f565b60405180910390f35b34801561086457600080fd5b5061086d61189b565b005b34801561087b57600080fd5b5061089660048036038101906108919190613e63565b61194c565b6040516108a39190613f1f565b60405180910390f35b3480156108b857600080fd5b506108d360048036038101906108ce9190613e63565b611964565b6040516108e09190613f1f565b60405180910390f35b3480156108f557600080fd5b506108fe6119ad565b005b34801561090c57600080fd5b5061092760048036038101906109229190614018565b611b02565b005b34801561093557600080fd5b5061093e611bb4565b60405161094b9190613f1f565b60405180910390f35b34801561096057600080fd5b5061097b600480360381019061097691906140b1565b611bba565b005b34801561098957600080fd5b506109a4600480360381019061099f9190613e63565b611c59565b005b3480156109b257600080fd5b506109bb611d8a565b6040516109c891906142bb565b60405180910390f35b3480156109dd57600080fd5b506109e6611db0565b6040516109f39190613f1f565b60405180910390f35b348015610a0857600080fd5b50610a11611db6565b604051610a1e919061427f565b60405180910390f35b348015610a3357600080fd5b50610a4e6004803603810190610a4991906142d6565b611ddf565b005b348015610a5c57600080fd5b50610a65611ecd565b604051610a729190613fca565b60405180910390f35b348015610a8757600080fd5b50610a90611f5b565b604051610a9d9190613eab565b60405180910390f35b348015610ab257600080fd5b50610acd6004803603810190610ac89190614316565b611f6e565b005b348015610adb57600080fd5b50610af66004803603810190610af19190614071565b61205e565b604051610b039190613eab565b60405180910390f35b348015610b1857600080fd5b50610b21612075565b604051610b2e9190613f1f565b60405180910390f35b348015610b4357600080fd5b50610b5e6004803603810190610b5991906143ac565b61207b565b005b348015610b6c57600080fd5b50610b756122e9565b604051610b829190613f1f565b60405180910390f35b348015610b9757600080fd5b50610ba06122ef565b604051610bad9190613eab565b60405180910390f35b348015610bc257600080fd5b50610bcb612302565b604051610bd89190613f1f565b60405180910390f35b348015610bed57600080fd5b50610c086004803603810190610c039190613e63565b612308565b604051610c159190613eab565b60405180910390f35b348015610c2a57600080fd5b50610c33612328565b604051610c409190613eab565b60405180910390f35b348015610c5557600080fd5b50610c5e61233b565b604051610c6b9190613f1f565b60405180910390f35b348015610c8057600080fd5b50610c89612341565b604051610c969190613f1f565b60405180910390f35b348015610cab57600080fd5b50610cb4612347565b604051610cc19190613eab565b60405180910390f35b348015610cd657600080fd5b50610cdf61235a565b604051610cec9190613eab565b60405180910390f35b348015610d0157600080fd5b50610d1c6004803603810190610d179190613ec6565b61236d565b604051610d299190613f1f565b60405180910390f35b348015610d3e57600080fd5b50610d476123f4565b604051610d549190613f1f565b60405180910390f35b348015610d6957600080fd5b50610d726123fa565b604051610d7f919061427f565b60405180910390f35b348015610d9457600080fd5b50610daf6004803603810190610daa91906140b1565b612420565b005b348015610dbd57600080fd5b50610dc6612503565b604051610dd3919061427f565b60405180910390f35b348015610de857600080fd5b50610e036004803603810190610dfe9190613e63565b612529565b005b610e0d6126ea565b73ffffffffffffffffffffffffffffffffffffffff1660008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614610e9a576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610e9190614445565b60405180910390fd5b6000600d5414610edf576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610ed6906144b1565b60405180910390fd5b43600d81905550565b60186020528060005260406000206000915054906101000a900460ff1681565b6014602052816000526040600020602052806000526040600020600091509150505481565b600060199054906101000a900460ff1681565b610f486126ea565b73ffffffffffffffffffffffffffffffffffffffff1660008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614610fd5576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610fcc90614445565b60405180910390fd5b60008060186101000a81548160ff021916908315150217905550565b600e8054610ffe90614500565b80601f016020809104026020016040519081016040528092919081815260200182805461102a90614500565b80156110775780601f1061104c57610100808354040283529160200191611077565b820191906000526020600020905b81548152906001019060200180831161105a57829003601f168201915b505050505081565b6110876126ea565b73ffffffffffffffffffffffffffffffffffffffff1660008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614611114576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161110b90614445565b60405180910390fd5b80601a60146101000a81548160ff02191690831515021790555050565b600061113e3384846126f2565b6001905092915050565b6111506126ea565b73ffffffffffffffffffffffffffffffffffffffff1660008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16146111dd576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016111d490614445565b60405180910390fd5b600080601a6101000a81548160ff021916908315150217905550565b6112016126ea565b73ffffffffffffffffffffffffffffffffffffffff1660008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161461128e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161128590614445565b60405180910390fd5b8060098190555050565b6112a06126ea565b73ffffffffffffffffffffffffffffffffffffffff1660008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161461132d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161132490614445565b60405180910390fd5b60005b838390508110156113cc57816018600086868581811061135357611352614531565b5b90506020020160208101906113689190613e63565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff02191690831515021790555080806113c49061458f565b915050611330565b50505050565b600060149054906101000a900460ff1681565b60055481565b60115481565b601a60149054906101000a900460ff1681565b601660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60006114378484846127dd565b600019601460008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054146115c55781601460008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461154491906145d7565b601460008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055505b600190509392505050565b60095481565b60105481565b60065481565b60176020528060005260406000206000915054906101000a900460ff1681565b601960009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000601560008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff1680156116cd5750601760008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16155b156116db57600190506116e0565b600090505b919050565b600d5481565b600060169054906101000a900460ff1681565b6117066126ea565b73ffffffffffffffffffffffffffffffffffffffff1660008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614611793576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161178a90614445565b60405180910390fd5b600060179054906101000a900460ff166117e2576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016117d990614657565b60405180910390fd5b60c983839050106117f257600080fd5b60005b8383905081101561188f57816015600086868581811061181857611817614531565b5b905060200201602081019061182d9190613e63565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff021916908315150217905550806118889061458f565b90506117f5565b50505050565b600c5481565b6118a36126ea565b73ffffffffffffffffffffffffffffffffffffffff1660008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614611930576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161192790614445565b60405180910390fd5b60008060196101000a81548160ff021916908315150217905550565b60136020528060005260406000206000915090505481565b6000601360008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b6119b56126ea565b73ffffffffffffffffffffffffffffffffffffffff1660008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614611a42576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611a3990614445565b60405180910390fd5b61dead73ffffffffffffffffffffffffffffffffffffffff1660008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a361dead6000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550565b611b0a6126ea565b73ffffffffffffffffffffffffffffffffffffffff1660008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614611b97576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611b8e90614445565b60405180910390fd5b80601c60006101000a81548160ff02191690831515021790555050565b60085481565b611bc26126ea565b73ffffffffffffffffffffffffffffffffffffffff1660008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614611c4f576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611c4690614445565b60405180910390fd5b80600b8190555050565b611c616126ea565b73ffffffffffffffffffffffffffffffffffffffff1660008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614611cee576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611ce590614445565b60405180910390fd5b80600260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506001601860008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff02191690831515021790555050565b601a60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600a5481565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b611de76126ea565b73ffffffffffffffffffffffffffffffffffffffff1660008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614611e74576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611e6b90614445565b60405180910390fd5b81600a8190555080600c81905550600a54600c541015611ec9576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611ec0906146e9565b60405180910390fd5b5050565b600f8054611eda90614500565b80601f0160208091040260200160405190810160405280929190818152602001828054611f0690614500565b8015611f535780601f10611f2857610100808354040283529160200191611f53565b820191906000526020600020905b815481529060010190602001808311611f3657829003601f168201915b505050505081565b600060189054906101000a900460ff1681565b611f766126ea565b73ffffffffffffffffffffffffffffffffffffffff1660008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614612003576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611ffa90614445565b60405180910390fd5b80601760008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055505050565b600061206b3384846127dd565b6001905092915050565b600b5481565b6120836126ea565b73ffffffffffffffffffffffffffffffffffffffff1660008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614612110576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161210790614445565b60405180910390fd5b6000601a9054906101000a900460ff1661215f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161215690614755565b60405180910390fd5b8181600081811061217357612172614531565b5b905060200201356004819055508181600181811061219457612193614531565b5b90506020020135600581905550818160028181106121b5576121b4614531565b5b90506020020135600381905550818160038181106121d6576121d5614531565b5b90506020020135600781905550818160048181106121f7576121f6614531565b5b905060200201356008819055508181600581811061221857612217614531565b5b905060200201356006819055506109c460035460045460055461223b9190614775565b6122459190614775565b10612285576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161227c906147f5565b60405180910390fd5b6109c460065460075460085461229b9190614775565b6122a59190614775565b106122e5576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016122dc906147f5565b60405180910390fd5b5050565b60075481565b600060179054906101000a900460ff1681565b60045481565b60156020528060005260406000206000915054906101000a900460ff1681565b600060159054906101000a900460ff1681565b60035481565b60001981565b6000601a9054906101000a900460ff1681565b601c60009054906101000a900460ff1681565b6000601460008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b601b5481565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6124286126ea565b73ffffffffffffffffffffffffffffffffffffffff1660008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16146124b5576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016124ac90614445565b60405180910390fd5b60038111156124f9576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016124f090614861565b60405180910390fd5b80601b8190555050565b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6125316126ea565b73ffffffffffffffffffffffffffffffffffffffff1660008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16146125be576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016125b590614445565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff160361262d576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401612624906148f3565b60405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff1660008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a3806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b600033905090565b80601460008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925836040516127d09190613f1f565b60405180910390a3505050565b60006127e884611628565b111561283057600061282f576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016128269061495f565b60405180910390fd5b5b601960149054906101000a900460ff161561285657612850838383613102565b506130fd565b600061286184611964565b9050818110156128a6576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161289d906149cb565b60405180910390fd5b601860008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff1615801561294a5750601860008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16155b80156129625750601a60149054906101000a900460ff165b801561297057506000601b54115b156129f657600080600090505b601b548110156129d75780844260405160200161299c93929190614a0c565b6040516020818303038152906040528051906020012060001c91506129c386836001613102565b5080806129cf9061458f565b91505061297d565b506001601b546129e79190614a49565b836129f291906145d7565b9250505b600080601760008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff1680612a9a5750601760008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff165b15612f7657601860008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16158015612b435750601860008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16155b15612f1e57600060159054906101000a900460ff168015612b665750600d546000145b15612b77576000612b7657600080fd5b5b600060159054906101000a900460ff168015612b9f5750600060169054906101000a900460ff165b8015612bb95750600954600d54612bb69190614775565b43105b15612c6957601760008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16612c68576001601560008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055505b5b600060189054906101000a900460ff1615612d6157601760008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff1615612d1a57600a54841115612d15576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401612d0c90614afd565b60405180910390fd5b612d60565b600c54841115612d5f576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401612d5690614afd565b60405180910390fd5b5b5b600060199054906101000a900460ff168015612dc65750601760008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff165b15612e2a576000612dd686611964565b9050600b548582612de79190614775565b1115612e28576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401612e1f90614b69565b60405180910390fd5b505b601760008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff1615612f1957601960149054906101000a900460ff16612f18576000612e9b30611964565b90506000811115612f16576000600754600654600454600354612ebe9190614775565b612ec89190614775565b612ed29190614775565b9050600061271060028389612ee79190614a49565b612ef19190614a49565b612efb9190614bb8565b905082811115612f09578290505b612f138183613220565b50505b505b5b600191505b601760008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff1615612f7557600190505b5b601760008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff1615801561301a5750601760008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16155b80156130705750601860008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16155b80156130c65750601860008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16155b80156130de5750601c60009054906101000a900460ff165b156130ec5760019150600190505b6130f98686868585613b6d565b5050505b505050565b600081601360008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825461315391906145d7565b9250508190555081601360008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546131a99190614775565b925050819055508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef8460405161320d9190613f1f565b60405180910390a3600190509392505050565b6001601960146101000a81548160ff0219169083151502179055506000810315613b4e5780816132509190614775565b905060006004546007546132649190614775565b905060008282856132759190614a49565b61327f9190614bb8565b90506000600267ffffffffffffffff81111561329e5761329d614be9565b5b6040519080825280602002602001820160405280156132cc5781602001602082028036833780820191505090505b50905030816000815181106132e4576132e3614531565b5b602002602001019073ffffffffffffffffffffffffffffffffffffffff16908173ffffffffffffffffffffffffffffffffffffffff1681525050600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff168160018151811061335557613354614531565b5b602002602001019073ffffffffffffffffffffffffffffffffffffffff16908173ffffffffffffffffffffffffffffffffffffffff1681525050600060149054906101000a900460ff161561347957601660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663791ac94783876133ee91906145d7565b60008430426040518663ffffffff1660e01b8152600401613413959493929190614d11565b600060405180830381600087803b15801561342d57600080fd5b505af192505050801561343e575060015b613473577fe2ca28dff25f053218cef44cd4580a8df8e34fd11ee24e2e45b5394750c20d3c60405160405180910390a1613474565b5b61356c565b601660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16635c11d79583876134c391906145d7565b600084601a60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16426040518663ffffffff1660e01b815260040161350a959493929190614d11565b600060405180830381600087803b15801561352457600080fd5b505af1925050508015613535575060015b61356a577ffa4626fc78df02cb8fdea85a8af60ad29e2c95f22e2a91c79d99631c288a8b6c60405160405180910390a161356b565b5b5b828461357891906145d7565b935060008060008060149054906101000a900460ff16156137a4574792508686846135a39190614a49565b6135ad9190614bb8565b915081836135bb91906145d7565b905060008111801561361c5750600073ffffffffffffffffffffffffffffffffffffffff16600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614155b1561368b57600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166108fc829081150290604051600060405180830381858888f19350505050158015613689573d6000803e3d6000fd5b505b60008511801561369b5750600082115b1561379f57601660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663f305d719833088600080600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16426040518863ffffffff1660e01b815260040161372996959493929190614d6b565b60606040518083038185885af19350505050801561376557506040513d601f19601f820116820180604052508101906137629190614de1565b60015b61379a577fce671f3a6f00739ccc1874c850866644bdbe23b07cb11974f696e72d1672272360405160405180910390a161379e565b5050505b5b613b47565b6000600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690508073ffffffffffffffffffffffffffffffffffffffff166370a08231601a60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff166040518263ffffffff1660e01b8152600401613826919061427f565b602060405180830381865afa158015613843573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906138679190614e34565b93508787856138769190614a49565b6138809190614bb8565b9250828461388e91906145d7565b9150600083111561393d578073ffffffffffffffffffffffffffffffffffffffff166323b872dd601a60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1630866040518463ffffffff1660e01b81526004016138f893929190614e61565b6020604051808303816000875af1158015613917573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061393b9190614ead565b505b6000821115613a0c578073ffffffffffffffffffffffffffffffffffffffff166323b872dd601a60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16856040518463ffffffff1660e01b81526004016139c793929190614e61565b6020604051808303816000875af11580156139e6573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190613a0a9190614ead565b505b600086118015613a1c5750600083115b15613b4557601660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663e8e3370030600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff168987600080600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16426040518963ffffffff1660e01b8152600401613acf989796959493929190614eda565b6060604051808303816000875af1925050508015613b0b57506040513d601f19601f82011682018060405250810190613b089190614de1565b60015b613b40577f0e944a8ae3ee1160b2678930fb103c5ceadb14ecbb4c16e311d7402f7011322c60405160405180910390a1613b44565b5050505b5b505b5050505050505b6000601960146101000a81548160ff0219169083151502179055505050565b82601360008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054613bb891906145d7565b601360008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555060008215613ce55760008215613c2257600754600654613c1b9190614775565b9050613c35565b600454600354613c329190614775565b90505b60006127108287613c469190614a49565b613c509190614bb8565b90506000811115613c75578083613c679190614775565b9250613c74883083613d03565b5b600084613c9e5761271060055488613c8d9190614a49565b613c979190614bb8565b9050613cbc565b61271060085488613caf9190614a49565b613cb99190614bb8565b90505b6000811115613ce1578084613cd19190614775565b9350613ce08961dead83613d03565b5b5050505b613cfb86868387613cf691906145d7565b613d03565b505050505050565b80601360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054613d4e9190614775565b601360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef83604051613dee9190613f1f565b60405180910390a3505050565b600080fd5b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000613e3082613e05565b9050919050565b613e4081613e25565b8114613e4b57600080fd5b50565b600081359050613e5d81613e37565b92915050565b600060208284031215613e7957613e78613dfb565b5b6000613e8784828501613e4e565b91505092915050565b60008115159050919050565b613ea581613e90565b82525050565b6000602082019050613ec06000830184613e9c565b92915050565b60008060408385031215613edd57613edc613dfb565b5b6000613eeb85828601613e4e565b9250506020613efc85828601613e4e565b9150509250929050565b6000819050919050565b613f1981613f06565b82525050565b6000602082019050613f346000830184613f10565b92915050565b600081519050919050565b600082825260208201905092915050565b60005b83811015613f74578082015181840152602081019050613f59565b60008484015250505050565b6000601f19601f8301169050919050565b6000613f9c82613f3a565b613fa68185613f45565b9350613fb6818560208601613f56565b613fbf81613f80565b840191505092915050565b60006020820190508181036000830152613fe48184613f91565b905092915050565b613ff581613e90565b811461400057600080fd5b50565b60008135905061401281613fec565b92915050565b60006020828403121561402e5761402d613dfb565b5b600061403c84828501614003565b91505092915050565b61404e81613f06565b811461405957600080fd5b50565b60008135905061406b81614045565b92915050565b6000806040838503121561408857614087613dfb565b5b600061409685828601613e4e565b92505060206140a78582860161405c565b9150509250929050565b6000602082840312156140c7576140c6613dfb565b5b60006140d58482850161405c565b91505092915050565b600080fd5b600080fd5b600080fd5b60008083601f840112614103576141026140de565b5b8235905067ffffffffffffffff8111156141205761411f6140e3565b5b60208301915083602082028301111561413c5761413b6140e8565b5b9250929050565b60008060006040848603121561415c5761415b613dfb565b5b600084013567ffffffffffffffff81111561417a57614179613e00565b5b614186868287016140ed565b9350935050602061419986828701614003565b9150509250925092565b6000819050919050565b60006141c86141c36141be84613e05565b6141a3565b613e05565b9050919050565b60006141da826141ad565b9050919050565b60006141ec826141cf565b9050919050565b6141fc816141e1565b82525050565b600060208201905061421760008301846141f3565b92915050565b60008060006060848603121561423657614235613dfb565b5b600061424486828701613e4e565b935050602061425586828701613e4e565b92505060406142668682870161405c565b9150509250925092565b61427981613e25565b82525050565b60006020820190506142946000830184614270565b92915050565b60006142a5826141cf565b9050919050565b6142b58161429a565b82525050565b60006020820190506142d060008301846142ac565b92915050565b600080604083850312156142ed576142ec613dfb565b5b60006142fb8582860161405c565b925050602061430c8582860161405c565b9150509250929050565b6000806040838503121561432d5761432c613dfb565b5b600061433b85828601613e4e565b925050602061434c85828601614003565b9150509250929050565b60008083601f84011261436c5761436b6140de565b5b8235905067ffffffffffffffff811115614389576143886140e3565b5b6020830191508360208202830111156143a5576143a46140e8565b5b9250929050565b600080602083850312156143c3576143c2613dfb565b5b600083013567ffffffffffffffff8111156143e1576143e0613e00565b5b6143ed85828601614356565b92509250509250929050565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b600061442f602083613f45565b915061443a826143f9565b602082019050919050565b6000602082019050818103600083015261445e81614422565b9050919050565b7f616c726561647920737461727465640000000000000000000000000000000000600082015250565b600061449b600f83613f45565b91506144a682614465565b602082019050919050565b600060208201905081810360008301526144ca8161448e565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000600282049050600182168061451857607f821691505b60208210810361452b5761452a6144d1565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600061459a82613f06565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82036145cc576145cb614560565b5b600182019050919050565b60006145e282613f06565b91506145ed83613f06565b925082820390508181111561460557614604614560565b5b92915050565b7f7265776172644c6973742064697361626c656400000000000000000000000000600082015250565b6000614641601383613f45565b915061464c8261460b565b602082019050919050565b6000602082019050818103600083015261467081614634565b9050919050565b7f206d617853656c6c2073686f756c64206265203e207468616e206d617842757960008201527f2000000000000000000000000000000000000000000000000000000000000000602082015250565b60006146d3602183613f45565b91506146de82614677565b604082019050919050565b60006020820190508181036000830152614702816146c6565b9050919050565b7f746178206368616e67652064697361626c656400000000000000000000000000600082015250565b600061473f601383613f45565b915061474a82614709565b602082019050919050565b6000602082019050818103600083015261476e81614732565b9050919050565b600061478082613f06565b915061478b83613f06565b92508282019050808211156147a3576147a2614560565b5b92915050565b7f66656520746f6f20686967680000000000000000000000000000000000000000600082015250565b60006147df600c83613f45565b91506147ea826147a9565b602082019050919050565b6000602082019050818103600083015261480e816147d2565b9050919050565b7f6e657756616c7565206d757374203c3d20330000000000000000000000000000600082015250565b600061484b601283613f45565b915061485682614815565b602082019050919050565b6000602082019050818103600083015261487a8161483e565b9050919050565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b60006148dd602683613f45565b91506148e882614881565b604082019050919050565b6000602082019050818103600083015261490c816148d0565b9050919050565b7f6973526577617264203e20302021000000000000000000000000000000000000600082015250565b6000614949600e83613f45565b915061495482614913565b602082019050919050565b600060208201905081810360008301526149788161493c565b9050919050565b7f62616c616e63654e6f74456e6f75676800000000000000000000000000000000600082015250565b60006149b5601083613f45565b91506149c08261497f565b602082019050919050565b600060208201905081810360008301526149e4816149a8565b9050919050565b6000819050919050565b614a06614a0182613f06565b6149eb565b82525050565b6000614a1882866149f5565b602082019150614a2882856149f5565b602082019150614a3882846149f5565b602082019150819050949350505050565b6000614a5482613f06565b9150614a5f83613f06565b9250828202614a6d81613f06565b91508282048414831517614a8457614a83614560565b5b5092915050565b7f4578636565646564206d6178696d756d207472616e73616374696f6e20766f6c60008201527f756d650000000000000000000000000000000000000000000000000000000000602082015250565b6000614ae7602383613f45565b9150614af282614a8b565b604082019050919050565b60006020820190508181036000830152614b1681614ada565b9050919050565b7f4578636565646564206d6178696d756d2077616c6c65742062616c616e636500600082015250565b6000614b53601f83613f45565b9150614b5e82614b1d565b602082019050919050565b60006020820190508181036000830152614b8281614b46565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b6000614bc382613f06565b9150614bce83613f06565b925082614bde57614bdd614b89565b5b828204905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000819050919050565b6000614c3d614c38614c3384614c18565b6141a3565b613f06565b9050919050565b614c4d81614c22565b82525050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b614c8881613e25565b82525050565b6000614c9a8383614c7f565b60208301905092915050565b6000602082019050919050565b6000614cbe82614c53565b614cc88185614c5e565b9350614cd383614c6f565b8060005b83811015614d04578151614ceb8882614c8e565b9750614cf683614ca6565b925050600181019050614cd7565b5085935050505092915050565b600060a082019050614d266000830188613f10565b614d336020830187614c44565b8181036040830152614d458186614cb3565b9050614d546060830185614270565b614d616080830184613f10565b9695505050505050565b600060c082019050614d806000830189614270565b614d8d6020830188613f10565b614d9a6040830187614c44565b614da76060830186614c44565b614db46080830185614270565b614dc160a0830184613f10565b979650505050505050565b600081519050614ddb81614045565b92915050565b600080600060608486031215614dfa57614df9613dfb565b5b6000614e0886828701614dcc565b9350506020614e1986828701614dcc565b9250506040614e2a86828701614dcc565b9150509250925092565b600060208284031215614e4a57614e49613dfb565b5b6000614e5884828501614dcc565b91505092915050565b6000606082019050614e766000830186614270565b614e836020830185614270565b614e906040830184613f10565b949350505050565b600081519050614ea781613fec565b92915050565b600060208284031215614ec357614ec2613dfb565b5b6000614ed184828501614e98565b91505092915050565b600061010082019050614ef0600083018b614270565b614efd602083018a614270565b614f0a6040830189613f10565b614f176060830188613f10565b614f246080830187614c44565b614f3160a0830186614c44565b614f3e60c0830185614270565b614f4b60e0830184613f10565b999850505050505050505056fea26469706673582212201c990861758830d694ea640ef17539a49786c556e10acc72e5071fe1ef778bfd64736f6c63430008120033608060405234801561001057600080fd5b5060405161024c38038061024c8339818101604052810190610032919061011c565b8073ffffffffffffffffffffffffffffffffffffffff1663095ea7b3336000196040518363ffffffff1660e01b815260040161006f929190610171565b6020604051808303816000875af115801561008e573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906100b291906101d2565b50506101ff565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006100e9826100be565b9050919050565b6100f9816100de565b811461010457600080fd5b50565b600081519050610116816100f0565b92915050565b600060208284031215610132576101316100b9565b5b600061014084828501610107565b91505092915050565b610152816100de565b82525050565b6000819050919050565b61016b81610158565b82525050565b60006040820190506101866000830185610149565b6101936020830184610162565b9392505050565b60008115159050919050565b6101af8161019a565b81146101ba57600080fd5b50565b6000815190506101cc816101a6565b92915050565b6000602082840312156101e8576101e76100b9565b5b60006101f6848285016101bd565b91505092915050565b603f8061020d6000396000f3fe6080604052600080fdfea26469706673582212202a4656a4df0f43fae0bad250b1da4daba690a217fbe200e8e0c0596e5f0e6e2564736f6c63430008120033'
export const templateC_bytecode = '60a060405261dead600960006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506000601855620493e0601f556001602260006101000a81548160ff0219169083151502179055506000602260016101000a81548160ff02191690831515021790555060006023553480156200009b57600080fd5b506040516200c9b03803806200c9b08339818101604052810190620000c1919062001b3b565b83600081518110620000d857620000d762001c29565b5b602002602001015184600181518110620000f757620000f662001c29565b5b6020026020010151816003908162000110919062001e99565b50806004908162000122919062001e99565b505050600033905080600560006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508073ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35081600081518110620001de57620001dd62001c29565b5b6020026020010151601a819055508160018151811062000203576200020262001c29565b5b6020026020010151601981905550601a5460195410156200025b576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620002529062002007565b60405180910390fd5b8160028151811062000272576200027162001c29565b5b6020026020010151601b819055508160038151811062000297576200029662001c29565b5b6020026020010151600c8190555081600481518110620002bc57620002bb62001c29565b5b6020026020010151600d8190555081600581518110620002e157620002e062001c29565b5b6020026020010151600e8190555062000328600c5462000314600d54600e5462000fcf60201b62002e4f1790919060201c565b62000fcf60201b62002e4f1790919060201c565b600f819055508160068151811062000345576200034462001c29565b5b6020026020010151601081905550816007815181106200036a576200036962001c29565b5b6020026020010151601181905550816008815181106200038f576200038e62001c29565b5b602002602001015160128190555081600981518110620003b457620003b362001c29565b5b6020026020010151601381905550620003fb601154620003e760125460135462000fcf60201b62002e4f1790919060201c565b62000fcf60201b62002e4f1790919060201c565b60148190555081600a8151811062000418576200041762001c29565b5b60200260200101516015819055506109c4601054600f546200043b919062002058565b106200047e576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016200047590620020e3565b60405180910390fd5b6109c460155460145462000493919062002058565b10620004d6576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620004cd9062002155565b60405180910390fd5b600082600b81518110620004ef57620004ee62001c29565b5b602002602001015190508360008151811062000510576200050f62001c29565b5b6020026020010151601660066101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550836001815181106200056f576200056e62001c29565b5b602002602001015173ffffffffffffffffffffffffffffffffffffffff1660808173ffffffffffffffffffffffffffffffffffffffff168152505083600281518110620005c157620005c062001c29565b5b6020026020010151601760006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555082600c8151811062000620576200061f62001c29565b5b6020026020010151601d8190555082600d8151811062000645576200064462001c29565b5b602002602001015160188190555082600e815181106200066a576200066962001c29565b5b602002602001015160238190555060036023541115620006c1576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620006b890620021c7565b60405180910390fd5b601d5484600181518110620006db57620006da62001c29565b5b6020026020010151604051620006f1906200153f565b620006fe9291906200220b565b604051809103906000f0801580156200071b573d6000803e3d6000fd5b50600860006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550612710816200076c919062002267565b600a819055506000601760009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905060008173ffffffffffffffffffffffffffffffffffffffff1663c45a01556040518163ffffffff1660e01b8152600401602060405180830381865afa158015620007e7573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200080d91906200229f565b73ffffffffffffffffffffffffffffffffffffffff1663c9c65396308473ffffffffffffffffffffffffffffffffffffffff1663ad5c46486040518163ffffffff1660e01b8152600401602060405180830381865afa15801562000875573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200089b91906200229f565b6040518363ffffffff1660e01b8152600401620008ba929190620022d1565b6020604051808303816000875af1158015620008da573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200090091906200229f565b90508360008151811062000919576200091862001c29565b5b6020026020010151601660006101000a81548160ff0219169083151502179055508360018151811062000951576200095062001c29565b5b6020026020010151601660016101000a81548160ff0219169083151502179055508360028151811062000989576200098862001c29565b5b6020026020010151601660026101000a81548160ff02191690831515021790555083600481518110620009c157620009c062001c29565b5b6020026020010151601660036101000a81548160ff02191690831515021790555083600581518110620009f957620009f862001c29565b5b6020026020010151601660046101000a81548160ff0219169083151502179055508360068151811062000a315762000a3062001c29565b5b6020026020010151601660056101000a81548160ff0219169083151502179055508360078151811062000a695762000a6862001c29565b5b6020026020010151602260016101000a81548160ff02191690831515021790555081600660006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555080600760006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555062000b1f8160016200103260201b60201c565b600032905062000b5b81601760009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16600019620011bb60201b60201c565b600860009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166331e79db0600860009054906101000a900473ffffffffffffffffffffffffffffffffffffffff166040518263ffffffff1660e01b815260040162000bda9190620022fe565b600060405180830381600087803b15801562000bf557600080fd5b505af115801562000c0a573d6000803e3d6000fd5b50505050600860009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166331e79db0306040518263ffffffff1660e01b815260040162000c6b9190620022fe565b600060405180830381600087803b15801562000c8657600080fd5b505af115801562000c9b573d6000803e3d6000fd5b50505050600860009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16634e7b827f826040518263ffffffff1660e01b815260040162000cfc9190620022fe565b602060405180830381865afa15801562000d1a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062000d4091906200231b565b50600860009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166331e79db0600960009054906101000a900473ffffffffffffffffffffffffffffffffffffffff166040518263ffffffff1660e01b815260040162000dc09190620022fe565b600060405180830381600087803b15801562000ddb57600080fd5b505af115801562000df0573d6000803e3d6000fd5b50505050600860009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166331e79db0846040518263ffffffff1660e01b815260040162000e519190620022fe565b600060405180830381600087803b15801562000e6c57600080fd5b505af115801562000e81573d6000803e3d6000fd5b505050506001602060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff021916908315150217905550600160206000601660069054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055506001602060003073ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff02191690831515021790555062000fc181856200138c60201b60201c565b50505050505050506200263c565b600080828462000fe0919062002058565b90508381101562001028576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016200101f906200239d565b60405180910390fd5b8091505092915050565b801515602160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16151503620010c7576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620010be906200245b565b60405180910390fd5b80602160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508015620011b757600860009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166331e79db0836040518263ffffffff1660e01b8152600401620011829190620022fe565b600060405180830381600087803b1580156200119d57600080fd5b505af1158015620011b2573d6000803e3d6000fd5b505050505b5050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16036200122d576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016200122490620024f3565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16036200129f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040162001296906200258b565b60405180910390fd5b80600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925836040516200137f9190620025ad565b60405180910390a3505050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603620013fe576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620013f5906200261a565b60405180910390fd5b62001412600083836200153a60201b60201c565b6200142e8160025462000fcf60201b62002e4f1790919060201c565b6002819055506200148c816000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205462000fcf60201b62002e4f1790919060201c565b6000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef836040516200152e9190620025ad565b60405180910390a35050565b505050565b6139cb8062008fe583390190565b6000604051905090565b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b620015b18262001566565b810181811067ffffffffffffffff82111715620015d357620015d262001577565b5b80604052505050565b6000620015e86200154d565b9050620015f68282620015a6565b919050565b600067ffffffffffffffff82111562001619576200161862001577565b5b602082029050602081019050919050565b600080fd5b600080fd5b600067ffffffffffffffff82111562001652576200165162001577565b5b6200165d8262001566565b9050602081019050919050565b60005b838110156200168a5780820151818401526020810190506200166d565b60008484015250505050565b6000620016ad620016a78462001634565b620015dc565b905082815260208101848484011115620016cc57620016cb6200162f565b5b620016d98482856200166a565b509392505050565b600082601f830112620016f957620016f862001561565b5b81516200170b84826020860162001696565b91505092915050565b60006200172b6200172584620015fb565b620015dc565b905080838252602082019050602084028301858111156200175157620017506200162a565b5b835b818110156200179f57805167ffffffffffffffff8111156200177a576200177962001561565b5b808601620017898982620016e1565b8552602085019450505060208101905062001753565b5050509392505050565b600082601f830112620017c157620017c062001561565b5b8151620017d384826020860162001714565b91505092915050565b600067ffffffffffffffff821115620017fa57620017f962001577565b5b602082029050602081019050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600062001838826200180b565b9050919050565b6200184a816200182b565b81146200185657600080fd5b50565b6000815190506200186a816200183f565b92915050565b6000620018876200188184620017dc565b620015dc565b90508083825260208201905060208402830185811115620018ad57620018ac6200162a565b5b835b81811015620018da5780620018c5888262001859565b845260208401935050602081019050620018af565b5050509392505050565b600082601f830112620018fc57620018fb62001561565b5b81516200190e84826020860162001870565b91505092915050565b600067ffffffffffffffff82111562001935576200193462001577565b5b602082029050602081019050919050565b6000819050919050565b6200195b8162001946565b81146200196757600080fd5b50565b6000815190506200197b8162001950565b92915050565b600062001998620019928462001917565b620015dc565b90508083825260208201905060208402830185811115620019be57620019bd6200162a565b5b835b81811015620019eb5780620019d688826200196a565b845260208401935050602081019050620019c0565b5050509392505050565b600082601f83011262001a0d5762001a0c62001561565b5b815162001a1f84826020860162001981565b91505092915050565b600067ffffffffffffffff82111562001a465762001a4562001577565b5b602082029050602081019050919050565b60008115159050919050565b62001a6e8162001a57565b811462001a7a57600080fd5b50565b60008151905062001a8e8162001a63565b92915050565b600062001aab62001aa58462001a28565b620015dc565b9050808382526020820190506020840283018581111562001ad15762001ad06200162a565b5b835b8181101562001afe578062001ae9888262001a7d565b84526020840193505060208101905062001ad3565b5050509392505050565b600082601f83011262001b205762001b1f62001561565b5b815162001b3284826020860162001a94565b91505092915050565b6000806000806080858703121562001b585762001b5762001557565b5b600085015167ffffffffffffffff81111562001b795762001b786200155c565b5b62001b8787828801620017a9565b945050602085015167ffffffffffffffff81111562001bab5762001baa6200155c565b5b62001bb987828801620018e4565b935050604085015167ffffffffffffffff81111562001bdd5762001bdc6200155c565b5b62001beb87828801620019f5565b925050606085015167ffffffffffffffff81111562001c0f5762001c0e6200155c565b5b62001c1d8782880162001b08565b91505092959194509250565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600081519050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000600282049050600182168062001cab57607f821691505b60208210810362001cc15762001cc062001c63565b5b50919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b60006008830262001d2b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8262001cec565b62001d37868362001cec565b95508019841693508086168417925050509392505050565b6000819050919050565b600062001d7a62001d7462001d6e8462001946565b62001d4f565b62001946565b9050919050565b6000819050919050565b62001d968362001d59565b62001dae62001da58262001d81565b84845462001cf9565b825550505050565b600090565b62001dc562001db6565b62001dd281848462001d8b565b505050565b5b8181101562001dfa5762001dee60008262001dbb565b60018101905062001dd8565b5050565b601f82111562001e495762001e138162001cc7565b62001e1e8462001cdc565b8101602085101562001e2e578190505b62001e4662001e3d8562001cdc565b83018262001dd7565b50505b505050565b600082821c905092915050565b600062001e6e6000198460080262001e4e565b1980831691505092915050565b600062001e89838362001e5b565b9150826002028217905092915050565b62001ea48262001c58565b67ffffffffffffffff81111562001ec05762001ebf62001577565b5b62001ecc825462001c92565b62001ed982828562001dfe565b600060209050601f83116001811462001f11576000841562001efc578287015190505b62001f08858262001e7b565b86555062001f78565b601f19841662001f218662001cc7565b60005b8281101562001f4b5784890151825560018201915060208501945060208101905062001f24565b8683101562001f6b578489015162001f67601f89168262001e5b565b8355505b6001600288020188555050505b505050505050565b600082825260208201905092915050565b7f206d617853656c6c2073686f756c64206265203e207468616e206d617842757960008201527f2000000000000000000000000000000000000000000000000000000000000000602082015250565b600062001fef60218362001f80565b915062001ffc8262001f91565b604082019050919050565b60006020820190508181036000830152620020228162001fe0565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000620020658262001946565b9150620020728362001946565b92508282019050808211156200208d576200208c62002029565b5b92915050565b7f6275792066656520746f6f206869676800000000000000000000000000000000600082015250565b6000620020cb60108362001f80565b9150620020d88262002093565b602082019050919050565b60006020820190508181036000830152620020fe81620020bc565b9050919050565b7f73656c6c2066656520746f6f2068696768000000000000000000000000000000600082015250565b60006200213d60118362001f80565b91506200214a8262002105565b602082019050919050565b6000602082019050818103600083015262002170816200212e565b9050919050565b7f61697264726f704e756d62732073686f756c64206265203c3d20330000000000600082015250565b6000620021af601b8362001f80565b9150620021bc8262002177565b602082019050919050565b60006020820190508181036000830152620021e281620021a0565b9050919050565b620021f48162001946565b82525050565b62002205816200182b565b82525050565b6000604082019050620022226000830185620021e9565b620022316020830184620021fa565b9392505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b6000620022748262001946565b9150620022818362001946565b92508262002294576200229362002238565b5b828204905092915050565b600060208284031215620022b857620022b762001557565b5b6000620022c88482850162001859565b91505092915050565b6000604082019050620022e86000830185620021fa565b620022f76020830184620021fa565b9392505050565b6000602082019050620023156000830184620021fa565b92915050565b60006020828403121562002334576200233362001557565b5b6000620023448482850162001a7d565b91505092915050565b7f536166654d6174683a206164646974696f6e206f766572666c6f770000000000600082015250565b600062002385601b8362001f80565b915062002392826200234d565b602082019050919050565b60006020820190508181036000830152620023b88162002376565b9050919050565b7f4554484261636b3a204175746f6d61746564206d61726b6574206d616b65722060008201527f7061697220697320616c72656164792073657420746f20746861742076616c7560208201527f6500000000000000000000000000000000000000000000000000000000000000604082015250565b60006200244360418362001f80565b91506200245082620023bf565b606082019050919050565b60006020820190508181036000830152620024768162002434565b9050919050565b7f45524332303a20617070726f76652066726f6d20746865207a65726f2061646460008201527f7265737300000000000000000000000000000000000000000000000000000000602082015250565b6000620024db60248362001f80565b9150620024e8826200247d565b604082019050919050565b600060208201905081810360008301526200250e81620024cc565b9050919050565b7f45524332303a20617070726f766520746f20746865207a65726f20616464726560008201527f7373000000000000000000000000000000000000000000000000000000000000602082015250565b60006200257360228362001f80565b9150620025808262002515565b604082019050919050565b60006020820190508181036000830152620025a68162002564565b9050919050565b6000602082019050620025c46000830184620021e9565b92915050565b7f45524332303a206d696e7420746f20746865207a65726f206164647265737300600082015250565b600062002602601f8362001f80565b91506200260f82620025ca565b602082019050919050565b600060208201905081810360008301526200263581620025f3565b9050919050565b60805161696362002682600039600081816120e00152818161445c01528181614507015281816145b101528181614722015281816147c00152614b8201526169636000f3fe60806040526004361061041f5760003560e01c80637682eefd1161021e578063b02d757f11610123578063e2f45605116100ab578063ee37b5621161007a578063ee37b56214610f9e578063f2fde38b14610fc9578063f5c4eeff14610ff2578063f5d588f51461101d578063fe06b0061461104857610426565b8063e2f4560514610ef4578063e32759cf14610f1f578063e5c2b0a614610f4a578063e82bef2914610f7357610426565b8063c92d567e116100f2578063c92d567e14610e0b578063d598643314610e36578063d678cbc614610e61578063dac1dcfe14610e8c578063dd62ed3e14610eb757610426565b8063b02d757f14610d4f578063bc57942f14610d7a578063bd25bf2914610da5578063c49b9a8014610de257610426565b806395d89b41116101a6578063a842486111610175578063a842486114610c6c578063a9059cbb14610c95578063aa4bde2814610cd2578063aa582b4214610cfd578063afa4f3b214610d2657610426565b806395d89b4114610bae5780639c1b8af514610bd9578063a23270d714610c04578063a457c2d714610c2f57610426565b806385141a77116101ed57806385141a7714610adb57806385dc300414610b0657806388e765ff14610b2f5780638da5cb5b14610b5a57806390d1dfa914610b8557610426565b80637682eefd14610a335780637959473614610a5e5780637db1342c14610a875780638322fff214610ab057610426565b806339509351116103245780635a7ba73c116102ac578063697cfc191161027b578063697cfc19146109745780636b6113681461098b578063700bb191146109b657806370a08231146109df578063715018a614610a1c57610426565b80635a7ba73c146108ca5780635d61e77d146108f55780636108a3db1461092057806366d602ae1461094957610426565b80634a74bb02116102f35780634a74bb02146107f55780634d5ce038146108205780634e71d92d1461085d57806353f0705a14610874578063553193ca1461089f57610426565b806339509351146107255780633c11100d146107625780634188bf5a1461079f57806348036508146107ca57610426565b8063150e4c47116103a7578063255412d911610376578063255412d9146106505780632c1f52161461067b5780632dab693f146106a6578063313ce567146106d157806331e79db0146106fc57610426565b8063150e4c471461059457806318160ddd146105bd578063206c17bb146105e857806323b872dd1461061357610426565b8063063be69e116103ee578063063be69e146104d557806306fdde03146104ec578063095ea7b3146105175780630f890b8614610554578063108c336d1461056b57610426565b806301339c211461042b57806301986fad1461044257806303da2b231461047f57806304d8efbe146104aa57610426565b3661042657005b600080fd5b34801561043757600080fd5b50610440611073565b005b34801561044e57600080fd5b50610469600480360381019061046491906150ee565b61117d565b6040516104769190615136565b60405180910390f35b34801561048b57600080fd5b5061049461119c565b6040516104a19190615136565b60405180910390f35b3480156104b657600080fd5b506104bf6111af565b6040516104cc919061516a565b60405180910390f35b3480156104e157600080fd5b506104ea6111b5565b005b3480156104f857600080fd5b50610501611269565b60405161050e9190615215565b60405180910390f35b34801561052357600080fd5b5061053e60048036038101906105399190615263565b6112fb565b60405161054b9190615136565b60405180910390f35b34801561056057600080fd5b50610569611312565b005b34801561057757600080fd5b50610592600480360381019061058d91906152a3565b6113c6565b005b3480156105a057600080fd5b506105bb60048036038101906105b69190615361565b6114b6565b005b3480156105c957600080fd5b506105d26115f2565b6040516105df919061516a565b60405180910390f35b3480156105f457600080fd5b506105fd6115fc565b60405161060a9190615420565b60405180910390f35b34801561061f57600080fd5b5061063a6004803603810190610635919061543b565b611622565b6040516106479190615136565b60405180910390f35b34801561065c57600080fd5b506106656116ed565b604051610672919061516a565b60405180910390f35b34801561068757600080fd5b506106906116f3565b60405161069d91906154af565b60405180910390f35b3480156106b257600080fd5b506106bb611719565b6040516106c8919061516a565b60405180910390f35b3480156106dd57600080fd5b506106e661171f565b6040516106f391906154e6565b60405180910390f35b34801561070857600080fd5b50610723600480360381019061071e91906150ee565b611728565b005b34801561073157600080fd5b5061074c60048036038101906107479190615263565b61184f565b6040516107599190615136565b60405180910390f35b34801561076e57600080fd5b50610789600480360381019061078491906150ee565b6118f4565b6040516107969190615136565b60405180910390f35b3480156107ab57600080fd5b506107b4611914565b6040516107c19190615510565b60405180910390f35b3480156107d657600080fd5b506107df61193a565b6040516107ec919061516a565b60405180910390f35b34801561080157600080fd5b5061080a611940565b6040516108179190615136565b60405180910390f35b34801561082c57600080fd5b50610847600480360381019061084291906150ee565b611953565b604051610854919061516a565b60405180910390f35b34801561086957600080fd5b506108726119ba565b005b34801561088057600080fd5b50610889611a5e565b604051610896919061516a565b60405180910390f35b3480156108ab57600080fd5b506108b4611a64565b6040516108c1919061516a565b60405180910390f35b3480156108d657600080fd5b506108df611a6a565b6040516108ec9190615136565b60405180910390f35b34801561090157600080fd5b5061090a611a7d565b604051610917919061516a565b60405180910390f35b34801561092c57600080fd5b5061094760048036038101906109429190615361565b611a83565b005b34801561095557600080fd5b5061095e611c1c565b60405161096b919061516a565b60405180910390f35b34801561098057600080fd5b50610989611c22565b005b34801561099757600080fd5b506109a0611cd6565b6040516109ad919061516a565b60405180910390f35b3480156109c257600080fd5b506109dd60048036038101906109d891906152a3565b611cdc565b005b3480156109eb57600080fd5b50610a066004803603810190610a0191906150ee565b611de3565b604051610a13919061516a565b60405180910390f35b348015610a2857600080fd5b50610a31611e2b565b005b348015610a3f57600080fd5b50610a48611f83565b604051610a55919061516a565b60405180910390f35b348015610a6a57600080fd5b50610a856004803603810190610a80919061552b565b611f89565b005b348015610a9357600080fd5b50610aae6004803603810190610aa991906152a3565b61203d565b005b348015610abc57600080fd5b50610ac56120de565b604051610ad29190615510565b60405180910390f35b348015610ae757600080fd5b50610af0612102565b604051610afd9190615510565b60405180910390f35b348015610b1257600080fd5b50610b2d6004803603810190610b289190615596565b612128565b005b348015610b3b57600080fd5b50610b44612203565b604051610b51919061516a565b60405180910390f35b348015610b6657600080fd5b50610b6f612209565b604051610b7c9190615510565b60405180910390f35b348015610b9157600080fd5b50610bac6004803603810190610ba791906155c3565b612233565b005b348015610bba57600080fd5b50610bc3612323565b604051610bd09190615215565b60405180910390f35b348015610be557600080fd5b50610bee6123b5565b604051610bfb919061516a565b60405180910390f35b348015610c1057600080fd5b50610c196123bb565b604051610c269190615136565b60405180910390f35b348015610c3b57600080fd5b50610c566004803603810190610c519190615263565b6123ce565b604051610c639190615136565b60405180910390f35b348015610c7857600080fd5b50610c936004803603810190610c8e9190615603565b61248d565b005b348015610ca157600080fd5b50610cbc6004803603810190610cb79190615263565b6125c2565b604051610cc99190615136565b60405180910390f35b348015610cde57600080fd5b50610ce76125d9565b604051610cf4919061516a565b60405180910390f35b348015610d0957600080fd5b50610d246004803603810190610d1f9190615699565b6125df565b005b348015610d3257600080fd5b50610d4d6004803603810190610d4891906152a3565b6128d9565b005b348015610d5b57600080fd5b50610d6461297a565b604051610d719190615136565b60405180910390f35b348015610d8657600080fd5b50610d8f61298d565b604051610d9c919061516a565b60405180910390f35b348015610db157600080fd5b50610dcc6004803603810190610dc791906150ee565b612993565b604051610dd99190615136565b60405180910390f35b348015610dee57600080fd5b50610e096004803603810190610e04919061552b565b6129b3565b005b348015610e1757600080fd5b50610e20612a67565b604051610e2d9190615136565b60405180910390f35b348015610e4257600080fd5b50610e4b612a7a565b604051610e589190615136565b60405180910390f35b348015610e6d57600080fd5b50610e76612a8d565b604051610e839190615510565b60405180910390f35b348015610e9857600080fd5b50610ea1612ab3565b604051610eae9190615136565b60405180910390f35b348015610ec357600080fd5b50610ede6004803603810190610ed991906156e6565b612ac6565b604051610eeb919061516a565b60405180910390f35b348015610f0057600080fd5b50610f09612b4d565b604051610f16919061516a565b60405180910390f35b348015610f2b57600080fd5b50610f34612b53565b604051610f41919061516a565b60405180910390f35b348015610f5657600080fd5b50610f716004803603810190610f6c91906152a3565b612b59565b005b348015610f7f57600080fd5b50610f88612c3e565b604051610f959190615510565b60405180910390f35b348015610faa57600080fd5b50610fb3612c64565b604051610fc0919061516a565b60405180910390f35b348015610fd557600080fd5b50610ff06004803603810190610feb91906150ee565b612c6a565b005b348015610ffe57600080fd5b50611007612e30565b604051611014919061516a565b60405180910390f35b34801561102957600080fd5b50611032612e36565b60405161103f9190615136565b60405180910390f35b34801561105457600080fd5b5061105d612e49565b60405161106a919061516a565b60405180910390f35b61107b612ead565b73ffffffffffffffffffffffffffffffffffffffff16600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161461110a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161110190615772565b60405180910390fd5b601660009054906101000a900460ff16611159576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611150906157de565b60405180910390fd5b6001601e60006101000a81548160ff02191690831515021790555043601c81905550565b602080528060005260406000206000915054906101000a900460ff1681565b601660049054906101000a900460ff1681565b60125481565b6111bd612ead565b73ffffffffffffffffffffffffffffffffffffffff16600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161461124c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161124390615772565b60405180910390fd5b6000601660036101000a81548160ff021916908315150217905550565b6060600380546112789061582d565b80601f01602080910402602001604051908101604052809291908181526020018280546112a49061582d565b80156112f15780601f106112c6576101008083540402835291602001916112f1565b820191906000526020600020905b8154815290600101906020018083116112d457829003601f168201915b5050505050905090565b6000611308338484612eb5565b6001905092915050565b61131a612ead565b73ffffffffffffffffffffffffffffffffffffffff16600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16146113a9576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016113a090615772565b60405180910390fd5b6000601660056101000a81548160ff021916908315150217905550565b6113ce612ead565b73ffffffffffffffffffffffffffffffffffffffff16600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161461145d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161145490615772565b60405180910390fd5b601660019054906101000a900460ff166114ac576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016114a3906158aa565b60405180910390fd5b8060188190555050565b6114be612ead565b73ffffffffffffffffffffffffffffffffffffffff16600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161461154d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161154490615772565b60405180910390fd5b60005b838390508110156115ec578160206000868685818110611573576115726158ca565b5b905060200201602081019061158891906150ee565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff02191690831515021790555080806115e490615928565b915050611550565b50505050565b6000600254905090565b600660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600061162f84848461307e565b6116e284336116dd856040518060600160405280602881526020016168e160289139600160008b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054613f1c9092919063ffffffff16565b612eb5565b600190509392505050565b60105481565b600860009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60185481565b60006012905090565b611730612ead565b73ffffffffffffffffffffffffffffffffffffffff16600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16146117bf576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016117b690615772565b60405180910390fd5b600860009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166331e79db0826040518263ffffffff1660e01b815260040161181a9190615510565b600060405180830381600087803b15801561183457600080fd5b505af1158015611848573d6000803e3d6000fd5b5050505050565b60006118ea33846118e585600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008973ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054612e4f90919063ffffffff16565b612eb5565b6001905092915050565b60216020528060005260406000206000915054906101000a900460ff1681565b600760009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60145481565b602260009054906101000a900460ff1681565b6000600b60008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16156119b057600190506119b5565b600090505b919050565b600860009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663bc4c4b373360006040518363ffffffff1660e01b8152600401611a1892919061597f565b6020604051808303816000875af1158015611a37573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611a5b91906159bd565b50565b601d5481565b601c5481565b601660019054906101000a900460ff1681565b60115481565b611a8b612ead565b73ffffffffffffffffffffffffffffffffffffffff16600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614611b1a576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611b1190615772565b60405180910390fd5b601660029054906101000a900460ff16611b69576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611b6090615a36565b60405180910390fd5b60c98383905010611b7957600080fd5b60005b83839050811015611c165781600b6000868685818110611b9f57611b9e6158ca565b5b9050602002016020810190611bb491906150ee565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff02191690831515021790555080611c0f90615928565b9050611b7c565b50505050565b60195481565b611c2a612ead565b73ffffffffffffffffffffffffffffffffffffffff16600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614611cb9576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611cb090615772565b60405180910390fd5b6000601660046101000a81548160ff021916908315150217905550565b60155481565b6000806000600860009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663ffb2c479856040518263ffffffff1660e01b8152600401611d3c919061516a565b6060604051808303816000875af1158015611d5b573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611d7f9190615a6b565b9250925092503273ffffffffffffffffffffffffffffffffffffffff16600015157fc864333d6121033635ab41b29ae52f10a22cf4438c3e4f1c4c68518feb2f8a9885858589604051611dd59493929190615abe565b60405180910390a350505050565b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b611e33612ead565b73ffffffffffffffffffffffffffffffffffffffff16600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614611ec2576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611eb990615772565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff16600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a36000600560006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550565b600c5481565b611f91612ead565b73ffffffffffffffffffffffffffffffffffffffff16600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614612020576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161201790615772565b60405180910390fd5b80602260016101000a81548160ff02191690831515021790555050565b612045612ead565b73ffffffffffffffffffffffffffffffffffffffff16600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16146120d4576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016120cb90615772565b60405180910390fd5b80601b8190555050565b7f000000000000000000000000000000000000000000000000000000000000000081565b600960009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b612130612ead565b73ffffffffffffffffffffffffffffffffffffffff16600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16146121bf576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016121b690615772565b60405180910390fd5b80601660066101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b601a5481565b6000600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b61223b612ead565b73ffffffffffffffffffffffffffffffffffffffff16600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16146122ca576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016122c190615772565b60405180910390fd5b81601a8190555080601981905550601a54601954101561231f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161231690615b75565b60405180910390fd5b5050565b6060600480546123329061582d565b80601f016020809104026020016040519081016040528092919081815260200182805461235e9061582d565b80156123ab5780601f10612380576101008083540402835291602001916123ab565b820191906000526020600020905b81548152906001019060200180831161238e57829003601f168201915b5050505050905090565b601f5481565b601660039054906101000a900460ff1681565b6000612483338461247e8560405180606001604052806025815260200161690960259139600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008a73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054613f1c9092919063ffffffff16565b612eb5565b6001905092915050565b612495612ead565b73ffffffffffffffffffffffffffffffffffffffff16600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614612524576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161251b90615772565b60405180910390fd5b600760009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16036125b4576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016125ab90615c2d565b60405180910390fd5b6125be8282613f80565b5050565b60006125cf33848461307e565b6001905092915050565b601b5481565b6125e7612ead565b73ffffffffffffffffffffffffffffffffffffffff16600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614612676576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161266d90615772565b60405180910390fd5b601660059054906101000a900460ff166126c5576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016126bc90615c99565b60405180910390fd5b818160008181106126d9576126d86158ca565b5b90506020020135600c81905550818160018181106126fa576126f96158ca565b5b90506020020135600d819055508181600281811061271b5761271a6158ca565b5b90506020020135600e81905550612753600c54612745600d54600e54612e4f90919063ffffffff16565b612e4f90919063ffffffff16565b600f819055508181600381811061276d5761276c6158ca565b5b905060200201356010819055508181600481811061278e5761278d6158ca565b5b90506020020135601181905550818160058181106127af576127ae6158ca565b5b90506020020135601281905550818160068181106127d0576127cf6158ca565b5b905060200201356013819055506128086011546127fa601254601354612e4f90919063ffffffff16565b612e4f90919063ffffffff16565b60148190555081816007818110612822576128216158ca565b5b905060200201356015819055506109c4601054600f546128429190615cb9565b10612882576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161287990615d39565b60405180910390fd5b6109c46015546014546128959190615cb9565b106128d5576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016128cc90615da5565b60405180910390fd5b5050565b6128e1612ead565b73ffffffffffffffffffffffffffffffffffffffff16600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614612970576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161296790615772565b60405180910390fd5b80600a8190555050565b601660029054906101000a900460ff1681565b600e5481565b600b6020528060005260406000206000915054906101000a900460ff1681565b6129bb612ead565b73ffffffffffffffffffffffffffffffffffffffff16600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614612a4a576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401612a4190615772565b60405180910390fd5b80602260006101000a81548160ff02191690831515021790555050565b601660009054906101000a900460ff1681565b601660059054906101000a900460ff1681565b601760009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b602260019054906101000a900460ff1681565b6000600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b600a5481565b60235481565b612b61612ead565b73ffffffffffffffffffffffffffffffffffffffff16600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614612bf0576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401612be790615772565b60405180910390fd5b6003811115612c34576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401612c2b90615e11565b60405180910390fd5b8060238190555050565b601660069054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600d5481565b612c72612ead565b73ffffffffffffffffffffffffffffffffffffffff16600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614612d01576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401612cf890615772565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1603612d70576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401612d6790615ea3565b60405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff16600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a380600560006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b600f5481565b601e60009054906101000a900460ff1681565b60135481565b6000808284612e5e9190615cb9565b905083811015612ea3576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401612e9a90615f0f565b60405180910390fd5b8091505092915050565b600033905090565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1603612f24576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401612f1b90615fa1565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603612f93576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401612f8a90616033565b60405180910390fd5b80600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92583604051613071919061516a565b60405180910390a3505050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16036130ed576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016130e4906160c5565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff160361315c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161315390616157565b60405180910390fd5b600061316784611953565b11156131a8576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161319f906161c3565b60405180910390fd5b600081036131c0576131bb838383614101565b613f17565b60006131cb30611de3565b90506000600a5482101590508080156131f15750600760149054906101000a900460ff16155b80156132475750602160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16155b801561329d5750602060008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16155b80156132f35750602060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16155b801561330b5750602260009054906101000a900460ff165b801561332657506000601454600f546133249190615cb9565b115b15613439576001600760146101000a81548160ff021916908315150217905550600061338b601454600f5461335b9190615cb9565b61337d601154600c5461336e9190615cb9565b8661439490919063ffffffff16565b61440e90919063ffffffff16565b905060008111156133a05761339f81614458565b5b60006133e5601454600f546133b59190615cb9565b6133d7601254600d546133c89190615cb9565b8761439490919063ffffffff16565b61440e90919063ffffffff16565b905060008111156133fa576133f981614675565b5b600061340530611de3565b9050600081111561341a5761341981614715565b5b6000600760146101000a81548160ff0219169083151502179055505050505b6000600760149054906101000a900460ff16159050602260019054906101000a900460ff16156135cf57602160008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff161580156135075750602160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16155b801561355d5750602060008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16155b80156135b35750602060008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16155b156135ca5760001515811515146135c957600190505b5b61372a565b602160008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff161580156136735750602160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16155b80156136c95750602060008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16155b801561371f5750602060008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16155b1561372957600090505b5b602060008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16806137cb5750602060008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff165b156137d557600090505b8015613cd157601660009054906101000a900460ff161561384057601e60009054906101000a900460ff1661383f576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016138369061622f565b60405180910390fd5b5b601660039054906101000a900460ff161561393857602160008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16156138f157601a548411156138ec576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016138e39061629b565b60405180910390fd5b613937565b601954841115613936576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161392d9061629b565b60405180910390fd5b5b5b600760009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168673ffffffffffffffffffffffffffffffffffffffff1603613aa357601660049054906101000a900460ff1615613a0257601b546139c06139b187611de3565b86612e4f90919063ffffffff16565b1115613a01576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016139f890616307565b60405180910390fd5b5b43601854601c54613a139190615cb9565b118015613a2c5750601660029054906101000a900460ff165b8015613a445750601660019054906101000a900460ff165b15613aa2576001600b60008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055505b5b6000602160008873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff1615613b2757613b20612710613b12600f548861439490919063ffffffff16565b61440e90919063ffffffff16565b9050613b53565b613b50612710613b426014548861439490919063ffffffff16565b61440e90919063ffffffff16565b90505b6000602160008973ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff1615613bd757613bd0612710613bc26010548961439490919063ffffffff16565b61440e90919063ffffffff16565b9050613c03565b613c00612710613bf26015548961439490919063ffffffff16565b61440e90919063ffffffff16565b90505b6000811115613c2f57613c198861dead83614101565b613c2c818761495290919063ffffffff16565b95505b613c42828761495290919063ffffffff16565b9550613c4f883084614101565b60006023541115613cce5760005b602354811015613cb557613ca28982434442604051602001613c829493929190616348565b6040516020818303038152906040528051906020012060001c6001614101565b8080613cad90615928565b915050613c5d565b50613ccb6023548761495290919063ffffffff16565b95505b50505b613cdc868686614101565b600860009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663e30443bc87613d2489611de3565b6040518363ffffffff1660e01b8152600401613d41929190616396565b600060405180830381600087803b158015613d5b57600080fd5b505af1925050508015613d6c575060015b50600860009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663e30443bc86613db588611de3565b6040518363ffffffff1660e01b8152600401613dd2929190616396565b600060405180830381600087803b158015613dec57600080fd5b505af1925050508015613dfd575060015b50600760149054906101000a900460ff16613f13576000601f549050600860009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663ffb2c479826040518263ffffffff1660e01b8152600401613e74919061516a565b6060604051808303816000875af1925050508015613eb057506040513d601f19601f82011682018060405250810190613ead9190615a6b565b60015b15613f11573273ffffffffffffffffffffffffffffffffffffffff16600115157fc864333d6121033635ab41b29ae52f10a22cf4438c3e4f1c4c68518feb2f8a9885858589604051613f059493929190615abe565b60405180910390a35050505b505b5050505b505050565b6000838311158290613f64576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401613f5b9190615215565b60405180910390fd5b5060008385613f7391906163bf565b9050809150509392505050565b801515602160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16151503614012576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016140099061648b565b60405180910390fd5b80602160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff02191690831515021790555080156140fd57600860009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166331e79db0836040518263ffffffff1660e01b81526004016140ca9190615510565b600060405180830381600087803b1580156140e457600080fd5b505af11580156140f8573d6000803e3d6000fd5b505050505b5050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1603614170576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401614167906160c5565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16036141df576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016141d690616157565b60405180910390fd5b6141ea83838361499c565b614255816040518060600160405280602681526020016168bb602691396000808773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054613f1c9092919063ffffffff16565b6000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055506142e8816000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054612e4f90919063ffffffff16565b6000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef83604051614387919061516a565b60405180910390a3505050565b60008083036143a65760009050614408565b600082846143b491906164ab565b90508284826143c3919061651c565b14614403576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016143fa906165bf565b60405180910390fd5b809150505b92915050565b600061445083836040518060400160405280601a81526020017f536166654d6174683a206469766973696f6e206279207a65726f0000000000008152506149a1565b905092915050565b60007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b81526004016144b39190615510565b602060405180830381865afa1580156144d0573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906144f491906165df565b90506144ff82614a04565b60006145ad827f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b815260040161455e9190615510565b602060405180830381865afa15801561457b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061459f91906165df565b61495290919063ffffffff16565b90507f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663a9059cbb601660069054906101000a900473ffffffffffffffffffffffffffffffffffffffff16836040518363ffffffff1660e01b815260040161462c92919061660c565b6020604051808303816000875af115801561464b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061466f91906159bd565b50505050565b600061468b60028361440e90919063ffffffff16565b905060006146a2828461495290919063ffffffff16565b905060004790506146b283614ce5565b60006146c7824761495290919063ffffffff16565b90506146d38382614f57565b7f17bbfb9a6069321b6ded73bd96327c9e6b7212a5cd51ff219cd61370acafb56184828560405161470693929190616635565b60405180910390a15050505050565b61471e81614a04565b60007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b81526004016147799190615510565b602060405180830381865afa158015614796573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906147ba91906165df565b905060007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663a9059cbb600860009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16846040518363ffffffff1660e01b815260040161483b92919061660c565b6020604051808303816000875af115801561485a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061487e91906159bd565b9050801561494d57600860009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166351c2a0e3836040518263ffffffff1660e01b81526004016148e1919061516a565b600060405180830381600087803b1580156148fb57600080fd5b505af115801561490f573d6000803e3d6000fd5b505050507f80195cc573b02cc48460cbca6e6e4cc85ddb91959d946e1c3025ea3d87942dc3838360405161494492919061666c565b60405180910390a15b505050565b600061499483836040518060400160405280601e81526020017f536166654d6174683a207375627472616374696f6e206f766572666c6f770000815250613f1c565b905092915050565b505050565b600080831182906149e8576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016149df9190615215565b60405180910390fd5b50600083856149f7919061651c565b9050809150509392505050565b6000600367ffffffffffffffff811115614a2157614a20616695565b5b604051908082528060200260200182016040528015614a4f5781602001602082028036833780820191505090505b5090503081600081518110614a6757614a666158ca565b5b602002602001019073ffffffffffffffffffffffffffffffffffffffff16908173ffffffffffffffffffffffffffffffffffffffff1681525050600660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663ad5c46486040518163ffffffff1660e01b8152600401602060405180830381865afa158015614b0e573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190614b3291906166d9565b81600181518110614b4657614b456158ca565b5b602002602001019073ffffffffffffffffffffffffffffffffffffffff16908173ffffffffffffffffffffffffffffffffffffffff16815250507f000000000000000000000000000000000000000000000000000000000000000081600281518110614bb557614bb46158ca565b5b602002602001019073ffffffffffffffffffffffffffffffffffffffff16908173ffffffffffffffffffffffffffffffffffffffff1681525050614c1c30600660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1684612eb5565b600660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16635c11d7958360008430426040518663ffffffff1660e01b8152600401614c809594939291906167ff565b600060405180830381600087803b158015614c9a57600080fd5b505af1925050508015614cab575060015b614ce0577ffa4626fc78df02cb8fdea85a8af60ad29e2c95f22e2a91c79d99631c288a8b6c60405160405180910390a1614ce1565b5b5050565b6000600267ffffffffffffffff811115614d0257614d01616695565b5b604051908082528060200260200182016040528015614d305781602001602082028036833780820191505090505b5090503081600081518110614d4857614d476158ca565b5b602002602001019073ffffffffffffffffffffffffffffffffffffffff16908173ffffffffffffffffffffffffffffffffffffffff1681525050600660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663ad5c46486040518163ffffffff1660e01b8152600401602060405180830381865afa158015614def573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190614e1391906166d9565b81600181518110614e2757614e266158ca565b5b602002602001019073ffffffffffffffffffffffffffffffffffffffff16908173ffffffffffffffffffffffffffffffffffffffff1681525050614e8e30600660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1684612eb5565b600660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663791ac9478360008430426040518663ffffffff1660e01b8152600401614ef29594939291906167ff565b600060405180830381600087803b158015614f0c57600080fd5b505af1925050508015614f1d575060015b614f52577fe2ca28dff25f053218cef44cd4580a8df8e34fd11ee24e2e45b5394750c20d3c60405160405180910390a1614f53565b5b5050565b614f8430600660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1684612eb5565b600660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663f305d719823085600080601660069054906101000a900473ffffffffffffffffffffffffffffffffffffffff16426040518863ffffffff1660e01b815260040161500d96959493929190616859565b60606040518083038185885af19350505050801561504957506040513d601f19601f820116820180604052508101906150469190615a6b565b60015b61507e577f7f9722f0fc39b6e3f30aeebd8e67a082ad4dcd92706bfd1f76130f39ba012aec60405160405180910390a1615082565b5050505b5050565b600080fd5b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006150bb82615090565b9050919050565b6150cb816150b0565b81146150d657600080fd5b50565b6000813590506150e8816150c2565b92915050565b60006020828403121561510457615103615086565b5b6000615112848285016150d9565b91505092915050565b60008115159050919050565b6151308161511b565b82525050565b600060208201905061514b6000830184615127565b92915050565b6000819050919050565b61516481615151565b82525050565b600060208201905061517f600083018461515b565b92915050565b600081519050919050565b600082825260208201905092915050565b60005b838110156151bf5780820151818401526020810190506151a4565b60008484015250505050565b6000601f19601f8301169050919050565b60006151e782615185565b6151f18185615190565b93506152018185602086016151a1565b61520a816151cb565b840191505092915050565b6000602082019050818103600083015261522f81846151dc565b905092915050565b61524081615151565b811461524b57600080fd5b50565b60008135905061525d81615237565b92915050565b6000806040838503121561527a57615279615086565b5b6000615288858286016150d9565b92505060206152998582860161524e565b9150509250929050565b6000602082840312156152b9576152b8615086565b5b60006152c78482850161524e565b91505092915050565b600080fd5b600080fd5b600080fd5b60008083601f8401126152f5576152f46152d0565b5b8235905067ffffffffffffffff811115615312576153116152d5565b5b60208301915083602082028301111561532e5761532d6152da565b5b9250929050565b61533e8161511b565b811461534957600080fd5b50565b60008135905061535b81615335565b92915050565b60008060006040848603121561537a57615379615086565b5b600084013567ffffffffffffffff8111156153985761539761508b565b5b6153a4868287016152df565b935093505060206153b78682870161534c565b9150509250925092565b6000819050919050565b60006153e66153e16153dc84615090565b6153c1565b615090565b9050919050565b60006153f8826153cb565b9050919050565b600061540a826153ed565b9050919050565b61541a816153ff565b82525050565b60006020820190506154356000830184615411565b92915050565b60008060006060848603121561545457615453615086565b5b6000615462868287016150d9565b9350506020615473868287016150d9565b92505060406154848682870161524e565b9150509250925092565b6000615499826153ed565b9050919050565b6154a98161548e565b82525050565b60006020820190506154c460008301846154a0565b92915050565b600060ff82169050919050565b6154e0816154ca565b82525050565b60006020820190506154fb60008301846154d7565b92915050565b61550a816150b0565b82525050565b60006020820190506155256000830184615501565b92915050565b60006020828403121561554157615540615086565b5b600061554f8482850161534c565b91505092915050565b600061556382615090565b9050919050565b61557381615558565b811461557e57600080fd5b50565b6000813590506155908161556a565b92915050565b6000602082840312156155ac576155ab615086565b5b60006155ba84828501615581565b91505092915050565b600080604083850312156155da576155d9615086565b5b60006155e88582860161524e565b92505060206155f98582860161524e565b9150509250929050565b6000806040838503121561561a57615619615086565b5b6000615628858286016150d9565b92505060206156398582860161534c565b9150509250929050565b60008083601f840112615659576156586152d0565b5b8235905067ffffffffffffffff811115615676576156756152d5565b5b602083019150836020820283011115615692576156916152da565b5b9250929050565b600080602083850312156156b0576156af615086565b5b600083013567ffffffffffffffff8111156156ce576156cd61508b565b5b6156da85828601615643565b92509250509250929050565b600080604083850312156156fd576156fc615086565b5b600061570b858286016150d9565b925050602061571c858286016150d9565b9150509250929050565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b600061575c602083615190565b915061576782615726565b602082019050919050565b6000602082019050818103600083015261578b8161574f565b9050919050565b7f656e61626c654f666654726164652066616c7365000000000000000000000000600082015250565b60006157c8601483615190565b91506157d382615792565b602082019050919050565b600060208201905081810360008301526157f7816157bb565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000600282049050600182168061584557607f821691505b602082108103615858576158576157fe565b5b50919050565b7f656e61626c654b696c6c426c6f636b2066616c73650000000000000000000000600082015250565b6000615894601583615190565b915061589f8261585e565b602082019050919050565b600060208201905081810360008301526158c381615887565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600061593382615151565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8203615965576159646158f9565b5b600182019050919050565b61597981615558565b82525050565b60006040820190506159946000830185615970565b6159a16020830184615127565b9392505050565b6000815190506159b781615335565b92915050565b6000602082840312156159d3576159d2615086565b5b60006159e1848285016159a8565b91505092915050565b7f656e61626c655265776172644c6973742066616c736500000000000000000000600082015250565b6000615a20601683615190565b9150615a2b826159ea565b602082019050919050565b60006020820190508181036000830152615a4f81615a13565b9050919050565b600081519050615a6581615237565b92915050565b600080600060608486031215615a8457615a83615086565b5b6000615a9286828701615a56565b9350506020615aa386828701615a56565b9250506040615ab486828701615a56565b9150509250925092565b6000608082019050615ad3600083018761515b565b615ae0602083018661515b565b615aed604083018561515b565b615afa606083018461515b565b95945050505050565b7f206d617853656c6c2073686f756c64206265203e207468616e206d617842757960008201527f2000000000000000000000000000000000000000000000000000000000000000602082015250565b6000615b5f602183615190565b9150615b6a82615b03565b604082019050919050565b60006020820190508181036000830152615b8e81615b52565b9050919050565b7f4554484261636b3a205468652050616e4554485377617020706169722063616e60008201527f6e6f742062652072656d6f7665642066726f6d205f73776170506169724c697360208201527f7400000000000000000000000000000000000000000000000000000000000000604082015250565b6000615c17604183615190565b9150615c2282615b95565b606082019050919050565b60006020820190508181036000830152615c4681615c0a565b9050919050565b7f746178206368616e67652064697361626c656400000000000000000000000000600082015250565b6000615c83601383615190565b9150615c8e82615c4d565b602082019050919050565b60006020820190508181036000830152615cb281615c76565b9050919050565b6000615cc482615151565b9150615ccf83615151565b9250828201905080821115615ce757615ce66158f9565b5b92915050565b7f6275792066656520746f6f206869676800000000000000000000000000000000600082015250565b6000615d23601083615190565b9150615d2e82615ced565b602082019050919050565b60006020820190508181036000830152615d5281615d16565b9050919050565b7f73656c6c2066656520746f6f2068696768000000000000000000000000000000600082015250565b6000615d8f601183615190565b9150615d9a82615d59565b602082019050919050565b60006020820190508181036000830152615dbe81615d82565b9050919050565b7f6e657756616c7565206d757374203c3d20330000000000000000000000000000600082015250565b6000615dfb601283615190565b9150615e0682615dc5565b602082019050919050565b60006020820190508181036000830152615e2a81615dee565b9050919050565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b6000615e8d602683615190565b9150615e9882615e31565b604082019050919050565b60006020820190508181036000830152615ebc81615e80565b9050919050565b7f536166654d6174683a206164646974696f6e206f766572666c6f770000000000600082015250565b6000615ef9601b83615190565b9150615f0482615ec3565b602082019050919050565b60006020820190508181036000830152615f2881615eec565b9050919050565b7f45524332303a20617070726f76652066726f6d20746865207a65726f2061646460008201527f7265737300000000000000000000000000000000000000000000000000000000602082015250565b6000615f8b602483615190565b9150615f9682615f2f565b604082019050919050565b60006020820190508181036000830152615fba81615f7e565b9050919050565b7f45524332303a20617070726f766520746f20746865207a65726f20616464726560008201527f7373000000000000000000000000000000000000000000000000000000000000602082015250565b600061601d602283615190565b915061602882615fc1565b604082019050919050565b6000602082019050818103600083015261604c81616010565b9050919050565b7f45524332303a207472616e736665722066726f6d20746865207a65726f20616460008201527f6472657373000000000000000000000000000000000000000000000000000000602082015250565b60006160af602583615190565b91506160ba82616053565b604082019050919050565b600060208201905081810360008301526160de816160a2565b9050919050565b7f45524332303a207472616e7366657220746f20746865207a65726f206164647260008201527f6573730000000000000000000000000000000000000000000000000000000000602082015250565b6000616141602383615190565b915061614c826160e5565b604082019050919050565b6000602082019050818103600083015261617081616134565b9050919050565b7f6973526577617264203e20302021000000000000000000000000000000000000600082015250565b60006161ad600e83615190565b91506161b882616177565b602082019050919050565b600060208201905081810360008301526161dc816161a0565b9050919050565b7f45524332303a205472616e73666572206e6f74206f70656e0000000000000000600082015250565b6000616219601883615190565b9150616224826161e3565b602082019050919050565b600060208201905081810360008301526162488161620c565b9050919050565b7f45524332303a203e206d617820747820616d6f756e7400000000000000000000600082015250565b6000616285601683615190565b91506162908261624f565b602082019050919050565b600060208201905081810360008301526162b481616278565b9050919050565b7f45524332303a203e206d61782077616c6c657420616d6f756e74000000000000600082015250565b60006162f1601a83615190565b91506162fc826162bb565b602082019050919050565b60006020820190508181036000830152616320816162e4565b9050919050565b6000819050919050565b61634261633d82615151565b616327565b82525050565b60006163548287616331565b6020820191506163648286616331565b6020820191506163748285616331565b6020820191506163848284616331565b60208201915081905095945050505050565b60006040820190506163ab6000830185615970565b6163b8602083018461515b565b9392505050565b60006163ca82615151565b91506163d583615151565b92508282039050818111156163ed576163ec6158f9565b5b92915050565b7f4554484261636b3a204175746f6d61746564206d61726b6574206d616b65722060008201527f7061697220697320616c72656164792073657420746f20746861742076616c7560208201527f6500000000000000000000000000000000000000000000000000000000000000604082015250565b6000616475604183615190565b9150616480826163f3565b606082019050919050565b600060208201905081810360008301526164a481616468565b9050919050565b60006164b682615151565b91506164c183615151565b92508282026164cf81615151565b915082820484148315176164e6576164e56158f9565b5b5092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b600061652782615151565b915061653283615151565b925082616542576165416164ed565b5b828204905092915050565b7f536166654d6174683a206d756c7469706c69636174696f6e206f766572666c6f60008201527f7700000000000000000000000000000000000000000000000000000000000000602082015250565b60006165a9602183615190565b91506165b48261654d565b604082019050919050565b600060208201905081810360008301526165d88161659c565b9050919050565b6000602082840312156165f5576165f4615086565b5b600061660384828501615a56565b91505092915050565b60006040820190506166216000830185615501565b61662e602083018461515b565b9392505050565b600060608201905061664a600083018661515b565b616657602083018561515b565b616664604083018461515b565b949350505050565b6000604082019050616681600083018561515b565b61668e602083018461515b565b9392505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000815190506166d3816150c2565b92915050565b6000602082840312156166ef576166ee615086565b5b60006166fd848285016166c4565b91505092915050565b6000819050919050565b600061672b61672661672184616706565b6153c1565b615151565b9050919050565b61673b81616710565b82525050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b616776816150b0565b82525050565b6000616788838361676d565b60208301905092915050565b6000602082019050919050565b60006167ac82616741565b6167b6818561674c565b93506167c18361675d565b8060005b838110156167f25781516167d9888261677c565b97506167e483616794565b9250506001810190506167c5565b5085935050505092915050565b600060a082019050616814600083018861515b565b6168216020830187616732565b818103604083015261683381866167a1565b90506168426060830185615501565b61684f608083018461515b565b9695505050505050565b600060c08201905061686e6000830189615501565b61687b602083018861515b565b6168886040830187616732565b6168956060830186616732565b6168a26080830185615501565b6168af60a083018461515b565b97965050505050505056fe45524332303a207472616e7366657220616d6f756e7420657863656564732062616c616e636545524332303a207472616e7366657220616d6f756e74206578636565647320616c6c6f77616e636545524332303a2064656372656173656420616c6c6f77616e63652062656c6f77207a65726fa2646970667358221220c64846361248aa119ab8ccf106e2a3814075b0e0ebadd1107a57d2160dab10f264736f6c6343000812003360c06040523480156200001157600080fd5b50604051620039cb380380620039cb833981810160405281019062000037919062000263565b6040518060400160405280601781526020017f4554484261636b5f4469766964656e5f547261636b65720000000000000000008152506040518060400160405280601881526020017f4554484261636b5f4469766964656e645f547261636b657200000000000000008152508282828160039081620000b791906200051a565b508060049081620000c991906200051a565b505050600033905080600560006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508073ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a3508073ffffffffffffffffffffffffffffffffffffffff1660808173ffffffffffffffffffffffffffffffffffffffff16815250505050506102586011819055508160a08181525050505062000601565b600080fd5b6000819050919050565b620001d881620001c3565b8114620001e457600080fd5b50565b600081519050620001f881620001cd565b92915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006200022b82620001fe565b9050919050565b6200023d816200021e565b81146200024957600080fd5b50565b6000815190506200025d8162000232565b92915050565b600080604083850312156200027d576200027c620001be565b5b60006200028d85828601620001e7565b9250506020620002a0858286016200024c565b9150509250929050565b600081519050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600060028204905060018216806200032c57607f821691505b602082108103620003425762000341620002e4565b5b50919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b600060088302620003ac7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff826200036d565b620003b886836200036d565b95508019841693508086168417925050509392505050565b6000819050919050565b6000620003fb620003f5620003ef84620001c3565b620003d0565b620001c3565b9050919050565b6000819050919050565b6200041783620003da565b6200042f620004268262000402565b8484546200037a565b825550505050565b600090565b6200044662000437565b620004538184846200040c565b505050565b5b818110156200047b576200046f6000826200043c565b60018101905062000459565b5050565b601f821115620004ca57620004948162000348565b6200049f846200035d565b81016020851015620004af578190505b620004c7620004be856200035d565b83018262000458565b50505b505050565b600082821c905092915050565b6000620004ef60001984600802620004cf565b1980831691505092915050565b60006200050a8383620004dc565b9150826002028217905092915050565b6200052582620002aa565b67ffffffffffffffff811115620005415762000540620002b5565b5b6200054d825462000313565b6200055a8282856200047f565b600060209050601f8311600181146200059257600084156200057d578287015190505b620005898582620004fc565b865550620005f9565b601f198416620005a28662000348565b60005b82811015620005cc57848901518255600182019150602085019450602081019050620005a5565b86831015620005ec5784890151620005e8601f891682620004dc565b8355505b6001600288020188555050505b505050505050565b60805160a05161339662000635600039600081816112ac015261143f015260008181610ed80152611e4801526133966000f3fe608060405234801561001057600080fd5b50600436106101e55760003560e01c8063715018a61161010f578063a9059cbb116100a2578063dd62ed3e11610071578063dd62ed3e146105d2578063e30443bc14610602578063f2fde38b1461061e578063ffb2c4791461063a576101e5565b8063a9059cbb14610524578063aafd847a14610554578063bc4c4b3714610584578063be10b614146105b4576101e5565b806391b89fba116100de57806391b89fba1461047657806395d89b41146104a6578063a457c2d7146104c4578063a8b9d240146104f4576101e5565b8063715018a6146104125780638322fff21461041c57806385a6b3ae1461043a5780638da5cb5b14610458576101e5565b8063313ce5671161018757806351c2a0e31161015657806351c2a0e31461039e5780636a474002146103ba5780636f2789ec146103c457806370a08231146103e2576101e5565b8063313ce5671461030457806331e79db014610322578063395093511461033e5780634e7b827f1461036e576101e5565b8063226cfa3d116101c3578063226cfa3d1461025657806323b872dd1461028657806327ce0147146102b65780633009a609146102e6576101e5565b806306fdde03146101ea578063095ea7b31461020857806318160ddd14610238575b600080fd5b6101f261066c565b6040516101ff9190612571565b60405180910390f35b610222600480360381019061021d919061262c565b6106fe565b60405161022f9190612687565b60405180910390f35b610240610715565b60405161024d91906126b1565b60405180910390f35b610270600480360381019061026b91906126cc565b61071f565b60405161027d91906126b1565b60405180910390f35b6102a0600480360381019061029b91906126f9565b610737565b6040516102ad9190612687565b60405180910390f35b6102d060048036038101906102cb91906126cc565b610802565b6040516102dd91906126b1565b60405180910390f35b6102ee6108a5565b6040516102fb91906126b1565b60405180910390f35b61030c6108ab565b6040516103199190612768565b60405180910390f35b61033c600480360381019061033791906126cc565b6108b4565b005b6103586004803603810190610353919061262c565b610ab7565b6040516103659190612687565b60405180910390f35b610388600480360381019061038391906126cc565b610b5c565b6040516103959190612687565b60405180910390f35b6103b860048036038101906103b39190612783565b610b7c565b005b6103c2610ced565b005b6103cc610d30565b6040516103d991906126b1565b60405180910390f35b6103fc60048036038101906103f791906126cc565b610d36565b60405161040991906126b1565b60405180910390f35b61041a610d7e565b005b610424610ed6565b60405161043191906127bf565b60405180910390f35b610442610efa565b60405161044f91906126b1565b60405180910390f35b610460610f00565b60405161046d91906127bf565b60405180910390f35b610490600480360381019061048b91906126cc565b610f2a565b60405161049d91906126b1565b60405180910390f35b6104ae610f3c565b6040516104bb9190612571565b60405180910390f35b6104de60048036038101906104d9919061262c565b610fce565b6040516104eb9190612687565b60405180910390f35b61050e600480360381019061050991906126cc565b61108d565b60405161051b91906126b1565b60405180910390f35b61053e6004803603810190610539919061262c565b6110f0565b60405161054b9190612687565b60405180910390f35b61056e600480360381019061056991906126cc565b611107565b60405161057b91906126b1565b60405180910390f35b61059e60048036038101906105999190612844565b611150565b6040516105ab9190612687565b60405180910390f35b6105bc6112aa565b6040516105c991906126b1565b60405180910390f35b6105ec60048036038101906105e79190612884565b6112ce565b6040516105f991906126b1565b60405180910390f35b61061c600480360381019061061791906128c4565b611355565b005b610638600480360381019061063391906126cc565b61156a565b005b610654600480360381019061064f9190612783565b611730565b60405161066393929190612904565b60405180910390f35b60606003805461067b9061296a565b80601f01602080910402602001604051908101604052809291908181526020018280546106a79061296a565b80156106f45780601f106106c9576101008083540402835291602001916106f4565b820191906000526020600020905b8154815290600101906020018083116106d757829003601f168201915b5050505050905090565b600061070b3384846118c1565b6001905092915050565b6000600254905090565b60106020528060005260406000206000915090505481565b6000610744848484611a8a565b6107f784336107f28560405180606001604052806028815260200161331460289139600160008b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054611ad09092919063ffffffff16565b6118c1565b600190509392505050565b600070010000000000000000000000000000000061089461088f600760008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461088161087c61086b88610d36565b600654611b3490919063ffffffff16565b611bae565b611bcb90919063ffffffff16565b611c16565b61089e91906129f9565b9050919050565b600e5481565b60006012905090565b6108bc611c2d565b73ffffffffffffffffffffffffffffffffffffffff16600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161461094b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161094290612a76565b60405180910390fd5b600f60008273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16156109a257600080fd5b6001600f60008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff021916908315150217905550610a05816000611c35565b600a73__$b8d230fca36f0b62766bb088f3cc49de04$__634c60db9c9091836040518363ffffffff1660e01b8152600401610a41929190612aac565b60006040518083038186803b158015610a5957600080fd5b505af4158015610a6d573d6000803e3d6000fd5b505050508073ffffffffffffffffffffffffffffffffffffffff167fa878b31040b2e6d0a9a3d3361209db3908ba62014b0dca52adbaee451d128b2560405160405180910390a250565b6000610b523384610b4d85600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008973ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054611ca290919063ffffffff16565b6118c1565b6001905092915050565b600f6020528060005260406000206000915054906101000a900460ff1681565b610b84611c2d565b73ffffffffffffffffffffffffffffffffffffffff16600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614610c13576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c0a90612a76565b60405180910390fd5b6000610c1d610715565b11610c2757600080fd5b6000811115610cea57610c7a610c3b610715565b610c5f70010000000000000000000000000000000084611b3490919063ffffffff16565b610c6991906129f9565b600654611ca290919063ffffffff16565b6006819055503373ffffffffffffffffffffffffffffffffffffffff167fa493a9229478c3fcd73f66d2cdeb7f94fd0f341da924d1054236d7845411651182604051610cc691906126b1565b60405180910390a2610ce381600954611ca290919063ffffffff16565b6009819055505b50565b6000610d2e576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610d2590612b93565b60405180910390fd5b565b60115481565b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b610d86611c2d565b73ffffffffffffffffffffffffffffffffffffffff16600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614610e15576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610e0c90612a76565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff16600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a36000600560006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550565b7f000000000000000000000000000000000000000000000000000000000000000081565b60095481565b6000600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b6000610f358261108d565b9050919050565b606060048054610f4b9061296a565b80601f0160208091040260200160405190810160405280929190818152602001828054610f779061296a565b8015610fc45780601f10610f9957610100808354040283529160200191610fc4565b820191906000526020600020905b815481529060010190602001808311610fa757829003601f168201915b5050505050905090565b6000611083338461107e8560405180606001604052806025815260200161333c60259139600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008a73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054611ad09092919063ffffffff16565b6118c1565b6001905092915050565b60006110e9600860008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546110db84610802565b611d0090919063ffffffff16565b9050919050565b60006110fd338484611a8a565b6001905092915050565b6000600860008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b600061115a611c2d565b73ffffffffffffffffffffffffffffffffffffffff16600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16146111e9576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016111e090612a76565b60405180910390fd5b60006111f484611d4a565b9050600081111561129e5742601060008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508215158473ffffffffffffffffffffffffffffffffffffffff167fa2c38e2d2fb7e3e1912d937fd1ca11ed6d51864dee4cfa7a7bf02becd7acf0928360405161128c91906126b1565b60405180910390a360019150506112a4565b60009150505b92915050565b7f000000000000000000000000000000000000000000000000000000000000000081565b6000600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b61135d611c2d565b73ffffffffffffffffffffffffffffffffffffffff16600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16146113ec576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016113e390612a76565b60405180910390fd5b600f60008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16611566577f000000000000000000000000000000000000000000000000000000000000000081106114e15761146e8282611c35565b600a73__$b8d230fca36f0b62766bb088f3cc49de04$__63bc2b405c909184846040518463ffffffff1660e01b81526004016114ac93929190612c21565b60006040518083038186803b1580156114c457600080fd5b505af41580156114d8573d6000803e3d6000fd5b50505050611559565b6114ec826000611c35565b600a73__$b8d230fca36f0b62766bb088f3cc49de04$__634c60db9c9091846040518363ffffffff1660e01b8152600401611528929190612c58565b60006040518083038186803b15801561154057600080fd5b505af4158015611554573d6000803e3d6000fd5b505050505b611564826001611150565b505b5050565b611572611c2d565b73ffffffffffffffffffffffffffffffffffffffff16600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614611601576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016115f890612a76565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1603611670576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161166790612cf3565b60405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff16600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a380600560006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b600080600080600a6000018054905090506000810361175b57600080600e54935093509350506118ba565b6000600e5490506000805a90506000805b898410801561177a57508582105b156118a157848061178a90612d13565b955050600a6000018054905085106117a157600094505b6000600a60000186815481106117ba576117b9612d5b565b5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905061182f601060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054611fa0565b156118545761183f816001611150565b1561185357818061184f90612d13565b9250505b5b828061185f90612d13565b93505060005a905080851115611897576118946118858287611d0090919063ffffffff16565b87611ca290919063ffffffff16565b95505b809450505061176c565b84600e819055508181600e549850985098505050505050505b9193909250565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1603611930576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161192790612dfc565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff160361199f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161199690612e8e565b60405180910390fd5b80600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92583604051611a7d91906126b1565b60405180910390a3505050565b6000611acb576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611ac290612f20565b60405180910390fd5b505050565b6000838311158290611b18576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611b0f9190612571565b60405180910390fd5b5060008385611b279190612f40565b9050809150509392505050565b6000808303611b465760009050611ba8565b60008284611b549190612f74565b9050828482611b6391906129f9565b14611ba3576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611b9a90613028565b60405180910390fd5b809150505b92915050565b6000808290506000811215611bc257600080fd5b80915050919050565b6000808284611bda9190613052565b905060008312158015611bed5750838112155b80611c035750600083128015611c0257508381125b5b611c0c57600080fd5b8091505092915050565b600080821215611c2557600080fd5b819050919050565b600033905090565b6000611c4083610d36565b905080821115611c71576000611c5f8284611d0090919063ffffffff16565b9050611c6b8482611fd3565b50611c9d565b80821015611c9c576000611c8e8383611d0090919063ffffffff16565b9050611c9a8482612092565b505b5b505050565b6000808284611cb19190613096565b905083811015611cf6576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611ced90613116565b60405180910390fd5b8091505092915050565b6000611d4283836040518060400160405280601e81526020017f536166654d6174683a207375627472616374696f6e206f766572666c6f770000815250611ad0565b905092915050565b600080611d568361108d565b90506000811115611f9557611db381600860008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054611ca290919063ffffffff16565b600860008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff167fee503bee2bb6a87e57bc57db795f98137327401a0e7b7ce42e37926cc1a9ca4d82604051611e3c91906126b1565b60405180910390a260007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663a9059cbb85846040518363ffffffff1660e01b8152600401611ea1929190613145565b6020604051808303816000875af1158015611ec0573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611ee49190613183565b905080611f8b57611f3d82600860008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054611d0090919063ffffffff16565b600860008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550600092505050611f9b565b8192505050611f9b565b60009150505b919050565b600042821115611fb35760009050611fce565b601154611fc98342611d0090919063ffffffff16565b101590505b919050565b611fdd8282612151565b61204b611ffd611ff883600654611b3490919063ffffffff16565b611bae565b600760008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546122e490919063ffffffff16565b600760008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055505050565b61209c828261232f565b61210a6120bc6120b783600654611b3490919063ffffffff16565b611bae565b600760008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054611bcb90919063ffffffff16565b600760008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055505050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16036121c0576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016121b7906131fc565b60405180910390fd5b6121cc600083836124dc565b6121e181600254611ca290919063ffffffff16565b600281905550612238816000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054611ca290919063ffffffff16565b6000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef836040516122d891906126b1565b60405180910390a35050565b60008082846122f3919061321c565b9050600083121580156123065750838113155b8061231c575060008312801561231b57508381135b5b61232557600080fd5b8091505092915050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff160361239e576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401612395906132d1565b60405180910390fd5b6123aa826000836124dc565b612415816040518060600160405280602281526020016132f2602291396000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054611ad09092919063ffffffff16565b6000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555061246c81600254611d0090919063ffffffff16565b600281905550600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef836040516124d091906126b1565b60405180910390a35050565b505050565b600081519050919050565b600082825260208201905092915050565b60005b8381101561251b578082015181840152602081019050612500565b60008484015250505050565b6000601f19601f8301169050919050565b6000612543826124e1565b61254d81856124ec565b935061255d8185602086016124fd565b61256681612527565b840191505092915050565b6000602082019050818103600083015261258b8184612538565b905092915050565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006125c382612598565b9050919050565b6125d3816125b8565b81146125de57600080fd5b50565b6000813590506125f0816125ca565b92915050565b6000819050919050565b612609816125f6565b811461261457600080fd5b50565b60008135905061262681612600565b92915050565b6000806040838503121561264357612642612593565b5b6000612651858286016125e1565b925050602061266285828601612617565b9150509250929050565b60008115159050919050565b6126818161266c565b82525050565b600060208201905061269c6000830184612678565b92915050565b6126ab816125f6565b82525050565b60006020820190506126c660008301846126a2565b92915050565b6000602082840312156126e2576126e1612593565b5b60006126f0848285016125e1565b91505092915050565b60008060006060848603121561271257612711612593565b5b6000612720868287016125e1565b9350506020612731868287016125e1565b925050604061274286828701612617565b9150509250925092565b600060ff82169050919050565b6127628161274c565b82525050565b600060208201905061277d6000830184612759565b92915050565b60006020828403121561279957612798612593565b5b60006127a784828501612617565b91505092915050565b6127b9816125b8565b82525050565b60006020820190506127d460008301846127b0565b92915050565b60006127e582612598565b9050919050565b6127f5816127da565b811461280057600080fd5b50565b600081359050612812816127ec565b92915050565b6128218161266c565b811461282c57600080fd5b50565b60008135905061283e81612818565b92915050565b6000806040838503121561285b5761285a612593565b5b600061286985828601612803565b925050602061287a8582860161282f565b9150509250929050565b6000806040838503121561289b5761289a612593565b5b60006128a9858286016125e1565b92505060206128ba858286016125e1565b9150509250929050565b600080604083850312156128db576128da612593565b5b60006128e985828601612803565b92505060206128fa85828601612617565b9150509250929050565b600060608201905061291960008301866126a2565b61292660208301856126a2565b61293360408301846126a2565b949350505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000600282049050600182168061298257607f821691505b6020821081036129955761299461293b565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000612a04826125f6565b9150612a0f836125f6565b925082612a1f57612a1e61299b565b5b828204905092915050565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b6000612a606020836124ec565b9150612a6b82612a2a565b602082019050919050565b60006020820190508181036000830152612a8f81612a53565b9050919050565b8082525050565b612aa6816125b8565b82525050565b6000604082019050612ac16000830185612a96565b612ace6020830184612a9d565b9392505050565b7f4554484261636b5f4469766964656e645f547261636b65723a2077697468647260008201527f61774469766964656e642064697361626c65642e20557365207468652027636c60208201527f61696d272066756e6374696f6e206f6e20746865206d61696e2045544842616360408201527f6b20636f6e74726163742e000000000000000000000000000000000000000000606082015250565b6000612b7d606b836124ec565b9150612b8882612ad5565b608082019050919050565b60006020820190508181036000830152612bac81612b70565b9050919050565b6000819050919050565b6000612bd8612bd3612bce84612598565b612bb3565b612598565b9050919050565b6000612bea82612bbd565b9050919050565b6000612bfc82612bdf565b9050919050565b612c0c81612bf1565b82525050565b612c1b816125f6565b82525050565b6000606082019050612c366000830186612a96565b612c436020830185612c03565b612c506040830184612c12565b949350505050565b6000604082019050612c6d6000830185612a96565b612c7a6020830184612c03565b9392505050565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b6000612cdd6026836124ec565b9150612ce882612c81565b604082019050919050565b60006020820190508181036000830152612d0c81612cd0565b9050919050565b6000612d1e826125f6565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8203612d5057612d4f6129ca565b5b600182019050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f45524332303a20617070726f76652066726f6d20746865207a65726f2061646460008201527f7265737300000000000000000000000000000000000000000000000000000000602082015250565b6000612de66024836124ec565b9150612df182612d8a565b604082019050919050565b60006020820190508181036000830152612e1581612dd9565b9050919050565b7f45524332303a20617070726f766520746f20746865207a65726f20616464726560008201527f7373000000000000000000000000000000000000000000000000000000000000602082015250565b6000612e786022836124ec565b9150612e8382612e1c565b604082019050919050565b60006020820190508181036000830152612ea781612e6b565b9050919050565b7f4554484261636b5f4469766964656e645f547261636b65723a204e6f2074726160008201527f6e736665727320616c6c6f776564000000000000000000000000000000000000602082015250565b6000612f0a602e836124ec565b9150612f1582612eae565b604082019050919050565b60006020820190508181036000830152612f3981612efd565b9050919050565b6000612f4b826125f6565b9150612f56836125f6565b9250828203905081811115612f6e57612f6d6129ca565b5b92915050565b6000612f7f826125f6565b9150612f8a836125f6565b9250828202612f98816125f6565b91508282048414831517612faf57612fae6129ca565b5b5092915050565b7f536166654d6174683a206d756c7469706c69636174696f6e206f766572666c6f60008201527f7700000000000000000000000000000000000000000000000000000000000000602082015250565b60006130126021836124ec565b915061301d82612fb6565b604082019050919050565b6000602082019050818103600083015261304181613005565b9050919050565b6000819050919050565b600061305d82613048565b915061306883613048565b9250828201905082811215600083121683821260008412151617156130905761308f6129ca565b5b92915050565b60006130a1826125f6565b91506130ac836125f6565b92508282019050808211156130c4576130c36129ca565b5b92915050565b7f536166654d6174683a206164646974696f6e206f766572666c6f770000000000600082015250565b6000613100601b836124ec565b915061310b826130ca565b602082019050919050565b6000602082019050818103600083015261312f816130f3565b9050919050565b61313f81612bf1565b82525050565b600060408201905061315a6000830185613136565b61316760208301846126a2565b9392505050565b60008151905061317d81612818565b92915050565b60006020828403121561319957613198612593565b5b60006131a78482850161316e565b91505092915050565b7f45524332303a206d696e7420746f20746865207a65726f206164647265737300600082015250565b60006131e6601f836124ec565b91506131f1826131b0565b602082019050919050565b60006020820190508181036000830152613215816131d9565b9050919050565b600061322782613048565b915061323283613048565b9250828203905081811260008412168282136000851215161715613259576132586129ca565b5b92915050565b7f45524332303a206275726e2066726f6d20746865207a65726f2061646472657360008201527f7300000000000000000000000000000000000000000000000000000000000000602082015250565b60006132bb6021836124ec565b91506132c68261325f565b604082019050919050565b600060208201905081810360008301526132ea816132ae565b905091905056fe45524332303a206275726e20616d6f756e7420657863656564732062616c616e636545524332303a207472616e7366657220616d6f756e74206578636565647320616c6c6f77616e636545524332303a2064656372656173656420616c6c6f77616e63652062656c6f77207a65726fa26469706673582212203ab2a166c3390fbeaea8ab556cadcca009c6a910282a48abea6ae0a077e3bd7664736f6c63430008120033'
export const templateD02760006101000a81548160ff0219169083151502179055506014602f553480156200007157600080fd5b506040516200932d3803806200932d833981810160405281019062000097919062001dcf565b6000339050806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508073ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a350836000815181106200014f576200014e62001ebd565b5b6020026020010151600490816200016791906200212d565b50836001815181106200017f576200017e62001ebd565b5b6020026020010151600590816200019791906200212d565b5081600081518110620001af57620001ae62001ebd565b5b6020026020010151600681905550600082600181518110620001d657620001d562001ebd565b5b6020026020010151905080600f8190555083600081518110620001fe57620001fd62001ebd565b5b6020026020010151600360006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550836001815181106200025d576200025c62001ebd565b5b6020026020010151601160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550600084600281518110620002be57620002bd62001ebd565b5b60200260200101519050600085600381518110620002e157620002e062001ebd565b5b602002602001015190508560048151811062000302576200030162001ebd565b5b6020026020010151602160016101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508460028151811062000361576200036062001ebd565b5b60200260200101516008819055508460038151811062000386576200038562001ebd565b5b60200260200101516009819055506008546009541015620003de576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620003d5906200229b565b60405180910390fd5b84600481518110620003f557620003f462001ebd565b5b6020026020010151600a81905550836000815181106200041a576200041962001ebd565b5b6020026020010151602360146101000a81548160ff0219169083151502179055508360018151811062000452576200045162001ebd565b5b6020026020010151602360156101000a81548160ff021916908315150217905550836002815181106200048a576200048962001ebd565b5b6020026020010151602360166101000a81548160ff02191690831515021790555083600381518110620004c257620004c162001ebd565b5b6020026020010151602360176101000a81548160ff02191690831515021790555083600481518110620004fa57620004f962001ebd565b5b6020026020010151602360186101000a81548160ff0219169083151502179055508360058151811062000532576200053162001ebd565b5b6020026020010151602360196101000a81548160ff021916908315150217905550836006815181106200056a576200056962001ebd565b5b6020026020010151602160006101000a81548160ff02191690831515021790555083600781518110620005a257620005a162001ebd565b5b6020026020010151601f60006101000a81548160ff02191690831515021790555083600881518110620005da57620005d962001ebd565b5b6020026020010151602760006101000a81548160ff02191690831515021790555060405180604001604052803073ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001601160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681525060249060026200069c92919062001725565b50602160019054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16601160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614620009545760001515602160009054906101000a900460ff16151503620008065760248273ffffffffffffffffffffffffffffffffffffffff1663ad5c46486040518163ffffffff1660e01b8152600401602060405180830381865afa1580156200077f573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620007a59190620022bd565b9080600181540180825580915050600190039060005260206000200160009091909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505b8173ffffffffffffffffffffffffffffffffffffffff1663ad5c46486040518163ffffffff1660e01b8152600401602060405180830381865afa15801562000852573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620008789190620022bd565b73ffffffffffffffffffffffffffffffffffffffff16602160019054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161462000953576024602160019054906101000a900473ffffffffffffffffffffffffffffffffffffffff169080600181540180825580915050600190039060005260206000200160009091909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505b5b601160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663095ea7b3836000196040518363ffffffff1660e01b8152600401620009b592919062002311565b6020604051808303816000875af1158015620009d5573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620009fb91906200233e565b5081601060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550600019600260003073ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555060008273ffffffffffffffffffffffffffffffffffffffff1663c45a01556040518163ffffffff1660e01b8152600401602060405180830381865afa15801562000b0e573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062000b349190620022bd565b905060008173ffffffffffffffffffffffffffffffffffffffff1663c9c6539630601160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff166040518363ffffffff1660e01b815260040162000b9792919062002370565b6020604051808303816000875af115801562000bb7573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062000bdd9190620022bd565b905080602360006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506001601260008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508660058151811062000c8f5762000c8e62001ebd565b5b60200260200101516015819055508660068151811062000cb45762000cb362001ebd565b5b60200260200101516016819055508660078151811062000cd95762000cd862001ebd565b5b60200260200101516017819055508660088151811062000cfe5762000cfd62001ebd565b5b60200260200101516018819055508660098151811062000d235762000d2262001ebd565b5b602002602001015160198190555086600a8151811062000d485762000d4762001ebd565b5b6020026020010151601a8190555086600b8151811062000d6d5762000d6c62001ebd565b5b6020026020010151601b8190555086600c8151811062000d925762000d9162001ebd565b5b6020026020010151601c819055506109c460185460175460165460155462000dbb9190620023cc565b62000dc79190620023cc565b62000dd39190620023cc565b1062000e16576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040162000e0d9062002457565b60405180910390fd5b6109c4601c54601b54601a5460195462000e319190620023cc565b62000e3d9190620023cc565b62000e499190620023cc565b1062000e8c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040162000e839062002457565b60405180910390fd5b86600d8151811062000ea35762000ea262001ebd565b5b602002602001015160208190555086600e8151811062000ec85762000ec762001ebd565b5b602002602001015160078190555086600f8151811062000eed5762000eec62001ebd565b5b60200260200101516026819055506003602654111562000f44576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040162000f3b90620024c9565b60405180910390fd5b84600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef8760405162000fe89190620024eb565b60405180910390a36001600c6000600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055506001600c60008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055506001600c60003073ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055506001600c60008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055506001600c60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055506001600e60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055506001600e6000600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055506001600e60008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055506001600e60008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055506001600e6000602360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16_bytecode = '608060405260036007556001600b60006101000a81548160ff0219169083151502179055506001602560006101000a81548160ff02191690831515021790555060006026556000673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055506001600e60003073ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055506001600e600061dead73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055506001602b60008073ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055506001602b600061dead73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff021916908315150217905550600a601160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663313ce5676040518163ffffffff1660e01b8152600401602060405180830381865afa1580156200159a573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620015c0919062002508565b600a620015ce91906200268e565b620015da91906200270e565b602d81905550601160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff166040516200161190620017b4565b6200161d919062002746565b604051809103906000f0801580156200163a573d6000803e3d6000fd5b50601360016101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550602160019054906101000a900473ffffffffffffffffffffffffffffffffffffffff16604051620016ac90620017b4565b620016b8919062002746565b604051809103906000f080158015620016d5573d6000803e3d6000fd5b50601460006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050505050505050505062002763565b828054828255906000526020600020908101928215620017a1579160200282015b82811115620017a05782518260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055509160200191906001019062001746565b5b509050620017b09190620017c2565b5090565b61024c80620090e183390190565b5b80821115620017dd576000816000905550600101620017c3565b5090565b6000604051905090565b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6200184582620017fa565b810181811067ffffffffffffffff821117156200186757620018666200180b565b5b80604052505050565b60006200187c620017e1565b90506200188a82826200183a565b919050565b600067ffffffffffffffff821115620018ad57620018ac6200180b565b5b602082029050602081019050919050565b600080fd5b600080fd5b600067ffffffffffffffff821115620018e657620018e56200180b565b5b620018f182620017fa565b9050602081019050919050565b60005b838110156200191e57808201518184015260208101905062001901565b60008484015250505050565b6000620019416200193b84620018c8565b62001870565b90508281526020810184848401111562001960576200195f620018c3565b5b6200196d848285620018fe565b509392505050565b600082601f8301126200198d576200198c620017f5565b5b81516200199f8482602086016200192a565b91505092915050565b6000620019bf620019b9846200188f565b62001870565b90508083825260208201905060208402830185811115620019e557620019e4620018be565b5b835b8181101562001a3357805167ffffffffffffffff81111562001a0e5762001a0d620017f5565b5b80860162001a1d898262001975565b85526020850194505050602081019050620019e7565b5050509392505050565b600082601f83011262001a555762001a54620017f5565b5b815162001a67848260208601620019a8565b91505092915050565b600067ffffffffffffffff82111562001a8e5762001a8d6200180b565b5b602082029050602081019050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600062001acc8262001a9f565b9050919050565b62001ade8162001abf565b811462001aea57600080fd5b50565b60008151905062001afe8162001ad3565b92915050565b600062001b1b62001b158462001a70565b62001870565b9050808382526020820190506020840283018581111562001b415762001b40620018be565b5b835b8181101562001b6e578062001b59888262001aed565b84526020840193505060208101905062001b43565b5050509392505050565b600082601f83011262001b905762001b8f620017f5565b5b815162001ba284826020860162001b04565b91505092915050565b600067ffffffffffffffff82111562001bc95762001bc86200180b565b5b602082029050602081019050919050565b6000819050919050565b62001bef8162001bda565b811462001bfb57600080fd5b50565b60008151905062001c0f8162001be4565b92915050565b600062001c2c62001c268462001bab565b62001870565b9050808382526020820190506020840283018581111562001c525762001c51620018be565b5b835b8181101562001c7f578062001c6a888262001bfe565b84526020840193505060208101905062001c54565b5050509392505050565b600082601f83011262001ca15762001ca0620017f5565b5b815162001cb384826020860162001c15565b91505092915050565b600067ffffffffffffffff82111562001cda5762001cd96200180b565b5b602082029050602081019050919050565b60008115159050919050565b62001d028162001ceb565b811462001d0e57600080fd5b50565b60008151905062001d228162001cf7565b92915050565b600062001d3f62001d398462001cbc565b62001870565b9050808382526020820190506020840283018581111562001d655762001d64620018be565b5b835b8181101562001d92578062001d7d888262001d11565b84526020840193505060208101905062001d67565b5050509392505050565b600082601f83011262001db45762001db3620017f5565b5b815162001dc684826020860162001d28565b91505092915050565b6000806000806080858703121562001dec5762001deb620017eb565b5b600085015167ffffffffffffffff81111562001e0d5762001e0c620017f0565b5b62001e1b8782880162001a3d565b945050602085015167ffffffffffffffff81111562001e3f5762001e3e620017f0565b5b62001e4d8782880162001b78565b935050604085015167ffffffffffffffff81111562001e715762001e70620017f0565b5b62001e7f8782880162001c89565b925050606085015167ffffffffffffffff81111562001ea35762001ea2620017f0565b5b62001eb18782880162001d9c565b91505092959194509250565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600081519050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000600282049050600182168062001f3f57607f821691505b60208210810362001f555762001f5462001ef7565b5b50919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b60006008830262001fbf7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8262001f80565b62001fcb868362001f80565b95508019841693508086168417925050509392505050565b6000819050919050565b60006200200e62002008620020028462001bda565b62001fe3565b62001bda565b9050919050565b6000819050919050565b6200202a8362001fed565b62002042620020398262002015565b84845462001f8d565b825550505050565b600090565b620020596200204a565b620020668184846200201f565b505050565b5b818110156200208e57620020826000826200204f565b6001810190506200206c565b5050565b601f821115620020dd57620020a78162001f5b565b620020b28462001f70565b81016020851015620020c2578190505b620020da620020d18562001f70565b8301826200206b565b50505b505050565b600082821c905092915050565b60006200210260001984600802620020e2565b1980831691505092915050565b60006200211d8383620020ef565b9150826002028217905092915050565b620021388262001eec565b67ffffffffffffffff8111156200215457620021536200180b565b5b62002160825462001f26565b6200216d82828562002092565b600060209050601f831160018114620021a5576000841562002190578287015190505b6200219c85826200210f565b8655506200220c565b601f198416620021b58662001f5b565b60005b82811015620021df57848901518255600182019150602085019450602081019050620021b8565b86831015620021ff5784890151620021fb601f891682620020ef565b8355505b6001600288020188555050505b505050505050565b600082825260208201905092915050565b7f206d617853656c6c2073686f756c64206265203e207468616e206d617842757960008201527f2000000000000000000000000000000000000000000000000000000000000000602082015250565b60006200228360218362002214565b9150620022908262002225565b604082019050919050565b60006020820190508181036000830152620022b68162002274565b9050919050565b600060208284031215620022d657620022d5620017eb565b5b6000620022e68482850162001aed565b91505092915050565b620022fa8162001abf565b82525050565b6200230b8162001bda565b82525050565b6000604082019050620023286000830185620022ef565b62002337602083018462002300565b9392505050565b600060208284031215620023575762002356620017eb565b5b6000620023678482850162001d11565b91505092915050565b6000604082019050620023876000830185620022ef565b620023966020830184620022ef565b9392505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000620023d98262001bda565b9150620023e68362001bda565b92508282019050808211156200240157620024006200239d565b5b92915050565b7f66656520746f6f20686967680000000000000000000000000000000000000000600082015250565b60006200243f600c8362002214565b91506200244c8262002407565b602082019050919050565b60006020820190508181036000830152620024728162002430565b9050919050565b7f61697264726f704e756d62732073686f756c64206265203c3d20330000000000600082015250565b6000620024b1601b8362002214565b9150620024be8262002479565b602082019050919050565b60006020820190508181036000830152620024e481620024a2565b9050919050565b600060208201905062002502600083018462002300565b92915050565b600060208284031215620025215762002520620017eb565b5b6000620025318482850162001bfe565b91505092915050565b60008160011c9050919050565b6000808291508390505b600185111562002599578086048111156200257157620025706200239d565b5b6001851615620025815780820291505b808102905062002591856200253a565b945062002551565b94509492505050565b600082620025b4576001905062002687565b81620025c4576000905062002687565b8160018114620025dd5760028114620025e8576200261e565b600191505062002687565b60ff841115620025fd57620025fc6200239d565b5b8360020a9150848211156200261757620026166200239d565b5b5062002687565b5060208310610133831016604e8410600b8410161715620026585782820a9050838111156200265257620026516200239d565b5b62002687565b62002667848484600162002547565b925090508184048111156200268157620026806200239d565b5b81810290505b9392505050565b60006200269b8262001bda565b9150620026a88362001bda565b9250620026d77fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8484620025a2565b905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b60006200271b8262001bda565b9150620027288362001bda565b9250826200273b576200273a620026df565b5b828204905092915050565b60006020820190506200275d6000830184620022ef565b92915050565b61696e80620027736000396000f3fe60806040526004361061046c5760003560e01c80636b6113681161024a578063aa4bde2811610139578063ce0192f9116100b6578063e5a6b10f1161007a578063e5a6b10f146110ec578063e5c2b0a614611117578063e82bef2914611140578063eb10b7411461116b578063f2fde38b1461119657610473565b8063ce0192f914611003578063d59864331461102e578063dac1dcfe14611059578063dd62ed3e14611084578063e32759cf146110c157610473565b8063bd25bf29116100fd578063bd25bf2914610f1e578063be4fe9a514610f5b578063bfac5ee014610f86578063c213d62d14610faf578063c92d567e14610fd857610473565b8063aa4bde2814610e49578063aa582b4214610e74578063adc7955d14610e9d578063b02d757f14610ec8578063b9fbc49d14610ef357610473565b80638d849175116101c7578063992db38f1161018b578063992db38f14610d645780639cc0e3c714610d7b578063a23270d714610db8578063a842486114610de3578063a9059cbb14610e0c57610473565b80638d84917514610ca35780638da5cb5b14610cba57806390d1dfa914610ce557806395d89b4114610d0e57806395e3667914610d3957610473565b80638322fff21161020e5780638322fff214610bd057806385dc300414610bfb5780638718b24f14610c2457806388e765ff14610c4f5780638c2fc7ad14610c7a57610473565b80636b61136814610aff57806370a0823114610b2a578063715018a614610b675780637959473614610b7e5780637db1342c14610ba757610473565b8063255412d9116103665780634482004e116102e35780636108a3db116102a75780636108a3db14610a3e578063621823e614610a6757806366d602ae14610a9257806369768b5014610abd578063697cfc1914610ae857610473565b80634482004e146109555780634a9a7740146109805780634d5ce038146109ab578063553193ca146109e85780635a7ba73c14610a1357610473565b80633bfe62ca1161032a5780633bfe62ca146108485780633c11100d146108735780633ccfdbcd146108b057806340aa81fe146108ed5780634188bf5a1461092a57610473565b8063255412d9146107875780632dab693f146107b257806330509bca146107dd578063313ce567146107f45780633bb82eb61461081f57610473565b80630f890b86116103f457806318160ddd116103b857806318160ddd146106b25780631846a5a4146106dd57806318d1285514610708578063206c17bb1461071f57806323b872dd1461074a57610473565b80630f890b86146105f357806314a432c91461060a578063150e4c4714610633578063172246fc1461065c57806317417bb81461068757610473565b8063063be69e1161043b578063063be69e1461052057806306fdde031461053757806307313d8d1461056257806307c3adf01461058b578063095ea7b3146105b657610473565b806301339c211461047857806301986fad1461048f57806303da2b23146104cc57806305833c2b146104f757610473565b3661047357005b600080fd5b34801561048457600080fd5b5061048d6111bf565b005b34801561049b57600080fd5b506104b660048036038101906104b191906154ac565b61129b565b6040516104c391906154f4565b60405180910390f35b3480156104d857600080fd5b506104e16112bb565b6040516104ee91906154f4565b60405180910390f35b34801561050357600080fd5b5061051e6004803603810190610519919061553b565b6112ce565b005b34801561052c57600080fd5b506105356113b7565b005b34801561054357600080fd5b5061054c611462565b604051610559919061560b565b60405180910390f35b34801561056e57600080fd5b506105896004803603810190610584919061562d565b6114f4565b005b34801561059757600080fd5b506105a061159f565b6040516105ad9190615673565b60405180910390f35b3480156105c257600080fd5b506105dd60048036038101906105d891906156ba565b6115a5565b6040516105ea91906154f4565b60405180910390f35b3480156105ff57600080fd5b506106086115bc565b005b34801561061657600080fd5b50610631600480360381019061062c91906156fa565b611667565b005b34801561063f57600080fd5b5061065a6004803603810190610655919061578c565b6116ff565b005b34801561066857600080fd5b50610671611832565b60405161067e91906154f4565b60405180910390f35b34801561069357600080fd5b5061069c611845565b6040516106a99190615673565b60405180910390f35b3480156106be57600080fd5b506106c761184b565b6040516106d49190615673565b60405180910390f35b3480156106e957600080fd5b506106f2611855565b6040516106ff91906154f4565b60405180910390f35b34801561071457600080fd5b5061071d611868565b005b34801561072b57600080fd5b50610734611900565b604051610741919061584b565b60405180910390f35b34801561075657600080fd5b50610771600480360381019061076c9190615866565b611926565b60405161077e91906154f4565b60405180910390f35b34801561079357600080fd5b5061079c611acc565b6040516107a99190615673565b60405180910390f35b3480156107be57600080fd5b506107c7611ad2565b6040516107d49190615673565b60405180910390f35b3480156107e957600080fd5b506107f2611ad8565b005b34801561080057600080fd5b50610809611b43565b6040516108169190615673565b60405180910390f35b34801561082b57600080fd5b50610846600480360381019061084191906156fa565b611b4d565b005b34801561085457600080fd5b5061085d611be5565b60405161086a9190615673565b60405180910390f35b34801561087f57600080fd5b5061089a600480360381019061089591906154ac565b611beb565b6040516108a791906154f4565b60405180910390f35b3480156108bc57600080fd5b506108d760048036038101906108d291906154ac565b611c0b565b6040516108e49190615673565b60405180910390f35b3480156108f957600080fd5b50610914600480360381019061090f91906154ac565b611c23565b60405161092191906154f4565b60405180910390f35b34801561093657600080fd5b5061093f611c43565b60405161094c91906158c8565b60405180910390f35b34801561096157600080fd5b5061096a611c69565b6040516109779190615673565b60405180910390f35b34801561098c57600080fd5b50610995611c6f565b6040516109a29190615904565b60405180910390f35b3480156109b757600080fd5b506109d260048036038101906109cd91906154ac565b611c95565b6040516109df9190615673565b60405180910390f35b3480156109f457600080fd5b506109fd611cfc565b604051610a0a9190615673565b60405180910390f35b348015610a1f57600080fd5b50610a28611d02565b604051610a3591906154f4565b60405180910390f35b348015610a4a57600080fd5b50610a656004803603810190610a60919061578c565b611d15565b005b348015610a7357600080fd5b50610a7c611ea5565b604051610a899190615673565b60405180910390f35b348015610a9e57600080fd5b50610aa7611eab565b604051610ab49190615673565b60405180910390f35b348015610ac957600080fd5b50610ad2611eb1565b604051610adf91906154f4565b60405180910390f35b348015610af457600080fd5b50610afd611ec4565b005b348015610b0b57600080fd5b50610b14611f6f565b604051610b219190615673565b60405180910390f35b348015610b3657600080fd5b50610b516004803603810190610b4c91906154ac565b611f75565b604051610b5e9190615673565b60405180910390f35b348015610b7357600080fd5b50610b7c611fbe565b005b348015610b8a57600080fd5b50610ba56004803603810190610ba0919061562d565b61210a565b005b348015610bb357600080fd5b50610bce6004803603810190610bc991906156fa565b6121b5565b005b348015610bdc57600080fd5b50610be561224d565b604051610bf291906158c8565b60405180910390f35b348015610c0757600080fd5b50610c226004803603810190610c1d91906154ac565b612273565b005b348015610c3057600080fd5b50610c3961239d565b604051610c469190615904565b60405180910390f35b348015610c5b57600080fd5b50610c646123c3565b604051610c719190615673565b60405180910390f35b348015610c8657600080fd5b50610ca16004803603810190610c9c919061553b565b6123c9565b005b348015610caf57600080fd5b50610cb86124b2565b005b348015610cc657600080fd5b50610ccf61255d565b604051610cdc91906158c8565b60405180910390f35b348015610cf157600080fd5b50610d0c6004803603810190610d07919061591f565b612586565b005b348015610d1a57600080fd5b50610d2361266d565b604051610d30919061560b565b60405180910390f35b348015610d4557600080fd5b50610d4e6126ff565b604051610d5b9190615673565b60405180910390f35b348015610d7057600080fd5b50610d79612705565b005b348015610d8757600080fd5b50610da26004803603810190610d9d91906156fa565b6127e1565b604051610daf91906158c8565b60405180910390f35b348015610dc457600080fd5b50610dcd612820565b604051610dda91906154f4565b60405180910390f35b348015610def57600080fd5b50610e0a6004803603810190610e05919061553b565b612833565b005b348015610e1857600080fd5b50610e336004803603810190610e2e91906156ba565b61291c565b604051610e4091906154f4565b60405180910390f35b348015610e5557600080fd5b50610e5e612933565b604051610e6b9190615673565b60405180910390f35b348015610e8057600080fd5b50610e9b6004803603810190610e9691906159b5565b612939565b005b348015610ea957600080fd5b50610eb2612bfc565b604051610ebf9190615673565b60405180910390f35b348015610ed457600080fd5b50610edd612c02565b604051610eea91906154f4565b60405180910390f35b348015610eff57600080fd5b50610f08612c15565b604051610f159190615673565b60405180910390f35b348015610f2a57600080fd5b50610f456004803603810190610f4091906154ac565b612c1b565b604051610f5291906154f4565b60405180910390f35b348015610f6757600080fd5b50610f70612c3b565b604051610f7d9190615673565b60405180910390f35b348015610f9257600080fd5b50610fad6004803603810190610fa89190615a02565b612c41565b005b348015610fbb57600080fd5b50610fd66004803603810190610fd191906156fa565b612dab565b005b348015610fe457600080fd5b50610fed612e43565b604051610ffa91906154f4565b60405180910390f35b34801561100f57600080fd5b50611018612e56565b6040516110259190615673565b60405180910390f35b34801561103a57600080fd5b50611043612e5c565b60405161105091906154f4565b60405180910390f35b34801561106557600080fd5b5061106e612e6f565b60405161107b91906154f4565b60405180910390f35b34801561109057600080fd5b506110ab60048036038101906110a69190615a55565b612e82565b6040516110b89190615673565b60405180910390f35b3480156110cd57600080fd5b506110d6612f09565b6040516110e39190615673565b60405180910390f35b3480156110f857600080fd5b50611101612f0f565b60405161110e91906158c8565b60405180910390f35b34801561112357600080fd5b5061113e600480360381019061113991906156fa565b612f35565b005b34801561114c57600080fd5b50611155613011565b60405161116291906158c8565b60405180910390f35b34801561117757600080fd5b50611180613037565b60405161118d9190615673565b60405180910390f35b3480156111a257600080fd5b506111bd60048036038101906111b891906154ac565b61303d565b005b3373ffffffffffffffffffffffffffffffffffffffff1660008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161461124d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161124490615ae1565b60405180910390fd5b602254600014611292576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161128990615b4d565b60405180910390fd5b43602281905550565b600c6020528060005260406000206000915054906101000a900460ff1681565b602360189054906101000a900460ff1681565b3373ffffffffffffffffffffffffffffffffffffffff1660008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161461135c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161135390615ae1565b60405180910390fd5b80602b60008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055505050565b3373ffffffffffffffffffffffffffffffffffffffff1660008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614611445576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161143c90615ae1565b60405180910390fd5b6000602360176101000a81548160ff021916908315150217905550565b60606004805461147190615b9c565b80601f016020809104026020016040519081016040528092919081815260200182805461149d90615b9c565b80156114ea5780601f106114bf576101008083540402835291602001916114ea565b820191906000526020600020905b8154815290600101906020018083116114cd57829003601f168201915b5050505050905090565b3373ffffffffffffffffffffffffffffffffffffffff1660008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614611582576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161157990615ae1565b60405180910390fd5b80602560006101000a81548160ff02191690831515021790555050565b60175481565b60006115b23384846131f7565b6001905092915050565b3373ffffffffffffffffffffffffffffffffffffffff1660008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161461164a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161164190615ae1565b60405180910390fd5b6000602360196101000a81548160ff021916908315150217905550565b3373ffffffffffffffffffffffffffffffffffffffff1660008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16146116f5576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016116ec90615ae1565b60405180910390fd5b8060078190555050565b3373ffffffffffffffffffffffffffffffffffffffff1660008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161461178d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161178490615ae1565b60405180910390fd5b60005b8383905081101561182c5781600c60008686858181106117b3576117b2615bcd565b5b90506020020160208101906117c891906154ac565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff021916908315150217905550808061182490615c2b565b915050611790565b50505050565b601f60009054906101000a900460ff1681565b60205481565b6000600f54905090565b602560009054906101000a900460ff1681565b3373ffffffffffffffffffffffffffffffffffffffff1660008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16146118f6576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016118ed90615ae1565b60405180910390fd5b6000602881905550565b601060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60006119338484846132e2565b600019600260008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205414611ac15781600260008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054611a409190615c73565b600260008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055505b600190509392505050565b60185481565b60075481565b600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166108fc479081150290604051600060405180830381858888f19350505050158015611b40573d6000803e3d6000fd5b50565b6000600654905090565b3373ffffffffffffffffffffffffffffffffffffffff1660008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614611bdb576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611bd290615ae1565b60405180910390fd5b80602f8190555050565b60195481565b60126020528060005260406000206000915054906101000a900460ff1681565b601d6020528060005260406000206000915090505481565b600e6020528060005260406000206000915054906101000a900460ff1681565b602360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60285481565b601460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000600d60008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff1615611cf25760019050611cf7565b600090505b919050565b60225481565b602360159054906101000a900460ff1681565b3373ffffffffffffffffffffffffffffffffffffffff1660008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614611da3576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611d9a90615ae1565b60405180910390fd5b602360169054906101000a900460ff16611df2576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611de990615cf3565b60405180910390fd5b60c98383905010611e0257600080fd5b60005b83839050811015611e9f5781600d6000868685818110611e2857611e27615bcd565b5b9050602002016020810190611e3d91906154ac565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff02191690831515021790555080611e9890615c2b565b9050611e05565b50505050565b602f5481565b60095481565b600b60009054906101000a900460ff1681565b3373ffffffffffffffffffffffffffffffffffffffff1660008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614611f52576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611f4990615ae1565b60405180910390fd5b6000602360186101000a81548160ff021916908315150217905550565b601c5481565b6000600160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b3373ffffffffffffffffffffffffffffffffffffffff1660008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161461204c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161204390615ae1565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff1660008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a360008060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550565b3373ffffffffffffffffffffffffffffffffffffffff1660008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614612198576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161218f90615ae1565b60405180910390fd5b80602760006101000a81548160ff02191690831515021790555050565b3373ffffffffffffffffffffffffffffffffffffffff1660008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614612243576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161223a90615ae1565b60405180910390fd5b80600a8190555050565b602160019054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b3373ffffffffffffffffffffffffffffffffffffffff1660008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614612301576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016122f890615ae1565b60405180910390fd5b80600360006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506001600c60008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff02191690831515021790555050565b601360019054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60085481565b3373ffffffffffffffffffffffffffffffffffffffff1660008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614612457576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161244e90615ae1565b60405180910390fd5b80600e60008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055505050565b3373ffffffffffffffffffffffffffffffffffffffff1660008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614612540576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161253790615ae1565b60405180910390fd5b6000601f60006101000a81548160ff021916908315150217905550565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b3373ffffffffffffffffffffffffffffffffffffffff1660008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614612614576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161260b90615ae1565b60405180910390fd5b81600881905550806009819055506008546009541015612669576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161266090615d85565b60405180910390fd5b5050565b60606005805461267c90615b9c565b80601f01602080910402602001604051908101604052809291908181526020018280546126a890615b9c565b80156126f55780601f106126ca576101008083540402835291602001916126f5565b820191906000526020600020905b8154815290600101906020018083116126d857829003601f168201915b5050505050905090565b601e5481565b3373ffffffffffffffffffffffffffffffffffffffff1660008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614612793576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161278a90615ae1565b60405180910390fd5b6028546000146127d8576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016127cf90615df1565b60405180910390fd5b43602881905550565b602481815481106127f157600080fd5b906000526020600020016000915054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b602360179054906101000a900460ff1681565b3373ffffffffffffffffffffffffffffffffffffffff1660008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16146128c1576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016128b890615ae1565b60405180910390fd5b80601260008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055505050565b60006129293384846132e2565b6001905092915050565b600a5481565b3373ffffffffffffffffffffffffffffffffffffffff1660008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16146129c7576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016129be90615ae1565b60405180910390fd5b602360199054906101000a900460ff16612a16576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401612a0d90615e5d565b60405180910390fd5b81816000818110612a2a57612a29615bcd565b5b9050602002013560158190555081816001818110612a4b57612a4a615bcd565b5b9050602002013560168190555081816002818110612a6c57612a6b615bcd565b5b9050602002013560178190555081816003818110612a8d57612a8c615bcd565b5b9050602002013560188190555081816004818110612aae57612aad615bcd565b5b9050602002013560198190555081816005818110612acf57612ace615bcd565b5b90506020020135601a8190555081816006818110612af057612aef615bcd565b5b90506020020135601b8190555081816007818110612b1157612b10615bcd565b5b90506020020135601c819055506109c4601854601554601654601754612b379190615e7d565b612b419190615e7d565b612b4b9190615e7d565b10612b8b576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401612b8290615efd565b60405180910390fd5b6109c4601c54601954601a54601b54612ba49190615e7d565b612bae9190615e7d565b612bb89190615e7d565b10612bf8576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401612bef90615efd565b60405180910390fd5b5050565b601a5481565b602360169054906101000a900460ff1681565b60165481565b600d6020528060005260406000206000915054906101000a900460ff1681565b601b5481565b3373ffffffffffffffffffffffffffffffffffffffff1660008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161480612ce857503373ffffffffffffffffffffffffffffffffffffffff16600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16145b612d27576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401612d1e90615f69565b60405180910390fd5b8273ffffffffffffffffffffffffffffffffffffffff1663a9059cbb82846040518363ffffffff1660e01b8152600401612d62929190615f89565b6020604051808303816000875af1158015612d81573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612da59190615fc7565b50505050565b3373ffffffffffffffffffffffffffffffffffffffff1660008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614612e39576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401612e3090615ae1565b60405180910390fd5b80602d8190555050565b602360149054906101000a900460ff1681565b60155481565b602360199054906101000a900460ff1681565b602760009054906101000a900460ff1681565b6000600260008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b60265481565b601160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b3373ffffffffffffffffffffffffffffffffffffffff1660008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614612fc3576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401612fba90615ae1565b60405180910390fd5b6003811115613007576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401612ffe90616040565b60405180910390fd5b8060268190555050565b600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b602d5481565b3373ffffffffffffffffffffffffffffffffffffffff1660008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16146130cb576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016130c290615ae1565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff160361313a576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401613131906160ac565b60405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff1660008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a3806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b80600260008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925836040516132d59190615673565b60405180910390a3505050565b60006132ed84611f75565b905081811015613332576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161332990616118565b60405180910390fd5b600061333d85611c95565b1115613385576000613384576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161337b90616184565b60405180910390fd5b5b600080600c60008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff1615801561342c5750600c60008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16155b80156134445750602560009054906101000a900460ff165b801561345257506000602654115b156134d857600080600090505b6026548110156134b95780864260405160200161347e939291906161c5565b6040516020818303038152906040528051906020012060001c91506134a588836001613c54565b5080806134b190615c2b565b91505061345f565b5060016026546134c99190616202565b856134d49190615c73565b9450505b601260008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16806135795750601260008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff165b15613a7857600c60008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff161580156136225750600c60008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16155b15613a2057602360149054906101000a900460ff16156136e95760008060225411905080806136a8575060285460001080156136a75750601260008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff165b5b6136e7576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016136de90616290565b60405180910390fd5b505b602360149054906101000a900460ff1680156137115750602360159054906101000a900460ff165b801561372b57506007546022546137289190615e7d565b43105b80156137815750601260008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16155b156137df576001600d60008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055505b601f60009054906101000a900460ff1680156138445750601260008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff165b801561385e575060205460225461385b9190615e7d565b43105b1561391e57601d60003273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205443146138f25743601d60003273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555061391d565b601e600081548092919061390590615c2b565b9190505550613915868686613d72565b505050613c4f565b5b601260008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff1615613a1b57601360009054906101000a900460ff16613a1a57600061398f30611f75565b90506000811115613a18576000601a54601b546019546016546017546015546139b89190615e7d565b6139c29190615e7d565b6139cc9190615e7d565b6139d69190615e7d565b6139e09190615e7d565b9050600061138882886139f39190616202565b6139fd91906162df565b905082811115613a0b578290505b613a158183613e66565b50505b505b5b600191505b601260008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff1615613a7757600190505b5b601260008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16158015613b1c5750601260008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16155b8015613b725750600c60008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16155b8015613bc85750600c60008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16155b8015613be05750602760009054906101000a900460ff165b15613bee5760019150600190505b613bfb86868685856148ff565b3073ffffffffffffffffffffffffffffffffffffffff168673ffffffffffffffffffffffffffffffffffffffff1614613c4b578015613c3e57613c3d86614c34565b5b613c4a6207a120614dc7565b5b5050505b505050565b600081600160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254613ca59190615c73565b9250508190555081600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254613cfb9190615e7d565b925050819055508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef84604051613d5f9190615673565b60405180910390a3600190509392505050565b80600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054613dbd9190615c73565b600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555060006064605a83613e119190616202565b613e1b91906162df565b9050613e4a84600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff168361534c565b613e6084848385613e5b9190615c73565b61534c565b50505050565b6001601360006101000a81548160ff02191690831515021790555060008103156148e057600081601b54601754613e9d9190615e7d565b84613ea89190616202565b613eb291906162df565b90506000811115613fb257601060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16635c11d7958260006024601460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16426040518663ffffffff1660e01b8152600401613f4495949392919061646f565b600060405180830381600087803b158015613f5e57600080fd5b505af1925050508015613f6f575060015b613fb0577f6c37756e80daba6f4df0d5bfa6cddadfe23601acc1a27dc8d4aa427de91467886000604051613fa391906164c9565b60405180910390a1613fb1565b5b5b8182613fbe9190615e7d565b91506000601654601a54613fd29190615e7d565b90506000838286613fe39190616202565b613fed91906162df565b90506000600267ffffffffffffffff81111561400c5761400b6164e4565b5b60405190808252806020026020018201604052801561403a5781602001602082028036833780820191505090505b509050308160008151811061405257614051615bcd565b5b602002602001019073ffffffffffffffffffffffffffffffffffffffff16908173ffffffffffffffffffffffffffffffffffffffff1681525050601160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16816001815181106140c3576140c2615bcd565b5b602002602001019073ffffffffffffffffffffffffffffffffffffffff16908173ffffffffffffffffffffffffffffffffffffffff1681525050602160009054906101000a900460ff16156141f257601060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663791ac94785848961415d9190615c73565b6141679190615c73565b60008430426040518663ffffffff1660e01b815260040161418c959493929190616599565b600060405180830381600087803b1580156141a657600080fd5b505af19250505080156141b7575060015b6141ec577fe2ca28dff25f053218cef44cd4580a8df8e34fd11ee24e2e45b5394750c20d3c60405160405180910390a16141ed565b5b6142fc565b601060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16635c11d79585848961423d9190615c73565b6142479190615c73565b600084601360019054906101000a900473ffffffffffffffffffffffffffffffffffffffff16426040518663ffffffff1660e01b815260040161428e959493929190616599565b600060405180830381600087803b1580156142a857600080fd5b505af19250505080156142b9575060015b6142fa577f6c37756e80daba6f4df0d5bfa6cddadfe23601acc1a27dc8d4aa427de914678860016040516142ed919061662e565b60405180910390a16142fb565b5b5b82856143089190615c73565b94506000601160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690506000806000602160009054906101000a900460ff161561455c5747925088878461435b9190616202565b61436591906162df565b915081836143739190615c73565b90506000811180156143d45750600073ffffffffffffffffffffffffffffffffffffffff16600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614155b1561444357600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166108fc829081150290604051600060405180830381858888f19350505050158015614441573d6000803e3d6000fd5b505b6000861180156144535750600082115b1561455757601060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663f305d719833089600080600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16426040518863ffffffff1660e01b81526004016144e196959493929190616649565b60606040518083038185885af19350505050801561451d57506040513d601f19601f8201168201806040525081019061451a91906166bf565b60015b614552577f7f9722f0fc39b6e3f30aeebd8e67a082ad4dcd92706bfd1f76130f39ba012aec60405160405180910390a1614556565b5050505b5b6148d7565b8373ffffffffffffffffffffffffffffffffffffffff166370a08231601360019054906101000a900473ffffffffffffffffffffffffffffffffffffffff166040518263ffffffff1660e01b81526004016145b791906158c8565b602060405180830381865afa1580156145d4573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906145f89190616712565b92508887846146079190616202565b61461191906162df565b9150818361461f9190615c73565b905060008211156146ce578373ffffffffffffffffffffffffffffffffffffffff166323b872dd601360019054906101000a900473ffffffffffffffffffffffffffffffffffffffff1630856040518463ffffffff1660e01b81526004016146899392919061673f565b6020604051808303816000875af11580156146a8573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906146cc9190615fc7565b505b600081111561479d578373ffffffffffffffffffffffffffffffffffffffff166323b872dd601360019054906101000a900473ffffffffffffffffffffffffffffffffffffffff16600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16846040518463ffffffff1660e01b81526004016147589392919061673f565b6020604051808303816000875af1158015614777573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061479b9190615fc7565b505b6000861180156147ad5750600082115b156148d657601060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663e8e3370030601160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff168986600080600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16426040518963ffffffff1660e01b8152600401614860989796959493929190616776565b6060604051808303816000875af192505050801561489c57506040513d601f19601f8201168201806040525081019061489991906166bf565b60015b6148d1577f6c331c730efd7c7d973857825b7c7b2087a7dad2124068053cb23fb17801604960405160405180910390a16148d5565b5050505b5b5b50505050505050505b6000601360006101000a81548160ff0219169083151502179055505050565b82600160008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461494a9190615c73565b600160008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555060008215614b475760008215614a1c57601a54601b546019546149b09190615e7d565b6149ba9190615e7d565b9050602360179054906101000a900460ff1615614a1757600954851115614a16576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401614a0d90616840565b60405180910390fd5b5b614a97565b601754601654601554614a2f9190615e7d565b614a399190615e7d565b9050602360179054906101000a900460ff1615614a9657600854851115614a95576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401614a8c906168ac565b60405180910390fd5b5b5b60006127108287614aa89190616202565b614ab291906162df565b90506000811115614ad7578083614ac99190615e7d565b9250614ad688308361534c565b5b600084614b005761271060185488614aef9190616202565b614af991906162df565b9050614b1e565b612710601c5488614b119190616202565b614b1b91906162df565b90505b6000811115614b43578084614b339190615e7d565b9350614b428961dead8361534c565b5b5050505b600e60008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16158015614bad5750602360189054906101000a900460ff165b15614c1657600a548185614bc088611f75565b614bca9190615e7d565b614bd49190615c73565b1115614c15576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401614c0c90616918565b60405180910390fd5b5b614c2c86868387614c279190615c73565b61534c565b505050505050565b6000813b90506000811115614c495750614dc4565b602a60008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054600003614dc25760298054905060001480614d0f57508173ffffffffffffffffffffffffffffffffffffffff166029600081548110614ccb57614cca615bcd565b5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614155b15614dc157602980549050602a60008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055506029829080600181540180825580915050600190039060005260206000200160009091909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505b5b505b50565b43602f54602e54614dd89190615e7d565b11615349576000602160019054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905060008173ffffffffffffffffffffffffffffffffffffffff166370a08231601460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff166040518263ffffffff1660e01b8152600401614e6191906158c8565b602060405180830381865afa158015614e7e573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190614ea29190616712565b9050602d54811015614eb5575050615349565b8173ffffffffffffffffffffffffffffffffffffffff166323b872dd601460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1630846040518463ffffffff1660e01b8152600401614f149392919061673f565b6020604051808303816000875af1158015614f33573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190614f579190615fc7565b506000602360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905060008173ffffffffffffffffffffffffffffffffffffffff166318160ddd6040518163ffffffff1660e01b8152600401602060405180830381865afa158015614fcc573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190614ff09190616712565b9050600080600080602980549050905060008060005a90508a73ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b815260040161504191906158c8565b602060405180830381865afa15801561505e573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906150829190616712565b99505b8b8310801561509357508382105b156153365783602c54106150aa576000602c819055505b6029602c54815481106150c0576150bf615bcd565b5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1696508873ffffffffffffffffffffffffffffffffffffffff166370a08231886040518263ffffffff1660e01b815260040161512691906158c8565b602060405180830381865afa158015615143573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906151679190616712565b95506000861180156151c35750602b60008873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16155b156152ef5787868b6151d59190616202565b6151df91906162df565b94506000851180156152695750848b73ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b815260040161522691906158c8565b602060405180830381865afa158015615243573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906152679190616712565b115b156152ee578a73ffffffffffffffffffffffffffffffffffffffff1663a9059cbb88876040518363ffffffff1660e01b81526004016152a9929190615f89565b6020604051808303816000875af11580156152c8573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906152ec9190615fc7565b505b5b5a816152fb9190615c73565b836153069190615e7d565b92505a9050602c600081548092919061531e90615c2b565b9190505550818061532e90615c2b565b925050615085565b43602e8190555050505050505050505050505b50565b80600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546153979190615e7d565b600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef836040516154379190615673565b60405180910390a3505050565b600080fd5b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006154798261544e565b9050919050565b6154898161546e565b811461549457600080fd5b50565b6000813590506154a681615480565b92915050565b6000602082840312156154c2576154c1615444565b5b60006154d084828501615497565b91505092915050565b60008115159050919050565b6154ee816154d9565b82525050565b600060208201905061550960008301846154e5565b92915050565b615518816154d9565b811461552357600080fd5b50565b6000813590506155358161550f565b92915050565b6000806040838503121561555257615551615444565b5b600061556085828601615497565b925050602061557185828601615526565b9150509250929050565b600081519050919050565b600082825260208201905092915050565b60005b838110156155b557808201518184015260208101905061559a565b60008484015250505050565b6000601f19601f8301169050919050565b60006155dd8261557b565b6155e78185615586565b93506155f7818560208601615597565b615600816155c1565b840191505092915050565b6000602082019050818103600083015261562581846155d2565b905092915050565b60006020828403121561564357615642615444565b5b600061565184828501615526565b91505092915050565b6000819050919050565b61566d8161565a565b82525050565b60006020820190506156886000830184615664565b92915050565b6156978161565a565b81146156a257600080fd5b50565b6000813590506156b48161568e565b92915050565b600080604083850312156156d1576156d0615444565b5b60006156df85828601615497565b92505060206156f0858286016156a5565b9150509250929050565b6000602082840312156157105761570f615444565b5b600061571e848285016156a5565b91505092915050565b600080fd5b600080fd5b600080fd5b60008083601f84011261574c5761574b615727565b5b8235905067ffffffffffffffff8111156157695761576861572c565b5b60208301915083602082028301111561578557615784615731565b5b9250929050565b6000806000604084860312156157a5576157a4615444565b5b600084013567ffffffffffffffff8111156157c3576157c2615449565b5b6157cf86828701615736565b935093505060206157e286828701615526565b9150509250925092565b6000819050919050565b600061581161580c6158078461544e565b6157ec565b61544e565b9050919050565b6000615823826157f6565b9050919050565b600061583582615818565b9050919050565b6158458161582a565b82525050565b6000602082019050615860600083018461583c565b92915050565b60008060006060848603121561587f5761587e615444565b5b600061588d86828701615497565b935050602061589e86828701615497565b92505060406158af868287016156a5565b9150509250925092565b6158c28161546e565b82525050565b60006020820190506158dd60008301846158b9565b92915050565b60006158ee82615818565b9050919050565b6158fe816158e3565b82525050565b600060208201905061591960008301846158f5565b92915050565b6000806040838503121561593657615935615444565b5b6000615944858286016156a5565b9250506020615955858286016156a5565b9150509250929050565b60008083601f84011261597557615974615727565b5b8235905067ffffffffffffffff8111156159925761599161572c565b5b6020830191508360208202830111156159ae576159ad615731565b5b9250929050565b600080602083850312156159cc576159cb615444565b5b600083013567ffffffffffffffff8111156159ea576159e9615449565b5b6159f68582860161595f565b92509250509250929050565b600080600060608486031215615a1b57615a1a615444565b5b6000615a2986828701615497565b9350506020615a3a868287016156a5565b9250506040615a4b86828701615497565b9150509250925092565b60008060408385031215615a6c57615a6b615444565b5b6000615a7a85828601615497565b9250506020615a8b85828601615497565b9150509250929050565b7f216f776e65720000000000000000000000000000000000000000000000000000600082015250565b6000615acb600683615586565b9150615ad682615a95565b602082019050919050565b60006020820190508181036000830152615afa81615abe565b9050919050565b7f616c7265616479206f70656e0000000000000000000000000000000000000000600082015250565b6000615b37600c83615586565b9150615b4282615b01565b602082019050919050565b60006020820190508181036000830152615b6681615b2a565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b60006002820490506001821680615bb457607f821691505b602082108103615bc757615bc6615b6d565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000615c368261565a565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8203615c6857615c67615bfc565b5b600182019050919050565b6000615c7e8261565a565b9150615c898361565a565b9250828203905081811115615ca157615ca0615bfc565b5b92915050565b7f7265776172644c6973742064697361626c656400000000000000000000000000600082015250565b6000615cdd601383615586565b9150615ce882615ca7565b602082019050919050565b60006020820190508181036000830152615d0c81615cd0565b9050919050565b7f206d617853656c6c2073686f756c64206265203e207468616e206d617842757960008201527f2000000000000000000000000000000000000000000000000000000000000000602082015250565b6000615d6f602183615586565b9150615d7a82615d13565b604082019050919050565b60006020820190508181036000830152615d9e81615d62565b9050919050565b7f737461727465644164644c500000000000000000000000000000000000000000600082015250565b6000615ddb600c83615586565b9150615de682615da5565b602082019050919050565b60006020820190508181036000830152615e0a81615dce565b9050919050565b7f746178206368616e67652064697361626c656400000000000000000000000000600082015250565b6000615e47601383615586565b9150615e5282615e11565b602082019050919050565b60006020820190508181036000830152615e7681615e3a565b9050919050565b6000615e888261565a565b9150615e938361565a565b9250828201905080821115615eab57615eaa615bfc565b5b92915050565b7f66656520746f6f20686967680000000000000000000000000000000000000000600082015250565b6000615ee7600c83615586565b9150615ef282615eb1565b602082019050919050565b60006020820190508181036000830152615f1681615eda565b9050919050565b7f2146756e64657200000000000000000000000000000000000000000000000000600082015250565b6000615f53600783615586565b9150615f5e82615f1d565b602082019050919050565b60006020820190508181036000830152615f8281615f46565b9050919050565b6000604082019050615f9e60008301856158b9565b615fab6020830184615664565b9392505050565b600081519050615fc18161550f565b92915050565b600060208284031215615fdd57615fdc615444565b5b6000615feb84828501615fb2565b91505092915050565b7f6e657756616c7565206d757374203c3d20330000000000000000000000000000600082015250565b600061602a601283615586565b915061603582615ff4565b602082019050919050565b600060208201905081810360008301526160598161601d565b9050919050565b7f6e65772069732030000000000000000000000000000000000000000000000000600082015250565b6000616096600883615586565b91506160a182616060565b602082019050919050565b600060208201905081810360008301526160c581616089565b9050919050565b7f62616c616e63654e6f74456e6f75676800000000000000000000000000000000600082015250565b6000616102601083615586565b915061610d826160cc565b602082019050919050565b60006020820190508181036000830152616131816160f5565b9050919050565b7f6973526577617264203e20302021000000000000000000000000000000000000600082015250565b600061616e600e83615586565b915061617982616138565b602082019050919050565b6000602082019050818103600083015261619d81616161565b9050919050565b6000819050919050565b6161bf6161ba8261565a565b6161a4565b82525050565b60006161d182866161ae565b6020820191506161e182856161ae565b6020820191506161f182846161ae565b602082019150819050949350505050565b600061620d8261565a565b91506162188361565a565b92508282026162268161565a565b9150828204841483151761623d5761623c615bfc565b5b5092915050565b7f70617573696e6700000000000000000000000000000000000000000000000000600082015250565b600061627a600783615586565b915061628582616244565b602082019050919050565b600060208201905081810360008301526162a98161626d565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b60006162ea8261565a565b91506162f58361565a565b925082616305576163046162b0565b5b828204905092915050565b6000819050919050565b600061633561633061632b84616310565b6157ec565b61565a565b9050919050565b6163458161631a565b82525050565b600081549050919050565b600082825260208201905092915050565b60008190508160005260206000209050919050565b6163858161546e565b82525050565b6000616397838361637c565b60208301905092915050565b60008160001c9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006163e36163de836163a3565b6163b0565b9050919050565b60006163f682546163d0565b9050919050565b6000600182019050919050565b60006164158261634b565b61641f8185616356565b935061642a83616367565b8060005b838110156164625761643f826163ea565b616449888261638b565b9750616454836163fd565b92505060018101905061642e565b5085935050505092915050565b600060a0820190506164846000830188615664565b616491602083018761633c565b81810360408301526164a3818661640a565b90506164b260608301856158b9565b6164bf6080830184615664565b9695505050505050565b60006020820190506164de600083018461633c565b92915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b600081519050919050565b6000819050602082019050919050565b6000602082019050919050565b600061654682616513565b6165508185616356565b935061655b8361651e565b8060005b8381101561658c578151616573888261638b565b975061657e8361652e565b92505060018101905061655f565b5085935050505092915050565b600060a0820190506165ae6000830188615664565b6165bb602083018761633c565b81810360408301526165cd818661653b565b90506165dc60608301856158b9565b6165e96080830184615664565b9695505050505050565b6000819050919050565b600061661861661361660e846165f3565b6157ec565b61565a565b9050919050565b616628816165fd565b82525050565b6000602082019050616643600083018461661f565b92915050565b600060c08201905061665e60008301896158b9565b61666b6020830188615664565b616678604083018761633c565b616685606083018661633c565b61669260808301856158b9565b61669f60a0830184615664565b979650505050505050565b6000815190506166b98161568e565b92915050565b6000806000606084860312156166d8576166d7615444565b5b60006166e6868287016166aa565b93505060206166f7868287016166aa565b9250506040616708868287016166aa565b9150509250925092565b60006020828403121561672857616727615444565b5b6000616736848285016166aa565b91505092915050565b600060608201905061675460008301866158b9565b61676160208301856158b9565b61676e6040830184615664565b949350505050565b60006101008201905061678c600083018b6158b9565b616799602083018a6158b9565b6167a66040830189615664565b6167b36060830188615664565b6167c0608083018761633c565b6167cd60a083018661633c565b6167da60c08301856158b9565b6167e760e0830184615664565b9998505050505050505050565b7f6f766572206d61782073656c6c20616d6f756e74000000000000000000000000600082015250565b600061682a601483615586565b9150616835826167f4565b602082019050919050565b600060208201905081810360008301526168598161681d565b9050919050565b7f6f766572206d61782062757920616d6f756e7400000000000000000000000000600082015250565b6000616896601383615586565b91506168a182616860565b602082019050919050565b600060208201905081810360008301526168c581616889565b9050919050565b7f6f766572206d61782077616c6c6574206c696d69740000000000000000000000600082015250565b6000616902601583615586565b915061690d826168cc565b602082019050919050565b60006020820190508181036000830152616931816168f5565b905091905056fea2646970667358221220a9f4860be9c60c1dd3f46efbce857d5cbaae27d6dff805c2f75b2997208030d664736f6c63430008120033608060405234801561001057600080fd5b5060405161024c38038061024c8339818101604052810190610032919061011c565b8073ffffffffffffffffffffffffffffffffffffffff1663095ea7b3336000196040518363ffffffff1660e01b815260040161006f929190610171565b6020604051808303816000875af115801561008e573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906100b291906101d2565b50506101ff565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006100e9826100be565b9050919050565b6100f9816100de565b811461010457600080fd5b50565b600081519050610116816100f0565b92915050565b600060208284031215610132576101316100b9565b5b600061014084828501610107565b91505092915050565b610152816100de565b82525050565b6000819050919050565b61016b81610158565b82525050565b60006040820190506101866000830185610149565b6101936020830184610162565b9392505050565b60008115159050919050565b6101af8161019a565b81146101ba57600080fd5b50565b6000815190506101cc816101a6565b92915050565b6000602082840312156101e8576101e76100b9565b5b60006101f6848285016101bd565b91505092915050565b603f8061020d6000396000f3fe6080604052600080fdfea26469706673582212200aa6d0eb9dde6ba6ef40f77149878fc8e5c023354991ead54f73c7780e7abe1c64736f6c63430008120033'