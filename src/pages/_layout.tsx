import Footer from "@/components/Navigation/Footer";
import Header from "@/components/Navigation/Header";
import { useGlobalState } from "@/hooks/GlobalProvider";
import { Inter } from "next/font/google";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  const { isDesktop, isTop, navigation } = useGlobalState();

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charSet="utf-8"></meta>
        <meta lang="sv"></meta>
      </Head>
      <Header isDesktop={isDesktop} isTop={isTop} navigation={navigation} />
      <main className="bg-lime">{children}</main>
      <Footer navigation={navigation} />
    </>
  );
};

export default RootLayout;
