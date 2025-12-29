import Image from "next/image";
import Paragraph from "@/components/common/Paragraph";
import Heading from "@/components/common/Heading";
import Section from "@/components/common/Section";
import React, { FC, memo } from "react";
import Span from "@/components/common/Span";

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
InfoBlock.displayName = 'InfoBlock';

export default function HeroSection() {
  return (
    <Section className="w-full pb-6 lg:pb-10 pt-32">
      <div className="mb-10 grid grid-cols-1 sm:grid-cols-3 gap-8 text-left">
        <InfoBlock label="Date" value="Jan 8, 2025" />
        <InfoBlock label="Category" value="Agency" />
        <InfoBlock label="Client" value="Lucus" />
      </div>

      <div>

      </div>

      <Heading level={4} className="leading-tight text-(--dark-blue)">
        The Importance of a Strong Brand Positioning
      </Heading>
      {/* Description */}
      <Paragraph
        size="base"
        className="mt-4 leading-relaxed text-(--dark-blue) md:w-[90%]"
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Elit ullamcorper
        dignissim cras tincidunt. Enim neque volutpat ac tincidunt vitae. Dictum
        at tempor commodo ullamcorper.
      </Paragraph>
      <div className="mt-10 w-full h-full">
        <Image
          src="/home/banner.webp"
          alt="Brand positioning article image"
          width={1200}
          height={700}
          className="w-full h-60 sm:h-100  object-cover rounded-md"
          priority
        />
      </div>
      <div>
        <Heading level={5} className="mt-10 mb-4 text-(--dark-blue)">
          Subheading Example
        </Heading>
        <Paragraph size="base" className="leading-relaxed text-(--dark-blue)">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Elit ullamcorper
          dignissim cras tincidunt. Enim neque volutpat ac tincidunt vitae.
          Dictum at tempor commodo ullamcorper. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
          et dolore magna aliqua. Elit ullamcorper dignissim cras tincidunt.
          Enim neque volutpat ac tincidunt vitae. Dictum at tempor commodo
          ullamcorper.
        </Paragraph>
      </div>
    </Section>
  );
}
