interface IProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}
const Modal = ({ isOpen, setIsOpen }: IProps) => {
  return isOpen ? (
    <div className="w-[400px] h-[400px] bg-white rounded-lg">
      <h1>Modal Content</h1>
    </div>
  ) : null;
};

export default Modal;
