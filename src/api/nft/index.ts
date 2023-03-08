import axios from "axios";
import { formatTokenUri } from "@/utils";
import { NftIpfsData } from "@/types/nft";

export const getIpfsData = async (
  uri: string
): Promise<{ data: NftIpfsData }> => {
  const ipfsUrl = formatTokenUri(uri);
  console.log("here");
  return await axios.get(ipfsUrl);
};
