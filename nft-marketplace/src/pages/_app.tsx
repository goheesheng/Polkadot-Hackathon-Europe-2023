import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Navbar } from "@ui";
import { UseInkathonProvider } from "@scio-labs/use-inkathon";
import { ChakraProvider } from "@chakra-ui/react";
import { env } from "@shared/environment";
import { getDeployments } from "@deployments/deployment";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ToastContainer />
      <UseInkathonProvider
        appName="NFT!Marketplace"
        defaultChain={env.defaultChain}
        connectOnInit={true}
        deployments={getDeployments()}
      >
        <ChakraProvider>
          <Component {...pageProps} />
        </ChakraProvider>
      </UseInkathonProvider>
    </>
  );
}
