import Image from "next/image";
import Section from "@/components/common/Section";
import Heading from "@/components/common/Heading";
import Paragraph from "@/components/common/Paragraph";

const CommitmentSection = () => {
  return (
    <Section className="w-full pt-5 pb-10 lg:pb-20">
      <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
        {/* Image Section */}
        <div className="relative w-full h-full overflow-hidden rounded-md">
          <Image
            src="/home/service1.webp"
            alt="Legal consultation meeting"
            width={700}
            height={500}
            className="h-52 md:h-100 w-full object-cover"
            priority
          />
        </div>

        {/* Content Section */}
        <div className="flex flex-col justify-center">
          <Heading level={4} className="leading-tighter text-(--dark-blue)">
            Committed To Helping <br className="hidden sm:block" />
            Our Clients Succeed.
          </Heading>

          <Paragraph size="base" className="mt-4 leading-relaxed text-(--dark-blue)">
            Our client&apos;s success is our top priority, and we strive to
            deliver exceptional legal support, advocacy, and counsel every step
            of the way. Trust us to be your reliable legal partner, committed to
            achieving your goals.
          </Paragraph>
        </div>
      </div>
    </Section>
  );
};

export default CommitmentSection;
