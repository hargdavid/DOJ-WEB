type Props = {
  placeholder: string;
  value: string;
  onChange: (val: string) => void;
  className?: string;
};

const TextInput = ({ placeholder, value, onChange, className }: Props) => {
  return (
    <input
      className={`px-6 py-4 outline-dark-green ${className}`}
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
};

export default TextInput;
