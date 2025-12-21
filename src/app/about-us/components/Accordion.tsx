"use client";
import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import Section from "@/components/common/Section";
import Heading from "@/components/common/Heading";
import Span from "@/components/common/Span";
import Paragraph from "@/components/common/Paragraph";

const points = [
  {
    title: "Client-Centered Approach",
    content:
      "We prioritize our clients' needs and goals, ensuring personalized legal strategies tailored to each unique situation.",
  },
  {
    title: "Commitment to Communication",
    content:
      "We keep you informed at every stage, providing clear, timely updates and always being available to answer your questions.",
  },
  {
    title: "Strong Negotiation Skills",
    content:
      "Our team excels at negotiating favorable outcomes, striving to resolve matters efficiently while protecting your interests.",
  },
  {
    title: "Trial-Ready Representation",
    content:
      "If negotiations fail, we are fully prepared to advocate for you in court with skill and determination.",
  },
];

export default function Accordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (idx: number) => {
    setOpenIndex((prev) => (prev === idx ? null : idx));
  };

  return (
    <Section className="w-full py-10 lg:sm:py-16 lg:py-20">
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-20">
          {/* Left Content */}
          <div>
            <Span className="font-semibold uppercase tracking-widest text-(--dark-blue)">
              We Make A Difference
            </Span>
            <Heading level={4} className="mt-2 text-(--dark-blue)">
              Why Legal Edge LLC?
            </Heading>
            <Paragraph className="mt-4 leading-relaxed text-(--dark-blue)">
              At Legal Edge LLC, we understand that choosing the right legal
              representation is crucial for achieving successful outcomes in
              your legal matters. We firmly believe that our firm stands out
              from the rest for the following reasons.
            </Paragraph>
          </div>
          {/* Right Accordion List */}
          <div className="flex flex-col divide-y divide-gray-200">
            {points.map((item, index) => (
              <div key={index}>
                <button
                  type="button"
                  className={`flex w-full cursor-pointer items-center justify-between transition text-(--dark-blue) focus:outline-none ${openIndex === index ? "pt-4 pb-0" : "py-4"}`}
                  onClick={() => handleToggle(index)}
                  aria-expanded={openIndex === index}
                  aria-controls={`accordion-content-${index}`}
                  id={`accordion-header-${index}`}
                >
                  <Paragraph size="base" className="font-medium text-(--dark-blue) text-left">
                    {item.title}
                  </Paragraph>
                  <FiChevronDown
                    className={`h-4 w-4 text-(--dark-blue) transform transition-transform duration-300 ${openIndex === index ? "rotate-180" : "rotate-0"}`}
                  />
                </button>
                <div
                  id={`accordion-content-${index}`}
                  role="region"
                  aria-labelledby={`accordion-header-${index}`}
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${openIndex === index ? "max-h-40 opacity-100 py-2" : "max-h-0 opacity-0 py-0"}`}
                >
                  <Span className="text-(--dark-blue) leading-relaxed">
                    {item.content}
                  </Span>
                </div>
              </div>
            ))}
          </div>
        </div>
    </Section>
  );
}
