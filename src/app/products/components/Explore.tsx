"use client";
import Heading from '@/components/common/Heading';
import Paragraph from '@/components/common/Paragraph';
import React, { useState } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import Image from 'next/image';
import Span from '@/components/common/Span';
import { CgArrowLongLeft, CgArrowLongRight } from 'react-icons/cg';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import Section from '@/components/common/Section';

// Reusable type for Blog
export type Blog = {
    id: string;
    image_url: string;
    video_url: string;
    title: string;
    sub_title: string;
    created_at: string;
};

// Product type (reusable)
export type Product = {
    id: number;
    name: string;
    href: string;
    imageSrc: string;
    imageAlt: string;
    price: string;
    color: string;
};

export const products: Product[] = [
    {
        id: 1,
        name: 'Basic Tee',
        href: '#',
        imageSrc: '/products/products1.webp',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$35',
        color: 'Black',
    },
    {
        id: 2,
        name: 'Basic Tee',
        href: '#',
        imageSrc: '/products/products2.webp',
        imageAlt: "Front of men's Basic Tee in white.",
        price: '$35',
        color: 'Aspen White',
    },
    {
        id: 3,
        name: 'Basic Tee',
        href: '#',
        imageSrc: '/products/products3.webp',
        imageAlt: "Front of men's Basic Tee in dark gray.",
        price: '$35',
        color: 'Charcoal',
    },
    {
        id: 4,
        name: 'Artwork Tee',
        href: '#',
        imageSrc: '/products/products4.webp',
        imageAlt: "Front of men's Artwork Tee in peach with white and brown dots forming an isometric cube.",
        price: '$35',
        color: 'Iso Dots',
    },
    {
        id: 5,
        name: 'Basic Tee',
        href: '#',
        imageSrc: '/products/products5.webp',
        imageAlt: "Front of men's Basic Tee in dark gray.",
        price: '$35',
        color: 'Charcoal',
    },
    {
        id: 6,
        name: 'Artwork Tee',
        href: '#',
        imageSrc: '/products/products6.webp',
        imageAlt: "Front of men's Artwork Tee in peach with white and brown dots forming an isometric cube.",
        price: '$35',
        color: 'Iso Dots',
    },
    {
        id: 7,
        name: 'Artwork Tee',
        href: '#',
        imageSrc: '/products/products7.webp',
        imageAlt: "Front of men's Artwork Tee in peach with white and brown dots forming an isometric cube.",
        price: '$35',
        color: 'Iso Dots',
    },
    {
        id: 8,
        name: 'Artwork Tee',
        href: '#',
        imageSrc: '/products/products8.webp',
        imageAlt: "Front of men's Artwork Tee in peach with white and brown dots forming an isometric cube.",
        price: '$35',
        color: 'Iso Dots',
    },
];


// ProductCard component (reusable, accessible, optimized)
const ProductCard: React.FC<{ product: Product }> = React.memo(({ product }) => (
    <article className="group relative" aria-label={product.name} tabIndex={0}>
        <div className="flex justify-around items-center w-full h-full rounded-t-md overflow-hidden p-6 neumorphic-variation2 bg-(--light-blue)/10 shadow-[inset_6px_6px_10px_0_rgba(0,0,0,0.1),inset_-6px_-6px_40px_0_rgba(255,255,255,0.5)] lg:h-72">
            <Image
                alt={product.imageAlt}
                src={product.imageSrc}
                className="w-full h-full rounded-md object-contain"
                loading="lazy"
                width={300}
                height={300}
                priority={false}
            />
        </div>
        <div className="border-x border-b rounded-b-md p-2 border-(--light-blue)/20 text-center">
            <Paragraph size="lg" className="font-medium">
                <a href={product.href} tabIndex={-1} aria-label={product.name}>
                    <span aria-hidden="true" className="absolute inset-0" />
                    {product.name}
                </a>
            </Paragraph>
        </div>
    </article>
));

const Explore: React.FC = () => {
    const [navigation, setNavigation] = useState<{ prevEl: null | HTMLElement; nextEl: null | HTMLElement; }>({ prevEl: null, nextEl: null });
    const eventsRef = React.useRef<HTMLDivElement | null>(null);
    const headingRef = React.useRef<HTMLHeadingElement | null>(null);

    return (
        <div ref={eventsRef}>
            <Section>
                <div className="py-10 sm:py-20">
                    <div className="mb-8">
                        <Heading ref={headingRef} level={4} className="text-(--dark-blue) mt-1 leading-tight uppercase latest-title">
                            Explore Our Products
                        </Heading>
                    </div>
                    <Swiper
                        modules={[Navigation, Autoplay]}
                        spaceBetween={32}
                        slidesPerView={4}
                        loop
                        grabCursor
                        navigation={navigation}
                        autoplay={{ delay: 3000, disableOnInteraction: false }}
                        breakpoints={{
                            0: { slidesPerView: 1, spaceBetween: 16 },
                            640: { slidesPerView: 2, spaceBetween: 24 },
                            1024: { slidesPerView: 3, spaceBetween: 32 },
                            1280: { slidesPerView: 4, spaceBetween: 32 },
                        }}
                    >
                        {products.map((product) => (
                            <SwiperSlide key={product.id}>
                                <ProductCard product={product} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    <div className="flex flex-col items-end mt-4 ">
                        <Span className="text-(--blue)">Prev/Nxt</Span>
                        <div className="flex items-center space-x-4 mt-2">
                            <button
                                ref={(node) => {
                                    if (node && navigation.prevEl !== node)
                                        setNavigation((nav) => ({ ...nav, prevEl: node }));
                                }}
                                className="text-2xl text-(--blue) focus:outline-none cursor-pointer"
                                aria-label="Previous"
                                type="button"
                            >
                                <CgArrowLongLeft />
                            </button>
                            <button
                                ref={(node) => {
                                    if (node && navigation.nextEl !== node)
                                        setNavigation((nav) => ({ ...nav, nextEl: node }));
                                }}
                                className="text-2xl text-(--blue) focus:outline-none cursor-pointer"
                                aria-label="Next"
                                type="button"
                            >
                                <CgArrowLongRight />
                            </button>
                        </div>
                    </div>
                </div>
            </Section>
        </div>
    );
};

export default Explore;
