"use client";
import Heading from '@/components/common/Heading';
import Paragraph from '@/components/common/Paragraph';
import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import Image from 'next/image';
import Span from '@/components/common/Span';
import { CgArrowLongLeft, CgArrowLongRight } from 'react-icons/cg';
import { useRouter } from 'next/navigation';
import LeftSpaceGridSection from '@/components/common/LeftSpaceGridSection';
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

const products = [
    {
        id: 1,
        name: 'Basic Tee',
        href: '#',
        imageSrc: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-01-related-product-01.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$35',
        color: 'Black',
    },
    {
        id: 2,
        name: 'Basic Tee',
        href: '#',
        imageSrc: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-01-related-product-02.jpg',
        imageAlt: "Front of men's Basic Tee in white.",
        price: '$35',
        color: 'Aspen White',
    },
    {
        id: 3,
        name: 'Basic Tee',
        href: '#',
        imageSrc: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-01-related-product-03.jpg',
        imageAlt: "Front of men's Basic Tee in dark gray.",
        price: '$35',
        color: 'Charcoal',
    },
    {
        id: 4,
        name: 'Artwork Tee',
        href: '#',
        imageSrc: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-01-related-product-04.jpg',
        imageAlt: "Front of men's Artwork Tee in peach with white and brown dots forming an isometric cube.",
        price: '$35',
        color: 'Iso Dots',
    },
    {
        id: 5,
        name: 'Basic Tee',
        href: '#',
        imageSrc: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-01-related-product-03.jpg',
        imageAlt: "Front of men's Basic Tee in dark gray.",
        price: '$35',
        color: 'Charcoal',
    },
    {
        id: 6,
        name: 'Artwork Tee',
        href: '#',
        imageSrc: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-01-related-product-04.jpg',
        imageAlt: "Front of men's Artwork Tee in peach with white and brown dots forming an isometric cube.",
        price: '$35',
        color: 'Iso Dots',
    },
    {
        id: 7,
        name: 'Artwork Tee',
        href: '#',
        imageSrc: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-01-related-product-04.jpg',
        imageAlt: "Front of men's Artwork Tee in peach with white and brown dots forming an isometric cube.",
        price: '$35',
        color: 'Iso Dots',
    },
    {
        id: 8,
        name: 'Artwork Tee',
        href: '#',
        imageSrc: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-01-related-product-04.jpg',
        imageAlt: "Front of men's Artwork Tee in peach with white and brown dots forming an isometric cube.",
        price: '$35',
        color: 'Iso Dots',
    },
];

// Helper: Preload images and videos (reusable)
const preloadMedia = (blogs: Blog[]) => {
    const base = `${process.env.NEXT_PUBLIC_API_BASE_URL}/files/`;
    const imagePromises = blogs.map((p) => {
        const img = new window.Image();
        img.src = `${base}${p.image_url}`;
        return new Promise<void>((resolve) => {
            img.onload = () => resolve();
            img.onerror = () => resolve();
        });
    });
    const videoPromises = blogs
        .filter((p) => p.video_url)
        .map((p) => {
            const video = document.createElement('video');
            video.preload = 'auto';
            video.src = p.video_url.includes('videos/') ? `${base}${p.video_url}` : `${base}videos/${p.video_url}`;
            return new Promise<void>((resolve) => {
                video.oncanplaythrough = () => resolve();
                video.onerror = () => resolve();
            });
        });
    return Promise.all([...imagePromises, ...videoPromises]);
};

// Helper: Get video sources (reusable)
const getVideoSources = (videoUrl: string) => {
    const base = `${process.env.NEXT_PUBLIC_API_BASE_URL}/files/`;
    const src = videoUrl.includes("videos/") ? `${base}${videoUrl}` : `${base}videos/${videoUrl}`;
    const sources = [
        { ext: ".mp4", type: "video/mp4" },
        { ext: ".webm", type: "video/webm" },
        { ext: ".ogg", type: "video/ogg" },
    ];
    const matched = sources.find(({ ext }) => videoUrl.endsWith(ext));
    if (matched) {
        return [<source key={matched.ext} src={src} type={matched.type} />];
    }
    return [<source key="default" src={src} />];
};

const ProductCard = ({ product }: { product: typeof products[0] }) => (
    <div key={product.id} className="group relative">
        <img
            alt={product.imageAlt}
            src={product.imageSrc}
            className="aspect-square w-full rounded-md  object-cover  lg:aspect-auto lg:h-80"
        />
        <div className="mt-4 flex justify-between">
            <div>
                <Paragraph size='lg' className="font-medium">
                    <a href={product.href}>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {product.name}
                    </a>
                </Paragraph>
                <Paragraph size='base' className="mt-1 text-sm text-gray-500">{product.color}</Paragraph>
            </div>
            <p className="text-sm font-medium text-gray-900">{product.price}</p>
        </div>
        <div className='flex justify-between mt-2'>
            <button className='rounded-md border  py-1 px-2'>Add to Cart</button>
            <button className='rounded-md border  py-1 px-2'>Buy Now</button>
        </div>
    </div>
);

const Explore: React.FC = () => {
    const [navigation, setNavigation] = useState<{ prevEl: null | HTMLElement; nextEl: null | HTMLElement; }>({ prevEl: null, nextEl: null });
    const router = useRouter();

    // SplitText animation refs
    const eventsRef = React.useRef<HTMLDivElement | null>(null);
    const headingRef = React.useRef<HTMLHeadingElement | null>(null);
    const paragraphRef = React.useRef<HTMLParagraphElement | null>(null);


    return (
        <div ref={eventsRef}>
            <Section>
                <div className="py-10 sm:py-20">
                    <div className="mb-8">

                        <Heading ref={headingRef} level={4} className="text-(--blue) mt-1 leading-tight uppercase latest-title">
                            Explore Our Recommendations
                        </Heading>
                    </div>
                    <Swiper
                        modules={[Navigation, Autoplay]}
                        spaceBetween={32} // Increased gap between slides
                        slidesPerView={4}
                        loop
                        grabCursor={true}
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
