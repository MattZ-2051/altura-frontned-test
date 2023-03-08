import { XCircleIcon } from "@heroicons/react/24/outline";

interface IProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  children: React.ReactNode;
}
const Modal = ({ isOpen, setIsOpen, children }: IProps) => {
  return isOpen ? (
    <div className="absolute flex items-center justify-center w-full h-full transition-all bg-black bg-opacity-70">
      <div className="w-[400px] h-[500px] bg-white rounded-lg  drop-shadow-2xl z-20">
        <div className="flex p-8 h-[inherit]">
          <XCircleIcon
            className="absolute w-6 h-6 hover:scale-110 top-4 right-8 hover:cursor-pointer"
            onClick={() => setIsOpen(false)}
          />
          <div className="w-full h-full pt-4">{children}</div>
        </div>
      </div>
    </div>
  ) : null;
};

export default Modal;
