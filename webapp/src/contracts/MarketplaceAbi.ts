import { ContractAbi} from 'web3x/contract';
export default new ContractAbi([
  {
    inputs: [
      {
        internalType: "address",
        name: "_owner",
        type: "address"
      },
      {
        internalType: "address",
        name: "_feesCollector",
        type: "address"
      },
      {
        internalType: "address",
        name: "_acceptedToken",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "_feesCollectorCutPerMillion",
        type: "uint256"
      }
    ],
    stateMutability: "nonpayable",
    type: "constructor"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "feesCollectorCutPerMillion",
        type: "uint256"
      }
    ],
    name: "ChangedFeesCollectorCutPerMillion",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "publicationFee",
        type: "uint256"
      }
    ],
    name: "ChangedPublicationFee",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "oldFeesCollector",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "newFeesCollector",
        type: "address"
      }
    ],
    name: "FeesCollectorSet",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "userAddress",
        type: "address"
      },
      {
        indexed: false,
        internalType: "address",
        name: "relayerAddress",
        type: "address"
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "functionSignature",
        type: "bytes"
      }
    ],
    name: "MetaTransactionExecuted",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bytes32",
        name: "id",
        type: "bytes32"
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256"
      },
      {
        indexed: true,
        internalType: "address",
        name: "seller",
        type: "address"
      },
      {
        indexed: false,
        internalType: "address",
        name: "tokenAddress",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "quantity",
        type: "uint256"
      }
    ],
    name: "OrderCancelled",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bytes32",
        name: "id",
        type: "bytes32"
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256"
      },
      {
        indexed: true,
        internalType: "address",
        name: "seller",
        type: "address"
      },
      {
        indexed: false,
        internalType: "address",
        name: "tokenAddress",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "priceInWei",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "expiresAt",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "quantity",
        type: "uint256"
      }
    ],
    name: "OrderCreated",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bytes32",
        name: "id",
        type: "bytes32"
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256"
      },
      {
        indexed: true,
        internalType: "address",
        name: "seller",
        type: "address"
      },
      {
        indexed: false,
        internalType: "address",
        name: "tokenAddress",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "buyer",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "quantity",
        type: "uint256"
      }
    ],
    name: "OrderSuccessful",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address"
      }
    ],
    name: "OwnershipTransferred",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address"
      }
    ],
    name: "Paused",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address"
      }
    ],
    name: "Unpaused",
    type: "event"
  },
  {
    inputs: [],
    name: "ERC1155_Interface",
    outputs: [
      {
        internalType: "bytes4",
        name: "",
        type: "bytes4"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "ERC721_Interface",
    outputs: [
      {
        internalType: "bytes4",
        name: "",
        type: "bytes4"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "InterfaceId_ValidateFingerprint",
    outputs: [
      {
        internalType: "bytes4",
        name: "",
        type: "bytes4"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "acceptedToken",
    outputs: [
      {
        internalType: "contract IERC20",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "id",
        type: "bytes32"
      }
    ],
    name: "cancelOrder",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "tokenAddress",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "priceInWei",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "expiresAt",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "quantity",
        type: "uint256"
      }
    ],
    name: "createOrder",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "domainSeparator",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "userAddress",
        type: "address"
      },
      {
        internalType: "bytes",
        name: "functionSignature",
        type: "bytes"
      },
      {
        internalType: "bytes32",
        name: "sigR",
        type: "bytes32"
      },
      {
        internalType: "bytes32",
        name: "sigS",
        type: "bytes32"
      },
      {
        internalType: "uint8",
        name: "sigV",
        type: "uint8"
      }
    ],
    name: "executeMetaTransaction",
    outputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes"
      }
    ],
    stateMutability: "payable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "id",
        type: "bytes32"
      },
      {
        internalType: "uint256",
        name: "quantity",
        type: "uint256"
      }
    ],
    name: "executeOrder",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "feesCollector",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "feesCollectorCutPerMillion",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "getChainId",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "pure",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "user",
        type: "address"
      }
    ],
    name: "getNonce",
    outputs: [
      {
        internalType: "uint256",
        name: "nonce",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32"
      }
    ],
    name: "orderById",
    outputs: [
      {
        internalType: "bytes32",
        name: "id",
        type: "bytes32"
      },
      {
        internalType: "address",
        name: "seller",
        type: "address"
      },
      {
        internalType: "address",
        name: "tokenAddress",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "price",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "expiresAt",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "quantity",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "paused",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "publicationFeeInWei",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "id",
        type: "bytes32"
      },
      {
        internalType: "uint256",
        name: "quantity",
        type: "uint256"
      },
      {
        internalType: "bytes",
        name: "fingerprint",
        type: "bytes"
      }
    ],
    name: "safeExecuteOrder",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_newFeesCollector",
        type: "address"
      }
    ],
    name: "setFeesCollector",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_feesCollectorCutPerMillion",
        type: "uint256"
      }
    ],
    name: "setFeesCollectorCutPerMillion",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_publicationFee",
        type: "uint256"
      }
    ],
    name: "setPublicationFee",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address"
      }
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  }
]);