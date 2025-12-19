import React from 'react'
import Image from "next/image";
import Paragraph from "@/components/common/Paragraph";
import Heading from "@/components/common/Heading";
import Span from '@/components/common/Span';
import Section from '@/components/common/Section';

// BlogCardProps type for reusability
export interface BlogCardProps {
    image: string;
    tags: string[];
    title: string;
    description: string;
    date: string;
}

// Static blog data (move to a separate file if needed)
export const BLOGS: BlogCardProps[] = [
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

// Reusable BlogCard component
const BlogCard: React.FC<BlogCardProps> = ({ image, tags, title, description, date }) => (
    <article className=" rounded-lg shadow-none flex flex-col" aria-label={title}>
        <div className="overflow-hidden rounded-lg">
            <Image
                src={image}
                alt={`Blog image for ${title}`}
                width={350}
                height={200}
                className="w-full h-64 object-cover rounded-lg"
                loading="lazy"
            />
        </div>
        <div className="mt-4 flex gap-1" aria-label="Blog tags">
            {tags.map((tag) => (
                <Span
                    key={tag}
                    className="bg-(--orange) text-(--dark-blue) font-medium px-3 py-1 rounded mb-2"
                >
                    {tag}
                </Span>
            ))}
        </div>
        <Heading level={6} className="font-bold mt-2 mb-2 uppercase text-(--dark-blue)">{title}</Heading>
        <Paragraph size="base" className="mb-2 text-(--dark-blue)">{description}</Paragraph>
        <Span
            className=" font-medium text-(--dark-blue) mt-auto mb-2 block">{date}</Span>
    </article>
);

// Reusable BlogGrid component
const BlogGrid: React.FC<{ blogs: BlogCardProps[] }> = ({ blogs }) => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10" role="list" aria-label="Recent blog posts">
        {blogs.map((blog, idx) => (
            <BlogCard key={blog.title + idx} {...blog} />
        ))}
    </div>
);

const RecentBlog: React.FC = () => (
    <Section aria-label="Recent Blogs">
        <div className="py-10 sm:py-20 ">
            <div>
                <Heading level={4} className="text-(--dark-blue) text-center">Our Recent Blogs</Heading>
                <Paragraph size="base" className="text-(--dark-blue) text-center mt-4 max-w-2xl mx-auto">
                    Stay updated with our latest insights, industry trends, and expert advice through our curated blog posts. Explore topics that matter to you and discover how we can help your business thrive.
                </Paragraph>
            </div>
            <BlogGrid blogs={BLOGS} />
        </div>
    </Section>
);

export default RecentBlog;
