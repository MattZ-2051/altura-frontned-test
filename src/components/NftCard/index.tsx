import Image from "next/image";
import { useState } from "react";
import { NftData } from "@/types/nft";
import { formatTokenUri } from "@/utils";
import Modal from "@/components/common/Modal";
import Accordian from "@/components/common/Accordian";
import Button from "../common/Button";

interface IProps {
  nftData: NftData;
}

const NftCard = ({ nftData }: IProps) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  return (
    <div
      className="w-[330px] h-[469px] rounded-3xl hover:bg-gradient-to-r   hover:cursor-pointer from-pink-500 via-red-500 to-yellow-500 p-1 shadow-xl "
      onClick={() => setIsModalOpen(true)}
    >
      <div className="bg-[#3B3B3B] w-full h-full rounded-3xl">
        <Image
          src={formatTokenUri(nftData.ipfsData.image)}
          alt=""
          width={330}
          height={295}
          className="rounded-t-3xl"
        />
        <div className="p-8">
          <p className="text-2xl text-white">{nftData.ipfsData.name}</p>
        </div>
      </div>
      {isModalOpen && (
        <div className="absolute top-0 left-0">
          <div className="flex items-center justify-center w-screen h-screen transition-all bg-black bg-opacity-70">
            <Modal setIsOpen={setIsModalOpen}>
              <div className="flex flex-col justify-between w-full h-full overflow-auto">
                <h1 className="mt-8 text-3xl text-center">
                  {nftData.ipfsData.name} Details
                </h1>
                <div className="mt-8">
                  <Accordian
                    data={[
                      {
                        title: "Description",
                        body: nftData.ipfsData.description,
                      },
                      {
                        title: "Attributes",
                        body: nftData.ipfsData.attributes,
                      },
                      {
                        title: "Owner",
                        body: nftData.owner,
                      },
                    ]}
                  />
                </div>
                <div className="flex justify-center w-full mt-8">
                  <Button
                    label="See on Opensea"
                    classes="!h-[60px] !w-[224px]"
                    to={`https://opensea.io/assets/ethereum/0x8a90cab2b38dba80c64b7734e58ee1db38b8992e/${nftData.tokenId}`}
                  />
                </div>
              </div>
            </Modal>
          </div>
        </div>
      )}
    </div>
  );
};

export default NftCard;
