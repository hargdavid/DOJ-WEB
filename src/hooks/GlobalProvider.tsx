import ContentApi from "@/api/content/page";
import { MetaData, NavigationItem } from "@/types/content/navigation";
import { createContext, useContext, useEffect, useState } from "react";

type GlobalState = {
  isDesktop: boolean;
  isTop: boolean;
  navigation: NavigationItem[];
  meta: MetaData | undefined;
};

const GlobalStateContext = createContext<GlobalState>({
  isDesktop: false,
  isTop: true,
  navigation: [],
  meta: undefined,
});

export const GlobalStateProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [isDesktop, setIsDesktop] = useState<boolean>(false);
  const [isTop, setIsTop] = useState<boolean>(true);
  const [navigation, setNavigation] = useState<NavigationItem[]>([]);
  const [meta, setMeta] = useState<MetaData>();

  const isDesktopSize = (screenSize: number) => {
    return setIsDesktop(screenSize > 768);
  };

  const isTopOfPage = (scroll: number) => {
    return setIsTop(scroll < 30);
  };

  useEffect(() => {
    if (window) {
      isDesktopSize(window.innerWidth);

      window.addEventListener("resize", () => isDesktopSize(window.innerWidth));
      window.addEventListener("scroll", () => isTopOfPage(window.scrollY));

      return () => {
        window.removeEventListener("resize", () =>
          isDesktopSize(window.innerWidth)
        );
        window.removeEventListener("scroll", () => isTopOfPage(window.scrollY));
      };
    }
  }, []);

  useEffect(() => {
    (async () => {
      const { navigation, meta } = await ContentApi.getNavigation();
      setNavigation(navigation);
      setMeta(meta);
    })();
  }, []);

  return (
    <GlobalStateContext.Provider value={{ isDesktop, isTop, navigation, meta }}>
      {children}
    </GlobalStateContext.Provider>
  );
};

export const useGlobalState = () => {
  const { isDesktop, isTop, navigation, meta } = useContext(GlobalStateContext);
  return { isDesktop, isTop, navigation, meta };
};
