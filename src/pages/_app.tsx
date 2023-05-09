import NavBar from "@/components/navbar";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import BottomNav from "@/components/bottomNav";
import Layout from "@/components/layout";
export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
