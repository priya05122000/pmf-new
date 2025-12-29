import ClientPage from "./ClientPage";
import { getAllProjectCategories } from "@/services/projectCategoryService";
import { getProjectBySlug } from "@/services/projectService";
import { notFound } from "next/navigation";

interface PageProps {
  params: {
    slug: string;
  };
}

/**
 * ✅ SAFE OpenGraph metadata
 * - Wrapped in try/catch
 * - Prevents dev crashes
 * - Facebook reads this on live domain
 */
export async function generateMetadata({ params }: PageProps) {
  try {
    const { slug } = params;

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
  } catch (error) {
    console.error("generateMetadata failed:", error);
    return {};
  }
}

const Page = async ({ params }: PageProps) => {
  const { slug } = params;

  let project = null;
  let projectCategories = [];

  try {
    [project, projectCategories] = await Promise.all([
      getProjectBySlug(slug),
      getAllProjectCategories(),
    ]);
  } catch (error) {
    console.error("Page data fetch failed:", error);
  }

  if (!project) {
    notFound();
  }

  return (
    <ClientPage
      project={project}
      projectCategories={projectCategories}
    />
  );
};

export default Page;
