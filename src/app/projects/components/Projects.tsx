import React, { FC } from "react";
import Section from "@/components/common/Section";
import ClientProjects from "./ClientProjects";

/* ================= TYPES ================= */

interface ProjectCategory {
  id: string;
  name: string;
}

interface Project {
  id: string;
  title: string;
  projectImagePath: string;
  longDescription: string;
  location?: string;
  category_id: string;
  active: boolean;
  updated_at: string;
}

interface ProjectsProps {
  projects: Project[];
  projectCategories: ProjectCategory[];
}

/* ================= MAIN ================= */

const Projects: FC<ProjectsProps> = ({
  projects,
  projectCategories,
}) => {
  return (
    <Section aria-label="Recent Projects">
      <div className="bg-(--gray) py-10 sm:sm:py-16 lg:py-20 rounded-md">
        <main>
          <ClientProjects projects={projects} projectCategories={projectCategories} />
        </main>
      </div>
    </Section>
  );
};

export default Projects;
