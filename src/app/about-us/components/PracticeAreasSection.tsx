import { GiScales, GiHandcuffs } from "react-icons/gi";
import { FaBuilding, FaLandmark } from "react-icons/fa";
import Section from "@/components/common/Section";
import Span from "@/components/common/Span";
import Heading from "@/components/common/Heading";

const areas = [
  {
    title: "Family Law",
    icon: GiScales,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
  },
  {
    title: "Corporate Law",
    icon: FaBuilding,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
  },
  {
    title: "Criminal Law",
    icon: GiHandcuffs,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
  },
  {
    title: "Immigration Law",
    icon: FaLandmark,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
  },
];

export default function PracticeAreasSection() {
  return (
    <Section
      className="relative w-full bg-cover bg-center py-10 sm:py-20"
      style={{
        backgroundImage:
          "url('/home/banner.webp')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-(--light-blue)/30" />

      <div className="relative">
        {/* Header */}
        <div className="mb-10">
          <Span className="text-xs font-semibold tracking-widest text-white">
            PRACTICE AREAS
          </Span>
          <Heading level={4} className="mt-2 text-white">
            Our Equipments
          </Heading>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {areas.map((area, index) => {
            const Icon = area.icon;
            return (
              <div
                key={index}
                className="group flex flex-col items-center border border-white/30 bg-white/5 px-6 py-10 text-center transition-all duration-300 hover:bg-white/10"
              >
                <Icon className="h-10 w-10 text-white" />

                <h3 className="mt-6 font-serif text-lg font-semibold text-white">
                  {area.title}
                </h3>

                <p className="mt-4 text-sm leading-relaxed text-white">
                  {area.description}
                </p>

                <button className="mt-6 text-sm font-semibold tracking-wide text-(--dark-blue)">
                  LEARN MORE →
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
