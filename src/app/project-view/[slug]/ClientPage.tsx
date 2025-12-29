"use client";

import React from "react";
import HeroSection from "./components/HeroSection";
import Description from "./components/Description";
import { Project, ProjectCategory } from "@/types";

interface Props {
  project: Project;
  projectCategories: ProjectCategory[];
}

const ClientPage = ({ project, projectCategories }: Props) => {
  return (
    <div>
      <HeroSection
        project={project}
        projectCategories={projectCategories}
      />
      <Description descriptions={project.descriptions ?? []} />
    </div>
  );
};

export default ClientPage;
