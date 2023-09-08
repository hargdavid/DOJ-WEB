import Link from "next/link";

type Props = { href: string; title: string };

const LinkButton = ({ href, title }: Props) => {
  return (
    <Link
      className="border-4 border-green px-5 py-3 text-green font-semibold hover:text-white hover:bg-green ease-in-out duration-200 bold"
      href={href}
    >
      {title}
    </Link>
  );
};

export default LinkButton;
