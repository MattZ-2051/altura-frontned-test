import { createStore, createEvent, createEffect } from "effector";

import { getIpfsData } from "@/api/nft";
import { NftData } from "@/types/nft";

export const getNftData = createEffect<
  { tokenUri: string; owner: string; tokenId: number }[],
  NftData[]
>(async (tokenData) => {
  return await Promise.all(
    tokenData.map(async ({ tokenUri, owner, tokenId }) => {
      const res = await getIpfsData(tokenUri);
      return { ipfsData: res.data, owner, tokenId };
    })
  );
});

getNftData.doneData.watch((res) => {
  updateNftData(res);
});

const updateNftData = createEvent<NftData[]>();
export const $nfts = createStore<NftData[]>([]).on(
  updateNftData,
  (prevState, payload) => payload
);
