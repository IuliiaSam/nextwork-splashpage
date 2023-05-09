export interface ApiData {
  title: string;
  instructions: string[];
  codeExamples: string[];
  packageJson: {
    title: string;
    script: string;
  };
  devProfiles: DevProfile[];
  usage: UsageProps;
}

export interface UsageProps {
  main: string;
  features: string[];
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
