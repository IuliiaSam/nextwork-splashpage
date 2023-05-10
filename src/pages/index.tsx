import Image from "next/image";
import { Inter } from "next/font/google";
import BottomNav from "@/components/bottomNav";
import Usage from "@/components/setup";
import { GetStaticProps } from "next";
import { getHomePageData } from "../../.lib/api";
import { UsageInstructions, ApiData } from "../../types/instructions";
import Hero from "@/components/hero";
import Setup from "@/components/setup";
import AboutUs from "@/components/aboutUs";

export const getStaticProps: GetStaticProps<ApiData> = async () => {
  const { title, hero, instructions, codeExamples, packageJson, devProfiles } =
    await getHomePageData();
  return {
    props: {
      title,
      hero,
      instructions,
      codeExamples,
      packageJson,
      devProfiles,
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
}) => {
  console.log('hero', hero);
  return (
    <div>
      <Hero 
        title={hero.title}
        subtitle={hero.subtitle}
        image={hero.image}
        chatBubbles={hero.chatBubbles} />
      <div className="flex items-center ">
        <div className="bg-base-100 text-base-content mx-auto min-h-screen max-w-md md:max-w-full">
          <Setup
            title={title}
            instructions={instructions}
            codeExamples={codeExamples}
            packageJson={packageJson}
          />
        </div>
      </div>
      <AboutUs devProfiles={devProfiles} />
    </div>
  );
};

export default Home;
