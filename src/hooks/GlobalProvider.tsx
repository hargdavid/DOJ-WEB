import { LoginApi } from "@/api/auth/login";
import ContentApi from "@/api/content/page";
import { LoginFormType } from "@/components/LoginForm";
import { MetaData, NavigationItem, Social } from "@/types/content/navigation";
import { createContext, useContext, useEffect, useState } from "react";

type GlobalState = {
  isDesktop: boolean;
  isTop: boolean;
  navigation: NavigationItem[];
  meta: MetaData | undefined;
  isLoggedIn: boolean;
  login: (loginForm: LoginFormType) => Promise<void>;
  social: Social | undefined;
};

const GlobalStateContext = createContext<GlobalState>({
  isDesktop: false,
  isTop: true,
  navigation: [],
  meta: undefined,
  isLoggedIn: false,
  login: async () => {},
  social: undefined,
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
  const [social, setSocial] = useState<Social>();
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  const isDesktopSize = (screenSize: number) => {
    return setIsDesktop(screenSize > 768);
  };

  const isTopOfPage = (scroll: number) => {
    return setIsTop(scroll < 30);
  };

  const login = async (loginForm: LoginFormType) => {
    try {
      await LoginApi.postLogin(loginForm);

      setIsLoggedIn(true);
    } catch (error) {
      throw error;
    }
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
      setSocial(meta.social);
    })();
  }, []);

  return (
    <GlobalStateContext.Provider
      value={{ isDesktop, isTop, navigation, meta, isLoggedIn, login, social }}
    >
      {children}
    </GlobalStateContext.Provider>
  );
};

export const useGlobalState = () => {
  const { isDesktop, isTop, navigation, meta, isLoggedIn, login, social } =
    useContext(GlobalStateContext);
  return { isDesktop, isTop, navigation, meta, isLoggedIn, login, social };
};
