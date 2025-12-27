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
import CenterSection from "@/components/common/CenterSection";
import { GoDotFill } from "react-icons/go";

// Testimonial data type for reusability
export interface TestimonialData {
    text: string;
    name: string;
    title: string;
    image: string;
}

// Static testimonials (move to a separate file if needed)
export const testimonials: TestimonialData[] = [
    {
        text: "PMF World delivered our stainless steel kitchen equipment exactly as promised. The finish, strength, and attention to detail were excellent, and the installation team worked efficiently without disrupting our operations.",
        name: 'Ahmed Al Maktoum',
        title: 'Operations Manager, Dubai',
        image: '/home/avatar.jpg',
    },
    {
        text: "We partnered with PMF World for supermarket display equipment, and the results were very satisfying. The layouts were practical, durable, and well suited for daily customer use. Their team understood our retail needs clearly.",
        name: 'Fatima Noor',
        title: 'Retail Project Lead, Deira',
        image: '/home/avatar.jpg',
    },
    {
        text: "The stainless steel hand rails and barriers supplied by PMF World were sturdy and well designed. Safety standards were met, and the work was completed on schedule with clean finishing throughout the site.",
        name: 'Rashid Khan',
        title: 'Facility Supervisor, Al Qusais',
        image: '/home/avatar.jpg',
    },
    {
        text: "PMF World provided reliable bakery equipment supplies that fit perfectly into our workspace. The equipment is easy to maintain and has held up well under constant use, which is essential for our daily production.",
        name: 'Suresh Babu',
        title: 'Bakery Owner, Jumeirah',
        image: '/home/avatar.jpg',
    },
    {
        text: "Our hotel kitchen equipment was custom-made by PMF World to suit high-volume service. The durability and functional design have made daily kitchen operations smoother for our staff.",
        name: 'Latha Menon',
        title: 'Hotel Director, Business Bay',
        image: '/home/avatar.jpg',
    }

];

// Reusable TestimonialCard component
const TestimonialCard: FC<TestimonialData> = ({ text, name, title, image }) => (
    <div className="flex flex-col px-4 sm:px-6 justify-center items-center text-(--dark-blue) mx-auto w-full max-w-full" role="group" aria-label={`Testimonial from ${name}`}>
        <Paragraph size="lg" className="font-medium mb-8 text-justify">
            “{text}”
        </Paragraph>
        <div className="flex items-center gap-3 w-full">
            <img
                src={image}
                alt={`Photo of ${name}`}
                className="w-12 h-12 rounded-full bg-(--orange) p-0.5"
                loading="lazy"
                width={48}
                height={48}
            />
            <div>
                <Paragraph size="base" className="font-semibold">{name}</Paragraph>
                <Span>{title}</Span>
            </div>
        </div>
    </div>
);

// Reusable TestimonialSlider component
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
                    className="bg-(--orange) text-white hover:bg-(--white) hover:text-(--dark-blue) rounded-full w-8 h-8 flex items-center justify-center cursor-pointer"
                    aria-label="Previous testimonial"
                    type="button"
                >
                    <MdKeyboardArrowLeft />
                </button>
                <button
                    ref={nextRef}
                    className="bg-(--orange) text-white hover:bg-(--white) hover:text-(--dark-blue) rounded-full w-8 h-8 flex items-center justify-center cursor-pointer"
                    aria-label="Next testimonial"
                    type="button"
                >
                    <MdKeyboardArrowRight />
                </button>
            </div>
        </div>
    );
};

const Testimonial: FC = () => (
    <Section aria-label="Testimonials Section" className="bg-(--dark-blue)">
        <div className="py-8 sm:py-10 flex flex-col sm:flex-row items-center gap-6 sm:gap-10 justify-between w-full max-w-full">
            <div className="sm:flex-1 text-white min-w-0 w-full max-w-full">
                <Heading level={4}>Our Testimonials</Heading>
                <Paragraph size="base" className="mx-auto mt-4 max-w-2xl">
                    Here’s what our satisfied clients are saying about working with PMF World. From quality craftsmanship to dependable service, their feedback reflects our commitment to lasting results.
                </Paragraph>
            </div>
            <div className="sm:flex-1 lg:flex-2 min-w-0 w-full max-w-full">
                <TestimonialSlider testimonials={testimonials} />
            </div>
        </div>
    </Section>
);

export default Testimonial;
