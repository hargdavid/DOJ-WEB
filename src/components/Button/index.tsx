type Props = {
  title: string;
  onClick: (e: React.MouseEvent) => void;
  disabled?: boolean;
};

const Button = ({ title, onClick, disabled }: Props) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className="border-4 border-green px-5 py-3 bg-green text-white
       font-semibold hover:text-green hover:bg-white 
       ease-in-out duration-200 disabled:bg-gray disabled:border-gray disabled:hover:text-black disabled:text-black"
    >
      {title}
    </button>
  );
};

export default Button;
