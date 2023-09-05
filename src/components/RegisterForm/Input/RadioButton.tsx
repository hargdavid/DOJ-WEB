type Props = {
  id: string;
  value: string | any;
  label: string;
  onChange: () => void;
  defaultChecked?: boolean;
  /* checked: boolean; */
};

const RadioButton = ({ id, value, label, onChange, defaultChecked }: Props) => {
  return (
    <label className="relative flex gap-2">
      <input
        type="radio"
        id={id}
        name={value}
        value={value}
        onChange={onChange}
        defaultChecked={defaultChecked}
        className="relative peer shrink-0
        appearance-none w-4 h-4 border-2 border-green rounded-full bg-white mt-1
        checked:bg-green checked:border-white checked:ring-2 checked:ring-green
        focus:outline-none focus:ring-offset-0 focus:ring-2 focus:ring-green
        disabled:border-steel-400 disabled:bg-steel-400"
      />
      {label}
    </label>
  );
};

export default RadioButton;
