import "./globals.css";
import type { AppProps } from "next/app";
import RootLayout from "./_layout";
import { appWithTranslation } from "next-i18next";
import { GlobalStateProvider } from "@/hooks/GlobalProvider";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <GlobalStateProvider>
      <RootLayout>
        <Component {...pageProps} />
      </RootLayout>
    </GlobalStateProvider>
  );
};

export default appWithTranslation(MyApp);
