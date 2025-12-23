import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";
import Paragraph from "@/components/common/Paragraph";
import Heading from "@/components/common/Heading";
import Section from "@/components/common/Section";
import { Autoplay } from "swiper/modules";
import { useRouter } from "next/navigation";

interface BannerSlide {
    heading: string;
    description: string;
    backgroundImageUrl: string;
}

const BANNERS: BannerSlide[] = [
    {
        heading: 'Custom Kitchens: Built for Everyday Living',
        description:
            'Our custom kitchen fabrication blends thoughtful design with precise craftsmanship to create spaces that work as well as they look. Every cabinet, surface, and finish is tailored to your daily needs and long-term comfort.',
        backgroundImageUrl: "/home/banner.webp",
    },
    {
        heading: 'Display solutions that sell at first glance.',
        description:
            'Our supermarket display equipment is designed to organize products clearly and attract customer attention without clutter. Built for durability and flexibility, each unit supports smooth movement, easy stocking, and better in-store flow.',
        backgroundImageUrl: "/home/banner.webp",
    },
    {
        heading: 'Strong steel solutions for modern architecture.',
        description:
            'We fabricate architectural steel components that bring strength, accuracy, and clean structure to every building project. From frames to fittings, each piece is built to support lasting performance and reliable construction.',
        backgroundImageUrl: "/home/banner.webp",
    },
    {
        heading: 'Fabrication shaped to modern spaces.',
        description:
            'PMF World delivers tailor-made fabrication solutions designed to meet the changing needs of today’s infrastructure and interior environments. Each project reflects careful planning, precise execution, and a clear understanding of functional design.',
        backgroundImageUrl: "/home/banner.webp",
    },
];

const BANNER_ITEMS = [
    {
        src: "/home/steel.png",
        alt: "Steel Products",
        label: "Products",
    },
    {
        src: "/home/contact.png",
        alt: "24/7 Support",
        label: "Contact",
    },
    {
        src: "/home/catalogue.png",
        alt: "Catalogue",
        label: "Catalogue",
    },
];

function BannerItem({ src, alt, label, withBorder, priority = false }: { src: string; alt: string; label: string; withBorder?: boolean; priority?: boolean }) {
    const router = useRouter();
    const handleClick = () => {
        if (label === "Products") {
            router.push("/products");
        } else if (label === "Catalogue") {
            window.open("/pdf/catalogue.pdf", "_blank", "noopener,noreferrer");
        } else if (label === "Contact") {
            window.open("tel:+919500000000"); // Replace with your actual phone number
        }
    };
    return (
        <button
            className={`px-4 sm:px-10 py-4 sm:py-6 flex flex-col items-center justify-center cursor-pointer select-none ${withBorder ? ' border-x border-white/20' : ''} transition-colors duration-300 bg-transparent hover:bg-(--light-blue)/50  focus:outline-none`}
            tabIndex={0}
            aria-label={label}
            type="button"
            onClick={handleClick}
        >
            <Image src={src} alt={alt} width={40} height={40} className="w-10 h-10 object-cover" priority={priority} />
            <Paragraph size='base' className="text-center mt-2 text-white" aria-hidden="true">{label}</Paragraph>
        </button>
    );
}

const HomeBanner = () => (
    <section className="p-3" aria-label="Steel Quality Banner">
        <div className="w-full mb-20 h-[80vh] xl:h-[85vh] bg-cover bg-center rounded-xl relative focus:outline-none" tabIndex={-1}>
            <div className="absolute inset-0 bg-(--light-blue)/30 rounded-xl z-0" aria-hidden="true"></div>
            <nav className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 rounded-md z-20" aria-label="Quick links">
                <ul className="flex justify-center sm:w-xl py-4 bg-(--dark-blue)/80 rounded-md backdrop-blur-md bg-blend-overlay">
                    {BANNER_ITEMS.map((item, idx) => (
                        <li key={item.label} className=" rounded-md">
                            <BannerItem {...item} withBorder={idx === 1} priority={idx === 0} />
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
                            className="w-full h-[80vh] xl:h-[85vh] bg-cover bg-center rounded-xl bg-fixed relative"
                            style={{ backgroundImage: `url('${slide.backgroundImageUrl}')` }}
                        >
                            <div className="absolute inset-0 bg-(--light-blue)/30 rounded-xl z-0" aria-hidden="true"></div>
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

export default HomeBanner;
