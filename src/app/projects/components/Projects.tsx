"use client";
import React, { useState } from "react";
import Image from "next/image";
import Paragraph from "@/components/common/Paragraph";
import Heading from "@/components/common/Heading";
import Span from "@/components/common/Span";
import Section from "@/components/common/Section";
import { useRouter } from "next/navigation";

// ProjectCardProps type for reusability
export interface ProjectCardProps {
  image: string;
  category: string;
  tags: string[];
  title: string;
  description: string;
  date: string;
}

// Static blog data (move to a separate file if needed)
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

// Reusable ProjectCard component
const ProjectCard: React.FC<ProjectCardProps & { onClick: () => void } > = ({
  image,
  tags,
  title,
  description,
  date,
  onClick: handleClick,
}) => (
  <article
    className=" rounded-lg shadow-none flex flex-col cursor-pointer"
    aria-label={title}
    onClick={handleClick}
  >
    <div className="overflow-hidden rounded-lg">
      <Image
        src={image}
        alt={`Project image for ${title}`}
        width={350}
        height={200}
        className="w-full h-64 object-cover rounded-lg"
        loading="lazy"
      />
    </div>
    <div className="mt-4 flex gap-1" aria-label="Project tags">
      {tags.map((tag) => (
        <Span
          key={tag}
          className="bg-(--orange) text-(--dark-blue) font-medium px-3 py-1 rounded mb-2"
        >
          {tag}
        </Span>
      ))}
    </div>
    <Heading
      level={6}
      className="font-bold mt-2 mb-2 uppercase text-(--dark-blue)"
    >
      {title}
    </Heading>
    <Paragraph size="base" className="mb-2 text-(--dark-blue)">
      {description}
    </Paragraph>
    <Span className=" font-medium text-(--dark-blue) mt-auto mb-2 block">
      {date}
    </Span>
  </article>
);

// Reusable ProjectGrid component
const ProjectGrid: React.FC<{
  projects: ProjectCardProps[];
  handleClick: () => void;
}> = ({ projects, handleClick }) => (
  <div
    className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 lg:mt-10"
    role="list"
    aria-label="Recent project posts"
  >
    {projects.map((project, idx) => (
      <ProjectCard
        key={project.title + idx}
        {...project}
        onClick={handleClick}
      />
    ))}
  </div>
);

const getUniqueCategories = (projects: ProjectCardProps[]) => {
  const categories = projects.map((p) => p.category);
  return ["All", ...Array.from(new Set(categories))];
};

const Projects: React.FC = () => {
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
      <div className="py-10 sm:py-20">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar */}
          <aside className="w-full md:w-1/4 mb-3 lg:mb-0">
            <div className="bg-white rounded-lg shadow p-4 sticky top-28">
              <Heading
                level={6}
                className="mb-4 text-(--dark-blue) uppercase tracking-wide"
              >
                Categories
              </Heading>
              <nav aria-label="Project categories">
                <ul className="flex flex-col gap-2 lg:gap-3">
                  {categories.map((cat) => (
                    <li key={cat}>
                      <button
                        className={`w-full text-left px-4 py-2 rounded font-medium transition-colors duration-300 border-none outline-none ${
                          selectedCategory === cat
                            ? "bg-(--orange) text-(--dark-blue)"
                            : "bg-gray-100 text-(--dark-blue) hover:bg-(--orange)/20"
                        }`}
                        onClick={() => setSelectedCategory(cat)}
                        aria-pressed={selectedCategory === cat}
                      >
                        {cat}
                      </button>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </aside>
          {/* Main content */}
          <main className="flex-1">
            <ProjectGrid
              projects={filteredProjects}
              handleClick={handleClick}
            />
          </main>
        </div>
      </div>
    </Section>
  );
};

export default Projects;
