import Section from '@/components/common/Section';
import ProjectFilterClient from './ProjectFilterClient';

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

const ProjectFilter = async ({
    projects,
    categories,
}: {
    projects: Project[];
    categories: ProjectCategory[];
}) => {
    return (
        <Section>
            <div className='bg-(--gray) -mt-20 rounded-md'>
                <main>
                    <ProjectFilterClient projects={projects} categories={categories} />
                </main>
            </div>
        </Section>
    );
};

export default ProjectFilter;
