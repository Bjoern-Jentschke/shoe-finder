import Head from "next/head.js";
import { Lato } from "next/font/google";
import Navigation from "../Navigation/Navigation";

const lato = Lato({ subsets: ["latin"], weight: "400" });

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Step&Step</title>
      </Head>
      <main className={lato.className}>
        {children}
        <Navigation />
      </main>
    </>
  );
}
