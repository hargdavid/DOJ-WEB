type Props = { children: any };

const TD = ({ children }: Props) => {
  return <td className="p-4 border-solid border border-orange">{children}</td>;
};

export default TD;
