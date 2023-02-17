import {
  development,
  shibuya,
  SubstrateDeployment,
} from "@scio-labs/use-inkathon";

export enum ContractIds {
  nft_equippable = "rmrk_example_equippable",
  psp34_nft = "shiden34",
  nft_mintable = "rmrk_example_mintable",
}

export const getDeployments = async (): Promise<SubstrateDeployment[]> => {
  return [
    {
      contractId: ContractIds.nft_mintable,
      networkId: development.network,
      abi: await import("@contracts/rmrk-nft/metadata.json"),
      address: (await import("@contracts/rmrk-nft/address.json")).development,
    },
  ];
};
