import Head from "next/head";
import { Inter } from "next/font/google";
import { nftContract } from "@/web3/contracts";
import { useContract, useContractReads, useProvider } from "wagmi";
import { useEffect, useState } from "react";
import { BigNumber, ethers } from "ethers";
import NftCard from "@/components/NftCard";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const provider = useProvider();
  const contract = useContract({
    ...nftContract,
    signerOrProvider: provider,
  });
  const [tokenIds, setTokenIds] = useState<number[]>();

  useEffect(() => {
    (async () => {
      const uri = await contract?.tokenURI(BigNumber.from(1));
      fetch(uri as string).then((res) => console.log("res", res.json()));
    })();
  }, []);

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
          <NftCard />
        </div>
      </main>
    </>
  );
}
