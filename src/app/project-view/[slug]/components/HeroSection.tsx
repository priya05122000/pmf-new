import Image from "next/image";
import Paragraph from "@/components/common/Paragraph";
import Heading from "@/components/common/Heading";
import Section from "@/components/common/Section";
import React, { FC, memo } from "react";
import Span from "@/components/common/Span";
import { Project, ProjectCategory } from "@/types";

// Reusable InfoBlock for date/category/client
interface InfoBlockProps {
  label: string;
  value: string;
}
const InfoBlock: FC<InfoBlockProps> = memo(({ label, value }) => (
  <div>
    <Span className="font-medium uppercase tracking-wide text-(--light-blue) mb-1">
      {label}
    </Span>
    <hr className="border-(--light-gray) my-2" />
    <Paragraph size="sm" className="text-(--dark-blue) font-normal">
      {value}
    </Paragraph>
  </div>
));
InfoBlock.displayName = "InfoBlock";

export default function HeroSection({
  project,
  projectCategories,
}: {
  project: Project;
  projectCategories: ProjectCategory[];
}) {
  const category = projectCategories.find(
    (cat) => cat.id === project.category_id
  );

  const dateFormatter = new Intl.DateTimeFormat("en-IN", {
    year: "numeric",
    month: "short",
    day: "2-digit",
  });

  return (
    <Section className="w-full pb-6 lg:pb-10 pt-32">
      <div className="mb-10 grid grid-cols-1 sm:grid-cols-3 gap-8 text-left">
        <InfoBlock
          label="Date"
          value={
            project.created_at
              ? dateFormatter.format(new Date(project.created_at))
              : "Unknown"
          }
        />
        <InfoBlock
          label="Category"
          value={category ? category.name : "Unknown"}
        />
        <InfoBlock label="Location" value={project.location ?? "Unknown"} />
      </div>

      <div></div>

      <Heading level={4} className="leading-tight text-(--dark-blue)">
        {project.title}
      </Heading>
      {/* Description */}
      {project.shortNote && (
        <Paragraph
          size="base"
          className="mt-4 leading-relaxed text-(--dark-blue) md:w-[90%]"
        >
          {project.shortNote}
        </Paragraph>
      )}
      <div className="mt-10 w-full h-full">
        <Image
          src={`${process.env.NEXT_PUBLIC_API_BASE_URL}/uploads/${project.projectImagePath}`}
          alt={project.title}
          width={1200}
          height={700}
          className="w-full h-60 sm:h-100  object-cover rounded-md"
          priority
        />
      </div>
      <div>
        {/* <Heading level={5} className="mt-10 mb-4 text-(--dark-blue)">
          Subheading Example
        </Heading> */}
        <Paragraph size="base" className="leading-relaxed text-(--dark-blue)">
          {project.longDescription}
        </Paragraph>
      </div>
    </Section>
  );
}
