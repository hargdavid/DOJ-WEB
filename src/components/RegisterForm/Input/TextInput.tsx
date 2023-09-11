type Props = {
  placeholder: string;
  value: string;
  onChange: (val: string) => void;
  className?: string;
  name: string;
};

const TextInput = ({
  placeholder,
  value,
  onChange,
  className,
  name,
}: Props) => {
  return (
    <input
      className={`px-6 py-4 outline-dark-green ${className}`}
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      name={name}
      id={name}
    />
  );
};

export default TextInput;
