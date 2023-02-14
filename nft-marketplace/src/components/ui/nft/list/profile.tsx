import { FunctionComponent } from "react";
import { NftMeta } from "../../../../types/nft";

type NftListProps = {
  nfts: NftMeta[];
  selected: number,
  setSelected: React.Dispatch<React.SetStateAction<number>>,
};

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const ProfileNftList: FunctionComponent<NftListProps> = ({ nfts, selected, setSelected }) => {
  return (
    <section
      className="mt-8 pb-16"
      aria-labelledby="gallery-heading"
    >
      <ul
        role="list"
        className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 md:grid-cols-4 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8"
      >
        {(nfts as NftMeta[]).map((nft, nftIndex) => (
          <li
            key={nft.name}
            onClick={() => { selected !== nftIndex ? setSelected(nftIndex) : setSelected(-1) }}
            className="relative"
          >
            <div
              className={classNames(
                selected === nftIndex
                  ? "ring-2 ring-offset-2 ring-indigo-500"
                  : "focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 focus-within:ring-indigo-500",
                "group block w-full aspect-w-10 aspect-h-7 rounded-lg bg-gray-100 overflow-hidden"
              )}
            >
              <img
                src={nft.image}
                alt=""
                className={classNames(
                  true ? "" : "group-hover:opacity-75",
                  "object-cover pointer-events-none"
                )}
              />
              <button
                type="button"
                className="absolute inset-0 focus:outline-none"
              >
                <span className="sr-only">
                  View details for {nft.name}
                </span>
              </button>
            </div>
            <p className="mt-2 block text-sm font-medium text-gray-900 truncate pointer-events-none">
              {nft.name}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ProfileNftList;
