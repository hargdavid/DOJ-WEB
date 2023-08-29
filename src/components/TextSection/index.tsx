type Props = { children: React.ReactNode };

const TextSection = ({ children }: Props) => {
  return (
    <section className="bg-white w-full max-w-6xl m-auto py-6 text-center">
      {children}
    </section>
  );
};

export default TextSection;
