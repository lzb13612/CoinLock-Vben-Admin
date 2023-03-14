import Web3 from 'web3';
import {
  //ethAddress,
 // supportedChainIds,
  templateA_bytecode,
  TemplateA_ABI,
  //templateB_bytecode,
  //TemplateB_ABI,
  //templateC_bytecode,
  //TemplateC_ABI,
 // templateD_bytecode,
  //TemplateD_ABI,
} from './contractData';
import { AbiItem } from 'web3-utils';


export async function deployContract(
  web3: Web3,
  params:[string[], string[], number[], boolean[]],
  ownerAddress: string,
  contractType: number,
) {
  if (contractType == 1) {
    // 将 const 类型的变量转换为 AbiItem[] 类型的数组
    const abi: AbiItem[] = JSON.parse(JSON.stringify(TemplateA_ABI)); 
    const contract = new web3.eth.Contract(abi);
    const gasPrice = await web3.eth.getGasPrice();
    const gasLimit = 5000000;

    const deployData = contract.deploy({
      data: templateA_bytecode,
      arguments: params,
    });

    const tx = deployData.send({
      from: ownerAddress,
      gasPrice: gasPrice,
      gas: gasLimit,
    });
    const receipt = await tx;
    console.log(receipt);
  }

}
