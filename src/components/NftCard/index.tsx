import Image from "next/image";
import { useState } from "react";
import { NftIpfsData } from "@/types/nft";
import { formatTokenUri } from "@/utils";
import Modal from "@/components/Modal";
import Accordian from "@/components/Accordian";
import Button from "../Button";

interface IProps {
  nftData: NftIpfsData;
}

const NftCard = ({ nftData }: IProps) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  return (
    <>
      <div
        className="w-[330px] h-[469px] rounded-3xl transition-all ease-in duration-1000  hover:bg-gradient-to-r   hover:cursor-pointer from-pink-500 via-red-500 to-yellow-500 p-1 shadow-xl"
        onClick={() => setIsModalOpen(true)}
      >
        <div className="bg-[#3B3B3B] w-full h-full rounded-3xl">
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
      </div>
      <Modal isOpen={isModalOpen} setIsOpen={setIsModalOpen}>
        <div className="flex flex-col justify-between w-full h-full overflow-auto">
          <h1 className="mt-8 text-3xl text-center">{nftData.name} Details</h1>
          <div className="mt-8">
            <Accordian
              data={[
                { title: "Description", body: nftData.description },
                { title: "Attributes", body: nftData.attributes },
              ]}
            />
          </div>
          <div className="flex justify-center w-full mt-8">
            <Button
              label="See on Opensea"
              classes="!h-[60px] !w-[224px]"
              to="https://opensea.io/"
            />
          </div>
        </div>
      </Modal>
    </>
  );
};

export default NftCard;
