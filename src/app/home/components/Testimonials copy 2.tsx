"use client";

import React, { useRef, useEffect, useState, FC } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import Section from "@/components/common/Section";
import Paragraph from "@/components/common/Paragraph";
import Span from "@/components/common/Span";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import Heading from "@/components/common/Heading";
import { getAllTestimonials } from "@/services/testimonialService";

export interface TestimonialData {
    message: string;
    name: string;
    designation: string;
    location: string;
    photo_url: string;
}

const TestimonialCard: FC<TestimonialData> = ({ message, name, designation, location, photo_url }) => {
    const imageSrc = photo_url && photo_url.trim() !== "" ? photo_url : "/home/profile.webp";
    return (
        <div className="flex flex-col px-4 sm:px-6 justify-center items-center text-(--dark-blue) mx-auto w-full max-w-full" role="group" aria-label={`Testimonial from ${name}`}>
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
                    <Paragraph size="base" className="font-semibold">{name}</Paragraph>
                    <Span>{designation}{location ? `, ${location}` : ""}</Span>
                </div>
            </div>
        </div>
    );
};

const TestimonialSlider: FC<{ testimonials: TestimonialData[] }> = ({ testimonials }) => {
    const prevRef = useRef<HTMLButtonElement | null>(null);
    const nextRef = useRef<HTMLButtonElement | null>(null);
    const [swiperInstance, setSwiperInstance] = useState<any>(null);

    useEffect(() => {
        if (
            swiperInstance &&
            prevRef.current &&
            nextRef.current &&
            !swiperInstance.navigation.initialized
        ) {
            swiperInstance.params.navigation.prevEl = prevRef.current;
            swiperInstance.params.navigation.nextEl = nextRef.current;
            swiperInstance.navigation.init();
            swiperInstance.navigation.update();
        }
    }, [swiperInstance]);

    return (
        <div className="w-full h-full bg-(--light-gray) my-6 sm:my-10 py-6 sm:py-10 rounded-md">
            <Swiper
                modules={[Navigation, Autoplay]}
                loop
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                onSwiper={setSwiperInstance}
                className="w-full max-w-full h-full"
                grabCursor
                aria-label="Testimonials Carousel"
            >
                {testimonials.map((t, i) => (
                    <SwiperSlide key={i} className="w-full max-w-full">
                        <TestimonialCard {...t} />
                    </SwiperSlide>
                ))}
            </Swiper>
            {/* Navigation Buttons */}
            <div className="flex mt-6 sm:mt-8 gap-2 px-4 sm:px-6 w-full max-w-full mx-auto">
                <button
                    ref={prevRef}
                    className="bg-(--orange) text-white hover:bg-(--dark-blue) hover:text-(--white) rounded-full w-8 h-8 flex items-center justify-center cursor-pointer"
                    aria-label="Previous testimonial"
                    type="button"
                >
                    <MdKeyboardArrowLeft />
                </button>
                <button
                    ref={nextRef}
                    className="bg-(--orange) text-white hover:bg-(--dark-blue) hover:text-(--white) rounded-full w-8 h-8 flex items-center justify-center cursor-pointer"
                    aria-label="Next testimonial"
                    type="button"
                >
                    <MdKeyboardArrowRight />
                </button>
            </div>
        </div>
    );
};

// Remove testimonials prop from TestimonialProps
interface TestimonialProps { }

const Testimonial: FC<TestimonialProps> = () => {
    const [testimonials, setTestimonials] = useState<TestimonialData[]>([]);

    useEffect(() => {
        getAllTestimonials()
            .then((data) => {
                setTestimonials(data);
            });
    }, []);

    return (
        <Section aria-label="Testimonials Section" className="bg-(--dark-blue)">
            <div className="py-8 sm:py-10 flex flex-col sm:flex-row items-center gap-6 sm:gap-10 justify-between w-full max-w-full">
                <div className="sm:flex-1 text-white min-w-0 w-full max-w-full">
                    <Heading level={4}>Our Testimonials</Heading>
                    <Paragraph size="base" className="mx-auto mt-4 max-w-2xl">
                        Here’s what our satisfied clients are saying about working with PMF World. From quality craftsmanship to dependable service, their feedback reflects our commitment to lasting results.
                    </Paragraph>
                </div>
                <div className="sm:flex-1 lg:flex-2 min-w-0 w-full max-w-full">
                    {testimonials.length === 0 ? (
                        <Paragraph className="text-center text-white ">No testimonials found.</Paragraph>
                    ) : (
                        <TestimonialSlider testimonials={testimonials} />
                    )}
                </div>
            </div>
        </Section>
    );
};

export default Testimonial;
