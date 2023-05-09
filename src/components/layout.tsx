import NavBar from "@/components/navbar";
import BottomNav from "@/components/bottomNav";
import { LayoutProps } from "../../types/instructions";
import Head from "next/head";
const Layout: React.FC<LayoutProps> = ({ children }) => {
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
      <main className="min-h-screen">{children}</main>
      <footer>
        <BottomNav />
      </footer>
    </>
  );
};

export default Layout;
