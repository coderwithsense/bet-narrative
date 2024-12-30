"use client";

import React from "react";
import { CreatorStoriesProvider } from "@/components/context/FlowContext";

type CreatorStoriesWrapperProps = {
  children: React.ReactNode;
};

const CreatorStoriesWrapper: React.FC<CreatorStoriesWrapperProps> = ({
  children,
}) => {
  return <CreatorStoriesProvider>{children}</CreatorStoriesProvider>;
};

export default CreatorStoriesWrapper;
