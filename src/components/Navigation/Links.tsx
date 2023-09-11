import { NavigationItem } from "@/types/content/navigation";
import LinkButton from "../LinkButton";
import Link from "next/link";

type Props = { navigation: NavigationItem[] };

const Links = ({ navigation }: Props) => {
  return (
    <>
      {navigation.map((navEl, key) =>
        navEl.isButton ? (
          <LinkButton key={key} href={navEl.path} title={navEl.name} />
        ) : (
          <Link className="hover:underline" key={key} href={navEl.path}>
            {navEl.name}
          </Link>
        )
      )}
    </>
  );
};

export default Links;
