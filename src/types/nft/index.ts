export type IpfsAttributes = { trait_type: string; value: string }[];
export type IpfsData = {
  attributes: IpfsAttributes;
  description: string;
  image: string;
  name: string;
};
export type NftData = {
  ipfsData: IpfsData;
  owner: string;
  tokenId: number;
};
