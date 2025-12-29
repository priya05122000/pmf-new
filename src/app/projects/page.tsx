import Projects from "./components/Projects";
import ProjectBanner from "./components/ProjectBanner";
import { getAllProjectCategories } from "@/services/projectCategoryService";
import { getAllProjects } from "@/services/projectService";

export default async function Page() {
  const [projects, categories] = await Promise.all([
    getAllProjects(),
    getAllProjectCategories(),
  ]);

  return (
    <>
      <ProjectBanner />
      <Projects
        projects={projects || []}
        projectCategories={categories || []}
      />
    </>
  );
}
