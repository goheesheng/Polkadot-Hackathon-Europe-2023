import { NextApiRequest, NextApiResponse } from "next";
import { Session } from "next-iron-session";
import { addressCheckMiddleWare, withSession } from "./utils";
import { FileReq } from "@_types/nft";
import FormData from "form-data";
import { v4 as uuidv4 } from "uuid";
import { pinFileToIPFS } from "./pinata";

export const config = {
  api: {
    bodyParser: {
      sizeLimit: "10mb", // you can specify more data if needed
    },
  },
};

export default withSession(
  async (req: NextApiRequest & { session: Session }, res: NextApiResponse) => {
    if (req.method === "POST") {
      const { bytes, fileName, contentType } = req.body as FileReq;

      if (!bytes || !fileName || !contentType) {
        return res.status(422).send({ messasge: "Image data are missing" });
      }
      await addressCheckMiddleWare(req, res);

      const buffer = Buffer.from(Object.values(bytes));
      const fileRes = await pinFileToIPFS(buffer, fileName, contentType);

      return res.status(200).send(fileRes.data);
    } else {
      return res.status(422).send({ message: "Invalid endpoint" });
    }
  }
);
