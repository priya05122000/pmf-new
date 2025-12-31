import Section from "@/components/common/Section";
import Span from "@/components/common/Span";
import Heading from "@/components/common/Heading";
import { GoDotFill } from "react-icons/go";
import Paragraph from "@/components/common/Paragraph";
import Image from "next/image";
import React from "react";

// Type for area data
interface PracticeArea {
  title: string;
  src: string;
  alt: string;
  description: string;
}

const areas: PracticeArea[] = [
  {
    title: "Custom Metal Fabrication",
    src: "/about-us/metal.png",
    alt: "Custom metal fabrication",
    description:
      "Precision fabrication in mild steel and stainless steel, built to match exact client requirements.",
  },
  {
    title: "Retail Fit-Outs",
    src: "/about-us/retail.png",
    alt: "Retail fit-outs",
    description:
      "Functional metal shopfronts, display units, and interior elements that support branding and daily use.",
  },
  {
    title: "Construction Solutions",
    src: "/about-us/construction.png",
    alt: "Construction solutions",
    description:
      "Structural steel components including staircases, handrails, frames, and balustrades for building projects.",
  },
  {
    title: "Healthcare & Hospital Projects",
    src: "/about-us/healthcare.png",
    alt: "Healthcare projects",
    description:
      "Hygienic stainless steel solutions such as trolleys, sinks, benches, and custom hospital fittings.",
  },
  {
    title: "Hospitality Industry Fabrication",
    src: "/about-us/industry.png",
    alt: "Hospitality fabrication",
    description:
      "Durable stainless steel kitchen equipment, service counters, and metal features for hotels and restaurants.",
  },
];

// Reusable card component
const PracticeAreaCard = React.memo(function PracticeAreaCard({ area }: { area: PracticeArea }) {
  return (
    <article
      className="group flex flex-col justify-between rounded-md border border-(--gray-three) bg-(--gray-one) p-4 text-center backdrop-blur-md transition-all duration-300 hover:bg-(--gray-two) focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-(--dark-blue)"
      tabIndex={0}
      aria-label={area.title}
      role="region"
    >
      <div className="flex flex-col items-center">
        <Image
          src={area.src}
          alt={area.alt}
          width={40}
          height={40}
          className="w-10 h-10 object-contain pointer-events-none"
          loading="lazy"
        />
        <Paragraph size="xl" className="my-4 font-semibold text-white">
          {area.title}
        </Paragraph>
        <Paragraph size="base" className="text-white">
          {area.description}
        </Paragraph>
      </div>
    </article>
  );
});

export default function PracticeAreasSection() {
  return (
    <Section
      className="relative w-full bg-cover bg-center bg-fixed py-10 sm:py-16 lg:py-20"
      style={{ backgroundImage: `url('/home/banner.webp')` }}
      aria-label="Practice Areas"
    >
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-(--light-blue-three) z-0"
        aria-hidden="true"
      />
      <div className="relative z-10">
        {/* Header */}
        <header className="mb-10">
          <div className="flex items-center gap-2 text-white ">
            <GoDotFill />
            <Paragraph size="base" className="font-medium uppercase">
              WHAT WE DO
            </Paragraph>
          </div>
          <Heading level={4} className="text-white">
            Our Core Services
          </Heading>
        </header>
        {/* Cards */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {areas.map((area) => (
            <PracticeAreaCard key={area.title} area={area} />
          ))}
        </div>
      </div>
    </Section>
  );
}
