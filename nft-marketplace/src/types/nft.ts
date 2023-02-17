export type Trait = "attack" | "health" | "speed";

export type NftAttribute = {
  trait_type: Trait;
  value: string;
};

export type NftMeta = {
  id?: string,
  price?: number,
  listed?: boolean,
  name: string;
  description: string;
  image: string;
  attributes: NftAttribute[];
};

export type FileReq = {
  bytes: Uint8Array;
  contentType: string;
  fileName: string;
};

export type PinataRes = {
  IpfsHash: string;
  PinSize: number;
  Timestamp: string;
  isDuplicate: boolean;
};

export type Denomintation = {
  ShortForm: number;
  FullForm: number;
};
