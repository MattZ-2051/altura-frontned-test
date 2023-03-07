export const formatTokenUri = (tokenUri: string): string => {
  return tokenUri.includes("ipfs")
    ? `https://ipfs.io/ipfs/${tokenUri.split("ipfs://")[1]}`
    : "";
};
