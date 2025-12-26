"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import Image from "next/image";
import Section from "@/components/common/Section";
import type { FC } from "react";

interface Partner {
    id: string;
    name: string;
    logo_url: string;
    status: boolean;
}

interface LogoItemProps {
    src: string;
    name: string;
}

const getLogoSrc = (logoUrl: string) =>
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/uploads/${logoUrl}`;

const LogoItem: FC<LogoItemProps> = ({ src, name }) => (
    <div className="flex justify-center items-center h-full w-full">
        <Image
            src={src}
            alt={`${name} Logo`}
            width={120}
            height={80}
            className="h-16 lg:h-20 object-contain w-full filter grayscale hover:grayscale-0 p-4 transition-all cursor-pointer"
            loading="lazy"
            draggable={false}
        />
    </div>
);

const swiperSettings = {
    modules: [Autoplay],
    loop: true,
    speed: 500,
    slidesPerView: 6,
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

interface LogoSliderProps {
    partners: Partner[];
}

const LogoSlider: FC<LogoSliderProps> = ({ partners }) => {
    return (
        <Section aria-label="Our Partners" className="bg-(--light-blue)/10">
            <div className="w-full relative py-10">
                <Swiper {...swiperSettings}>
                    {partners
                        .filter((p) => p.status && p.logo_url)
                        .map((partner) => {
                            const logoSrc = getLogoSrc(partner.logo_url);

                            return (
                                <SwiperSlide
                                    key={partner.id}
                                    className="flex justify-center items-center"
                                >
                                    <LogoItem src={logoSrc} name={partner.name} />
                                </SwiperSlide>
                            );
                        })}
                </Swiper>
            </div>
        </Section>
    );
};

export default LogoSlider;
