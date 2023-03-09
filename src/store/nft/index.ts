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

getNftData.failData.watch(() => {
  updateNftData(null);
});

const updateNftData = createEvent<NftData[] | null>();
export const $nfts = createStore<NftData[] | null>([]).on(
  updateNftData,
  (prevState, payload) => payload
);
