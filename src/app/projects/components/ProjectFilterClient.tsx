'use client';

import React, { useState, ChangeEvent, FC, memo, useMemo } from 'react';
import { BiSearch } from 'react-icons/bi';
import Paragraph from '@/components/common/Paragraph';
import Heading from '@/components/common/Heading';
import Image from 'next/image';
import CategoryList from '@/components/common/CategoryList';
import { useRouter } from 'next/navigation';

interface ProjectCategory {
    id: string;
    name: string;
}

interface Project {
    id: string;
    title: string;
    slug: string;
    projectImagePath: string;
    longDescription: string;
    location?: string;
    category_id: string;
    status: boolean;
    updated_at: string;
}

const getImageUrl = (path?: string | null) => {
    if (!path || path.trim() === "") return null;
    return `${process.env.NEXT_PUBLIC_API_BASE_URL}/${path}`;
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

const ProjectCard: FC<{ project: Project; categoryName?: string; onClick: ({ slug }: { slug: string }) => void; }> = memo(({ project, categoryName, onClick }) => {
    const imageUrl = getImageUrl(project.projectImagePath);
    return (
        <article
            className="rounded-md shadow-none flex flex-col cursor-pointer focus:outline-none"
            tabIndex={0}
            onClick={() => onClick({ slug: project.slug })}
            onKeyDown={e => e.key === 'Enter' && onClick({ slug: project.slug })}
            aria-label={project.title}
            role="listitem"
        >
            <div className="overflow-hidden rounded-md">
                {imageUrl ? (
                    <Image
                        src={imageUrl}
                        alt={project.title}
                        width={350}
                        height={200}
                        className="w-full h-48 object-cover"
                        loading="lazy"
                    />
                ) : (
                    <div className="flex items-center justify-center bg-(--gray) w-full h-48">No Image</div>
                )}
            </div>
            <div className="flex flex-wrap gap-2 mt-4">
                {categoryName && (
                    <span className="bg-(--orange) text-(--dark-blue) font-medium px-3 py-1 rounded-md">
                        {categoryName}
                    </span>
                )}
                {project.location && (
                    <span className="bg-(--orange) text-(--dark-blue) font-medium px-3 py-1 rounded-md">
                        {project.location}
                    </span>
                )}
            </div>
            <Paragraph size="xl" className="font-bold my-2 uppercase text-(--dark-blue)">{project.title}</Paragraph>
            <div className="mb-2 text-(--dark-blue)"><span dangerouslySetInnerHTML={{ __html: project.longDescription || "" }} /></div>
            <span className="text-sm font-medium text-(--dark-blue) mt-auto mb-2 block">{formatDateWithOrdinal(project.updated_at)}</span>
        </article>
    );
});
ProjectCard.displayName = 'ProjectCard';

const ProjectFilterClient: FC<{
    projects: Project[];
    categories: ProjectCategory[];
}> = ({ projects, categories }) => {
    const router = useRouter();
    const [search, setSearch] = useState("");
    const [category, setCategory] = useState<string>('all');

    const categoryMap = useMemo(() => {
        return categories.reduce<Record<string, string>>((acc, cat) => {
            acc[cat.id] = cat.name;
            return acc;
        }, {});
    }, [categories]);

    const filteredProjects = projects.filter(p => {
        const matchesSearch = p.title.toLowerCase().includes(search.toLowerCase());
        const matchesCategory = category === 'all' || p.category_id === category;
        const isActive = p.status === true;
        return matchesSearch && matchesCategory && isActive;
    });

    const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => setSearch(e.target.value);
    const handleClick = ({ slug }: { slug: string }) => {
        router.push(`/projects/${slug}`);
    };

    return (
        <>
            {/* HEADER */}
            <div className="flex flex-col md:flex-row items-center justify-between py-4 gap-4 px-4">
                <Heading level={4} className="font-bold tracking-tight text-(--dark-blue)">
                    Our Projects
                </Heading>
                <form
                    className="flex items-center gap-2 w-full max-w-xs rounded-md border border-(--light-blue-one) pl-2"
                    onSubmit={e => e.preventDefault()}
                    role="search"
                    aria-label="Project Search"
                >
                    <BiSearch className="size-5 text-(--light-blue-two)" aria-hidden="true" />
                    <input
                        type="text"
                        value={search}
                        onChange={handleSearchChange}
                        placeholder="Search"
                        className="flex-1 bg-transparent outline-none py-2 text-sm text-(--light-blue)"
                        aria-label="Search projects"
                        autoComplete="off"
                    />
                    <button
                        type="submit"
                        className="rounded-md bg-(--dark-blue) px-5 py-2 text-sm font-semibold text-white cursor-pointer"
                        aria-label="Search"
                    >
                        Search
                    </button>
                </form>
            </div>
            {/* BODY */}
            <section className="py-10">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-x-8 gap-y-10 lg:grid-cols-4">
                    <div>
                        <CategoryList
                            categories={categories}
                            selected={category}
                            onSelect={setCategory}
                        />
                    </div>
                    <div className="sm:col-span-2 lg:col-span-3">
                        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3" role="list" aria-label="Project List">
                            {filteredProjects.length ? (
                                filteredProjects.map(p => (
                                    <ProjectCard key={p.id} project={p} categoryName={categoryMap[p.category_id]} onClick={handleClick} />
                                ))
                            ) : (
                                <Paragraph className="col-span-full text-center text-(--dark-blue)" >
                                    No projects found.
                                </Paragraph>
                            )}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ProjectFilterClient;
