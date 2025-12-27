"use client";

import Heading from "@/components/common/Heading";
import Paragraph from "@/components/common/Paragraph";
import React, { useState, FC, memo, useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import Image from "next/image";
import Span from "@/components/common/Span";
import { CgArrowLongLeft, CgArrowLongRight } from "react-icons/cg";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import Section from "@/components/common/Section";

interface TestimonialData {
  message: string;
  name: string;
  designation: string;
  location: string;
  photo_url: string;
}

const getImageUrl = (photo_url?: string | null) => {
  if (!photo_url || photo_url.trim() === "") return "/home/profile.webp";
  return photo_url;
};

const TestimonialCard: FC<TestimonialData> = ({
  message,
  name,
  designation,
  location,
  photo_url,
}) => {
  const imageSrc =
    photo_url && photo_url.trim() !== "" ? photo_url : "/home/profile.webp";
  return (
    <div
      className="flex flex-col px-4 sm:px-6 justify-center items-center text-(--dark-blue) mx-auto w-full max-w-full"
      role="group"
      aria-label={`Testimonial from ${name}`}
    >
      <Paragraph size="lg" className="font-medium mb-8 text-justify">
        <span
          dangerouslySetInnerHTML={{
            __html: message,
          }}
        />
      </Paragraph>
      <div className="flex items-center gap-3 w-full">
        <img
          src={imageSrc}
          alt={`Photo of ${name}`}
          className="w-12 h-12 rounded-full bg-(--orange) p-0.5"
          loading="lazy"
          width={48}
          height={48}
        />
        <div>
          <Paragraph size="base" className="font-semibold">
            {name}
          </Paragraph>
          <Span>
            {designation}
            {location ? `, ${location}` : ""}
          </Span>
        </div>
      </div>
    </div>
  );
};

const Testimonials: FC<{ testimonials: TestimonialData[] }> = ({
  testimonials,
}) => {
  const [navigation, setNavigation] = useState<{
    prevEl: null | HTMLElement;
    nextEl: null | HTMLElement;
  }>({ prevEl: null, nextEl: null });
  const eventsRef = useRef<HTMLDivElement | null>(null);
  const headingRef = useRef<HTMLHeadingElement | null>(null);

    const [mounted, setMounted] = useState(false);
    // const [data, setData] = useState<TestimonialData[]>([]);

    useEffect(() => {
      setMounted(true);
    //   setData(testimonials);
    }, [testimonials]);

    if (!mounted) return null;


  return (
    <div ref={eventsRef}>
      <Section aria-label="Testimonials Section" className="bg-(--dark-blue)">
        <div className="py-8 sm:py-10 flex flex-col sm:flex-row items-center gap-6 sm:gap-10 justify-between w-full max-w-full">
          <div className="sm:flex-1 text-white min-w-0 w-full max-w-full">
            <Heading level={4}>Our Testimonials</Heading>
            <Paragraph size="base" className="mx-auto mt-4 max-w-2xl">
              Here’s what our satisfied clients are saying about working with
              PMF World. From quality craftsmanship to dependable service, their
              feedback reflects our commitment to lasting results.
            </Paragraph>
          </div>
          <div className="sm:flex-1 lg:flex-2 min-w-0 w-full max-w-full">
            {testimonials.length === 0 ? (
              <Paragraph className="text-center text-white ">
                No testimonials found.
              </Paragraph>
            ) : (
              <div className="w-full h-full bg-(--light-gray) my-6 sm:my-10 py-6 sm:py-10 rounded-md">
                <Swiper
                  modules={[Navigation, Autoplay]}
                  navigation={navigation}
                  loop={true}
                  grabCursor={true}
                  className="w-full max-w-full h-full"
                  autoplay={{ delay: 3000, disableOnInteraction: false }}
                  aria-label="Testimonials Carousel"
                  breakpoints={{
                    0: { slidesPerView: 1, spaceBetween: 16 },
                    640: { slidesPerView: 1, spaceBetween: 24 },
                    1024: { slidesPerView: 1, spaceBetween: 32 },
                    1280: { slidesPerView: 1, spaceBetween: 32 },
                  }}
                >
                  {testimonials.map(
                    (testimonial: TestimonialData, idx: number) => (
                      <SwiperSlide key={idx} className="w-full max-w-full">
                        <TestimonialCard {...testimonial} />
                      </SwiperSlide>
                    )
                  )}
                </Swiper>
                <div className="flex flex-col items-end ">
                  <Span className="text-(--blue)">Prev/Nxt</Span>
                  <div className="flex items-center space-x-4 mt-2">
                    <button
                      ref={(node) => {
                        if (node && navigation.prevEl !== node)
                          setNavigation((nav) => ({ ...nav, prevEl: node }));
                      }}
                      className="text-2xl text-(--blue) focus:outline-none cursor-pointer"
                      aria-label="Previous"
                      type="button"
                    >
                      <CgArrowLongLeft />
                    </button>
                    <button
                      ref={(node) => {
                        if (node && navigation.nextEl !== node)
                          setNavigation((nav) => ({ ...nav, nextEl: node }));
                      }}
                      className="text-2xl text-(--blue) focus:outline-none cursor-pointer"
                      aria-label="Next"
                      type="button"
                    >
                      <CgArrowLongRight />
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Testimonials;
