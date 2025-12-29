import Image from "next/image";
import Paragraph from "@/components/common/Paragraph";
import Section from "@/components/common/Section";
import React, { FC, memo } from "react";

interface Block {
  images: string[];
  paragraph: string;
}

const blocks: Block[] = [
  {
    images: ["/home/banner.webp", "/home/banner.webp"],
    paragraph:
      "This is a short description for the first set of images. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    images: ["/home/banner.webp", "/home/banner.webp"],
    paragraph:
      "This is a short description for the second set of images. Pellentesque habitant morbi tristique senectus et netus.",
  },
];

// Reusable image row
const ImageRow: FC<{ images: string[]; blockIdx: number }> = memo(({ images, blockIdx }) => (
  <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mb-6">
    {images.map((img, idx) => (
      <div className="w-full sm:w-1/2" key={img + idx}>
        <Image
          src={img}
          alt={`Project image ${blockIdx * 2 + idx + 1}`}
          width={1200}
          height={700}
          className="rounded-md w-full h-60 sm:h-100 object-cover"
          sizes="(max-width: 640px) 100vw, 50vw"
          loading="lazy"
        />
      </div>
    ))}
  </div>
));
ImageRow.displayName = 'ImageRow';

export default function Description() {
  return (
    <Section className="space-y-16">
      {blocks.map((block, blockIdx) => (
        <div key={blockIdx} className="pb-6 lg:pb-10">
          <ImageRow images={block.images} blockIdx={blockIdx} />
          <Paragraph
            size="base"
            className="text-gray-700 text-center max-w-2xl mx-auto"
          >
            {block.paragraph}
          </Paragraph>
        </div>
      ))}
    </Section>
  );
}
