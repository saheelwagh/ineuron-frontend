  const JSONABI = {
  "_format": "hh-sol-artifact-1",
  "contractName": "Creator",
  "sourceName": "contracts/fund.sol",
  "abi": [
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "creatorName",
          "type": "string"
        },
        {
          "internalType": "address",
          "name": "creatorOwner",
          "type": "address"
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
          "name": "donar",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        },
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "timestamp",
          "type": "uint256"
        }
      ],
      "name": "donated",
      "type": "event"
    },
    {
      "inputs": [],
      "name": "donate",
      "outputs": [],
      "stateMutability": "payable",
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
          "internalType": "address payable",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "receivedAmount",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    }
  ],
  "bytecode": "0x60806040523480156200001157600080fd5b50604051620008df380380620008df83398181016040528101906200003791906200034b565b81600090805190602001906200004f92919062000099565b5080600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550505062000416565b828054620000a790620003e0565b90600052602060002090601f016020900481019282620000cb576000855562000117565b82601f10620000e657805160ff191683800117855562000117565b8280016001018555821562000117579182015b8281111562000116578251825591602001919060010190620000f9565b5b5090506200012691906200012a565b5090565b5b80821115620001455760008160009055506001016200012b565b5090565b6000604051905090565b600080fd5b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b620001b28262000167565b810181811067ffffffffffffffff82111715620001d457620001d362000178565b5b80604052505050565b6000620001e962000149565b9050620001f78282620001a7565b919050565b600067ffffffffffffffff8211156200021a576200021962000178565b5b620002258262000167565b9050602081019050919050565b60005b838110156200025257808201518184015260208101905062000235565b8381111562000262576000848401525b50505050565b60006200027f6200027984620001fc565b620001dd565b9050828152602081018484840111156200029e576200029d62000162565b5b620002ab84828562000232565b509392505050565b600082601f830112620002cb57620002ca6200015d565b5b8151620002dd84826020860162000268565b91505092915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006200031382620002e6565b9050919050565b620003258162000306565b81146200033157600080fd5b50565b60008151905062000345816200031a565b92915050565b6000806040838503121562000365576200036462000153565b5b600083015167ffffffffffffffff81111562000386576200038562000158565b5b6200039485828601620002b3565b9250506020620003a78582860162000334565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b60006002820490506001821680620003f957607f821691505b6020821081141562000410576200040f620003b1565b5b50919050565b6104b980620004266000396000f3fe60806040526004361061003f5760003560e01c806306fdde03146100445780638da5cb5b1461006f5780639632e7201461009a578063ed88c68e146100c5575b600080fd5b34801561005057600080fd5b506100596100cf565b60405161006691906102eb565b60405180910390f35b34801561007b57600080fd5b5061008461015d565b604051610091919061034e565b60405180910390f35b3480156100a657600080fd5b506100af610183565b6040516100bc9190610382565b60405180910390f35b6100cd610189565b005b600080546100dc906103cc565b80601f0160208091040260200160405190810160405280929190818152602001828054610108906103cc565b80156101555780601f1061012a57610100808354040283529160200191610155565b820191906000526020600020905b81548152906001019060200180831161013857829003601f168201915b505050505081565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60025481565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166108fc349081150290604051600060405180830381858888f193505050501580156101f1573d6000803e3d6000fd5b503460026000828254610204919061042d565b9250508190555042343373ffffffffffffffffffffffffffffffffffffffff167fe6add99d06d9ad7fc456e746aa162eed6211c5002ef2dacdd67b8d2016822fba60405160405180910390a4565b600081519050919050565b600082825260208201905092915050565b60005b8381101561028c578082015181840152602081019050610271565b8381111561029b576000848401525b50505050565b6000601f19601f8301169050919050565b60006102bd82610252565b6102c7818561025d565b93506102d781856020860161026e565b6102e0816102a1565b840191505092915050565b6000602082019050818103600083015261030581846102b2565b905092915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006103388261030d565b9050919050565b6103488161032d565b82525050565b6000602082019050610363600083018461033f565b92915050565b6000819050919050565b61037c81610369565b82525050565b60006020820190506103976000830184610373565b92915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600060028204905060018216806103e457607f821691505b602082108114156103f8576103f761039d565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600061043882610369565b915061044383610369565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115610478576104776103fe565b5b82820190509291505056fea2646970667358221220799a9f4dfe94bb48a0b4e7c5df0926997deaf9842875d797fe6e38be8e7330a964736f6c63430008090033",
  "deployedBytecode": "0x60806040526004361061003f5760003560e01c806306fdde03146100445780638da5cb5b1461006f5780639632e7201461009a578063ed88c68e146100c5575b600080fd5b34801561005057600080fd5b506100596100cf565b60405161006691906102eb565b60405180910390f35b34801561007b57600080fd5b5061008461015d565b604051610091919061034e565b60405180910390f35b3480156100a657600080fd5b506100af610183565b6040516100bc9190610382565b60405180910390f35b6100cd610189565b005b600080546100dc906103cc565b80601f0160208091040260200160405190810160405280929190818152602001828054610108906103cc565b80156101555780601f1061012a57610100808354040283529160200191610155565b820191906000526020600020905b81548152906001019060200180831161013857829003601f168201915b505050505081565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60025481565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166108fc349081150290604051600060405180830381858888f193505050501580156101f1573d6000803e3d6000fd5b503460026000828254610204919061042d565b9250508190555042343373ffffffffffffffffffffffffffffffffffffffff167fe6add99d06d9ad7fc456e746aa162eed6211c5002ef2dacdd67b8d2016822fba60405160405180910390a4565b600081519050919050565b600082825260208201905092915050565b60005b8381101561028c578082015181840152602081019050610271565b8381111561029b576000848401525b50505050565b6000601f19601f8301169050919050565b60006102bd82610252565b6102c7818561025d565b93506102d781856020860161026e565b6102e0816102a1565b840191505092915050565b6000602082019050818103600083015261030581846102b2565b905092915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006103388261030d565b9050919050565b6103488161032d565b82525050565b6000602082019050610363600083018461033f565b92915050565b6000819050919050565b61037c81610369565b82525050565b60006020820190506103976000830184610373565b92915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600060028204905060018216806103e457607f821691505b602082108114156103f8576103f761039d565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600061043882610369565b915061044383610369565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115610478576104776103fe565b5b82820190509291505056fea2646970667358221220799a9f4dfe94bb48a0b4e7c5df0926997deaf9842875d797fe6e38be8e7330a964736f6c63430008090033",
  "linkReferences": {},
  "deployedLinkReferences": {}
}
export default JSONABI