import Image from "next/image";
import Section from "@/components/common/Section";
import Heading from "@/components/common/Heading";

const logos = [
  { name: "Google", src: "/clientlogos/c1.webp" },
  { name: "Prismic", src: "/clientlogos/c2.webp" },
  { name: "Netlify", src: "/clientlogos/c3.webp" },
  { name: "Lattice", src: "/clientlogos/c4.webp" },
  { name: "Attio", src: "/clientlogos/c5.webp" },
  { name: "Clearbit", src: "/clientlogos/c6.webp" },
  { name: "Hotjar", src: "/clientlogos/c7.webp" },
  { name: "Draftbit", src: "/clientlogos/c8.webp" },
  { name: "Gem", src: "/clientlogos/c9.webp" },
  { name: "Hopin", src: "/clientlogos/c10.webp" },
  { name: "Outline", src: "/clientlogos/c11.webp" },
  { name: "HelpScout", src: "/clientlogos/c12.webp" },
];

export default function Partners() {
  return (
    <Section
      className="w-full py-10 lg:sm:py-16 lg:py-20 h-full bg-cover bg-center  bg-fixed relative"
      style={{
        backgroundImage: "url('/home/banner.webp')",
      }}
    >
      <div className="absolute inset-0 bg-(--light-blue)/30 rounded-xl z-0" aria-hidden="true"></div>

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-10 relative z-10 items-center">
        {/* Left Text */}
        <div className="">
          <Heading level={4} className="text-white">
            Trusted by our
            <br />
            customers & <br className="hidden lg:block" /> partners
          </Heading>
        </div>

        {/* Divider */}
        {/* <div className="hidden h-32 w-px bg-gray-200 lg:block" /> */}

        {/* Logos Grid */}
        <div className="grid grid-cols-2 gap-x-4 gap-y-4 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-4 xl:grid-cols-6">
          {logos.map((logo, index) => (
            <div key={index} className="flex items-center justify-center bg-(--gray)  w-full h-28 p-4 rounded-md">
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
