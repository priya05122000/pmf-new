"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import Image from "next/image";
import Section from "@/components/common/Section";
import type { FC } from "react";

// Logo type for type safety
interface Logo {
    src: string;
    name: string;
}

// Static local logos (move to a separate file if needed)
const LOCAL_LOGOS: Logo[] = [
    { src: "/clientlogos/c1.webp", name: "PMF" },
    { src: "/clientlogos/c2.webp", name: "PMF" },
    { src: "/clientlogos/c3.webp", name: "PMF" },
    { src: "/clientlogos/c4.webp", name: "PMF" },
    { src: "/clientlogos/c5.webp", name: "PMF" },
    { src: "/clientlogos/c6.webp", name: "PMF" },
    { src: "/clientlogos/c7.webp", name: "PMF" },
    { src: "/clientlogos/c8.webp", name: "PMF" },
    { src: "/clientlogos/c9.webp", name: "PMF" },
    { src: "/clientlogos/c10.webp", name: "PMF" },
    { src: "/clientlogos/c11.webp", name: "PMF" },
    { src: "/clientlogos/c12.webp", name: "PMF" },
    { src: "/clientlogos/c13.webp", name: "PMF" },
    { src: "/clientlogos/c14.webp", name: "PMF" },
    { src: "/clientlogos/c15.webp", name: "PMF" },
    { src: "/clientlogos/c16.webp", name: "PMF" },
];

// Reusable LogoItem component
const LogoItem: FC<Logo> = ({ src, name }) => (
    <div className="flex justify-center items-center h-full w-full">
        <Image
            src={src}
            alt={`${name} Logo`}
            width={120}
            height={80}
            className="h-16 lg:h-20 object-contain w-full filter grayscale hover:grayscale-0 p-4 transition-all cursor-pointer"
            loading="lazy"
            draggable={false}
            priority={false}
        />
    </div>
);

const swiperSettings = {
    modules: [Autoplay],
    loop: true,
    speed: 500,
    slidesPerView: 6,
    spaceBetween: 0,
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    },
    breakpoints: {
        1280: { slidesPerView: 6 },
        1024: { slidesPerView: 5 },
        768: { slidesPerView: 4 },
        480: { slidesPerView: 2 },
        0: { slidesPerView: 2 },
    },
};

const LogoSlider: FC = () => (
    <Section aria-label="Our Partners" className="bg-(--light-blue)/10 ">
        <div className="w-full relative py-10">
            <Swiper {...swiperSettings} >
            {/* <Swiper {...swiperSettings} className="cursor-grab active:cursor-grabbing"> */}
                {LOCAL_LOGOS.map((logo, idx) => (
                    <SwiperSlide key={logo.name + idx} className="flex justify-center items-center">
                        <LogoItem {...logo} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    </Section>
);

export default LogoSlider;