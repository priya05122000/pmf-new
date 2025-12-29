import Image from "next/image";
import Heading from "@/components/common/Heading";
import Paragraph from "@/components/common/Paragraph";
import CenterSection from "@/components/common/CenterSection";
import type { FC } from "react";

const CommitmentSection: FC = () => (
  <CenterSection className="w-full py-10 sm:py-16 lg:py-20">
    <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
      {/* Image Section */}
      <div className="relative w-full h-full overflow-hidden rounded-md">
        <Image
          src="/home/service1.webp"
          alt="PMF custom metal fabrication work"
          width={700}
          height={500}
          className="h-52 md:h-100 w-full object-cover"
          priority
        />
      </div>
      {/* Content Section */}
      <div className="flex flex-col justify-center">
        <Heading level={4} className="text-(--dark-blue)">
          Our Commitment to Quality
        </Heading>
        <Paragraph size="base" className="mt-4 leading-relaxed text-(--dark-blue)">
          At PMF, we create metal fabrication solutions that balance strength, function, and clean design. Each project is handled with care, accuracy, and a clear focus on long-term use. We work closely with clients to deliver results that match their practical needs and expectations.
        </Paragraph>
      </div>
    </div>
  </CenterSection>
);

export default CommitmentSection;
