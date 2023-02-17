import { withIronSession, Session } from "next-iron-session";
import { development } from "@contracts/rmrk-nft/address.json";
import { NextApiRequest, NextApiResponse } from "next";
import contractJson from "../../../contracts/rmrk-nft/metadata.json";
import { ContractIds } from "@deployments/deployment";
import { web3Accounts } from "@polkadot/extension-dapp";
import {
  cryptoWaitReady,
  decodeAddress,
  signatureVerify,
} from "@polkadot/util-crypto";
import { u8aToHex } from "@polkadot/util";

const targetNetwork = process.env.NEXT_PUBLIC_DEFAULT_CHAIN as string;
export const contractAddress = development as string;
export const pinataApiKey = process.env.PINATA_API_KEY as string;
export const pinataSecretApiKey = process.env.PINATA_SECRET_API_KEY as string;
export const pinataJWT = process.env.PINATA_JWT as string;

export function withSession(handler: any) {
  return withIronSession(handler, {
    password: process.env.SECRET_COOKIE_PASSWORD as string,
    cookieName: "nft-auth-session",
    cookieOptions: {
      secure: process.env.NEXT_PUBLIC_PRODUCTION_MODE === "true" ? true : false,
    },
  });
}

export const addressCheckMiddleWare = async (
  req: NextApiRequest & { session: Session },
  res: NextApiResponse
) => {
  return new Promise((resolve, reject) => {
    const message = JSON.stringify(req.session.get("message-session"));
    const publicKey = decodeAddress(req.body.address);
    const hexPublicKey = u8aToHex(publicKey);
    const isValid = signatureVerify(
      message,
      req.body.signature,
      hexPublicKey
    ).isValid;

    if (isValid) {
      resolve("Correct Address");
    } else {
      reject("Wrong Address");
    }
  });
};
