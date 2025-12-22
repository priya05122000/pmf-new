"use client";
import React, { useState, FC, memo } from "react";
import Image from "next/image";
import Paragraph from "@/components/common/Paragraph";
import Heading from "@/components/common/Heading";
import Span from "@/components/common/Span";
import Section from "@/components/common/Section";
import { useRouter } from "next/navigation";

// Types
export interface ProjectCardProps {
  image: string;
  category: string;
  tags: string[];
  title: string;
  description: string;
  date: string;
}

// Static data
export const PROJECTS: ProjectCardProps[] = [
  {
    image: "/home/banner.webp",
    category: "Travel",
    tags: ["Travel", "Life style"],
    title: "LOW COST ADVERTISING",
    description:
      "Acres of Diamonds... you've read the famous story, or at least had it related to you A farmer.",
    date: "31st January, 2018",
  },
  {
    image: "/home/banner.webp",
    category: "Vlog",
    tags: ["Travel", "Life style"],
    title: "LOW COST ADVERTISING",
    description:
      "Acres of Diamonds... you've read the famous story, or at least had it related to you A farmer.",
    date: "31st January, 2018",
  },
  {
    image: "/home/banner.webp",
    category: "Photography",
    tags: ["Travel", "Life style"],
    title: "LOW COST ADVERTISING",
    description:
      "Acres of Diamonds... you've read the famous story, or at least had it related to you A farmer.",
    date: "31st January, 2018",
  },
  {
    image: "/home/banner.webp",
    category: "Travel",
    tags: ["Travel", "Life style"],
    title: "LOW COST ADVERTISING",
    description:
      "Acres of Diamonds... you've read the famous story, or at least had it related to you A farmer.",
    date: "31st January, 2018",
  },
  {
    image: "/home/banner.webp",
    category: "Gaming",
    tags: ["Travel", "Life style"],
    title: "LOW COST ADVERTISING",
    description:
      "Acres of Diamonds... you've read the famous story, or at least had it related to you A farmer.",
    date: "31st January, 2018",
  },
  {
    image: "/home/banner.webp",
    category: "Fashion",
    tags: ["Travel", "Life style"],
    title: "LOW COST ADVERTISING",
    description:
      "Acres of Diamonds... you've read the famous story, or at least had it related to you A farmer.",
    date: "31st January, 2018",
  },
  {
    image: "/home/banner.webp",
    category: "Sales",
    tags: ["Travel", "Life style"],
    title: "LOW COST ADVERTISING",
    description:
      "Acres of Diamonds... you've read the famous story, or at least had it related to you A farmer.",
    date: "31st January, 2018",
  },
  {
    image: "/home/banner.webp",
    category: "Fashion",
    tags: ["Travel", "Life style"],
    title: "LOW COST ADVERTISING",
    description:
      "Acres of Diamonds... you've read the famous story, or at least had it related to you A farmer.",
    date: "31st January, 2018",
  },
];

// Utility: Get unique categories
const getUniqueCategories = (projects: ProjectCardProps[]): string[] => [
  "All",
  ...Array.from(new Set(projects.map((p) => p.category)))
];

// CategoryList (reusable, accessible)
const CategoryList: FC<{ selected: string; onSelect: (cat: string) => void; categories: string[] }> = memo(({ selected, onSelect, categories }) => (
  <nav aria-label="Project categories" className="flex flex-col gap-1 mb-4 sticky top-28">
    <div className="bg-(--gray) rounded-md shadow p-4 sticky top-28">
      <ul className="flex flex-col gap-2 lg:gap-3">
        {categories.map((cat) => (
          <li key={cat}>
            <button
              className={`w-full text-left px-4 py-2 rounded-md font-medium transition-colors duration-300 border-none outline-none ${selected === cat
                ? "bg-(--orange) text-white"
                : "bg-(--light-blue)/10 text-(--dark-blue) hover:bg-(--orange) hover:text-white cursor-pointer"
                }`}
              onClick={() => onSelect(cat)}
              aria-pressed={selected === cat}
            >
              {cat}
            </button>
          </li>
        ))}
      </ul>
    </div>
  </nav>
));

// ProjectCard (reusable, accessible, optimized)
const ProjectCard: FC<ProjectCardProps & { onClick: () => void }> = memo(({
  image,
  tags,
  title,
  description,
  date,
  onClick,
}) => (
  <article
    className="rounded-md shadow-none flex flex-col cursor-pointer focus:outline-none focus:ring-2 focus:ring-(--orange)"
    aria-label={title}
    tabIndex={0}
    onClick={onClick}
    onKeyPress={e => { if (e.key === 'Enter') onClick(); }}
  >
    <div className="overflow-hidden rounded-md">
      <Image
        src={image}
        alt={`Project image for ${title}`}
        width={350}
        height={200}
        className="w-full h-64 object-cover rounded-md"
        loading="lazy"
      />
    </div>
    <div className="mt-4 flex gap-1" aria-label="Project tags">
      {tags.map((tag) => (
        <Span
          key={tag}
          className="bg-(--orange) text-(--dark-blue) font-medium px-3 py-1 rounded-md mb-2"
        >
          {tag}
        </Span>
      ))}
    </div>
    <Paragraph
      size="xl"
      className="font-bold my-2 uppercase text-(--dark-blue)"
    >
      {title}
    </Paragraph>
    <Paragraph size="base" className="mb-2 text-(--dark-blue)">
      {description}
    </Paragraph>
    <Span className="font-medium text-(--dark-blue) mt-auto mb-2 block">
      {date}
    </Span>
  </article>
));

// ProjectGrid (reusable, accessible)
const ProjectGrid: FC<{ projects: ProjectCardProps[]; onClick: () => void }> = memo(({ projects, onClick }) => (
  <div
    className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8"
    role="list"
    aria-label="Recent project posts"
  >
    {projects.map((project, idx) => (
      <ProjectCard
        key={project.title + idx}
        {...project}
        onClick={onClick}
      />
    ))}
  </div>
));

const Projects: FC = () => {
  const router = useRouter();
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const categories = getUniqueCategories(PROJECTS);
  const filteredProjects =
    selectedCategory === "All"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === selectedCategory);

  const handleClick = () => {
    router.push("/project-view");
  };

  return (
    <Section aria-label="Recent Projects">
      <div className="bg-(--gray) py-10 sm:sm:py-16 lg:py-20  rounded-md">
        <main>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-x-8 gap-y-10 lg:grid-cols-4">
            {/* Sidebar */}
            <aside className="">
              <CategoryList selected={selectedCategory} onSelect={setSelectedCategory} categories={categories} />
            </aside>
            {/* Main content */}
            <main className="sm:col-span-2 lg:col-span-3">
              <ProjectGrid
                projects={filteredProjects}
                onClick={handleClick}
              />
            </main>
          </div>
        </main>
      </div>
    </Section>
  );
};

export default Projects;
