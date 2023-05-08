/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type { MyToken, MyTokenInterface } from "../../../src/ARTP.sol/MyToken";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "minter",
        type: "address",
      },
      {
        internalType: "address",
        name: "burner",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "previousAdminRole",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "newAdminRole",
        type: "bytes32",
      },
    ],
    name: "RoleAdminChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleGranted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleRevoked",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [],
    name: "BURNER_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "DEFAULT_ADMIN_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "MINTER_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "burn",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "burnFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
    ],
    name: "getRoleAdmin",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "grantRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "hasRole",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "mint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "renounceRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "revokeRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60806040523480156200001157600080fd5b5060405162002f2838038062002f28833981810160405281019062000037919062000582565b6040518060400160405280600781526020017f4d79546f6b656e000000000000000000000000000000000000000000000000008152506040518060400160405280600381526020017f544b4e00000000000000000000000000000000000000000000000000000000008152508160039080519060200190620000bb92919062000468565b508060049080519060200190620000d492919062000468565b5050506200011633620000ec6200018260201b60201c565b600a620000fa919062000763565b629896806200010a9190620007b4565b6200018b60201b60201c565b620001487f9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a683620002f960201b60201c565b6200017a7f3c11d16cbaffd01df69ce1c404f6340ee057498f5f00246190ea54220576a84882620002f960201b60201c565b505062000988565b60006012905090565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415620001fe576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620001f59062000876565b60405180910390fd5b6200021260008383620003eb60201b60201c565b806002600082825462000226919062000898565b92505081905550806000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825401925050819055508173ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef83604051620002d9919062000906565b60405180910390a3620002f560008383620003f060201b60201c565b5050565b6200030b8282620003f560201b60201c565b620003e75760016005600084815260200190815260200160002060000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055506200038c6200046060201b60201c565b73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45b5050565b505050565b505050565b60006005600084815260200190815260200160002060000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b600033905090565b828054620004769062000952565b90600052602060002090601f0160209004810192826200049a5760008555620004e6565b82601f10620004b557805160ff1916838001178555620004e6565b82800160010185558215620004e6579182015b82811115620004e5578251825591602001919060010190620004c8565b5b509050620004f59190620004f9565b5090565b5b8082111562000514576000816000905550600101620004fa565b5090565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006200054a826200051d565b9050919050565b6200055c816200053d565b81146200056857600080fd5b50565b6000815190506200057c8162000551565b92915050565b600080604083850312156200059c576200059b62000518565b5b6000620005ac858286016200056b565b9250506020620005bf858286016200056b565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60008160011c9050919050565b6000808291508390505b600185111562000657578086048111156200062f576200062e620005c9565b5b60018516156200063f5780820291505b80810290506200064f85620005f8565b94506200060f565b94509492505050565b60008262000672576001905062000745565b8162000682576000905062000745565b81600181146200069b5760028114620006a657620006dc565b600191505062000745565b60ff841115620006bb57620006ba620005c9565b5b8360020a915084821115620006d557620006d4620005c9565b5b5062000745565b5060208310610133831016604e8410600b8410161715620007165782820a90508381111562000710576200070f620005c9565b5b62000745565b62000725848484600162000605565b925090508184048111156200073f576200073e620005c9565b5b81810290505b9392505050565b6000819050919050565b600060ff82169050919050565b600062000770826200074c565b91506200077d8362000756565b9250620007ac7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff848462000660565b905092915050565b6000620007c1826200074c565b9150620007ce836200074c565b9250817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff04831182151516156200080a5762000809620005c9565b5b828202905092915050565b600082825260208201905092915050565b7f45524332303a206d696e7420746f20746865207a65726f206164647265737300600082015250565b60006200085e601f8362000815565b91506200086b8262000826565b602082019050919050565b6000602082019050818103600083015262000891816200084f565b9050919050565b6000620008a5826200074c565b9150620008b2836200074c565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115620008ea57620008e9620005c9565b5b828201905092915050565b62000900816200074c565b82525050565b60006020820190506200091d6000830184620008f5565b92915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600060028204905060018216806200096b57607f821691505b6020821081141562000982576200098162000923565b5b50919050565b61259080620009986000396000f3fe608060405234801561001057600080fd5b506004361061014d5760003560e01c806340c10f19116100c3578063a217fddf1161007c578063a217fddf146103c4578063a457c2d7146103e2578063a9059cbb14610412578063d539139314610442578063d547741f14610460578063dd62ed3e1461047c5761014d565b806340c10f19146102f257806342966c681461030e57806370a082311461032a57806379cc67901461035a57806391d148541461037657806395d89b41146103a65761014d565b8063248a9ca311610115578063248a9ca31461021e578063282c51f31461024e5780632f2ff15d1461026c578063313ce5671461028857806336568abe146102a657806339509351146102c25761014d565b806301ffc9a71461015257806306fdde0314610182578063095ea7b3146101a057806318160ddd146101d057806323b872dd146101ee575b600080fd5b61016c60048036038101906101679190611811565b6104ac565b6040516101799190611859565b60405180910390f35b61018a610526565b604051610197919061190d565b60405180910390f35b6101ba60048036038101906101b591906119c3565b6105b8565b6040516101c79190611859565b60405180910390f35b6101d86105db565b6040516101e59190611a12565b60405180910390f35b61020860048036038101906102039190611a2d565b6105e5565b6040516102159190611859565b60405180910390f35b61023860048036038101906102339190611ab6565b610614565b6040516102459190611af2565b60405180910390f35b610256610634565b6040516102639190611af2565b60405180910390f35b61028660048036038101906102819190611b0d565b610658565b005b610290610679565b60405161029d9190611b69565b60405180910390f35b6102c060048036038101906102bb9190611b0d565b610682565b005b6102dc60048036038101906102d791906119c3565b610705565b6040516102e99190611859565b60405180910390f35b61030c600480360381019061030791906119c3565b61073c565b005b61032860048036038101906103239190611b84565b610775565b005b610344600480360381019061033f9190611bb1565b6107ad565b6040516103519190611a12565b60405180910390f35b610374600480360381019061036f91906119c3565b6107f5565b005b610390600480360381019061038b9190611b0d565b610815565b60405161039d9190611859565b60405180910390f35b6103ae610880565b6040516103bb919061190d565b60405180910390f35b6103cc610912565b6040516103d99190611af2565b60405180910390f35b6103fc60048036038101906103f791906119c3565b610919565b6040516104099190611859565b60405180910390f35b61042c600480360381019061042791906119c3565b610990565b6040516104399190611859565b60405180910390f35b61044a6109b3565b6040516104579190611af2565b60405180910390f35b61047a60048036038101906104759190611b0d565b6109d7565b005b61049660048036038101906104919190611bde565b6109f8565b6040516104a39190611a12565b60405180910390f35b60007f7965db0b000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916148061051f575061051e82610a7f565b5b9050919050565b60606003805461053590611c4d565b80601f016020809104026020016040519081016040528092919081815260200182805461056190611c4d565b80156105ae5780601f10610583576101008083540402835291602001916105ae565b820191906000526020600020905b81548152906001019060200180831161059157829003601f168201915b5050505050905090565b6000806105c3610ae9565b90506105d0818585610af1565b600191505092915050565b6000600254905090565b6000806105f0610ae9565b90506105fd858285610cbc565b610608858585610d48565b60019150509392505050565b600060056000838152602001908152602001600020600101549050919050565b7f3c11d16cbaffd01df69ce1c404f6340ee057498f5f00246190ea54220576a84881565b61066182610614565b61066a81610fc0565b6106748383610fd4565b505050565b60006012905090565b61068a610ae9565b73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16146106f7576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106ee90611cf1565b60405180910390fd5b61070182826110b5565b5050565b600080610710610ae9565b905061073181858561072285896109f8565b61072c9190611d40565b610af1565b600191505092915050565b7f9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a661076681610fc0565b6107708383611197565b505050565b7f3c11d16cbaffd01df69ce1c404f6340ee057498f5f00246190ea54220576a84861079f81610fc0565b6107a933836112ee565b5050565b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b61080782610801610ae9565b83610cbc565b61081182826112ee565b5050565b60006005600084815260200190815260200160002060000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b60606004805461088f90611c4d565b80601f01602080910402602001604051908101604052809291908181526020018280546108bb90611c4d565b80156109085780601f106108dd57610100808354040283529160200191610908565b820191906000526020600020905b8154815290600101906020018083116108eb57829003601f168201915b5050505050905090565b6000801b81565b600080610924610ae9565b9050600061093282866109f8565b905083811015610977576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161096e90611e08565b60405180910390fd5b6109848286868403610af1565b60019250505092915050565b60008061099b610ae9565b90506109a8818585610d48565b600191505092915050565b7f9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a681565b6109e082610614565b6109e981610fc0565b6109f383836110b5565b505050565b6000600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b60007f01ffc9a7000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149050919050565b600033905090565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415610b61576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b5890611e9a565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610bd1576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610bc890611f2c565b60405180910390fd5b80600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92583604051610caf9190611a12565b60405180910390a3505050565b6000610cc884846109f8565b90507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8114610d425781811015610d34576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610d2b90611f98565b60405180910390fd5b610d418484848403610af1565b5b50505050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415610db8576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610daf9061202a565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610e28576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610e1f906120bc565b60405180910390fd5b610e338383836114bc565b60008060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905081811015610eb9576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610eb09061214e565b60405180910390fd5b8181036000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550816000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825401925050819055508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef84604051610fa79190611a12565b60405180910390a3610fba8484846114c1565b50505050565b610fd181610fcc610ae9565b6114c6565b50565b610fde8282610815565b6110b15760016005600084815260200190815260200160002060000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff021916908315150217905550611056610ae9565b73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45b5050565b6110bf8282610815565b156111935760006005600084815260200190815260200160002060000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff021916908315150217905550611138610ae9565b73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16837ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b60405160405180910390a45b5050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415611207576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016111fe906121ba565b60405180910390fd5b611213600083836114bc565b80600260008282546112259190611d40565b92505081905550806000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825401925050819055508173ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef836040516112d69190611a12565b60405180910390a36112ea600083836114c1565b5050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16141561135e576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016113559061224c565b60405180910390fd5b61136a826000836114bc565b60008060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050818110156113f0576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016113e7906122de565b60405180910390fd5b8181036000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555081600260008282540392505081905550600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040516114a39190611a12565b60405180910390a36114b7836000846114c1565b505050565b505050565b505050565b6114d08282610815565b611547576114dd8161154b565b6114eb8360001c6020611578565b6040516020016114fc9291906123d2565b6040516020818303038152906040526040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161153e919061190d565b60405180910390fd5b5050565b60606115718273ffffffffffffffffffffffffffffffffffffffff16601460ff16611578565b9050919050565b60606000600283600261158b919061240c565b6115959190611d40565b67ffffffffffffffff8111156115ae576115ad612466565b5b6040519080825280601f01601f1916602001820160405280156115e05781602001600182028036833780820191505090505b5090507f30000000000000000000000000000000000000000000000000000000000000008160008151811061161857611617612495565b5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a9053507f78000000000000000000000000000000000000000000000000000000000000008160018151811061167c5761167b612495565b5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a905350600060018460026116bc919061240c565b6116c69190611d40565b90505b6001811115611766577f3031323334353637383961626364656600000000000000000000000000000000600f86166010811061170857611707612495565b5b1a60f81b82828151811061171f5761171e612495565b5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a905350600485901c94508061175f906124c4565b90506116c9565b50600084146117aa576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016117a19061253a565b60405180910390fd5b8091505092915050565b600080fd5b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b6117ee816117b9565b81146117f957600080fd5b50565b60008135905061180b816117e5565b92915050565b600060208284031215611827576118266117b4565b5b6000611835848285016117fc565b91505092915050565b60008115159050919050565b6118538161183e565b82525050565b600060208201905061186e600083018461184a565b92915050565b600081519050919050565b600082825260208201905092915050565b60005b838110156118ae578082015181840152602081019050611893565b838111156118bd576000848401525b50505050565b6000601f19601f8301169050919050565b60006118df82611874565b6118e9818561187f565b93506118f9818560208601611890565b611902816118c3565b840191505092915050565b6000602082019050818103600083015261192781846118d4565b905092915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600061195a8261192f565b9050919050565b61196a8161194f565b811461197557600080fd5b50565b60008135905061198781611961565b92915050565b6000819050919050565b6119a08161198d565b81146119ab57600080fd5b50565b6000813590506119bd81611997565b92915050565b600080604083850312156119da576119d96117b4565b5b60006119e885828601611978565b92505060206119f9858286016119ae565b9150509250929050565b611a0c8161198d565b82525050565b6000602082019050611a276000830184611a03565b92915050565b600080600060608486031215611a4657611a456117b4565b5b6000611a5486828701611978565b9350506020611a6586828701611978565b9250506040611a76868287016119ae565b9150509250925092565b6000819050919050565b611a9381611a80565b8114611a9e57600080fd5b50565b600081359050611ab081611a8a565b92915050565b600060208284031215611acc57611acb6117b4565b5b6000611ada84828501611aa1565b91505092915050565b611aec81611a80565b82525050565b6000602082019050611b076000830184611ae3565b92915050565b60008060408385031215611b2457611b236117b4565b5b6000611b3285828601611aa1565b9250506020611b4385828601611978565b9150509250929050565b600060ff82169050919050565b611b6381611b4d565b82525050565b6000602082019050611b7e6000830184611b5a565b92915050565b600060208284031215611b9a57611b996117b4565b5b6000611ba8848285016119ae565b91505092915050565b600060208284031215611bc757611bc66117b4565b5b6000611bd584828501611978565b91505092915050565b60008060408385031215611bf557611bf46117b4565b5b6000611c0385828601611978565b9250506020611c1485828601611978565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b60006002820490506001821680611c6557607f821691505b60208210811415611c7957611c78611c1e565b5b50919050565b7f416363657373436f6e74726f6c3a2063616e206f6e6c792072656e6f756e636560008201527f20726f6c657320666f722073656c660000000000000000000000000000000000602082015250565b6000611cdb602f8361187f565b9150611ce682611c7f565b604082019050919050565b60006020820190508181036000830152611d0a81611cce565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000611d4b8261198d565b9150611d568361198d565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115611d8b57611d8a611d11565b5b828201905092915050565b7f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f7760008201527f207a65726f000000000000000000000000000000000000000000000000000000602082015250565b6000611df260258361187f565b9150611dfd82611d96565b604082019050919050565b60006020820190508181036000830152611e2181611de5565b9050919050565b7f45524332303a20617070726f76652066726f6d20746865207a65726f2061646460008201527f7265737300000000000000000000000000000000000000000000000000000000602082015250565b6000611e8460248361187f565b9150611e8f82611e28565b604082019050919050565b60006020820190508181036000830152611eb381611e77565b9050919050565b7f45524332303a20617070726f766520746f20746865207a65726f20616464726560008201527f7373000000000000000000000000000000000000000000000000000000000000602082015250565b6000611f1660228361187f565b9150611f2182611eba565b604082019050919050565b60006020820190508181036000830152611f4581611f09565b9050919050565b7f45524332303a20696e73756666696369656e7420616c6c6f77616e6365000000600082015250565b6000611f82601d8361187f565b9150611f8d82611f4c565b602082019050919050565b60006020820190508181036000830152611fb181611f75565b9050919050565b7f45524332303a207472616e736665722066726f6d20746865207a65726f20616460008201527f6472657373000000000000000000000000000000000000000000000000000000602082015250565b600061201460258361187f565b915061201f82611fb8565b604082019050919050565b6000602082019050818103600083015261204381612007565b9050919050565b7f45524332303a207472616e7366657220746f20746865207a65726f206164647260008201527f6573730000000000000000000000000000000000000000000000000000000000602082015250565b60006120a660238361187f565b91506120b18261204a565b604082019050919050565b600060208201905081810360008301526120d581612099565b9050919050565b7f45524332303a207472616e7366657220616d6f756e742065786365656473206260008201527f616c616e63650000000000000000000000000000000000000000000000000000602082015250565b600061213860268361187f565b9150612143826120dc565b604082019050919050565b600060208201905081810360008301526121678161212b565b9050919050565b7f45524332303a206d696e7420746f20746865207a65726f206164647265737300600082015250565b60006121a4601f8361187f565b91506121af8261216e565b602082019050919050565b600060208201905081810360008301526121d381612197565b9050919050565b7f45524332303a206275726e2066726f6d20746865207a65726f2061646472657360008201527f7300000000000000000000000000000000000000000000000000000000000000602082015250565b600061223660218361187f565b9150612241826121da565b604082019050919050565b6000602082019050818103600083015261226581612229565b9050919050565b7f45524332303a206275726e20616d6f756e7420657863656564732062616c616e60008201527f6365000000000000000000000000000000000000000000000000000000000000602082015250565b60006122c860228361187f565b91506122d38261226c565b604082019050919050565b600060208201905081810360008301526122f7816122bb565b9050919050565b600081905092915050565b7f416363657373436f6e74726f6c3a206163636f756e7420000000000000000000600082015250565b600061233f6017836122fe565b915061234a82612309565b601782019050919050565b600061236082611874565b61236a81856122fe565b935061237a818560208601611890565b80840191505092915050565b7f206973206d697373696e6720726f6c6520000000000000000000000000000000600082015250565b60006123bc6011836122fe565b91506123c782612386565b601182019050919050565b60006123dd82612332565b91506123e98285612355565b91506123f4826123af565b91506124008284612355565b91508190509392505050565b60006124178261198d565b91506124228361198d565b9250817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff048311821515161561245b5761245a611d11565b5b828202905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60006124cf8261198d565b915060008214156124e3576124e2611d11565b5b600182039050919050565b7f537472696e67733a20686578206c656e67746820696e73756666696369656e74600082015250565b600061252460208361187f565b915061252f826124ee565b602082019050919050565b6000602082019050818103600083015261255381612517565b905091905056fea2646970667358221220cf6c8abdac9a7db89dc36ea0b94d8c5acc75b81864429ec3aae6a2483c328e1064736f6c63430008090033";

type MyTokenConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MyTokenConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class MyToken__factory extends ContractFactory {
  constructor(...args: MyTokenConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    minter: PromiseOrValue<string>,
    burner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<MyToken> {
    return super.deploy(minter, burner, overrides || {}) as Promise<MyToken>;
  }
  override getDeployTransaction(
    minter: PromiseOrValue<string>,
    burner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(minter, burner, overrides || {});
  }
  override attach(address: string): MyToken {
    return super.attach(address) as MyToken;
  }
  override connect(signer: Signer): MyToken__factory {
    return super.connect(signer) as MyToken__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MyTokenInterface {
    return new utils.Interface(_abi) as MyTokenInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MyToken {
    return new Contract(address, _abi, signerOrProvider) as MyToken;
  }
}
