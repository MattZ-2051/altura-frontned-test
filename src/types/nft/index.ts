export type IpfsAttributes = { trait_type: string; value: string }[];

export type NftIpfsData = {
  attributes: IpfsAttributes;
  description: string;
  image: string;
  name: string;
};
