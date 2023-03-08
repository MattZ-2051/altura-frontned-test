import { createStore, createEvent, createEffect } from "effector";

import { getIpfsData } from "@/api/nft";
import { NftIpfsData } from "@/types/nft";

export const getIpfsDataFx = createEffect<
  { tokenUris: string[] },
  NftIpfsData[]
>(async ({ tokenUris }) => {
  return await Promise.all(
    tokenUris.map(async (uri) => {
      const res = await getIpfsData(uri);
      return res.data;
    })
  );
});

getIpfsDataFx.doneData.watch((res) => {
  updateNftData(res);
});

const updateNftData = createEvent<NftIpfsData[]>();
export const $nfts = createStore<NftIpfsData[]>([]).on(
  updateNftData,
  (prevState, payload) => payload
);
