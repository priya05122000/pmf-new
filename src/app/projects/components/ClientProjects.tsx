"use client";

import React, { FC, memo, useMemo, useState } from "react";
import Image from "next/image";
import Paragraph from "@/components/common/Paragraph";
import Span from "@/components/common/Span";
import CategoryList from "@/components/common/CategoryList";
import { useRouter } from "next/navigation";

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

const getImageUrl = (path?: string | null) => {
  if (!path || path.trim() === "") return null;
  return `${process.env.NEXT_PUBLIC_API_BASE_URL}/uploads/${path}`;
};

const formatDateWithOrdinal = (dateString: string) => {
  const date = new Date(dateString);
  const day = date.getDate();
  const year = date.getFullYear();
  const month = date.toLocaleString("en-US", { month: "long" });
  const getOrdinal = (n: number) => {
    if (n > 3 && n < 21) return "th";
    switch (n % 10) {
      case 1:
        return "st";
      case 2:
        return "nd";
      case 3:
        return "rd";
      default:
        return "th";
    }
  };
  return `${day}${getOrdinal(day)} ${month}, ${year}`;
};

const ProjectCard: FC<{
  project: Project;
  categoryName?: string;
  onClick: () => void;
}> = memo(({ project, categoryName, onClick }) => {
  const imageUrl = getImageUrl(project.projectImagePath);
  return (
    <article
      className="rounded-md shadow-none flex flex-col cursor-pointer focus:outline-none"
      tabIndex={0}
      onClick={onClick}
      onKeyDown={(e) => e.key === "Enter" && onClick()}
    >
      <div className="overflow-hidden rounded-md">
        {imageUrl ? (
          <Image
            src={imageUrl}
            alt={project.title}
            width={350}
            height={200}
            className="w-full h-48 object-cover"
          />
        ) : (
          <div className="flex items-center justify-center bg-(--gray)">No Image</div>
        )}
      </div>
      <div className="flex flex-wrap gap-2  mt-4">
        {categoryName && (
          <Span className="bg-(--orange) text-(--dark-blue) font-medium px-3 py-1 rounded-md">
            {categoryName}
          </Span>
        )}
        {project.location && (
          <Span className="bg-(--orange) text-(--dark-blue) font-medium px-3 py-1 rounded-md">
            {project.location}
          </Span>
        )}
      </div>
      <Paragraph size="xl" className="font-bold my-2 uppercase text-(--dark-blue)">{project.title}</Paragraph>
      <div className="mb-2 text-(--dark-blue)"><span dangerouslySetInnerHTML={{ __html: project.longDescription || "" }} /></div>
      <span className="text-sm font-medium text-(--dark-blue) mt-auto mb-2 block">{formatDateWithOrdinal(project.updated_at)}</span>
    </article>
  );
});

const ProjectGrid: FC<{
  projects: Project[];
  categoryMap: Record<string, string>;
  onClick: () => void;
}> = memo(({ projects, categoryMap, onClick }) => {
  if (projects.length === 0) {
    return (
      <div className="pb-10 text-center">
        <Paragraph size="base" className="text-(--dark-blue)">No data found</Paragraph>
      </div>
    );
  }
  return (
    <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8" role="list" aria-label="Recent project posts">
      {projects.map((project) => (
        <ProjectCard
          key={project.id}
          project={project}
          categoryName={categoryMap[project.category_id]}
          onClick={onClick}
        />
      ))}
    </div>
  );
});

const ClientProjects: FC<ProjectsProps> = ({ projects, projectCategories }) => {
  const router = useRouter();
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const categoryMap = useMemo(() => {
    return projectCategories.reduce<Record<string, string>>((acc, cat) => {
      acc[cat.id] = cat.name;
      return acc;
    }, {});
  }, [projectCategories]);
  const filteredProjects = selectedCategory === "all" ? projects : projects.filter((p) => p.category_id === selectedCategory);
  const handleClick = () => {
    router.push("/project-view");
  };
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-x-8 gap-y-10 lg:grid-cols-4">
      <aside>
        <CategoryList selected={selectedCategory} onSelect={setSelectedCategory} categories={projectCategories} />
      </aside>
      <main className="sm:col-span-2 lg:col-span-3">
        <ProjectGrid projects={filteredProjects} categoryMap={categoryMap} onClick={handleClick} />
      </main>
    </div>
  );
};

export default ClientProjects;
