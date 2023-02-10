import { NftMeta } from "@_types/nft";
import axios from "axios";
import FormData from "form-data";
import { v4 as uuidv4 } from "uuid";
import { pinataJWT } from "./utils";

const JWT = `Bearer ${pinataJWT}`;

export const pinJSONToIPFS = async (nft: NftMeta) => {
  const data = JSON.stringify({
    pinataOptions: {
      cidVersion: 1,
    },
    pinataMetadata: {
      name: uuidv4(),
    },
    pinataContent: nft,
  });
  const config = {
    method: "post",
    url: "https://api.pinata.cloud/pinning/pinJSONToIPFS",
    headers: {
      Authorization: JWT,
      "Content-Type": "application/json",
    },
    data: data,
  };
  const jsonRes = await axios(config);
  return jsonRes;
};

export const pinFileToIPFS = async (
  buffer: Buffer,
  fileName: string,
  contentType: string
) => {
  const formData = new FormData();
  formData.append("file", buffer, {
    contentType,
    filename: fileName + "-" + uuidv4(),
  });

  const options = JSON.stringify({
    cidVersion: 0,
  });
  formData.append("pinataOptions", options);
  const config = {
    method: "post",
    url: "https://api.pinata.cloud/pinning/pinFileToIPFS",
    headers: {
      Accept: "text/plain",
      Authorization: JWT,
      "Content-Type": `multipart/form-data; boundary=${formData.getBoundary()}`,
    },
    maxBodyLength: Infinity,
    data: formData,
  };
  const res = await axios(config);
  // const res = await axios.post(
  //   "https://api.pinata.cloud/pinning/pinFileToIPFS",
  //   formData,
  //   {
  //     maxBodyLength: Infinity,
  //     headers: {
  //       "Content-Type": `multipart/form-data; boundary=${formData.getBoundary()}`,
  //       Authorization: JWT,
  //     },
  //   }
  // );
  return res;
};

export const viewFilesInIPFS = async (keys: object) => {
  var config = {
    method: "get",
    url: "https://api.pinata.cloud/data/pinList",
    headers: {
      Authorization: JWT,
    },
    params: { "metadata[keyvalues]": keys },
  };
  try {
    const res = await axios(config);
    return res.data;
  } catch (err) {
    console.log(err);
  }
};

// const fs = require('fs')
// const file = fs.createReadStream('./test.jpg')
// const keys = {"key": "value"}
// pinFileToIPFS(file, "test", keys)
// viewFilesInIPFS({
//     "key": {"value": "value", "op": "eq"}
// })
