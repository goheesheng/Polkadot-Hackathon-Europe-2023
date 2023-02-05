import {development, SubstrateDeployment} from "@scio-labs/use-inkathon"

export enum ContractIds {
    nft_equippable = 'rmrk_example_equippable',
    psp34_nft = 'shiden34'
}


export const getDeployments = async (): Promise<SubstrateDeployment[]> => {
  return [
    {
      contractId: ContractIds.psp34_nft,
      networkId: development.network,
      abi:await import('@contracts/psp34-nft/metadata.json'),
      address: (await import('@contracts/psp34-nft/address.json'))
        .development,
    },
  ]
}
