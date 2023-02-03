import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Navbar } from "../components/ui";
import { UseInkathonProvider } from "@scio-labs/use-inkathon";
import { env } from "@shared/environment";
export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <UseInkathonProvider
        appName="NFT!Marketplace"
        defaultChain={env.defaultChain}
        connectOnInit={true}
      >
        <Component {...pageProps} />
      </UseInkathonProvider>
    </>
  );
}