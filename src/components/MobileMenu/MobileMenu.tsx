import { Bars3Icon, CogIcon, XMarkIcon } from "@heroicons/react/24/solid";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

type Props = { children: React.ReactNode; isTop: boolean };

const MobileMenu = ({ children, isTop }: Props) => {
  const [open, setOpen] = useState<boolean>(false);
  const [animationClass, setAnimationClass] = useState<string>("left-full");
  const router = useRouter();

  const onClose = () => {
    setAnimationClass("left-full");

    setTimeout(() => {
      setOpen(false);
    }, 50);
  };

  const onOpen = () => {
    setOpen(true);

    setTimeout(() => {
      setAnimationClass("left-0");
    }, 50);
  };

  useEffect(() => {
    onClose();
  }, [router]);

  return (
    <>
      <button
        onClick={onOpen}
        className={`w-12 ${isTop ? "text-white" : "text-green"} `}
      >
        <Bars3Icon />
      </button>

      {open && (
        <div
          className={`absolute top-0 p-6 w-full h-screen duration-200 bg-lime z-20 ease-in-out ${animationClass}`}
        >
          <div className="flex w-full justify-end">
            <button onClick={onClose} className="w-12">
              <XMarkIcon />
            </button>
          </div>
          <nav className="py-8 flex flex-col items-start gap-6">{children}</nav>
        </div>
      )}
    </>
  );
};

export default MobileMenu;
