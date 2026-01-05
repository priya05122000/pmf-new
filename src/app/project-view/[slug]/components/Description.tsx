import Image from "next/image";
import Paragraph from "@/components/common/Paragraph";
import Section from "@/components/common/Section";
import React, { FC, memo } from "react";
import type { Description } from "@/types";

// Reusable image row
const ImageRow: FC<{ images: string[]; }> = memo(
  ({ images }) => (
    <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mb-6">
      {images.map((img, idx) => (
        <div className="w-full sm:w-1/2" key={img + idx}>
          <Image
            src={`${process.env.NEXT_PUBLIC_API_BASE_URL}/${img}`}
            alt={`Project image ${idx + 1}`}
            width={1200}
            height={700}
            className="rounded-md w-full h-60 sm:h-100 object-cover"
            sizes="(max-width: 640px) 100vw, 50vw"
            loading="lazy"
          />
        </div>
      ))}
    </div>
  )
);
ImageRow.displayName = "ImageRow";

export default function Description({ descriptions }: { descriptions: any[] }) {
  if (descriptions.length === 0) {
    return null;
  }
  return (
    <Section className="space-y-16">
      {descriptions.map((desc) => (
        <div key={desc.id} className="pb-6 lg:pb-10">
          <ImageRow images={[desc.primary_imagePath, desc.secondary_imagePath ?? ""]} />
          <div className="leading-relaxed text-(--dark-blue) text-base my-4" dangerouslySetInnerHTML={{ __html: desc.description }} />
        </div>
      ))}
    </Section>
  );
}
