"use client";
import { useState } from "react";
import Section from "@/components/common/Section";
import Heading from "@/components/common/Heading";
import Paragraph from "@/components/common/Paragraph";
import { GoDotFill } from "react-icons/go";
import { FiChevronDown } from "react-icons/fi";
import CenterSection from "@/components/common/CenterSection";

const points = [
  {
    title: "Dual Material Expertise",
    content:
      "Skilled fabrication in both mild steel and stainless steel for varied project needs.",
  },
  {
    title: "Advanced Fabrication Facility",
    content:
      "Modern equipment and processes ensure accuracy, consistency, and clean finishing.",
  },
  {
    title: "Safety and Standards Compliance",
    content:
      "All work follows strict safety guidelines and recognized industry standards.",
  },
  {
    title: "Timely Delivery, Assured Quality",
    content:
      "Projects are completed on schedule without compromising material or workmanship quality.",
  },
  {
    title: "Complete Project Handling",
    content:
      "End-to-end management from design to installation for smooth project execution.",
  },
];

export default function Accordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <CenterSection className="w-full py-10 sm:py-16 lg:py-20">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-20">

        {/* LEFT CONTENT */}
        <div>
          <div className="flex items-center gap-2">
            <GoDotFill aria-hidden="true" />
            <Paragraph size="base" className="font-medium uppercase">
              Built for Commercial Demands
            </Paragraph>
          </div>

          <Heading level={4} className="text-(--dark-blue)">
            Why Choose PMF World?
          </Heading>

          <Paragraph size="base" className="text-(--dark-blue) mt-4 max-w-xl">
            PMF World delivers reliable stainless steel kitchen and hotel kitchen
            equipment designed for daily commercial use. Our supermarket display
            equipment and bakery supplies combine strength, hygiene, and
            practical layout.
          </Paragraph>
        </div>

        {/* RIGHT ACCORDION */}
        <div className="flex flex-col divide-y divide-slate-200">
          {points.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div key={index} className="py-1">
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full flex justify-between items-center py-3 text-left cursor-pointer"
                >
                  <span className="font-medium text-slate-800">
                    {item.title}
                  </span>

                  {/* ICON */}
                  <FiChevronDown
                    className={`text-xl text-slate-500 transition-transform duration-300 ease-out
                      ${isOpen ? "rotate-180" : "rotate-0"}`}
                  />
                </button>

                {/* CONTENT */}
                <div
                  className={`grid transition-all duration-300 ease-in-out
                    ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
                >
                  <div className="overflow-hidden">
                    <Paragraph size="sm" className="pb-5 text-slate-500">
                      {item.content}
                    </Paragraph>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </CenterSection>
  );
}
