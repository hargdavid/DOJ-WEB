import "./globals.css";
import type { AppProps } from "next/app";
import RootLayout from "./_layout";

import { appWithTranslation } from "next-i18next";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <RootLayout>
      <Component {...pageProps} />
    </RootLayout>
  );
};

export default appWithTranslation(MyApp);
