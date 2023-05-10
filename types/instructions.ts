export interface ApiData {
  title: string;
  hero: HeroProps;
  instructions: string[];
  codeExamples: string[];
  packageJson: {
    title: string;
    script: string;
  };
  devProfiles: DevProfile[];
}

export interface DevProfile {
  name: string;
  image: string;
  title: string;
}

export interface UsageInstructions {
  title: string;
  instructions: string[];
  codeExamples: string[];
  packageJson: {
    title: string;
    script: string;
  };
}

export interface MockUpCodeProps {
  codeExample: string;
}

export interface AboutUsProps {
  devProfiles: DevProfile[];
}

export interface TeamProfileCardProps {
  name: string;
  image: string;
  title: string;
}

export interface HeroProps {
  title: string;
  subtitle: string;
  image: string;
  chatBubbles: ChatBubbles
}

export interface ChatBubbles {
  texts: string[];
}