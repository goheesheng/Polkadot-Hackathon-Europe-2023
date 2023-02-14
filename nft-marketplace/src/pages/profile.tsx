/* eslint-disable @next/next/no-img-element */

import type { NextPage } from "next";
import React, { useEffect, useState } from "react";
import { BaseLayout, ProfileNftList } from "@ui";

import { NftMeta } from "src/types/nft";
import { ContractIds } from "@deployments/deployment";
import { ContractMethod } from "@enumeration/contract-methods";
import { useRegisteredContract, useInkathon, contractQuery } from "@scio-labs/use-inkathon";
import axios from "axios";

const tabs = [{ name: "Your Collection", href: "#", current: true }];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const Profile: NextPage = () => {
  const { contract } = useRegisteredContract(ContractIds.nft_equippable);
  const { api, account } = useInkathon();

  const [nfts, setNfts] = useState<NftMeta[]>([]);

  const [selected, setSelected] = useState(-1)

  const getUsersNfts = async () => {
    if (!api || !contract || !account) return;
    try {
      const result = await contractQuery(
        api,
        account.address,
        contract,
        ContractMethod.getNftByOwner,
        {},
        [account.address]
      );
      const res = JSON.parse(JSON.stringify(result.output?.toPrimitive()))
      const tmp_nfts: NftMeta[] = []
      console.log(Object.keys(res).length)
      for(let index = 0; index < Object.keys(res).length; index++)
      {
        try{
          const uri = JSON.parse((res[index]).metadata)
          if(uri.substring(0,4) === "http")
          {
            const nftRes = await axios.get(uri, {
              headers: { Accept: "text/plain" },
            });
            const metadata = nftRes.data;
            tmp_nfts.push(metadata)
          }
        }
        catch(e)
        {
        }
      }
      console.log(tmp_nfts)
      setNfts(tmp_nfts);
    } catch (e) {
      console.error(e);
    }
  };
  useEffect(() => { getUsersNfts(); },[api, contract, account])
  return (
    <BaseLayout>
      <div className="h-full flex">
        <div className="flex-1 flex flex-col overflow-hidden">
          <div className="flex-1 flex items-stretch overflow-hidden">
            <main className="flex-1 overflow-y-auto">
              <div className="pt-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex">
                  <h1 className="flex-1 text-2xl font-bold text-gray-900">
                    Your NFTs
                  </h1>
                </div>
                <div className="mt-3 sm:mt-2">
                  <div className="hidden sm:block">
                    <div className="flex items-center border-b border-gray-200">
                      <nav
                        className="flex-1 -mb-px flex space-x-6 xl:space-x-8"
                        aria-label="Tabs"
                      >
                        {tabs.map((tab) => (
                          <a
                            key={tab.name}
                            href={tab.href}
                            aria-current={tab.current ? "page" : undefined}
                            className={classNames(
                              tab.current
                                ? "border-indigo-500 text-indigo-600"
                                : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300",
                              "whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm"
                            )}
                          >
                            {tab.name}
                          </a>
                        ))}
                      </nav>
                    </div>
                  </div>
                </div>

                <ProfileNftList nfts={nfts} selected={selected} setSelected={setSelected} />
              </div>
            </main>

            {/* Details sidebar */}
            <aside className="hidden w-96 bg-white p-8 border-l border-gray-200 overflow-y-auto lg:block">
              {selected != -1 && (
                <div className="pb-16 space-y-6">
                  <div>
                    <div className="block w-full aspect-w-10 aspect-h-7 rounded-lg overflow-hidden">
                      <img
                        src={nfts[selected].image}
                        alt=""
                        className="object-cover"
                      />
                    </div>
                    <div className="mt-4 flex items-start justify-between">
                      <div>
                        <h2 className="text-lg font-medium text-gray-900">
                          <span className="sr-only">Details for </span>
                          {nfts[selected].name}
                        </h2>
                        <p className="text-sm font-medium text-gray-500">
                          {nfts[selected].description}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">Information</h3>
                    <dl className="mt-2 border-t border-b border-gray-200 divide-y divide-gray-200">
                      {nfts[selected].attributes.map((attr) => (
                        <div
                          key={attr.trait_type}
                          className="py-3 flex justify-between text-sm font-medium"
                        >
                          <dt className="text-gray-500">{attr.trait_type}: </dt>
                          <dd className="text-gray-900 text-right">
                            {attr.value}
                          </dd>
                        </div>
                      ))}
                    </dl>
                  </div>

                  <div className="flex">
                    <button
                      type="button"
                      className="flex-1 bg-indigo-600 py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      Download Image
                    </button>
                    <button
                      onClick={() => {}}
                      type="button"
                      className="flex-1 ml-3 bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      Transfer?
                    </button>
                  </div>
                </div>
              )}
            </aside>
          </div>
        </div>
      </div>
    </BaseLayout>
  );
};

export default Profile;
