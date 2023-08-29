import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Inter } from "next/font/google";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Head>
        <meta charSet="utf-8"></meta>
        <meta lang="sv"></meta>
      </Head>
      <Header />
      <main className="bg-lime">{children}</main>
      <Footer />
    </>
  );
};

export default RootLayout;
