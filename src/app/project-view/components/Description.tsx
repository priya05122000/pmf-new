import Image from "next/image";
import Paragraph from "@/components/common/Paragraph";
import Section from "@/components/common/Section";

const blocks = [
  {
    images: ["/home/banner.webp", "/home/banner.webp", "/home/banner.webp"],
    paragraph:
      "This is a short description for the first set of images. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    images: ["/home/banner.webp", "/home/banner.webp", "/home/banner.webp"],
    paragraph:
      "This is a short description for the second set of images. Pellentesque habitant morbi tristique senectus et netus.",
  },
];

export default function Description() {
  return (
    <Section className="space-y-16">
      {blocks.map((block, blockIdx) => (
        <div key={blockIdx}>
          {/* First row: two images, stack on small screens */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mb-6">
            <div className="w-full sm:w-1/2">
              <Image
                src={block.images[0]}
                alt={`Project image ${blockIdx * 3 + 1}`}
                width={500}
                height={350}
                className="rounded-md w-full object-cover"
                sizes="(max-width: 640px) 100vw, 50vw"
              />
            </div>
            <div className="w-full sm:w-1/2 mt-4 sm:mt-0">
              <Image
                src={block.images[1]}
                alt={`Project image ${blockIdx * 3 + 2}`}
                width={500}
                height={350}
                className="rounded-md w-full object-cover"
                sizes="(max-width: 640px) 100vw, 50vw"
              />
            </div>
          </div>
          {/* Second row: one image centered, full width on mobile, max-w on larger screens */}
          <div className="flex justify-center mb-6">
            <div className="w-full sm:w-3/4 md:w-2/3 lg:w-1/2">
              <Image
                src={block.images[2]}
                alt={`Project image ${blockIdx * 3 + 3}`}
                width={600}
                height={400}
                className="rounded-md w-full object-cover"
                sizes="(max-width: 640px) 100vw, 50vw"
              />
            </div>
          </div>
          {/* Paragraph */}
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
