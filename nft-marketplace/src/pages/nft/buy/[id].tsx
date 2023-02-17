/* eslint-disable @next/next/no-img-element */

import type { NextPage } from "next";
import { useState, ChangeEvent, useEffect } from "react";
import { BaseLayout, NftItem } from "@ui";
import { Switch } from "@headlessui/react";
import Link from "next/link";
import React from "react";
import { Denomintation, NftMeta, PinataRes } from "@_types/nft";
import axios from "axios";
import {
  useInkathon,
  useBalance,
  useRegisteredContract,
  contractTx,
  contractQuery,
} from "@scio-labs/use-inkathon";

import { BN, formatBalance } from "@polkadot/util";

import { stringToHex } from "@polkadot/util";
import { ContractIds } from "@deployments/deployment";
import { ContractMethod } from "@enumeration/contract-methods";

import { toast } from "react-toastify";
import { useRouter } from "next/router";

const ALLOWED_FIELDS = ["name", "description", "image", "attributes"];

const NftCreate: NextPage = () => {
  const router = useRouter()
  const { id } = router.query;
  const { account, api } = useInkathon();
  const { tokenSymbol } = useBalance(account?.address);
  const { contract } = useRegisteredContract(ContractIds.nft_equippable);

  const [nftURI, setNftURI] = useState("");
  const [hasURI, setHasURI] = useState(false);
  const [price, setPrice] = useState(1);
  const [listingFee, setListingFee] = useState<Denomintation>({
    ShortForm: 0,
    FullForm: "",
  });
  const [nftMeta, setNftMeta] = useState<NftMeta>({
    name: "",
    description: "",
    image: "",
    attributes: [
      { trait_type: "attack", value: "0" },
      { trait_type: "health", value: "0" },
      { trait_type: "speed", value: "0" },
    ],
  });


  const getListingFee = async () => {
    if (!api || !contract || !account) return;
    try {
      const result = await contractQuery(
        api,
        account.address,
        contract,
        ContractMethod.mintingPrice
      );
      const fee = result.output?.toPrimitive() as string;
      console.log(fee);
      setListingFee({ ShortForm: 0, FullForm: fee });
      const chainDecimal = api.registry.chainDecimals[0];
      // formatBalance.setDefaults({ decimals: chainDecimal, unit: tokenSymbol });
      // const feeShortForm = formatBalance(fee, {
      //   withAll: false,
      //   withSi: false,
      //   withZero: false,
      // });
      //setListingFee({ ...listingFee, ShortForm: parseInt(feeShortForm, 10) });
      console.log(listingFee);
    } catch (e) {
      console.error(e);
    }
  };

  const _buyNft = async (price: number) => {
    if (!account || !contract || !api) {
      toast("Wallet not connected. Try again...");
      return;
    }
    const options = {
      storageDepositLimit: null,
      value: listingFee.FullForm,
    };
    const tx = await contractTx(
      api,
      account.address,
      contract,
      ContractMethod.buyNFT,
      options,
      [id],
      (result) => {
        const { status, events } = result;
        const { isInBlock } = status;
        if (isInBlock) {
          events.forEach(({ event: { method } }) => {
            if (method === "ExtrinsicSuccess") {
              toast.success("NFT Purchased");
            } else if (method === "ExtrinsicFailed") {
              toast.error("An Error has occured. Please try again later.");
            }
          });
        }
      }
    );
  };

  const getNFTMetadata = async () => {
      if (!api || !contract || !account) return;
    try {
      const result = await contractQuery(
        api,
        account.address,
        contract,
        ContractMethod.getMetadata,
        {},
        [id]
      );
      const res = JSON.parse(JSON.stringify(result.output?.toPrimitive()));
      const metadata = (await axios.get(JSON.parse(res.metadata), {
        headers: { Accept: "text/plain" },
      }));
      console.log(res)
      setNftMeta({
        price: JSON.parse(res.nft_price) / 100 * (100 + JSON.parse(res.nft_royalty)) / JSON.parse(listingFee.FullForm) * 10,
        ...metadata.data
      })
    } catch (e) {
      console.error(e);
    }
      // const content = nftRes.data;
      // Object.keys(content).forEach((key) => {
      //   if (!ALLOWED_FIELDS.includes(key)) {
      //     throw new Error("Invalid JSON structure");
      //   }
      // });
  };

  const buyNft = async () => {
    const tx = _buyNft(nftMeta.price || 0);

    await toast.promise(tx, {
      pending: "Minting NFT",
    });
  }
  useEffect(() => {getListingFee()},[api, account, contract])
  useEffect(() => {getNFTMetadata()}, [listingFee]);
  return (
    <BaseLayout>
      <div>
          <div className="md:grid md:grid-cols-3 md:gap-6">
            <div className="md:col-span-1">
              <div className="px-4 sm:px-0">
                <h3 className="text-lg font-medium leading-6 text-gray-900">
                  Buy NFT
                </h3>
                <NftItem item={nftMeta} buttons={false} tokenSymbol={tokenSymbol || ""} />
              </div>
            </div>
            <div className="mt-5 md:mt-0 md:col-span-2">
              <form>
                <div className="shadow sm:rounded-md sm:overflow-hidden">
                  <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                    <button
                      onClick={()=>{buyNft()}}
                      type="button"
                      className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      Buy
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
    </BaseLayout>
  );
};

export default NftCreate;
