/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from 'ethers';
import { Provider, TransactionRequest } from '@ethersproject/providers';
import type {
  CrvTokenAdapter,
  CrvTokenAdapterInterface,
} from '../CrvTokenAdapter';

const _abi = [
  {
    inputs: [
      {
        internalType: 'address',
        name: '_owned',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_cssr',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_addressProvider',
        type: 'address',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'constructor',
  },
  {
    inputs: [],
    name: 'addressProvider',
    outputs: [
      {
        internalType: 'contract ICurveAddressProvider',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'approvedRegistry',
    outputs: [
      {
        internalType: 'contract ICurveRegistry',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'cssr',
    outputs: [
      {
        internalType: 'contract ICSSRRouter',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_asset',
        type: 'address',
      },
    ],
    name: 'getLiquidity',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_asset',
        type: 'address',
      },
    ],
    name: 'getPrice',
    outputs: [
      {
        components: [
          {
            internalType: 'uint256',
            name: 'numerator',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'denominator',
            type: 'uint256',
          },
        ],
        internalType: 'struct float',
        name: '',
        type: 'tuple',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'owned',
    outputs: [
      {
        internalType: 'contract IGovernanceOwned',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_asset',
        type: 'address',
      },
    ],
    name: 'supportLiquidity',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_asset',
        type: 'address',
      },
    ],
    name: 'supportPrice',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_asset',
        type: 'address',
      },
      {
        internalType: 'bytes',
        name: '_data',
        type: 'bytes',
      },
    ],
    name: 'update',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'updateCurveRegistry',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
];

const _bytecode =
  '0x60e060405234801561001057600080fd5b50604051610fd3380380610fd383398101604081905261002f91610072565b6001600160601b0319606093841b811660805291831b821660a05290911b1660c0526100b5565b80516001600160a01b038116811461006d57600080fd5b919050565b60008060006060848603121561008757600080fd5b61009084610056565b925061009e60208501610056565b91506100ac60408501610056565b90509250925092565b60805160601c60a05160601c60c05160601c610ed26101016000396000818160ed01526104fb01526000818161018f015281816103e1015261081b015260006101b60152610ed26000f3fe608060405234801561001057600080fd5b506004361061009e5760003560e01c806342e134501161006657806342e13450146100b85780635503b6f414610155578063a747b93b14610168578063d1d198dd1461018a578063df32754b146101b157600080fd5b806302a688ed146100a3578063031b41ae146100b857806316c4ae31146100e05780632954018c146100e857806341976e0914610127575b600080fd5b6100b66100b1366004610b1a565b6101d8565b005b6100cb6100c6366004610a62565b61046a565b60405190151581526020015b60405180910390f35b6100b66104f9565b61010f7f000000000000000000000000000000000000000000000000000000000000000081565b6040516001600160a01b0390911681526020016100d7565b61013a610135366004610a62565b6105ac565b604080518251815260209283015192810192909252016100d7565b60005461010f906001600160a01b031681565b61017c610176366004610a62565b50600090565b6040519081526020016100d7565b61010f7f000000000000000000000000000000000000000000000000000000000000000081565b61010f7f000000000000000000000000000000000000000000000000000000000000000081565b6000805460405163bdf475c360e01b81526001600160a01b0385811660048301529091169063bdf475c39060240160206040518083038186803b15801561021e57600080fd5b505afa158015610232573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102569190610a86565b6000805460405163940494f160e01b81526001600160a01b0380851660048301529394509192169063940494f190602401604080518083038186803b15801561029e57600080fd5b505afa1580156102b2573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102d69190610ba8565b51905060005b81811015610463576000806000868060200190518101906102fd9190610aa3565b60405163c661065760e01b81526004810188905292955090935091506001600160a01b0387169063c66106579060240160206040518083038186803b15801561034557600080fd5b505afa158015610359573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061037d9190610a86565b6001600160a01b0316836001600160a01b0316146103ca5760405162461bcd60e51b815260206004820152600560248201526410b1b7b4b760d91b60448201526064015b60405180910390fd5b6040516302a688ed60e01b81526001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016906302a688ed906104189086908690600401610c65565b600060405180830381600087803b15801561043257600080fd5b505af1158015610446573d6000803e3d6000fd5b50505050809650505050808061045b90610e66565b9150506102dc565b5050505050565b6000805460405163bdf475c360e01b81526001600160a01b0384811660048301528392169063bdf475c39060240160206040518083038186803b1580156104b057600080fd5b505afa1580156104c4573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104e89190610a86565b6001600160a01b0316159392505050565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663a262904b6040518163ffffffff1660e01b815260040160206040518083038186803b15801561055257600080fd5b505afa158015610566573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061058a9190610a86565b600080546001600160a01b0319166001600160a01b0392909216919091179055565b60408051808201909152600080825260208201526000805460405163bdf475c360e01b81526001600160a01b0385811660048301529091169063bdf475c39060240160206040518083038186803b15801561060657600080fd5b505afa15801561061a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061063e9190610a86565b6000805460405163940494f160e01b81526001600160a01b0380851660048301529394509192169063940494f190602401604080518083038186803b15801561068657600080fd5b505afa15801561069a573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106be9190610ba8565b51604080518082019091526000808252670de0b6b3a76400006020830152919250905b828110156108cc5760405163c661065760e01b8152600481018290526000906001600160a01b0386169063c66106579060240160206040518083038186803b15801561072c57600080fd5b505afa158015610740573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107649190610a86565b9050600061089a6040518060400160405280846001600160a01b031663313ce5676040518163ffffffff1660e01b815260040160206040518083038186803b1580156107af57600080fd5b505afa1580156107c3573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107e79190610c42565b6107f290600a610d6c565b815260016020909101526040516341976e0960e01b81526001600160a01b0385811660048301527f000000000000000000000000000000000000000000000000000000000000000016906341976e0990602401604080518083038186803b15801561085c57600080fd5b505afa158015610870573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108949190610c10565b906108fd565b90508215806108ae57506108ae8185610998565b156108b7578093505b505080806108c490610e66565b9150506106e1565b506040805180820190915260018152670de0b6b3a764000060208201526108f49082906108fd565b95945050505050565b60408051808201909152600080825260208201526020830151158015906109275750602082015115155b61095b5760405162461bcd60e51b8152602060048201526005602482015264064697620360dc1b60448201526064016103c1565b6040805180820190915282518451829161097491610e17565b81526020018360200151856020015161098d9190610e17565b905290505b92915050565b600082602001516000141580156109b25750602082015115155b6109e65760405162461bcd60e51b8152602060048201526005602482015264064697620360dc1b60448201526064016103c1565b815160208401516109f79190610e17565b60208301518451610a089190610e17565b109392505050565b600082601f830112610a2157600080fd5b8151610a34610a2f82610d01565b610cd0565b818152846020838601011115610a4957600080fd5b610a5a826020830160208701610e36565b949350505050565b600060208284031215610a7457600080fd5b8135610a7f81610ead565b9392505050565b600060208284031215610a9857600080fd5b8151610a7f81610ead565b600080600060608486031215610ab857600080fd5b8351610ac381610ead565b602085015190935067ffffffffffffffff80821115610ae157600080fd5b610aed87838801610a10565b93506040860151915080821115610b0357600080fd5b50610b1086828701610a10565b9150509250925092565b60008060408385031215610b2d57600080fd5b8235610b3881610ead565b9150602083013567ffffffffffffffff811115610b5457600080fd5b8301601f81018513610b6557600080fd5b8035610b73610a2f82610d01565b818152866020838501011115610b8857600080fd5b816020840160208301376000602083830101528093505050509250929050565b600060408284031215610bba57600080fd5b82601f830112610bc957600080fd5b610bd1610ca7565b808385604086011115610be357600080fd5b60005b6002811015610c05578151845260209384019390910190600101610be6565b509095945050505050565b600060408284031215610c2257600080fd5b610c2a610ca7565b82518152602083015160208201528091505092915050565b600060208284031215610c5457600080fd5b815160ff81168114610a7f57600080fd5b60018060a01b03831681526040602082015260008251806040840152610c92816060850160208701610e36565b601f01601f1916919091016060019392505050565b6040805190810167ffffffffffffffff81118282101715610cca57610cca610e97565b60405290565b604051601f8201601f1916810167ffffffffffffffff81118282101715610cf957610cf9610e97565b604052919050565b600067ffffffffffffffff821115610d1b57610d1b610e97565b50601f01601f191660200190565b600181815b80851115610d64578160001904821115610d4a57610d4a610e81565b80851615610d5757918102915b93841c9390800290610d2e565b509250929050565b6000610a7f60ff841683600082610d8557506001610992565b81610d9257506000610992565b8160018114610da85760028114610db257610dce565b6001915050610992565b60ff841115610dc357610dc3610e81565b50506001821b610992565b5060208310610133831016604e8410600b8410161715610df1575081810a610992565b610dfb8383610d29565b8060001904821115610e0f57610e0f610e81565b029392505050565b6000816000190483118215151615610e3157610e31610e81565b500290565b60005b83811015610e51578181015183820152602001610e39565b83811115610e60576000848401525b50505050565b6000600019821415610e7a57610e7a610e81565b5060010190565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052604160045260246000fd5b6001600160a01b0381168114610ec257600080fd5b5056fea164736f6c6343000806000a';

export class CrvTokenAdapter__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    _owned: string,
    _cssr: string,
    _addressProvider: string,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<CrvTokenAdapter> {
    return super.deploy(
      _owned,
      _cssr,
      _addressProvider,
      overrides || {},
    ) as Promise<CrvTokenAdapter>;
  }
  getDeployTransaction(
    _owned: string,
    _cssr: string,
    _addressProvider: string,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): TransactionRequest {
    return super.getDeployTransaction(
      _owned,
      _cssr,
      _addressProvider,
      overrides || {},
    );
  }
  attach(address: string): CrvTokenAdapter {
    return super.attach(address) as CrvTokenAdapter;
  }
  connect(signer: Signer): CrvTokenAdapter__factory {
    return super.connect(signer) as CrvTokenAdapter__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): CrvTokenAdapterInterface {
    return new utils.Interface(_abi) as CrvTokenAdapterInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider,
  ): CrvTokenAdapter {
    return new Contract(address, _abi, signerOrProvider) as CrvTokenAdapter;
  }
}