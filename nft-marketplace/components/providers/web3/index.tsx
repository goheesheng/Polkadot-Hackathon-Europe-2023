import {
  createContext,
  FunctionComponent,
  ReactNode,
  useContext,
  useState,
} from "react";
import React from "react";
import { development, UseInkathonProvider } from "@scio-labs/use-inkathon";

interface Web3ProviderProps {
  children?: ReactNode;
}

const Web3Context = createContext<any>(null);

const Web3Provider: FunctionComponent<Web3ProviderProps> = ({ children }) => {
  const [web3Api, setWeb3Api] = useState({ test: "Hello Provider!" });
  return (
    <Web3Context.Provider value={web3Api}>{children}</Web3Context.Provider>
  );
};

export function useWeb3() {
  return useContext(Web3Context);
}

export default Web3Provider;
