"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";
import Section from "@/components/common/Section";
import type { FC } from "react";
import Heading from "@/components/common/Heading";

// Product type for type safety
export interface Product {
    src: string;
    name: string;
}

// Static local products (move to a separate file if needed)
export const LOCAL_PRODUCTS: Product[] = [
    { src: "/products/products1.webp", name: "PMF 1" },
    { src: "/products/products2.webp", name: "PMF 2" },
    { src: "/products/products3.webp", name: "PMF 3" },
    { src: "/products/products4.webp", name: "PMF 4" },
    { src: "/products/products5.webp", name: "PMF 5" },
    { src: "/products/products6.webp", name: "PMF 6" },
    { src: "/products/products7.webp", name: "PMF 7" },
    { src: "/products/products8.webp", name: "PMF 8" },
    { src: "/products/products9.webp", name: "PMF 9" },
];

// Reusable ProductItem component
const ProductItem: FC<Product> = ({ src, name }) => (
    <div
        className="flex justify-center items-center h-full w-full px-6 sm:px-4"
        role="listitem"
    >
        <div
            className="h-72 xl:h-80 w-full   flex items-center justify-center transition-all"
        >
            <div
                className="flex justify-around items-center  w-full h-full rounded-md overflow-hidden p-6 neumorphic-variation2 bg-(--light-blue)/10 shadow-[inset_6px_6px_10px_0_rgba(0,0,0,0.1),inset_-6px_-6px_40px_0_rgba(255,255,255,0.5)] "
            >
                <Image
                    src={src}
                    alt={`${name} Product`}
                    width={320}
                    height={180}
                    className="object-contain cursor-pointer h-full   transition-all bg-transparent"
                    loading="lazy"
                    draggable={false}
                    priority={false}

                />
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
    <div aria-label="Our Products" className="overflow-x-hidden w-full py-10 sm:py-20 ">
        <Heading level={4} className="text-(--dark-blue) text-center">Our Products</Heading>
        <div className="w-full relative mt-10 " role="list" aria-label="Product list">
            <ProductSlider products={LOCAL_PRODUCTS} />
        </div>

    </div>
);

export default Products;