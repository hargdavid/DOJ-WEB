type Props = {
  onClick: (e: React.MouseEvent) => void;
  disabled?: boolean;
  children: React.ReactNode;
  outlined?: boolean;
};

const Button = ({ children, onClick, disabled, outlined = false }: Props) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`border-4 border-green px-5 py-3 bg-green text-white
       font-semibold hover:text-green hover:bg-white 
       ease-in-out duration-200 disabled:bg-gray disabled:border-gray disabled:hover:text-black disabled:text-black bold
        ${outlined && "bg-opacity-0 border-black text-black"}
       `}
    >
      {children}
    </button>
  );
};

export default Button;
