import ProjectBanner from "./components/ProjectBanner";
import { getAllProjectCategories } from "@/services/projectCategoryService";
import { getAllProjects } from "@/services/projectService";
import ProjectFilter from "./components/ProjectFilter";

export default async function Page() {
  const [projects, categories] = await Promise.all([
    getAllProjects(),
    getAllProjectCategories(),
  ]);

  return (
    <>
      <ProjectBanner />
      <ProjectFilter
        projects={projects || []}
        categories={categories || []}
      />
    </>
  );
}
