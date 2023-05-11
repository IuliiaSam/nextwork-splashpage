import { GetStaticProps } from "next";
import { getHomePageData } from "../../.lib/api";
import { ApiData } from "../../types/instructions";
import Hero from "@/components/hero";
import Setup from "@/components/setup";
import Usage from "@/components/usage";
import AboutUs from "@/components/aboutUs";
import Resources from "@/components/resources";

export const getStaticProps: GetStaticProps<ApiData> = async () => {
  const {
    title,
    hero,
    instructions,
    codeExamples,
    packageJson,
    devProfiles,
    usage, resources,
    videoPlayer,
  } = await getHomePageData();
  return {
    props: {
      title,
      hero,
      instructions,
      codeExamples,
      packageJson,
      devProfiles,
      usage,
      videoPlayer,
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
  videoPlayer,
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
      <Usage {...usage} videoPlayer={videoPlayer} />
      <Resources {...resources} />
      <AboutUs devProfiles={devProfiles} />
    </div>
  );
};

export default Home;
