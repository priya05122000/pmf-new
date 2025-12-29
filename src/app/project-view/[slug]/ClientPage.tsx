import React from 'react'
import HeroSection from './components/HeroSection'
import Description from './components/Description'
import { Project, ProjectCategory } from '@/types'


const ClientPage = ({ project, projectCategories }: { project: Project; projectCategories: ProjectCategory[] }) => {
  return (
    <div>
        <HeroSection project={project} projectCategories={projectCategories} />
        <Description descriptions={project.descriptions ?? []} />
    </div>
  )
}

export default ClientPage;