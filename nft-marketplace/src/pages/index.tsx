/* eslint-disable @next/next/no-img-element */

import { NftMeta } from "src/types/nft";
import type { NextPage } from "next";
import { BaseLayout, NftList } from "@ui";
import {
  useBalance,
  useInkathon,
  useRegisteredContract,
  contractQuery,
  contractTx,
  unwrapResultOrError,
} from "@scio-labs/use-inkathon";
import { ContractIds } from "@deployments/deployment";
import { ContractMethod } from "@enumeration/contract-methods";
import { useEffect, useState } from "react";
import axios from "axios";
const Home: NextPage = () => {
  const { contract } = useRegisteredContract(ContractIds.nft_mintable);
  const { api, account } = useInkathon();
  const [nfts, setNfts] = useState<NftMeta[]>([]);

  console.log(contract);
  const getContractInfo = async () => {
    if (!api || !contract || !account) return;
    try {
      const result = await contractQuery(
        api,
        account.address,
        contract,
        ContractMethod.mintingPrice
      );
      console.log(result.output?.toPrimitive());
    } catch (e) {
      console.error(e);
    }
  };
  getContractInfo();

  const getAllNFTs = async () => {
    if (!api || !contract || !account) return;
    try {
      const result = await contractQuery(
        api,
        account.address,
        contract,
        ContractMethod.getAllNfts
      );
      const res = JSON.parse(JSON.stringify(result.output?.toPrimitive()));
      const tmp_nfts: NftMeta[] = [];
      console.log(Object.keys(res).length);
      for (let index = 0; index < Object.keys(res).length; index++) {
        try {
          const uri = JSON.parse(res[index].metadata);
          if (uri.substring(0, 4) === "http") {
            const nftRes = await axios.get(uri, {
              headers: { Accept: "text/plain" },
            });
            const metadata = nftRes.data;
            tmp_nfts.push(metadata);
          }
        } catch (e) {}
      }
      setNfts(tmp_nfts);
    } catch (e) {
      console.error(e);
    }
  };
  useEffect(() => {
    getAllNFTs();
  }, [api, contract, account]);
  return (
    <BaseLayout>
      <div className="relative bg-gray-50 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
        <div className="absolute inset-0">
          <div className="bg-white h-1/3 sm:h-2/3" />
        </div>
        <div className="relative">
          <div className="text-center">
            <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">
              Amazing Creatures NFTs
            </h2>
            <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
              Mint a NFT to get unlimited ownership forever!
            </p>
          </div>
          <NftList nfts={nfts as NftMeta[]} />
        </div>
      </div>
    </BaseLayout>
  );
};

export default Home;
