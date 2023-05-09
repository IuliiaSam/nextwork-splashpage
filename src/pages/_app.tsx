import NavBar from "@/components/navbar";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import BottomNav from "@/components/bottomNav";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
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
