"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";
import Section from "@/components/common/Section";
import type { FC } from "react";
import Heading from "@/components/common/Heading";
import Paragraph from "@/components/common/Paragraph";
import { GoDotFill } from "react-icons/go";

// Product type for type safety
export interface Product {
    id: number;
    name: string;
    href: string;
    imageSrc: string;
    imageAlt: string;
    price: string;
    color: string;
}

export const LOCAL_PRODUCTS: Product[] = [
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
    {
        id: 9,
        name: 'Artwork Tee',
        href: '#',
        imageSrc: '/products/products9.webp',
        imageAlt: "Front of men's Artwork Tee in peach with white and brown dots forming an isometric cube.",
        price: '$35',
        color: 'Iso Dots',
    },
    {
        id: 10,
        name: 'Artwork Tee',
        href: '#',
        imageSrc: '/products/products10.png',
        imageAlt: "Front of men's Artwork Tee in peach with white and brown dots forming an isometric cube.",
        price: '$35',
        color: 'Iso Dots',
    },
    {
        id: 11,
        name: 'Artwork Tee',
        href: '#',
        imageSrc: '/products/products11.png',
        imageAlt: "Front of men's Artwork Tee in peach with white and brown dots forming an isometric cube.",
        price: '$35',
        color: 'Iso Dots',
    },
    {
        id: 12,
        name: 'Artwork Tee',
        href: '#',
        imageSrc: '/products/products12.png',
        imageAlt: "Front of men's Artwork Tee in peach with white and brown dots forming an isometric cube.",
        price: '$35',
        color: 'Iso Dots',
    },
];

// Reusable ProductItem component
const ProductItem: FC<Product> = ({ imageSrc, imageAlt, name, href }) => (
    <div
        className="flex flex-col justify-center items-center h-full w-full px-6 sm:px-4  "
        role="listitem"
    >
        <div className="w-full shadow rounded-md overflow-hidden mb-10">


            {/* <div className="flex justify-around items-center w-full  rounded-t-md overflow-hidden p-6 neumorphic-variation2 bg-(--light-blue-one) shadow-[inset_6px_6px_10px_0_rgba(0,0,0,0.1),inset_-6px_-6px_40px_0_rgba(242,244,245,0.5)] h-56 xl:h-72"> */}
            <div className="flex justify-around items-center w-full    overflow-hidden p-6 neumorphic-variation2 bg-[radial-gradient(circle_at_center,color-mix(in_srgb,var(--light-blue)_10%,transparent),var(--dark-blue)_120%)] h-56 xl:h-72">
                <Image
                    alt={imageAlt}
                    src={imageSrc}
                    className="w-full h-full  object-contain"
                    loading="lazy"
                    width={300}
                    height={300}
                    priority={false}
                />
            </div>
            <div className="w-full border-x border-b rounded-b-md p-2 border-(--light-blue-two) text-center">
                <div>
                    <Paragraph size='base' className="font-medium">
                        <a href={href} tabIndex={-1} className="cursor-pointer">
                            <span aria-hidden="true" className="absolute inset-0" />
                            {name}
                        </a>
                    </Paragraph>
                </div>

            </div>
        </div>
    </div>
);

// Swiper settings
const swiperSettings = {
    modules: [Navigation, Autoplay],
    navigation: false,
    loop: true,
    speed: 500,
    spaceBetween: 16,
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    },
    breakpoints: {
        0: { slidesPerView: 1, navigation: false },
        375: { slidesPerView: 1, navigation: false },
        768: { slidesPerView: 3, navigation: false },
        1024: { slidesPerView: 4, navigation: false },
        1280: { slidesPerView: 5, navigation: false },
    },
};

// Reusable ProductSlider component
const ProductSlider: FC<{ products: Product[] }> = ({ products }) => (
    <Swiper {...swiperSettings} className="w-full" >
        {products.map((product, idx) => (
            <SwiperSlide key={product.name + idx}>
                <ProductItem {...product} />
            </SwiperSlide>
        ))}
    </Swiper>
);

const Products: FC = () => (
    <div aria-label="Our Products" className="overflow-x-hidden w-full py-10 sm:py-16 lg:py-20 ">
        <Section>
            <div className="flex flex-row gap-2 items-center lg:min-w-20 xl:min-w-50 mb-0 md:mr-4">
                <GoDotFill aria-hidden="true" />
                <Paragraph size="base" className="font-medium uppercase" id="about-us-heading">Everyday Commercial Use
                </Paragraph>
            </div>
            <Heading level={4} className="text-(--dark-blue)">Our Products</Heading>
        </Section>
        <div className="w-full relative mt-10 " role="list" aria-label="Product list">
            <ProductSlider products={LOCAL_PRODUCTS} />
        </div>
        <div className="flex justify-end  px-6 sm:px-4">
            <a href="/products" className="inline-block rounded-full bg-(--orange) text-white font-semibold px-8 py-2 text-base shadow  transition-colors cursor-pointer focus:outline-none ">
                <Paragraph size="base">View More</Paragraph>
            </a>
        </div>
    </div>
);

export default Products;