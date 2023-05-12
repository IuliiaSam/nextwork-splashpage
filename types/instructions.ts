export interface ApiData {
  title: string;
  getStarted: string;
  hero: HeroProps;
  instructions: string[];
  codeExamples: string[];
  packageJson: {
    title: string;
    script: string;
  };
  devProfiles: DevProfile[];
  usage: UsageProps;
  videoPlayer: videoPlayerProps;
  resources: ResourcesProps;
}

export interface videoPlayerProps {
  videoUrl: string;
  imageUrl: string;
}

export interface UsageProps {
  main: string;
  features: string[];
  videoPlayer: videoPlayerProps;
}

export interface DevProfile {
  name: string;
  image: string;
  title: string;
  linkedIn: string;
  github: string;
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

export interface Theme {
  theme: string;
  checked: boolean;
}

export interface HeroProps {
  title: string;
  getStarted: string;
  subtitle: string;
  image: string;
  chatBubbles: ChatBubbles;
}

export interface ChatBubbles {
  texts: string[];
}

export interface ResourceCardProps {
  title: string;
  subtitle: string;
  image: string;
  link: string;
}

export interface ResourcesProps {
  resourceCards: ResourceCardProps[];
}
