"use client"

import Image from "next/image"
import { motion, LayoutGroup, AnimatePresence } from "framer-motion"
import { useState } from "react"
import CenterSection from "@/components/common/CenterSection"
import { GoArrowUpRight } from "react-icons/go"
import Paragraph from "@/components/common/Paragraph"
import Heading from "@/components/common/Heading"
import Link from "next/link"

// Service image type
interface ServiceImage {
    id: string;
    src: string;
    src1: string;
    alt: string;
    title: string;
    description: string;
}

const SERVICE_IMAGES: ServiceImage[] = [
    {
        id: "1",
        src: "/home/service1.webp",
        src1: "/home/servicelight1.webp",
        alt: "Custom kitchen equipment",
        title: "Custom kitchen equipment",
        description: "Built-to-order kitchen solutions designed for efficiency, hygiene, and long-term daily use."
    },
    {
        id: "2",
        src: "/home/service2.webp",
        src1: "/home/servicelight2.webp",
        alt: "Retail displays",
        title: "Retail displays",
        description: "Well-crafted display units that enhance product visibility while fitting seamlessly into retail spaces."
    },
    {
        id: "3",
        src: "/home/service3.webp",
        src1: "/home/servicelight3.webp",
        alt: "Architectural",
        title: "Architectural",
        description: "Precision-fabricated steel components that support strong, clean, and dependable building structures."
    },
    {
        id: "4",
        src: "/home/service4.webp",
        src1: "/home/servicelight4.webp",
        alt: "Miscellaneous",
        title: "Miscellaneous",
        description: "Specialized fabrication work tailored to unique requirements that fall outside standard categories."
    },
    {
        id: "5",
        src: "/home/service5.webp",
        src1: "/home/servicelight5.webp",
        alt: "Other services",
        title: "Other services",
        description: "Additional fabrication and support services delivered with the same commitment to quality and reliability."
    },
]

// Reusable ServiceImageCard props type
interface ServiceImageCardProps {
    src: string;
    alt: string;
    layoutId: string;
    onClick?: () => void;
    priority?: boolean;
    className?: string;
}

// Reusable ServiceImageCard function
const ServiceImageCard = ({ src, alt, layoutId, onClick, priority = false, className = "" }: ServiceImageCardProps) => (
    <motion.div
        layoutId={layoutId}
        className={className}
        whileHover={onClick ? { scale: 1.05 } : undefined}
        transition={{ type: "spring", stiffness: 130, damping: 22 }}
        onClick={onClick}
        tabIndex={onClick ? 0 : -1}
        role={onClick ? "button" : undefined}
        aria-label={alt}
        style={{ outline: "none" }}
    >
        <Image
            src={src}
            alt={alt}
            fill
            priority={priority}
            className="object-cover rounded-md"
            sizes="(max-width: 768px) 100vw, 50vw"
            loading={priority ? undefined : "lazy"}
            draggable={false}
        />
    </motion.div>
);

export default function Services() {
    const [images, setImages] = useState<ServiceImage[]>(SERVICE_IMAGES);

    // Swap function for main/thumbnail images
    const swap = (i: number) => {
        if (i === 0) return;
        const copy = [...images];
        [copy[0], copy[i]] = [copy[i], copy[0]];
        setImages(copy);
    };

    return (
        <CenterSection>
            <div className="py-10 sm:py-16 lg:py-20">
                <LayoutGroup>
                    <div className="flex flex-col items-center">
                        <Heading level={4} className="text-(--dark-blue)">Our Categories</Heading>
                        <Paragraph size="base" className="text-(--dark-blue) mt-4 max-w-2xl text-center">
                            We cover a wide range of fabrication needs, from custom kitchen equipment and retail displays to architectural and miscellaneous works. Each service is handled with the same focus on accuracy, durability, and practical design.
                        </Paragraph>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:h-[60vh] mt-10">
                        {/* MAIN IMAGE */}
                        <div className="relative h-[50vh] sm:h-[60vh] rounded-md overflow-hidden flex flex-col">
                            <div className="relative flex-1 h-full">
                                <AnimatePresence mode="popLayout">
                                    <ServiceImageCard
                                        key={images[0].id}
                                        src={images[0].src}
                                        alt={images[0].alt}
                                        layoutId={images[0].id}
                                        priority
                                        className="absolute inset-0"
                                    />
                                </AnimatePresence>
                            </div>
                            {/* CONTENT */}
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={images[0].id + "-content"}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    transition={{ duration: 0.4 }}
                                    className="absolute bottom-0 p-4 bg-(--dark-blue-eight) backdrop-blur-md rounded-md w-4/5 sm:w-2/3 m-4"
                                >
                                    <Heading level={6} className="text-white">
                                        {images[0].title}
                                    </Heading>
                                    <Paragraph size="sm" className="mt-2 text-white">
                                        {images[0].description}
                                    </Paragraph>
                                </motion.div>
                            </AnimatePresence>
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={images[0].id + "-content-top"}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    transition={{ duration: 0.4 }}
                                    className="absolute top-0 right-0 m-4"
                                >
                                    <Link
                                        href="#top"
                                        aria-label="Back to top"
                                        className="flex items-center justify-center p-2 rounded-full bg-(--orange) hover:bg-(--dark-blue) transition-colors text-white shadow-lg"
                                    >
                                        <GoArrowUpRight className="text-2xl" />
                                    </Link>
                                </motion.div>
                            </AnimatePresence>
                        </div>
                        {/* THUMB GRID */}
                        <div className="grid grid-cols-2 gap-4 h-[25vh] sm:h-[60vh]">
                            {images.slice(1).map((img, i) => (
                                <div
                                    key={img.id}
                                    className="relative rounded-md overflow-hidden cursor-pointer h-full"
                                    onClick={() => swap(i + 1)}
                                    tabIndex={0}
                                    role="button"
                                    aria-label={`Show ${img.alt}`}
                                    onKeyDown={e => (e.key === "Enter" || e.key === " ") && swap(i + 1)}
                                    style={{ outline: "none" }}
                                >
                                    <AnimatePresence mode="popLayout">
                                        <ServiceImageCard
                                            key={img.id}
                                            src={img.src1}
                                            alt={img.alt}
                                            layoutId={img.id}
                                            className="relative w-full h-full"
                                        />
                                    </AnimatePresence>
                                </div>
                            ))}
                        </div>
                    </div>
                </LayoutGroup>
            </div>
        </CenterSection>
    );
}
