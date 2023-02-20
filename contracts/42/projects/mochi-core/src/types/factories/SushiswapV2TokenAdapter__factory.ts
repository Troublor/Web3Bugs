/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  SushiswapV2TokenAdapter,
  SushiswapV2TokenAdapterInterface,
} from "../SushiswapV2TokenAdapter";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_owned",
        type: "address",
      },
      {
        internalType: "address",
        name: "_router",
        type: "address",
      },
      {
        internalType: "address",
        name: "_uniCSSR",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_asset",
        type: "address",
      },
      {
        internalType: "address",
        name: "_pairedWith",
        type: "address",
      },
    ],
    name: "aboveLiquidity",
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
        name: "_currency",
        type: "address",
      },
    ],
    name: "addKeyCurrency",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "cssrRouter",
    outputs: [
      {
        internalType: "contract ICSSRRouter",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_asset",
        type: "address",
      },
    ],
    name: "getLiquidity",
    outputs: [
      {
        internalType: "uint256",
        name: "sum",
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
        name: "_asset",
        type: "address",
      },
    ],
    name: "getPrice",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "numerator",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "denominator",
            type: "uint256",
          },
        ],
        internalType: "struct float",
        name: "price",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_asset",
        type: "address",
      },
    ],
    name: "getPriceRaw",
    outputs: [
      {
        internalType: "uint256",
        name: "sumPrice",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "sumLiquidity",
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
        name: "",
        type: "address",
      },
    ],
    name: "isKeyCurrency",
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
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "keyCurrency",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "minimumLiquidity",
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
    inputs: [],
    name: "owned",
    outputs: [
      {
        internalType: "contract IGovernanceOwned",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_idx",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_currency",
        type: "address",
      },
    ],
    name: "removeKeyCurrency",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_liquidity",
        type: "uint256",
      },
    ],
    name: "setMinimumLiquidity",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_asset",
        type: "address",
      },
    ],
    name: "support",
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
    name: "uniswapCSSR",
    outputs: [
      {
        internalType: "contract IUniswapV2CSSR",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_asset",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
    ],
    name: "update",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "numerator",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "denominator",
            type: "uint256",
          },
        ],
        internalType: "struct float",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60e06040523480156200001157600080fd5b50604051620019f3380380620019f3833981016040819052620000349162000079565b6001600160601b0319606093841b811660805291831b821660a05290911b1660c052620000c3565b80516001600160a01b03811681146200007457600080fd5b919050565b6000806000606084860312156200008f57600080fd5b6200009a846200005c565b9250620000aa602085016200005c565b9150620000ba604085016200005c565b90509250925092565b60805160601c60a05160601c60c05160601c6118956200015e600039600081816101320152818161037c0152818161040e015281816104be0152818161094a01528181610b5301528181610da00152610f3b0152600081816101f2015281816109ee01528181610a9c01528181610e440152610fdd01526000818161027e0152818161056c015281816106e60152610c0b01526118956000f3fe608060405234801561001057600080fd5b50600436106100f55760003560e01c8063818c472f11610097578063b56cf01111610066578063b56cf01114610270578063df32754b14610279578063e660cc08146102a0578063ff9d4b83146102b357600080fd5b8063818c472f146101ed5780639178bc7e1461021457806395545dd71461023c578063a747b93b1461024f57600080fd5b806341976e09116100d357806341976e0914610181578063494208541461019457806367a9be71146101a7578063714453cf146101ba57600080fd5b806302a688ed146100fa57806303d34ec71461012d578063282567b41461016c575b600080fd5b61010d610108366004611446565b6102c6565b604080518251815260209283015192810192909252015b60405180910390f35b6101547f000000000000000000000000000000000000000000000000000000000000000081565b6040516001600160a01b039091168152602001610124565b61017f61017a3660046115df565b61056a565b005b61010d61018f3660046112f2565b610630565b6101546101a23660046115df565b6106ba565b61017f6101b5366004611611565b6106e4565b6101dd6101c83660046112f2565b60026020526000908152604090205460ff1681565b6040519015158152602001610124565b6101547f000000000000000000000000000000000000000000000000000000000000000081565b6102276102223660046112f2565b6108d7565b60408051928352602083019190915201610124565b61017f61024a3660046112f2565b610c09565b61026261025d3660046112f2565b610d2f565b604051908152602001610124565b61026260015481565b6101547f000000000000000000000000000000000000000000000000000000000000000081565b6101dd6102ae3660046112f2565b610ea9565b6101dd6102c136600461140d565b610f11565b6040805180820190915260008082526020820152600080600080600080878060200190518101906102f7919061132c565b6001600160a01b038616600090815260026020526040902054959b5093995091975095509350915060ff166103625760405162461bcd60e51b815260206004820152600c60248201526b216b657943757272656e637960a01b60448201526064015b60405180910390fd5b60405163016b9b6f60e01b81526000906001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000169063016b9b6f906103b1908990600401611662565b606060405180830381600087803b1580156103cb57600080fd5b505af11580156103df573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061040391906114d4565b5091505060006104a47f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316638bdb2afa6040518163ffffffff1660e01b815260040160206040518083038186803b15801561046557600080fd5b505afa158015610479573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061049d919061130f565b8c8a611072565b60405163ea06f26d60e01b81529091506001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000169063ea06f26d906104fd90859085908b908b908b908b90600401611693565b60a060405180830381600087803b15801561051757600080fd5b505af115801561052b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061054f9190611502565b506105598b610630565b985050505050505050505b92915050565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316635aa6e6756040518163ffffffff1660e01b815260040160206040518083038186803b1580156105c357600080fd5b505afa1580156105d7573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105fb919061130f565b6001600160a01b0316336001600160a01b03161461062b5760405162461bcd60e51b815260040161035990611675565b600155565b6040805180820190915260008082526020820152600080610650846108d7565b915091506000811161068f5760405162461bcd60e51b8152602060048201526008602482015267085d5c19185d195960c21b6044820152606401610359565b6040518060400160405280600160701b846106aa9190611775565b8152602001919091529392505050565b600081815481106106ca57600080fd5b6000918252602090912001546001600160a01b0316905081565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316635aa6e6756040518163ffffffff1660e01b815260040160206040518083038186803b15801561073d57600080fd5b505afa158015610751573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610775919061130f565b6001600160a01b0316336001600160a01b0316146107a55760405162461bcd60e51b815260040161035990611675565b806001600160a01b0316600083815481106107c2576107c2611844565b6000918252602090912001546001600160a01b03161461080d5760405162461bcd60e51b8152602060048201526006602482015265042dac2e8c6d60d31b6044820152606401610359565b6000805461081d906001906117b6565b8154811061082d5761082d611844565b600091825260208220015481546001600160a01b0390911691908490811061085757610857611844565b6000918252602082200180546001600160a01b0319166001600160a01b03939093169290921790915580548061088f5761088f61182e565b60008281526020808220830160001990810180546001600160a01b03191690559092019092556001600160a01b03929092168152600290915260409020805460ff1916905550565b60008060005b600054811015610c035760008082815481106108fb576108fb611844565b6000918252602090912001546001600160a01b03908116915085168114156109235750610bf1565b60405163ea526de760e01b81526001600160a01b03868116600483015282811660248301527f0000000000000000000000000000000000000000000000000000000000000000169063ea526de79060440160206040518083038186803b15801561098c57600080fd5b505afa9250505080156109bc575060408051601f3d908101601f191682019092526109b9918101906115f8565b60015b6109c65750610bf1565b6040516341976e0960e01b81526001600160a01b038381166004830152600091610a6f9184917f0000000000000000000000000000000000000000000000000000000000000000909116906341976e09906024015b604080518083038186803b158015610a3257600080fd5b505afa158015610a46573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a6a9190611590565b611154565b90506001548110610bed576040516341976e0960e01b81526001600160a01b0384811660048301526000917f0000000000000000000000000000000000000000000000000000000000000000909116906341976e0990602401604080518083038186803b158015610adf57600080fd5b505afa158015610af3573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b179190611590565b9050610b23828761175d565b604051630e846c4760e31b81526001600160a01b038a8116600483015286811660248301529197508391610bd5917f00000000000000000000000000000000000000000000000000000000000000009091169063742362389060440160206040518083038186803b158015610b9757600080fd5b505afa158015610bab573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610bcf91906115f8565b83611154565b610bdf9190611797565b610be9908861175d565b9650505b5050505b80610bfb816117fd565b9150506108dd565b50915091565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316635aa6e6756040518163ffffffff1660e01b815260040160206040518083038186803b158015610c6257600080fd5b505afa158015610c76573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c9a919061130f565b6001600160a01b0316336001600160a01b031614610cca5760405162461bcd60e51b815260040161035990611675565b60008054600181810183557f290decd9548b62a8d60345a988386fc84ba6bc95484008f6362f93160ef3e56390910180546001600160a01b039094166001600160a01b031990941684179055918152600260205260409020805460ff19169091179055565b6000805b600054811015610ea3576000808281548110610d5157610d51611844565b6000918252602090912001546001600160a01b0390811691508416811415610d795750610e91565b60405163ea526de760e01b81526001600160a01b03858116600483015282811660248301527f0000000000000000000000000000000000000000000000000000000000000000169063ea526de79060440160206040518083038186803b158015610de257600080fd5b505afa925050508015610e12575060408051601f3d908101601f19168201909252610e0f918101906115f8565b60015b610e1c5750610e91565b6040516341976e0960e01b81526001600160a01b038381166004830152600091610e759184917f0000000000000000000000000000000000000000000000000000000000000000909116906341976e0990602401610a1b565b90506001548110610e8d57610e8a818661175d565b94505b5050505b80610e9b816117fd565b915050610d33565b50919050565b6000805b600054811015610f0857610ee88360008381548110610ece57610ece611844565b6000918252602090912001546001600160a01b0316610f11565b15610ef65750600192915050565b80610f00816117fd565b915050610ead565b50600092915050565b60405163ea526de760e01b81526001600160a01b03838116600483015282811660248301526000917f00000000000000000000000000000000000000000000000000000000000000009091169063ea526de79060440160206040518083038186803b158015610f7f57600080fd5b505afa925050508015610faf575060408051601f3d908101601f19168201909252610fac918101906115f8565b60015b610fbb57506000610564565b6040516341976e0960e01b81526001600160a01b0384811660048301526000917f0000000000000000000000000000000000000000000000000000000000000000909116906341976e0990602401604080518083038186803b15801561102057600080fd5b505afa158015611034573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906110589190611590565b90506001546110678383611154565b101592505050610564565b6000806000611081858561117a565b6040516bffffffffffffffffffffffff19606084811b8216602084015283901b16603482015291935091508690604801604051602081830303815290604052805190602001206040516020016111299291906001600160f81b0319815260609290921b6bffffffffffffffffffffffff1916600183015260158201527fe18a34eb0e04b04f7a0ac29a6e80748dca96319b42c54d679cb821dca90c6303603582015260550190565b60408051601f1981840301815291905280516020909101206001600160a01b03169695505050505050565b60208101518151600091906111699085611797565b6111739190611775565b9392505050565b600080826001600160a01b0316846001600160a01b031614156111ed5760405162461bcd60e51b815260206004820152602560248201527f556e697377617056324c6962726172793a204944454e544943414c5f41444452604482015264455353455360d81b6064820152608401610359565b826001600160a01b0316846001600160a01b03161061120d578284611210565b83835b90925090506001600160a01b03821661126b5760405162461bcd60e51b815260206004820152601e60248201527f556e697377617056324c6962726172793a205a45524f5f4144445245535300006044820152606401610359565b9250929050565b805161127d81611870565b919050565b600082601f83011261129357600080fd5b81516112a66112a182611735565b611704565b8181528460208386010111156112bb57600080fd5b6112cc8260208301602087016117cd565b949350505050565b80516dffffffffffffffffffffffffffff8116811461127d57600080fd5b60006020828403121561130457600080fd5b813561117381611870565b60006020828403121561132157600080fd5b815161117381611870565b60008060008060008060c0878903121561134557600080fd5b61134e87611272565b9550602087015167ffffffffffffffff8082111561136b57600080fd5b6113778a838b01611282565b9650604089015191508082111561138d57600080fd5b6113998a838b01611282565b955060608901519150808211156113af57600080fd5b6113bb8a838b01611282565b945060808901519150808211156113d157600080fd5b6113dd8a838b01611282565b935060a08901519150808211156113f357600080fd5b5061140089828a01611282565b9150509295509295509295565b6000806040838503121561142057600080fd5b823561142b81611870565b9150602083013561143b81611870565b809150509250929050565b6000806040838503121561145957600080fd5b823561146481611870565b9150602083013567ffffffffffffffff81111561148057600080fd5b8301601f8101851361149157600080fd5b803561149f6112a182611735565b8181528660208385010111156114b457600080fd5b816020840160208301376000602083830101528093505050509250929050565b6000806000606084860312156114e957600080fd5b8351925060208401519150604084015190509250925092565b600060a0828403121561151457600080fd5b60405160a0810181811067ffffffffffffffff821117156115375761153761185a565b604052825163ffffffff8116811461154e57600080fd5b815261155c602084016112d4565b602082015261156d604084016112d4565b604082015260608301516060820152608083015160808201528091505092915050565b6000604082840312156115a257600080fd5b6040516040810181811067ffffffffffffffff821117156115c5576115c561185a565b604052825181526020928301519281019290925250919050565b6000602082840312156115f157600080fd5b5035919050565b60006020828403121561160a57600080fd5b5051919050565b6000806040838503121561162457600080fd5b82359150602083013561143b81611870565b6000815180845261164e8160208601602086016117cd565b601f01601f19169290920160200192915050565b6020815260006111736020830184611636565b60208082526004908201526310b3b7bb60e11b604082015260600190565b8681526001600160a01b038616602082015260c0604082018190526000906116bd90830187611636565b82810360608401526116cf8187611636565b905082810360808401526116e38186611636565b905082810360a08401526116f78185611636565b9998505050505050505050565b604051601f8201601f1916810167ffffffffffffffff8111828210171561172d5761172d61185a565b604052919050565b600067ffffffffffffffff82111561174f5761174f61185a565b50601f01601f191660200190565b6000821982111561177057611770611818565b500190565b60008261179257634e487b7160e01b600052601260045260246000fd5b500490565b60008160001904831182151516156117b1576117b1611818565b500290565b6000828210156117c8576117c8611818565b500390565b60005b838110156117e85781810151838201526020016117d0565b838111156117f7576000848401525b50505050565b600060001982141561181157611811611818565b5060010190565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052603160045260246000fd5b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052604160045260246000fd5b6001600160a01b038116811461188557600080fd5b5056fea164736f6c6343000807000a";

export class SushiswapV2TokenAdapter__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    _owned: string,
    _router: string,
    _uniCSSR: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<SushiswapV2TokenAdapter> {
    return super.deploy(
      _owned,
      _router,
      _uniCSSR,
      overrides || {}
    ) as Promise<SushiswapV2TokenAdapter>;
  }
  getDeployTransaction(
    _owned: string,
    _router: string,
    _uniCSSR: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _owned,
      _router,
      _uniCSSR,
      overrides || {}
    );
  }
  attach(address: string): SushiswapV2TokenAdapter {
    return super.attach(address) as SushiswapV2TokenAdapter;
  }
  connect(signer: Signer): SushiswapV2TokenAdapter__factory {
    return super.connect(signer) as SushiswapV2TokenAdapter__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): SushiswapV2TokenAdapterInterface {
    return new utils.Interface(_abi) as SushiswapV2TokenAdapterInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): SushiswapV2TokenAdapter {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as SushiswapV2TokenAdapter;
  }
}