"use client";

import React, { useCallback, memo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";
import Paragraph from "@/components/common/Paragraph";
import Heading from "@/components/common/Heading";
import Section from "@/components/common/Section";
import { Autoplay } from "swiper/modules";
import { useRouter } from "next/navigation";

// Types
interface BannerSlide {
    heading: string;
    description: string;
    backgroundImageUrl: string;
}

interface BannerItemData {
    src: string;
    alt: string;
    label: string;
    href: string;
    external: boolean;
}

interface BannerItemProps extends Omit<BannerItemData, 'href' | 'external'> {
    withBorder?: boolean;
    priority?: boolean;
    onClick: () => void;
}

// Constants
const BANNERS: BannerSlide[] = [
    {
        heading: 'Custom Kitchens: Built for Everyday Living',
        description:
            'Our custom kitchen fabrication blends thoughtful design with precise craftsmanship to create spaces that work as well as they look. Every cabinet, surface, and finish is tailored to your daily needs and long-term comfort.',
        backgroundImageUrl: "/home/banner1.webp",
    },
    {
        heading: 'Display solutions that sell at first glance.',
        description:
            'Our supermarket display equipment is designed to organize products clearly and attract customer attention without clutter. Built for durability and flexibility, each unit supports smooth movement, easy stocking, and better in-store flow.',
        backgroundImageUrl: "/home/banner2.webp",
    },
    {
        heading: 'Strong steel solutions for modern architecture.',
        description:
            'We fabricate architectural steel components that bring strength, accuracy, and clean structure to every building project. From frames to fittings, each piece is built to support lasting performance and reliable construction.',
        backgroundImageUrl: "/home/banner3.webp",
    },
    {
        heading: 'Fabrication shaped to modern spaces.',
        description:
            'PMF World delivers tailor-made fabrication solutions designed to meet the changing needs of today’s infrastructure and interior environments. Each project reflects careful planning, precise execution, and a clear understanding of functional design.',
        backgroundImageUrl: "/home/banner4.webp",
    },
];

const BANNER_ITEMS: BannerItemData[] = [
    {
        src: "/home/steel.png",
        alt: "Steel Products",
        label: "Products",
        href: "/products",
        external: false,
    },
    {
        src: "/home/contact.png",
        alt: "24/7 Support",
        label: "Contact",
        href: "tel:+97165351536",
        external: true,
    },
    {
        src: "/home/catalogue.png",
        alt: "Catalogue",
        label: "Catalogue",
        href: "/pdf/catalogue.pdf",
        external: true,
    },
];

// Reusable BannerItem component
const BannerItem = memo<BannerItemProps>(({ src, alt, label, withBorder, priority = false, onClick }) => (
    <button
        className={`px-4 sm:px-10 py-4 sm:py-6 flex flex-col items-center justify-center cursor-pointer select-none${withBorder ? ' border-x border-white/20' : ''} transition-colors duration-300 bg-transparent hover:bg-(--light-blue-five) focus:outline-none`}
        tabIndex={0}
        aria-label={label}
        type="button"
        onClick={onClick}
    >
        <Image src={src} alt={alt} width={1000} height={1000} className="w-6 h-6 sm:w-10 sm:h-10 object-cover" priority={priority} />
        <Paragraph size='base' className="text-center mt-2 text-white" aria-hidden="true">{label}</Paragraph>
    </button>
));
BannerItem.displayName = "BannerItem";

const HomeBanner: React.FC = () => {
    const router = useRouter();

    // Handles navigation for banner items
    const handleBannerItemClick = useCallback((item: BannerItemData) => {
        if (item.external) {
            window.open(item.href, item.label === "Catalogue" ? "_blank" : undefined, item.label === "Catalogue" ? "noopener,noreferrer" : undefined);
        } else {
            router.push(item.href);
        }
    }, [router]);

    return (
        <section className="p-3" aria-label="Steel Quality Banner">
            <div className="w-full mb-20 h-[80vh] xl:h-[85vh] bg-cover bg-center rounded-xl relative focus:outline-none" tabIndex={-1}>
                <nav className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 rounded-md z-20" aria-label="Quick links">
                    <ul className="flex justify-center sm:w-xl py-4 bg-(--dark-blue-eight) rounded-md backdrop-blur-md bg-blend-overlay">
                        {BANNER_ITEMS.map((item, idx) => (
                            <li key={item.label} className="rounded-md">
                                <BannerItem
                                    src={item.src}
                                    alt={item.alt}
                                    label={item.label}
                                    withBorder={idx === 1}
                                    priority={idx === 0}
                                    onClick={() => handleBannerItemClick(item)}
                                />
                            </li>
                        ))}
                    </ul>
                </nav>
                <Swiper
                    modules={[Autoplay]}
                    className="w-full h-full z-10"
                    loop
                    autoplay={{ delay: 3000, disableOnInteraction: false }}
                    aria-roledescription="carousel"
                    grabCursor
                >
                    {BANNERS.map((slide, idx) => (
                        <SwiperSlide key={idx} aria-label={`Slide ${idx + 1}`}>
                            <Section
                                className="w-full h-[80vh] xl:h-[85vh] bg-cover bg-center rounded-xl bg-fixed relative "
                                style={{ backgroundImage: `url('${slide.backgroundImageUrl}')` }}
                            >
                                <div
                                    className="absolute inset-0 rounded-xl z-0 bg-linear-to-br from-(--dark-blue) via-(--dark-blue-six) to-(--light-blue-one)"
                                    aria-hidden="true"
                                />
                                <div className="h-[85vh] w-full flex items-center justify-start relative z-10">
                                    <div className="max-w-2xl">
                                        <Heading level={4} className="text-white leading-tight">{slide.heading}</Heading>
                                        <Paragraph size="base" className="text-white mt-4">{slide.description}</Paragraph>
                                    </div>
                                </div>
                            </Section>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default HomeBanner;
