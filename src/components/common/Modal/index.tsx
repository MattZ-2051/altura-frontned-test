import { XCircleIcon } from "@heroicons/react/24/outline";

interface IProps {
  setIsOpen: (isOpen: boolean) => void;
  children: React.ReactNode;
}
const Modal = ({ setIsOpen, children }: IProps) => {
  return (
    <div className="w-[600px] ease-in duration-500 h-[600px] bg-white rounded-lg  drop-shadow-2xl z-20 transition-all">
      <div className="flex p-8 h-[inherit]">
        <XCircleIcon
          className="absolute w-6 h-6 hover:scale-110 top-4 right-8 hover:cursor-pointer"
          onMouseDown={() => setIsOpen(false)}
        />
        <div className="w-full h-full pt-4">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
