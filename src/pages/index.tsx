import Image from "next/image";
import { Inter } from "next/font/google";
import BottomNav from "@/components/bottomNav";
import { GetStaticProps } from "next";
import { getHomePageData } from "../../.lib/api";
import { UsageInstructions, ApiData } from "../../types/instructions";
import Hero from "@/components/hero";
import Setup from "@/components/setup";
import Usage from "@/components/usage";
import AboutUs from "@/components/aboutUs";

export const getStaticProps: GetStaticProps<ApiData> = async () => {
  const { title, hero, instructions, codeExamples, packageJson, devProfiles, usage } =
    await getHomePageData();
  return {
    props: {
      title,
      hero,
      instructions,
      codeExamples,
      packageJson,
      devProfiles,
      usage,
    },
  };
};

const Home: React.FC<ApiData> = ({
  title,
  hero,
  instructions,
  codeExamples,
  packageJson,
  devProfiles,
  usage,
}) => {
  return (
    <div>
      <Hero 
        title={hero.title}
        subtitle={hero.subtitle}
        image={hero.image}
        chatBubbles={hero.chatBubbles} 
      />
      <Setup
        title={title}
        instructions={instructions}
        codeExamples={codeExamples}
        packageJson={packageJson}
      />
      <Usage {...usage} />
      <AboutUs devProfiles={devProfiles} />
    </div>
  );
};

export default Home;
