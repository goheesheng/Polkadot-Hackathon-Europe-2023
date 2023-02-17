import { FunctionComponent } from "react";
import { NftMeta } from "../../../../types/nft";
import NftItem from "../item";

type NftListProps = {
  nfts: NftMeta[];
  tokenSymbol: string;
};

const NftList: FunctionComponent<NftListProps> = ({ nfts, tokenSymbol }) => {
  return (
    <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
      {nfts.map((nft) => (
        <div
          key={nft.image}
          className="flex flex-col rounded-lg shadow-lg overflow-hidden"
        >
          <NftItem item={nft} buttons={true} tokenSymbol={tokenSymbol} />
        </div>
      ))}
    </div>
  );
};

export default NftList;
