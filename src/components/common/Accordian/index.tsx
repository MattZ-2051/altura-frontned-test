import { useState } from "react";
import { AccordianData } from "./types";
import { XCircleIcon, ArrowDownIcon } from "@heroicons/react/24/outline";

interface IProps {
  data: AccordianData;
}
const Accordian = ({ data }: IProps) => {
  const [textIndex, setTextIndex] = useState<number | null>(null);

  return (
    <>
      {data.map(({ title, body }, index) => (
        <div
          className={`bg-white border border-neutral-200 hover:cursor-pointer px-2 relative ${
            index === 0 && "rounded-t-lg"
          } ${index === data.length - 1 && "rounded-b-lg"}`}
          key={index}
        >
          {textIndex === index && (
            <XCircleIcon
              className="absolute w-6 h-6 right-4 top-4 hover:scale-110 hover:cursor-pointer"
              onClick={() => setTextIndex(null)}
            />
          )}
          <div
            className="flex items-center justify-between w-full h-full"
            onClick={() => setTextIndex(index)}
          >
            <h2>
              <p className="px-5 py-4 text-base text-left">{title}</p>
            </h2>
            {textIndex !== index && (
              <ArrowDownIcon
                className="w-4 h-4 mr-4 right-4 top-4 hover:scale-110 hover:cursor-pointer"
                onClick={() => setTextIndex(index)}
              />
            )}
          </div>

          <div className="px-5 py-4">
            {textIndex === index &&
              (body instanceof Array ? (
                body.map((attribute) => (
                  <div
                    key={attribute.trait_type}
                    className="transition-all duration-1000 ease-in-out"
                  >
                    <div className="flex justify-between">
                      <p>Trait Type</p>
                      <p>{attribute.trait_type}</p>
                    </div>
                    <div className="flex justify-between">
                      <p>Value</p>
                      <p>
                        {attribute.value.length > 30
                          ? attribute.value.slice(0, 30) + "..."
                          : attribute.value}
                      </p>
                    </div>
                  </div>
                ))
              ) : (
                <p className="whitespace-normal">{body}</p>
              ))}
          </div>
        </div>
      ))}
    </>
  );
};

export default Accordian;
