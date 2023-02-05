import { getSubstrateChain, SubstrateChain } from '@scio-labs/use-inkathon'

/**
 * Environment Variables defined in `.env.local`.
 * See `env.local.example` for documentation.
 */
export const env = {
  
  defaultChain: getSubstrateChain(process.env.NEXT_PUBLIC_DEFAULT_CHAIN!)!,
  supportedChains: (!!process.env.NEXT_PUBLIC_SUPPORTED_CHAINS
    ? JSON.parse(process.env.NEXT_PUBLIC_SUPPORTED_CHAINS!)
    : [process.env.NEXT_PUBLIC_DEFAULT_CHAIN!]
  ).map(getSubstrateChain) as SubstrateChain[],
}
