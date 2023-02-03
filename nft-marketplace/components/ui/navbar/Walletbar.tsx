/* eslint-disable @next/next/no-img-element */

import { Menu } from "@headlessui/react";
import Link from "next/link";
import { FunctionComponent } from "react";
import { InjectedAccountWithMeta } from "@polkadot/extension-inject/types";
import { useInkathon } from "@scio-labs/use-inkathon";
import { truncateHash } from "@shared/truncateHash";
import { VStack, HStack, Text } from "@chakra-ui/react";
import { AiOutlineCheckCircle } from "react-icons/ai";

export interface WalletbarProps {
  children?: React.ReactNode;
}
function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const Walletbar: FunctionComponent<WalletbarProps> = () => {
  const {
    connect,
    disconnect,
    isConnecting,
    isConnected,
    account,
    accounts,
    setAccount,
  } = useInkathon();

  if (isConnecting) {
    return (
      <div>
        <button
          onClick={() => {}}
          type="button"
          className="inline-flex items-center px-3 py-1.5 border border-transparent text-xs font-medium rounded-full shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Loading ...
        </button>
      </div>
    );
  }

  if (account) {
    return (
      <Menu as="div" className="ml-3 relative">
        <div>
          <Menu.Button className="inline-flex items-center px-3 py-1.5 border border-transparent text-xs font-medium rounded-full shadow-sm text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            <VStack spacing={0.5}>
              <Text fontSize="sm">{account.meta?.name}</Text>
              <Text fontSize="xs" fontWeight="normal" opacity={0.75}>
                {" "}
                {truncateHash(account.address, 8)}
              </Text>
            </VStack>
          </Menu.Button>
        </div>

        <Menu.Items className="z-10 origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
          {(accounts || []).map((acc) => (
            <Menu.Item
              key={acc.address}
              disabled={acc.address === account.address}
            >
              {({ active }) => (
                <Link legacyBehavior href="/profile">
                  <a
                    className={classNames(
                      active ? "bg-gray-100" : "",
                      "block px-4 py-2 text-sm text-gray-700"
                    )}
                  >
                    <VStack align="start" spacing={0}>
                      <HStack>
                        <Text>{acc.meta?.name}</Text>
                        {acc.address === account.address && (
                          <AiOutlineCheckCircle size={16} />
                        )}
                      </HStack>
                      <Text fontSize="xs">{truncateHash(acc.address, 10)}</Text>
                    </VStack>
                  </a>
                </Link>
              )}
            </Menu.Item>
          ))}
        </Menu.Items>
      </Menu>
    );
  }

  if (isConnected) {
    return (
      <div>
        <button
          onClick={connect}
          type="button"
          className="inline-flex items-center px-3 py-1.5 border border-transparent text-xs font-medium rounded-full shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Connect Wallet
        </button>
      </div>
    );
  } else {
    return (
      <div>
        <button
          onClick={() => {
            window.open("https://polkadot.js.org/", "_ blank");
          }}
          type="button"
          className="inline-flex items-center px-3 py-1.5 border border-transparent text-xs font-medium rounded-full shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          No Wallet
        </button>
      </div>
    );
  }
};

export default Walletbar;
