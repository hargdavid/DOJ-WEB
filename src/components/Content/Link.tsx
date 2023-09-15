import { Link } from "@/types/content/contentPage";
import NextLink from "next/link";

type Props = {
  link: Link;
  children: React.ReactNode;
  className?: string;
};

const Link = ({ link, children, className = "" }: Props) => {
  return (
    <>
      {link.aTarget ? (
        <a
          className={`hover:underline text-orange ${className}`}
          href={link.href}
          target="_blank"
        >
          {children}
        </a>
      ) : (
        <NextLink
          className={`hover:underline text-orange ${className}`}
          href={link.href}
        >
          {children}
        </NextLink>
      )}
    </>
  );
};

export default Link;
