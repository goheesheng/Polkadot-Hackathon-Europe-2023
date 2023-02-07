
import { withIronSession } from "next-iron-session";
import { development } from '@contracts/psp34-nft/address.json';

const targetNetwork = process.env.NEXT_PUBLIC_DEFAULT_CHAIN as string;
export const contractAddress = development as string;

export function withSession(handler: any){
    return withIronSession(handler, {
        password: process.env.SECRET_COOKIE_PASSWORD as string,
        cookieName: "nft-auth-session", 
        cookieOptions: {
            secure: process.env.NEXT_PUBLIC_PRODUCTION_MODE === "true" ? true: false
        }
    } ) 
}