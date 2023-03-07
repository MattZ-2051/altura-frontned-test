import Image from "next/image";
import { NftIpfsData } from "@/types/nft";
import { formatTokenUri } from "@/utils";

interface IProps {
  nftData: NftIpfsData;
}

const NftCard = ({ nftData }: IProps) => {
  return (
    <>
      <div className="w-[330px] h-[469px] rounded-3xl bg-[#3B3B3B]">
        <Image
          src={formatTokenUri(nftData.image)}
          alt=""
          width={330}
          height={295}
          className="rounded-t-3xl"
        />
        <div className="p-8">
          <p className="text-2xl text-white">{nftData.name}</p>
        </div>
      </div>
    </>
  );
};

export default NftCard;
