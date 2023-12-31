type Props = {
  placeholder: string;
  value: string;
  onChange: (val: string) => void;
  className?: string;
  name: string;
  type?: "text" | "password";
  error?: boolean;
};

const TextInput = ({
  placeholder,
  value,
  onChange,
  className,
  name,
  type = "text",
  error,
}: Props) => {
  return (
    <input
      className={`px-6 py-4 outline-dark-green border rounded-md ${className} ${
        error && "border-yellow outline-yellow"
      }`}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      name={name}
      id={name}
      autoComplete={type === "password" ? "current-password" : ""}
    />
  );
};

export default TextInput;
