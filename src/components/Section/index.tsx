type Props = { children: React.ReactNode };

const Section = ({ children }: Props) => {
  return (
    <section className="bg-white w-full max-w-6xl m-auto py-6 px-8 text-center gap-4 flex flex-col items-center">
      {children}
    </section>
  );
};

export default Section;
