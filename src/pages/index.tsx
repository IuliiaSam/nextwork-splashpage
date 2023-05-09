import Image from "next/image";
import { Inter } from "next/font/google";
import BottomNav from "@/components/bottomNav";
import Usage from "@/components/setup";
import { GetStaticProps } from "next";
import { getHomePageData } from "../../.lib/api";
import { UsageInstructions, ApiData } from "../../types/instructions";
import Setup from "@/components/setup";
import AboutUs from "@/components/aboutUs";

export const getStaticProps: GetStaticProps<ApiData> = async () => {
  const { title, instructions, codeExamples, packageJson, devProfiles } =
    await getHomePageData();
  return {
    props: {
      title,
      instructions,
      codeExamples,
      packageJson,
      devProfiles,
    },
  };
};

const Home: React.FC<ApiData> = ({
  title,
  instructions,
  codeExamples,
  packageJson,
  devProfiles,
}) => {
  return (
    <div>
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
