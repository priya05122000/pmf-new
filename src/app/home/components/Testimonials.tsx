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
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum eos debitis possimus incidunt laudantium deleniti, laboriosam commodi et unde ab qui exercitationem harum ut numquam fugit excepturi maiores a quisquam recusandae inventore vitae neque? Nihil nulla totam dignissimos minus labore nostrum voluptates animi vero natus, fugit alias delectus optio nobis.",
        name: 'John Doe',
        title: 'CEO, Tech Innovations',
        image: '/home/avatar.jpg',
    },
    {
        text: "Advisory has been a game-changer for our business. With its comprehensive financial management tools, we've been able to streamline our processes and make more informed decisions. The customer support team is also top-notch.",
        name: 'John Doe',
        title: 'CEO, Tech Innovations',
        image: '/home/avatar.jpg',
    },
];

// Reusable TestimonialCard component
const TestimonialCard: FC<TestimonialData> = ({ text, name, title, image }) => (
    <div className="flex flex-col px-6 justify-center items-center text-white mx-auto" role="group" aria-label={`Testimonial from ${name}`}>
        <Paragraph size="lg" className="font-medium mb-8 text-justify">
            “{text}”
        </Paragraph>
        <div className="flex items-center gap-3 w-full">
            <img
                src={image}
                alt={`Photo of ${name}`}
                className="w-12 h-12 rounded-full"
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
        <div className="w-full h-full bg-(--dark-blue) my-10 py-10 rounded-md">
            <Swiper
                modules={[Navigation, Autoplay]}
                loop
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                onSwiper={setSwiperInstance}
                className="max-w-3xl xl:max-w-4xl h-full "
                grabCursor
                aria-label="Testimonials Carousel"
            >
                {testimonials.map((t, i) => (
                    <SwiperSlide key={i}>
                        <TestimonialCard {...t} />
                    </SwiperSlide>
                ))}
            </Swiper>
            {/* Navigation Buttons */}
            <div className="flex mt-8 gap-2 px-6 max-w-3xl xl:max-w-4xl mx-auto">
                <button
                    ref={prevRef}
                    className="bg-white hover:bg-(--orange) hover:text-white rounded-full w-8 h-8 flex items-center justify-center cursor-pointer"
                    aria-label="Previous testimonial"
                    type="button"
                >
                    <MdKeyboardArrowLeft />
                </button>
                <button
                    ref={nextRef}
                    className="bg-white hover:bg-(--orange) hover:text-white rounded-full w-8 h-8 flex items-center justify-center cursor-pointer"
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
    <CenterSection aria-label="Testimonials Section">
        <div className="py-10 sm:py-20">
            {/* <div>
                <Heading level={4} className="text-(--dark-blue) text-center">Our Testimonials</Heading>
                <Paragraph size="base" className="text-(--dark-blue) text-center mt-4 max-w-2xl mx-auto">
                    Stay updated with our latest insights, industry trends, and expert advice through our curated blog posts. Explore topics that matter to you and discover how we can help your business thrive.
                </Paragraph>
            </div> */}
            <div>
                <div className="flex flex-row gap-2 items-center lg:min-w-20 xl:min-w-50 mb-6 lg:mb-0 md:mr-4">
                    <GoDotFill aria-hidden="true" />
                    <Paragraph size="base" className="font-medium uppercase" id="about-us-heading">Testimonials</Paragraph>
                </div>
                <Heading level={4} className="text-(--dark-blue)">Our Testimonials</Heading>
                <Paragraph size="base" className="text-(--dark-blue) mt-4 max-w-2xl">
                    Stay updated with our latest insights, industry trends, and expert advice through our curated blog posts. Explore topics that matter to you and discover how we can help your business thrive.
                </Paragraph>


            </div>
            <TestimonialSlider testimonials={testimonials} />
        </div>
    </CenterSection>
);

export default Testimonial;
