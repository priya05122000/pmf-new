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
  const description =
    project.shortNote || project.longDescription || "";

  return {
    title: project.title,
    description,

    openGraph: {
      title: project.title,
      description,
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
    twitter: {
      card: "summary_large_image",
      title: project.title,
      description,
      images: [imageUrl],
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