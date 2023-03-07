import Head from "next/head";
import { Inter } from "next/font/google";
import { nftContract } from "@/web3/contracts";
import { useContract, useProvider } from "wagmi";
import { useEffect, useState } from "react";
import { BigNumber } from "ethers";
import NftCard from "@/components/NftCard";
import { formatTokenUri } from "@/utils";
import { NftIpfsData } from "@/types/nft";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const provider = useProvider();
  const contract = useContract({
    ...nftContract,
    signerOrProvider: provider,
  });
  const [nftData, setNftData] = useState<NftIpfsData>();
  useEffect(() => {
    (async () => {
      const uri = await contract?.tokenURI(BigNumber.from(1));
      if (uri) {
        const ipfsUri = formatTokenUri(uri);
        fetch(ipfsUri).then(async (res) => setNftData(await res.json()));
      }
    })();
  }, [contract]);

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="flex items-center justify-center w-screen h-screen">
          {nftData && <NftCard nftData={nftData} />}
        </div>
      </main>
    </>
  );
}
