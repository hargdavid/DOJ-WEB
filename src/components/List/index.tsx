type Props = { elements: React.ReactNode[] };

const List = ({ elements }: Props) => {
  return (
    <ul className="flex flex-col md:flex-row gap-4 justify-between h-56">
      <>
        {elements.map((element, key) => (
          <li key={key} className="flex-auto h-full">
            {element}
          </li>
        ))}
      </>
    </ul>
  );
};

export default List;
