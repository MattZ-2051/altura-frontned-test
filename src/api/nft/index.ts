import axios from "axios";
import { formatTokenUri } from "@/utils";
import { IpfsData } from "@/types/nft";

export const getIpfsData = async (uri: string): Promise<{ data: IpfsData }> => {
  const ipfsUrl = formatTokenUri(uri);
  return await axios.get(ipfsUrl);
};
