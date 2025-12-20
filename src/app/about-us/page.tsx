import React from 'react'
import AboutUsBanner from './components/AboutUsBanner'
import CommitmentSection from './components/CommitmentSection'
import PracticeAreasSection from './components/PracticeAreasSection'
import Accordion from './components/Accordion'
import Partners from './components/Partners'

const page = () => {
  return (
    <div>
      <AboutUsBanner />
      <CommitmentSection />
      <PracticeAreasSection />
      <Accordion />
      <Partners />
    </div>
  )
}

export default page