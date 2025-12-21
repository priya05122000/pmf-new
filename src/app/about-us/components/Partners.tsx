import Image from "next/image";
import Section from "@/components/common/Section";
import Heading from "@/components/common/Heading";

const logos = [
  { name: "Google", src: "/partners/partner1.png" },
  { name: "Prismic", src: "/partners/partner2.png" },
  { name: "Netlify", src: "/partners/partner3.png" },
  { name: "Lattice", src: "/partners/partner4.png" },
  { name: "Attio", src: "/partners/partner5.png" },
  { name: "Clearbit", src: "/partners/partner6.png" },
  { name: "Hotjar", src: "/partners/partner7.png" },
  { name: "Draftbit", src: "/partners/partner8.png" },
  { name: "Gem", src: "/partners/partner9.png" },
  { name: "Hopin", src: "/partners/partner10.png" },
  { name: "Outline", src: "/partners/partner11.png" },
  { name: "HelpScout", src: "/partners/partner12.png" },
];

export default function Partners() {
  return (
    <Section
      className="w-full py-10 lg:sm:py-16 lg:py-20"
      style={{
        backgroundImage: "url('/home/banner.webp')",
      }}
    >
      <div className="flex flex-col gap-8 lg:flex-row lg:items-center xl:gap-16">
        {/* Left Text */}
        <div className="">
          <Heading level={5} className="leading-snug text-white">
            Trusted by our
            <br />
            customers & <br className="hidden lg:block"  /> partners
          </Heading>
        </div>

        {/* Divider */}
        <div className="hidden h-32 w-px bg-gray-200 lg:block" />

        {/* Logos Grid */}
        <div className="grid grid-cols-3 sm:gap-x-4 gap-y-4 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-4 xl:grid-cols-6">
          {logos.map((logo, index) => (
            <div key={index} className="flex items-center justify-center bg-[#DEE3E6] w-24 sm:w-32 h-24 sm:h-30 p-4 rounded-md">
              <Image
                src={logo.src}
                alt={logo.name}
                width={120}
                height={40}
                className="h-full w-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
