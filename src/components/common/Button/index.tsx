interface IProps {
  label: string;
  classes?: string;
  to?: string;
}
const Button = ({ label, classes, to }: IProps) => {
  return (
    <>
      {to ? (
        <a
          href={to}
          target="_blank"
          rel="noreferrer"
          className={`bg-primary  w-56 h-16 rounded-xl text-white ${classes} hover:cursor-pointer hover:bg-opacity-80`}
        >
          <div className="flex items-center justify-center w-full h-full">
            {label}
          </div>
        </a>
      ) : (
        <button
          className={`bg-primary  w-56 h-16 rounded-xl text-white ${classes} hover:cursor-pointer hover:bg-opacity-80`}
        >
          {label}
        </button>
      )}
    </>
  );
};

export default Button;
