import { Link } from "@/types/content/contentPage";
import NextLink from "next/link";

type Props = {
  link: Link;
  children: React.ReactNode;
};

const Link = ({ link, children }: Props) => {
  return (
    <>
      {link.aTarget ? (
        <a
          className="hover:underline text-orange"
          href={link.href}
          target="_blank"
        >
          {children}
        </a>
      ) : (
        <NextLink className="hover:underline text-orange" href={link.href}>
          {children}
        </NextLink>
      )}
    </>
  );
};

export default Link;
