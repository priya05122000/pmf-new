"use client";

import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Controller } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import Section from "@/components/common/Section";
import CenterSection from "@/components/common/CenterSection";
import Heading from "@/components/common/Heading";
import Paragraph from "@/components/common/Paragraph";
import { GoDotFill } from "react-icons/go";

const slides = [
    {
        name: "Shaun Matthews",
        image:
            "/home/service1.webp",
        text:
            "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    },
    {
        name: "Alexis Berry",
        image:
            "/home/service2.webp",
        text:
            "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    },
    {
        name: "Billie Pierce",
        image:
            "/home/service3.webp",
        text:
            "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    },
    {
        name: "Trevor Copeland",
        image:
            "/home/service4.webp",
        text:
            "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    },
];
export default function HeroSwiper() {
    const mainRef = useRef<SwiperType | null>(null);
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <CenterSection>
            <div className="py-10 sm:py-20">
                {/* <Heading level={4} className="text-(--dark-blue) text-center">Our Services</Heading>
                <Paragraph size="base" className="text-(--dark-blue) text-center mt-4 max-w-2xl mx-auto">
                    Stay updated with our latest insights, industry trends, and expert advice through our curated blog posts. Explore topics that matter to you and discover how we can help your business thrive.
                </Paragraph> */}
                <div>
                    <div className="flex flex-row gap-2 items-center lg:min-w-20 xl:min-w-50 mb-6 lg:mb-0 md:mr-4">
                        <GoDotFill aria-hidden="true" />
                        <Paragraph size="base" className="font-medium uppercase" id="about-us-heading">Services</Paragraph>
                    </div>
                    <Heading level={4} className="text-(--dark-blue)">Our Services</Heading>
                    <Paragraph size="base" className="text-(--dark-blue) mt-4 max-w-2xl">
                        Stay updated with our latest insights, industry trends, and expert advice through our curated blog posts. Explore topics that matter to you and discover how we can help your business thrive.
                    </Paragraph>


                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 h-[60vh] lg:h-[70vh] w-full overflow-hidden gap-4 mt-10">
                    {/* Main Slider */}

                    <div className="relative">
                        <Swiper
                            modules={[Navigation, Controller]}
                            onSwiper={(swiper) => (mainRef.current = swiper)}
                            loop
                            speed={1000}
                            navigation={false}
                            className="h-full"
                            initialSlide={activeIndex}
                            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
                        >
                            {slides.map((slide, i) => (
                                <SwiperSlide key={i}>
                                    <div
                                        className="h-full rounded-md w-full bg-cover bg-center relative "
                                        style={{ backgroundImage: `url(${slide.image})` }}
                                    >
                                        <div className="absolute bottom-0 left-1/2  -translate-x-1/2 w-full  text-white bg-(--dark-blue)/80 p-4">
                                            <Heading level={6} className="font-bold mb-2">
                                                {slide.name}
                                            </Heading>
                                            <Paragraph size="base" className="leading-snug">
                                                {slide.text}
                                            </Paragraph>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>

                    {/* Thumbnail / Nav Slider */}
                    <div className="overflow-y-auto hidden sm:block">
                        <div className="grid grid-cols-2 gap-4  h-full">
                            {slides.map((slide, i) => (
                                <div
                                    key={i}
                                    className={`cursor-pointer flex items-center gap-3 `
                                    }
                                    onClick={() => {
                                        setActiveIndex(i);
                                        mainRef.current?.slideToLoop(i);
                                    }}
                                >
                                    <div
                                        className="h-full w-full rounded bg-cover bg-center"
                                        style={{ backgroundImage: `url(${slide.image})` }}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

        </CenterSection>

    );
}
