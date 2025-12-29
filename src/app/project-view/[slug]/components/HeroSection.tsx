"use client";

import Image from "next/image";
import Paragraph from "@/components/common/Paragraph";
import Heading from "@/components/common/Heading";
import Section from "@/components/common/Section";
import React, { FC, memo } from "react";
import Span from "@/components/common/Span";
import { Project, ProjectCategory } from "@/types";
import { FaFacebook } from "react-icons/fa6";
import { BsInstagram, BsTwitter } from "react-icons/bs";

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
    <Paragraph size="sm" className="text-(--dark-blue)">
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

  // ✅ Facebook share URL (client-side)
  const shareUrl =
    typeof window !== "undefined" ? window.location.href : "";

  const facebookShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
    shareUrl
  )}`;

  return (
    <Section className="w-full pb-6 lg:pb-10 pt-32">
      <div className="mb-10 grid grid-cols-1 sm:grid-cols-3 gap-8">
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
        <InfoBlock
          label="Location"
          value={project.location ?? "Unknown"}
        />
      </div>

      {/* ✅ Social Share */}
      <div className="flex gap-4 text-(--dark-blue) text-2xl mb-6">
        <a
          href={facebookShareUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Share on Facebook"
        >
          <FaFacebook className="cursor-pointer hover:text-blue-600" />
        </a>

        <BsInstagram className="opacity-50 cursor-not-allowed" />
        <BsTwitter className="opacity-50 cursor-not-allowed" />
      </div>

      <Heading level={4} className="text-(--dark-blue)">
        {project.title}
      </Heading>

      {project.shortNote && (
        <Paragraph className="mt-4 md:w-[90%]">
          {project.shortNote}
        </Paragraph>
      )}

      <div className="mt-10">
        <Image
          src={`${process.env.NEXT_PUBLIC_API_BASE_URL}/uploads/${project.projectImagePath}`}
          alt={project.title}
          width={1200}
          height={700}
          className="w-full h-60 sm:h-100 object-cover rounded-md"
          priority
        />
      </div>

      <div
        className="mt-6"
        dangerouslySetInnerHTML={{
          __html: project.longDescription ?? "",
        }}
      />
    </Section>
  );
}
