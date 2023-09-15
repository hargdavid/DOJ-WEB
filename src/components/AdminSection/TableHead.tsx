type Props = {
  children: any;
};

const TableHead = ({ children }: Props) => {
  return <th className="p-4 bg-orange border border-orange">{children}</th>;
};

export default TableHead;
