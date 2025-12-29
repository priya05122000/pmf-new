import React from "react";
import ClientPage from "./ClientPage";
import { useParams } from "next/navigation";
import { get } from "http";
import { getAllProjectCategories } from "@/services/projectCategoryService";
import { getProjectBySlug } from "@/services/projectService";

const page = async () => {
  const { slug } = useParams();
  if (typeof slug !== "string") {
    throw new Error("Invalid slug parameter");
  }
  const [project, projectCategories] = await Promise.all([
    getProjectBySlug(slug),
    getAllProjectCategories(),
  ]);
  return (
    <div>
      <ClientPage project={project} projectCategories={projectCategories} />
    </div>
  );
};

export default page;
