import NavBar from "@/components/navbar";
import Head from "next/head";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import BottomNav from "@/components/bottomNav";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>NextWork</title>
        <meta
          name="description"
          content="track network requests for server-side rendered components"
        />
      </Head>
      <header>
        <NavBar />
      </header>
      <main className="min-h-screen">
        <Component {...pageProps} />
      </main>
      <footer>
        <BottomNav />
      </footer>
    </>
  );
}
