"use client";

import Heading from '@/components/common/Heading';
import Paragraph from '@/components/common/Paragraph';
import React, { useState, FC, memo, useRef } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import Image from 'next/image';
import Span from '@/components/common/Span';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import Section from '@/components/common/Section';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';

// Types
interface TestimonialData {
    message: string;
    name: string;
    designation: string;
    location: string;
    photo_url: string;
    status?: boolean;
}

// Reusable TestimonialCard
const TestimonialCard: FC<TestimonialData> = memo(({ message, name, designation, location, photo_url }) => {
    const imageSrc = photo_url && photo_url.trim() !== "" ? photo_url : "/home/profile.webp";
    return (
        <div className="flex flex-col px-4 sm:px-6 justify-center items-center text-(--dark-blue) mx-auto w-full max-w-full" role="group" aria-label={`Testimonial from ${name}`}>
            <Paragraph size="lg" className="font-medium mb-8 text-justify">
                <span dangerouslySetInnerHTML={{ __html: message }} />
            </Paragraph>
            <div className="flex items-center gap-3 w-full">
                <Image
                    src={imageSrc}
                    alt={`Photo of ${name}`}
                    className="w-12 h-12 rounded-full bg-(--orange) p-0.5"
                    loading="lazy"
                    width={48}
                    height={48}
                    unoptimized={imageSrc.startsWith('http')}
                    priority={false}
                    draggable={false}
                />
                <div>
                    <Paragraph size="base" className="font-semibold">{name}</Paragraph>
                    <Span>{designation}{location ? `, ${location}` : ""}</Span>
                </div>
            </div>
        </div>
    );
});
TestimonialCard.displayName = 'TestimonialCard';

// Reusable Navigation Button
interface NavButtonProps {
    onClick?: () => void;
    ariaLabel: string;
    children: React.ReactNode;
    buttonRef?: (node: HTMLButtonElement | null) => void;
}

const NavButton: FC<NavButtonProps> = memo(({ onClick, ariaLabel, children, buttonRef }) => (
    <button
        ref={buttonRef}
        onClick={onClick}
        className="bg-(--orange) text-white hover:bg-(--dark-blue) hover:text-(--white) rounded-full w-8 h-8 flex items-center justify-center cursor-pointer focus:outline-none "
        aria-label={ariaLabel}
        type="button"
        tabIndex={0}
    >
        {children}
    </button>
));
NavButton.displayName = 'NavButton';

const Testimonials: FC<{ testimonials: TestimonialData[] }> = ({ testimonials }) => {
    // Filter only active testimonials
    const activeTestimonials = testimonials.filter(t => t.status === true);
    const [navigation, setNavigation] = useState<{ prevEl: null | HTMLElement; nextEl: null | HTMLElement; }>({ prevEl: null, nextEl: null });
    const eventsRef = useRef<HTMLDivElement | null>(null);

    return (
        <div ref={eventsRef}>
            <Section aria-label="Testimonials Section" className="bg-(--dark-blue)">
                <div className="py-8 sm:py-10 flex flex-col sm:flex-row items-center gap-6 sm:gap-10 justify-between w-full max-w-full">
                    <div className="sm:flex-1 text-white min-w-0 w-full max-w-full">
                        <Heading level={4}>Our Testimonials</Heading>
                        <Paragraph size="base" className="mx-auto mt-4 max-w-2xl">
                            Here’s what our satisfied clients are saying about working with PMF World. From quality craftsmanship to dependable service, their feedback reflects our commitment to lasting results.
                        </Paragraph>
                    </div>
                    <div className="sm:flex-1 lg:flex-2 min-w-0 w-full max-w-full">
                        {activeTestimonials.length === 0 ? (
                            <Paragraph className="text-center text-white ">No testimonials found.</Paragraph>
                        ) : (
                            <div className="w-full h-full bg-(--light-gray) my-6 sm:my-10 py-6 sm:py-10 rounded-md">
                                <Swiper
                                    modules={[Navigation, Autoplay]}
                                    navigation={navigation}
                                    loop
                                    grabCursor
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
                                    {activeTestimonials.map((testimonial, idx) => (
                                        <SwiperSlide key={idx} className="w-full max-w-full">
                                            <TestimonialCard {...testimonial} />
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                                <div className="flex mt-6 sm:mt-8 gap-2 px-4 sm:px-6 w-full max-w-full mx-auto ">
                                    <NavButton
                                        ariaLabel="Previous testimonial"
                                        buttonRef={(node) => {
                                            if (node && navigation.prevEl !== node)
                                                setNavigation((nav) => ({ ...nav, prevEl: node }));
                                        }}
                                    >
                                        <MdKeyboardArrowLeft />
                                    </NavButton>
                                    <NavButton
                                        ariaLabel="Next testimonial"
                                        buttonRef={(node) => {
                                            if (node && navigation.nextEl !== node)
                                                setNavigation((nav) => ({ ...nav, nextEl: node }));
                                        }}
                                    >
                                        <MdKeyboardArrowRight />
                                    </NavButton>
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
