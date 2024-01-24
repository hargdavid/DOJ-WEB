import Link from "next/link";

type Props = { href: string; title: string; variant?: "primary" | "secondary" };

const LinkButton = ({ href, title, variant = "primary" }: Props) => {
  const buttonColor = () => {
    switch (variant) {
      case "secondary":
        return "border-green text-green hover:bg-green";
      case "primary":
      default:
        return "border-brown text-brown hover:bg-brown";
    }
  };

  return (
    <Link
      className={`border-4 px-5 py-3 font-semibold ${buttonColor()} hover:text-white  ease-in-out duration-200 bold`}
      href={href}
    >
      {title}
    </Link>
  );
};

export default LinkButton;
