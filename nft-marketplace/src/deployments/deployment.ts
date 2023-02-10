import { development, SubstrateDeployment } from "@scio-labs/use-inkathon";

export enum ContractIds {
  nft_equippable = "rmrk_example_equippable",
  psp34_nft = "shiden34",
}

export const getDeployments = async (): Promise<SubstrateDeployment[]> => {
  return [
    {
      contractId: ContractIds.nft_equippable,
      networkId: development.network,
      abi: await import("@contracts/rmrk-nft/metadata.json"),
      address: (await import("@contracts/rmrk-nft/address.json")).development,
    },
  ];
};
