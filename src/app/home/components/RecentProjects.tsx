import React, { FC, memo, useMemo } from "react";
import Image from "next/image";
import Paragraph from "@/components/common/Paragraph";
import Heading from "@/components/common/Heading";
import Span from "@/components/common/Span";
import Section from "@/components/common/Section";

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

interface RecentProjectProps {
    projects: Project[];
    projectCategories: ProjectCategory[];
}

const getImageUrl = (path?: string | null) =>
    path ? `${process.env.NEXT_PUBLIC_API_BASE_URL}/uploads/${path}` : null;

const formatDateWithOrdinal = (dateString: string) => {
    const date = new Date(dateString);
    const day = date.getDate();
    const year = date.getFullYear();
    const month = date.toLocaleString("en-US", { month: "long" });
    const ordinal = (n: number) => {
        if (n > 3 && n < 21) return "th";
        return ["th", "st", "nd", "rd"][Math.min(n % 10, 4)] || "th";
    };
    return `${day}${ordinal(day)} ${month}, ${year}`;
};

const ProjectCard: FC<{
    project: Project;
    categoryName?: string;
}> = memo(({ project, categoryName }) => {
    const imageUrl = getImageUrl(project.projectImagePath);
    return (
        <article className="rounded-md flex flex-col">
            <div className="overflow-hidden rounded-md">
                {imageUrl ? (
                    <Image
                        src={imageUrl}
                        alt={project.title}
                        width={350}
                        height={200}
                        className="w-full h-64 object-cover"
                    />
                ) : (
                    <div className="h-48 flex items-center justify-center bg-(--gray)">
                        No Image
                    </div>
                )}
            </div>
            <div className="flex flex-wrap gap-2 mt-4">
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
            <Paragraph size="xl" className="font-bold my-2 uppercase text-(--dark-blue)">
                {project.title}
            </Paragraph>
            <div
                className="text-base text-(--dark-blue) mb-2"
                dangerouslySetInnerHTML={{
                    __html: project.longDescription || ""
                }}
            />
            <Span className="font-medium text-(--dark-blue) mt-auto mb-2 block">
                {formatDateWithOrdinal(project.updated_at)}
            </Span>
        </article>
    );
});

const ProjectGrid: FC<{
    projects: Project[];
    categoryMap: Record<string, string>;
}> = ({ projects, categoryMap }) => (
    <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10"
        role="list"
        aria-label="Recent project posts"
    >
        {projects.map((project) => (
            <ProjectCard
                key={project.id}
                project={project}
                categoryName={categoryMap[project.category_id]}
            />
        ))}
    </div>
);

const RecentProject: FC<RecentProjectProps> = ({
    projects,
    projectCategories,
}) => {
    const categoryMap = useMemo(() => {
        return projectCategories.reduce<Record<string, string>>((acc, cat) => {
            acc[cat.id] = cat.name;
            return acc;
        }, {});
    }, [projectCategories]);
    const latestProjects = useMemo(() => {
        return [...projects]
            .sort((a, b) => new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime())
            .slice(0, 3);
    }, [projects]);
    return (
        <Section aria-label="Recent Projects">
            <div className="py-10 sm:py-16 lg:py-20">
                <div className="flex flex-col items-center text-center">
                    <Heading level={4} className="text-(--dark-blue)">
                        Our Projects
                    </Heading>
                    <Paragraph size="base" className="text-(--dark-blue) mt-4 max-w-2xl">
                        PMF World delivers durable stainless steel solutions, from kitchen and
                        bakery equipment to hotel systems, supermarket displays, and safety
                        handrails, designed for demanding commercial use.
                    </Paragraph>
                </div>
                <ProjectGrid
                    projects={latestProjects}
                    categoryMap={categoryMap}
                />
            </div>
        </Section>
    );
};

export default RecentProject;
