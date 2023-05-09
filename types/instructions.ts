import React, { ReactNode } from "react";

export interface ApiData {
  title: string;
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

export interface LayoutProps {
  children: ReactNode;
}

export interface Theme {
  theme: string;
  checked: boolean;
}
