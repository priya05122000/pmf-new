import ClientPage from "./ClientPage";
import { getAllProjectCategories } from "@/services/projectCategoryService";
import { getProjectBySlug } from "@/services/projectService";
import { notFound } from "next/navigation";

interface PageProps {
  params: {
    slug: string;
  };
}

// ✅ Facebook / OpenGraph metadata
export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;

  const project = await getProjectBySlug(slug);
  if (!project) return {};

  const imageUrl = `${process.env.NEXT_PUBLIC_API_BASE_URL}/uploads/${project.projectImagePath}`;
  const pageUrl = `https://pmfworld.com/project-view/${slug}`;

  return {
    title: project.title,
    description: project.shortNote || project.longDescription || "",
    openGraph: {
      title: project.title,
      description: project.shortNote || "",
      url: pageUrl,
      type: "article",
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: project.title,
        },
      ],
    },
  };
}

const Page = async ({ params }: PageProps) => {
  const { slug } = await params;

  const [project, projectCategories] = await Promise.all([
    getProjectBySlug(slug),
    getAllProjectCategories(),
  ]);

  if (!project) notFound();

  return (
    <ClientPage
      project={project}
      projectCategories={projectCategories}
    />
  );
};

export default Page;
