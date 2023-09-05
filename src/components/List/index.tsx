type Props = { elements: React.ReactNode[] };

const List = ({ elements }: Props) => {
  return (
    <ul className="flex flex-col md:flex-row gap-4 justify-between">
      <>
        {elements.map((element, key) => (
          <li key={key} className="flex-auto">
            {element}
          </li>
        ))}
      </>
    </ul>
  );
};

export default List;
