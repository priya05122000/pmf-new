import React from 'react'
import Image from "next/image";
import Paragraph from "@/components/common/Paragraph";
import Heading from "@/components/common/Heading";
import Span from '@/components/common/Span';
import Section from '@/components/common/Section';
import { GoDotFill } from 'react-icons/go';

// ProjectCardProps type for reusability
export interface ProjectCardProps {
    image: string;
    tags: string[];
    title: string;
    description: string;
    date: string;
}

// Static blog data (move to a separate file if needed)
export const PROJECTS: ProjectCardProps[] = [
    {
        image: "/home/banner.webp",
        tags: ["Travel", "Life style"],
        title: "LOW COST ADVERTISING",
        description: "Acres of Diamonds... you've read the famous story, or at least had it related to you A farmer.",
        date: "31st January, 2018",
    },
    {
        image: "/home/banner.webp",
        tags: ["Travel", "Life style"],
        title: "LOW COST ADVERTISING",
        description: "Acres of Diamonds... you've read the famous story, or at least had it related to you A farmer.",
        date: "31st January, 2018",
    },
    {
        image: "/home/banner.webp",
        tags: ["Travel", "Life style"],
        title: "LOW COST ADVERTISING",
        description: "Acres of Diamonds... you've read the famous story, or at least had it related to you A farmer.",
        date: "31st January, 2018",
    },
];

// Reusable ProjectCard component
const ProjectCard: React.FC<ProjectCardProps> = ({ image, tags, title, description, date }) => (
    <article className=" rounded-md shadow-none flex flex-col" aria-label={title}>
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
                    className="bg-(--orange) text-(--white) font-medium px-3 py-1 rounded mb-2"
                >
                    {tag}
                </Span>
            ))}
        </div>
        <Paragraph size='xl' className="font-bold mt-2 mb-2 uppercase text-(--dark-blue)">{title}</Paragraph>
        <Paragraph size="base" className="mb-2 text-(--dark-blue)">{description}</Paragraph>
        <Span
            className=" font-medium text-(--dark-blue) mt-auto mb-2 block">{date}</Span>
    </article>
);

// Reusable ProjectGrid component
const ProjectGrid: React.FC<{ blogs: ProjectCardProps[] }> = ({ blogs }) => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10" role="list" aria-label="Recent blog posts">
        {blogs.map((blog, idx) => (
            <ProjectCard key={blog.title + idx} {...blog} />
        ))}
    </div>
);

const RecentProject: React.FC = () => (
    <Section aria-label="Recent Projects">
        <div className="py-10 sm:sm:py-16 lg:py-20 ">
            <div>
                <div className="flex flex-row gap-2 items-center lg:min-w-20 xl:min-w-50  md:mr-4">
                    <GoDotFill aria-hidden="true" />
                    <Paragraph size="base" className="font-medium uppercase" id="about-us-heading">Reliable Solutions</Paragraph>
                </div>
                <Heading level={4} className="text-(--dark-blue)">Our Projects</Heading>
                <Paragraph size="base" className="text-(--dark-blue) mt-4 max-w-2xl">
                    PMF World delivers durable stainless steel solutions, from kitchen and bakery equipment to hotel systems, supermarket displays, and safety handrails, designed for demanding commercial use.
                </Paragraph>


            </div>
            <ProjectGrid blogs={PROJECTS} />
        </div>
    </Section>
);

export default RecentProject;
