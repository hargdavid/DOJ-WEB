import { CheckIcon } from "@heroicons/react/24/solid";

type Props = {
  placeholder: string;
  value: boolean;
  onChange: (val: boolean) => void;
  className?: string;
  name: string;
};

const CheckBox = ({ placeholder, value, onChange, name }: Props) => {
  return (
    <label className="relative flex gap-2">
      <input
        className="relative peer shrink-0
        appearance-none w-4 h-4 border-2 border-green rounded-sm bg-white mt-1
        checked:bg-green checked:border-0
        focus:outline-none focus:ring-offset-0 focus:ring-2 focus:ring-green
        disabled:border-steel-400 disabled:bg-steel-400"
        type="checkbox"
        name={name}
        checked={value}
        onChange={(e) => onChange(e.target.checked)}
      />
      {placeholder}
      <CheckIcon className="absolute w-4 h-4 mt-1 hidden peer-checked:block text-white" />
    </label>
  );
};

export default CheckBox;
