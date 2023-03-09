import { createStore, createEvent, createEffect } from "effector";

import { getIpfsData } from "@/api/nft";
import { NftData } from "@/types/nft";

export const getNftDataFx = createEffect<
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

getNftDataFx.doneData.watch((res) => {
  updateNftData(res);
});

getNftDataFx.failData.watch(() => {
  updateNftData(null);
});

const updateNftData = createEvent<NftData[] | null>();
export const $nfts = createStore<NftData[] | null>([]).on(
  updateNftData,
  (prevState, payload) => payload
);
