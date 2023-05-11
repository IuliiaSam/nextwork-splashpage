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
import Resources from "@/components/resources";
import { log } from "console";

export const getStaticProps: GetStaticProps<ApiData> = async () => {
  const { title, hero, instructions, codeExamples, packageJson, devProfiles, usage, resources } =
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
      resources,
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
  resources,
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
      <Resources {...resources} />
      <AboutUs devProfiles={devProfiles} />
    </div>
  );
};

export default Home;
