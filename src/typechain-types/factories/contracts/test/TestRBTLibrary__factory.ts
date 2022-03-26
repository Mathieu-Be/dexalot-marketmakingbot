/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  TestRBTLibrary,
  TestRBTLibraryInterface,
} from "../../../contracts/test/TestRBTLibrary";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "where",
        type: "string",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "key",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Log",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "key",
        type: "uint256",
      },
    ],
    name: "exists",
    outputs: [
      {
        internalType: "bool",
        name: "_exists",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "first",
    outputs: [
      {
        internalType: "uint256",
        name: "_key",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getEmpty",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_key",
        type: "uint256",
      },
    ],
    name: "getNode",
    outputs: [
      {
        internalType: "uint256",
        name: "key",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "parent",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "left",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "right",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "red",
        type: "bool",
      },
      {
        internalType: "uint256",
        name: "value",
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
        name: "_key",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_value",
        type: "uint256",
      },
    ],
    name: "insert",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "key",
        type: "uint256",
      },
    ],
    name: "isEmpty",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "last",
    outputs: [
      {
        internalType: "uint256",
        name: "_key",
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
        name: "key",
        type: "uint256",
      },
    ],
    name: "next",
    outputs: [
      {
        internalType: "uint256",
        name: "_key",
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
        name: "key",
        type: "uint256",
      },
    ],
    name: "prev",
    outputs: [
      {
        internalType: "uint256",
        name: "_key",
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
        name: "_key",
        type: "uint256",
      },
    ],
    name: "remove",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "root",
    outputs: [
      {
        internalType: "uint256",
        name: "_key",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5061244f806100206000396000f3fe608060405234801561001057600080fd5b50600436106100a95760003560e01c80634cc82215116100715780634cc82215146101545780634f0f4aa9146101705780634f558e79146101a5578063ebf0c717146101d5578063edd004e5146101f3578063f90cfeef14610223576100a9565b80631d834a1b146100ae57806335671214146100ca5780633df4ddf4146100fa57806344733ae11461011857806347799da814610136575b600080fd5b6100c860048036038101906100c39190611ed6565b610253565b005b6100e460048036038101906100df9190611f16565b6102bc565b6040516100f19190611f52565b60405180910390f35b6101026102d9565b60405161010f9190611f52565b60405180910390f35b6101206102ea565b60405161012d9190611f52565b60405180910390f35b61013e6102f9565b60405161014b9190611f52565b60405180910390f35b61016e60048036038101906101699190611f16565b61030a565b005b61018a60048036038101906101859190611f16565b610384565b60405161019c96959493929190611f88565b60405180910390f35b6101bf60048036038101906101ba9190611f16565b6103d4565b6040516101cc9190611fe9565b60405180910390f35b6101dd6103f1565b6040516101ea9190611f52565b60405180910390f35b61020d60048036038101906102089190611f16565b6103fd565b60405161021a9190611f52565b60405180910390f35b61023d60048036038101906102389190611f16565b61041a565b60405161024a9190611fe9565b60405180910390f35b61026782600061042c90919063ffffffff16565b8060026000848152602001908152602001600020819055507fc72c11333761a47423f2cbe54eda92b59b0b5977a444194492fe47f41b3c0ab482826040516102b0929190612061565b60405180910390a15050565b60006102d282600061060590919063ffffffff16565b9050919050565b60006102e56000610706565b905090565b60006102f461075e565b905090565b60006103056000610763565b905090565b61031e8160006107bb90919063ffffffff16565b7fc72c11333761a47423f2cbe54eda92b59b0b5977a444194492fe47f41b3c0ab48160026000848152602001908152602001600020546040516103629291906120e9565b60405180910390a1600260008281526020019081526020016000206000905550565b6000806000806000806103a1876000610bcf90919063ffffffff16565b809650819750829850839950849a5050505050506002600088815260200190815260200160002054905091939550919395565b60006103ea826000610ca690919063ffffffff16565b9050919050565b60008060000154905090565b6000610413826000610ce790919063ffffffff16565b9050919050565b600061042582610de8565b9050919050565b6000811415610470576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161046790612171565b60405180910390fd5b61047a8282610ca6565b156104ba576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104b1906121dd565b60405180910390fd5b600080836000015490505b6000811461051957809150808310156104f857836001016000828152602001908152602001600020600101549050610514565b8360010160008281526020019081526020016000206002015490505b6104c5565b604051806080016040528083815260200160008152602001600081526020016001151581525084600101600085815260200190815260200160002060008201518160000155602082015181600101556040820151816002015560608201518160030160006101000a81548160ff02191690831515021790555090505060008214156105ac578284600001819055506105f5565b818310156105d65782846001016000848152602001908152602001600020600101819055506105f4565b82846001016000848152602001908152602001600020600201819055505b5b6105ff8484610df4565b50505050565b60008082141561064a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161064190612249565b60405180910390fd5b600083600101600084815260200190815260200160002060010154146106935761068c8384600101600085815260200190815260200160002060010154611303565b9050610700565b8260010160008381526020019081526020016000206000015490505b600081141580156106d757508260010160008281526020019081526020016000206001015482145b156106ff578091508260010160008281526020019081526020016000206000015490506106af565b5b92915050565b60008160000154905060008114610759575b6000826001016000838152602001908152602001600020600101541461075857816001016000828152602001908152602001600020600101549050610718565b5b919050565b600090565b600081600001549050600081146107b6575b600082600101600083815260200190815260200160002060020154146107b557816001016000828152602001908152602001600020600201549050610775565b5b919050565b60008114156107ff576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107f6906122b5565b60405180910390fd5b6108098282610ca6565b610848576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161083f90612321565b60405180910390fd5b600080600084600101600085815260200190815260200160002060010154148061088a5750600084600101600085815260200190815260200160002060020154145b15610897578290506108f4565b8360010160008481526020019081526020016000206002015490505b600084600101600083815260200190815260200160002060010154146108f3578360010160008281526020019081526020016000206001015490506108b3565b5b6000846001016000838152602001908152602001600020600101541461093457836001016000828152602001908152602001600020600101549150610950565b8360010160008281526020019081526020016000206002015491505b60008460010160008381526020019081526020016000206000015490508085600101600085815260200190815260200160002060000181905550600081146109f757846001016000828152602001908152602001600020600101548214156109d45782856001016000838152602001908152602001600020600101819055506109f2565b82856001016000838152602001908152602001600020600201819055505b610a01565b8285600001819055505b600085600101600084815260200190815260200160002060030160009054906101000a900460ff16159050848314610b7257610a3e86848761134f565b856001016000868152602001908152602001600020600101548660010160008581526020019081526020016000206001018190555082866001016000886001016000878152602001908152602001600020600101548152602001908152602001600020600001819055508560010160008681526020019081526020016000206002015486600101600085815260200190815260200160002060020181905550828660010160008860010160008781526020019081526020016000206002015481526020019081526020016000206000018190555085600101600086815260200190815260200160002060030160009054906101000a900460ff1686600101600085815260200190815260200160002060030160006101000a81548160ff021916908315150217905550848380965081945050505b8015610b8357610b828685611407565b5b856001016000848152602001908152602001600020600080820160009055600182016000905560028201600090556003820160006101000a81549060ff02191690555050505050505050565b6000806000806000610be18787610ca6565b610c20576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c179061238d565b60405180910390fd5b8587600101600088815260200190815260200160002060000154886001016000898152602001908152602001600020600101548960010160008a8152602001908152602001600020600201548a60010160008b815260200190815260200160002060030160009054906101000a900460ff16945094509450945094509295509295909350565b6000808214158015610cdf57508260000154821480610cde575060008360010160008481526020019081526020016000206000015414155b5b905092915050565b600080821415610d2c576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610d23906123f9565b60405180910390fd5b60008360010160008481526020019081526020016000206002015414610d7557610d6e8384600101600085815260200190815260200160002060020154611b6f565b9050610de2565b8260010160008381526020019081526020016000206000015490505b60008114158015610db957508260010160008281526020019081526020016000206002015482145b15610de157809150826001016000828152602001908152602001600020600001549050610d91565b5b92915050565b60008082149050919050565b60005b82600001548214158015610e45575082600101600084600101600085815260200190815260200160002060000154815260200190815260200160002060030160009054906101000a900460ff165b156112c9576000836001016000848152602001908152602001600020600001549050836001016000856001016000848152602001908152602001600020600001548152602001908152602001600020600101548114156110b35783600101600085600101600084815260200190815260200160002060000154815260200190815260200160002060020154915083600101600083815260200190815260200160002060030160009054906101000a900460ff1615610fc857600084600101600083815260200190815260200160002060030160006101000a81548160ff021916908315150217905550600084600101600084815260200190815260200160002060030160006101000a81548160ff021916908315150217905550600184600101600086600101600085815260200190815260200160002060000154815260200190815260200160002060030160006101000a81548160ff0219169083151502179055508360010160008281526020019081526020016000206000015492506110ae565b83600101600082815260200190815260200160002060020154831415610ff657809250610ff58484611bbb565b5b836001016000848152602001908152602001600020600001549050600084600101600083815260200190815260200160002060030160006101000a81548160ff021916908315150217905550600184600101600086600101600085815260200190815260200160002060000154815260200190815260200160002060030160006101000a81548160ff0219169083151502179055506110ad8485600101600084815260200190815260200160002060000154611d2b565b5b6112c3565b83600101600085600101600084815260200190815260200160002060000154815260200190815260200160002060010154915083600101600083815260200190815260200160002060030160009054906101000a900460ff16156111dc57600084600101600083815260200190815260200160002060030160006101000a81548160ff021916908315150217905550600084600101600084815260200190815260200160002060030160006101000a81548160ff021916908315150217905550600184600101600086600101600085815260200190815260200160002060000154815260200190815260200160002060030160006101000a81548160ff0219169083151502179055508360010160008281526020019081526020016000206000015492506112c2565b8360010160008281526020019081526020016000206001015483141561120a578092506112098484611d2b565b5b836001016000848152602001908152602001600020600001549050600084600101600083815260200190815260200160002060030160006101000a81548160ff021916908315150217905550600184600101600086600101600085815260200190815260200160002060000154815260200190815260200160002060030160006101000a81548160ff0219169083151502179055506112c18485600101600084815260200190815260200160002060000154611bbb565b5b5b50610df7565b60008360010160008560000154815260200190815260200160002060030160006101000a81548160ff021916908315150217905550505050565b60005b6000836001016000848152602001908152602001600020600201541461134657826001016000838152602001908152602001600020600201549150611306565b81905092915050565b6000836001016000838152602001908152602001600020600001549050808460010160008581526020019081526020016000206000018190555060008114156113a057828460000181905550611401565b836001016000828152602001908152602001600020600101548214156113e2578284600101600083815260200190815260200160002060010181905550611400565b82846001016000838152602001908152602001600020600201819055505b5b50505050565b60005b82600001548214158015611441575082600101600083815260200190815260200160002060030160009054906101000a900460ff16155b15611b39576000836001016000848152602001908152602001600020600001549050836001016000828152602001908152602001600020600101548314156117dd5783600101600082815260200190815260200160002060020154915083600101600083815260200190815260200160002060030160009054906101000a900460ff161561155157600084600101600084815260200190815260200160002060030160006101000a81548160ff021916908315150217905550600184600101600083815260200190815260200160002060030160006101000a81548160ff0219169083151502179055506115358482611bbb565b8360010160008281526020019081526020016000206002015491505b83600101600085600101600085815260200190815260200160002060010154815260200190815260200160002060030160009054906101000a900460ff161580156115d7575083600101600085600101600085815260200190815260200160002060020154815260200190815260200160002060030160009054906101000a900460ff16155b1561161557600184600101600084815260200190815260200160002060030160006101000a81548160ff0219169083151502179055508092506117d8565b83600101600085600101600085815260200190815260200160002060020154815260200190815260200160002060030160009054906101000a900460ff166116f757600084600101600086600101600086815260200190815260200160002060010154815260200190815260200160002060030160006101000a81548160ff021916908315150217905550600184600101600084815260200190815260200160002060030160006101000a81548160ff0219169083151502179055506116db8483611d2b565b8360010160008281526020019081526020016000206002015491505b83600101600082815260200190815260200160002060030160009054906101000a900460ff1684600101600084815260200190815260200160002060030160006101000a81548160ff021916908315150217905550600084600101600083815260200190815260200160002060030160006101000a81548160ff021916908315150217905550600084600101600086600101600086815260200190815260200160002060020154815260200190815260200160002060030160006101000a81548160ff0219169083151502179055506117d08482611bbb565b836000015492505b611b33565b83600101600082815260200190815260200160002060010154915083600101600083815260200190815260200160002060030160009054906101000a900460ff16156118ab57600084600101600084815260200190815260200160002060030160006101000a81548160ff021916908315150217905550600184600101600083815260200190815260200160002060030160006101000a81548160ff02191690831515021790555061188f8482611d2b565b8360010160008281526020019081526020016000206001015491505b83600101600085600101600085815260200190815260200160002060020154815260200190815260200160002060030160009054906101000a900460ff16158015611931575083600101600085600101600085815260200190815260200160002060010154815260200190815260200160002060030160009054906101000a900460ff16155b1561196f57600184600101600084815260200190815260200160002060030160006101000a81548160ff021916908315150217905550809250611b32565b83600101600085600101600085815260200190815260200160002060010154815260200190815260200160002060030160009054906101000a900460ff16611a5157600084600101600086600101600086815260200190815260200160002060020154815260200190815260200160002060030160006101000a81548160ff021916908315150217905550600184600101600084815260200190815260200160002060030160006101000a81548160ff021916908315150217905550611a358483611bbb565b8360010160008281526020019081526020016000206001015491505b83600101600082815260200190815260200160002060030160009054906101000a900460ff1684600101600084815260200190815260200160002060030160006101000a81548160ff021916908315150217905550600084600101600083815260200190815260200160002060030160006101000a81548160ff021916908315150217905550600084600101600086600101600086815260200190815260200160002060010154815260200190815260200160002060030160006101000a81548160ff021916908315150217905550611b2a8482611d2b565b836000015492505b5b5061140a565b600083600101600084815260200190815260200160002060030160006101000a81548160ff021916908315150217905550505050565b60005b60008360010160008481526020019081526020016000206001015414611bb257826001016000838152602001908152602001600020600101549150611b72565b81905092915050565b600082600101600083815260200190815260200160002060020154905060008360010160008481526020019081526020016000206000015490506000846001016000848152602001908152602001600020600101549050808560010160008681526020019081526020016000206002018190555060008114611c555783856001016000838152602001908152602001600020600001819055505b81856001016000858152602001908152602001600020600001819055506000821415611c8957828560000181905550611cea565b84600101600083815260200190815260200160002060010154841415611ccb578285600101600084815260200190815260200160002060010181905550611ce9565b82856001016000848152602001908152602001600020600201819055505b5b838560010160008581526020019081526020016000206001018190555082856001016000868152602001908152602001600020600001819055505050505050565b600082600101600083815260200190815260200160002060010154905060008360010160008481526020019081526020016000206000015490506000846001016000848152602001908152602001600020600201549050808560010160008681526020019081526020016000206001018190555060008114611dc55783856001016000838152602001908152602001600020600001819055505b81856001016000858152602001908152602001600020600001819055506000821415611df957828560000181905550611e5a565b84600101600083815260200190815260200160002060020154841415611e3b578285600101600084815260200190815260200160002060020181905550611e59565b82856001016000848152602001908152602001600020600101819055505b5b838560010160008581526020019081526020016000206002018190555082856001016000868152602001908152602001600020600001819055505050505050565b600080fd5b6000819050919050565b611eb381611ea0565b8114611ebe57600080fd5b50565b600081359050611ed081611eaa565b92915050565b60008060408385031215611eed57611eec611e9b565b5b6000611efb85828601611ec1565b9250506020611f0c85828601611ec1565b9150509250929050565b600060208284031215611f2c57611f2b611e9b565b5b6000611f3a84828501611ec1565b91505092915050565b611f4c81611ea0565b82525050565b6000602082019050611f676000830184611f43565b92915050565b60008115159050919050565b611f8281611f6d565b82525050565b600060c082019050611f9d6000830189611f43565b611faa6020830188611f43565b611fb76040830187611f43565b611fc46060830186611f43565b611fd16080830185611f79565b611fde60a0830184611f43565b979650505050505050565b6000602082019050611ffe6000830184611f79565b92915050565b600082825260208201905092915050565b7f696e736572740000000000000000000000000000000000000000000000000000600082015250565b600061204b600683612004565b915061205682612015565b602082019050919050565b6000606082019050818103600083015261207a8161203e565b90506120896020830185611f43565b6120966040830184611f43565b9392505050565b7f72656d6f76650000000000000000000000000000000000000000000000000000600082015250565b60006120d3600683612004565b91506120de8261209d565b602082019050919050565b60006060820190508181036000830152612102816120c6565b90506121116020830185611f43565b61211e6040830184611f43565b9392505050565b7f522d4b49454d2d30310000000000000000000000000000000000000000000000600082015250565b600061215b600983612004565b915061216682612125565b602082019050919050565b6000602082019050818103600083015261218a8161214e565b9050919050565b7f522d4b4558492d30310000000000000000000000000000000000000000000000600082015250565b60006121c7600983612004565b91506121d282612191565b602082019050919050565b600060208201905081810360008301526121f6816121ba565b9050919050565b7f522d5449454d2d30320000000000000000000000000000000000000000000000600082015250565b6000612233600983612004565b915061223e826121fd565b602082019050919050565b6000602082019050818103600083015261226281612226565b9050919050565b7f522d4b49454d2d30320000000000000000000000000000000000000000000000600082015250565b600061229f600983612004565b91506122aa82612269565b602082019050919050565b600060208201905081810360008301526122ce81612292565b9050919050565b7f522d4b444e452d30320000000000000000000000000000000000000000000000600082015250565b600061230b600983612004565b9150612316826122d5565b602082019050919050565b6000602082019050818103600083015261233a816122fe565b9050919050565b7f522d4b444e452d30310000000000000000000000000000000000000000000000600082015250565b6000612377600983612004565b915061238282612341565b602082019050919050565b600060208201905081810360008301526123a68161236a565b9050919050565b7f522d5449454d2d30310000000000000000000000000000000000000000000000600082015250565b60006123e3600983612004565b91506123ee826123ad565b602082019050919050565b60006020820190508181036000830152612412816123d6565b905091905056fea26469706673582212206a679bcce3cbfc3202cc564d0e29a79a1c447a874746ed074203f578bc01303a64736f6c63430008090033";

type TestRBTLibraryConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: TestRBTLibraryConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class TestRBTLibrary__factory extends ContractFactory {
  constructor(...args: TestRBTLibraryConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<TestRBTLibrary> {
    return super.deploy(overrides || {}) as Promise<TestRBTLibrary>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): TestRBTLibrary {
    return super.attach(address) as TestRBTLibrary;
  }
  override connect(signer: Signer): TestRBTLibrary__factory {
    return super.connect(signer) as TestRBTLibrary__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TestRBTLibraryInterface {
    return new utils.Interface(_abi) as TestRBTLibraryInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TestRBTLibrary {
    return new Contract(address, _abi, signerOrProvider) as TestRBTLibrary;
  }
}
