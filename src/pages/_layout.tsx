import Footer from "@/components/Navigation/Footer";
import Header from "@/components/Navigation/Header";
import { useGlobalState } from "@/hooks/GlobalProvider";
import { Inter } from "next/font/google";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  const { isDesktop, isTop, navigation, meta } = useGlobalState();

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charSet="utf-8"></meta>
        <meta lang="sv"></meta>
        <title>{meta?.title}</title>
        <meta name="description" content={meta?.description} />
        <meta name="keywords" content={meta?.keywords} />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href={meta?.favicon?.apple.url}
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href={meta?.favicon?.faviconBig.url}
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href={meta?.favicon?.faviconSmall.url}
        />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <Header
        isDesktop={isDesktop}
        isTop={isTop}
        navigation={navigation}
        logo={meta?.logo}
      />
      <main className="bg-lime">{children}</main>
      <Footer navigation={navigation} />
    </>
  );
};

export default RootLayout;
