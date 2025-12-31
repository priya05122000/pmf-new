"use client";
import Heading from '@/components/common/Heading';
import Paragraph from '@/components/common/Paragraph';
import React, { useState, FC, memo } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import Section from '@/components/common/Section';
import { GoDotFill } from 'react-icons/go';

// Product type
interface Product {
    id: string;
    title: string;
    primary_image_url?: string;
    category_id: string;
    is_popular?: boolean;
    active?: boolean;
}

// Utility to get image URL
const getImageUrl = (primary_image_url?: string | null) => {
    if (!primary_image_url || primary_image_url.trim() === "") return null;
    return `${process.env.NEXT_PUBLIC_API_BASE_URL}/uploads/${primary_image_url}`;
};

// Reusable ProductCard
const ProductCard: FC<{ product: Product }> = memo(({ product }) => {
    const imageUrl = getImageUrl(product.primary_image_url);
    return (
        <div className="flex flex-col justify-center items-center h-full w-full px-6 sm:px-4" role="listitem">
            <article className="group shadow rounded-md overflow-hidden relative w-full" aria-label={product.title} tabIndex={0}>
                <div className="flex justify-around items-center   w-full overflow-hidden p-6 neumorphic-variation2 bg-[radial-gradient(circle_at_center,color-mix(in_srgb,var(--light-blue)_10%,transparent),var(--dark-blue)_120%)] h-56 xl:h-72">
                    {imageUrl ? (
                        <Image
                            alt={product.title}
                            src={imageUrl}
                            className="w-full h-full rounded-md object-contain"
                            width={300}
                            height={300}
                            loading="lazy"
                            draggable={false}
                        />
                    ) : (
                        <div className="w-full h-full flex items-center justify-center text-sm text-(--light-blue)">
                            No Image
                        </div>
                    )}
                </div>
                <div className="border-x border-b rounded-b-md p-2 border-(--light-blue-two) text-center">
                    <Paragraph size='lg' className="font-medium">
                        {product.title}
                    </Paragraph>
                </div>
            </article>
        </div>
    );
});
ProductCard.displayName = 'ProductCard';

const swiperSettings = {
    modules: [Navigation, Autoplay],
    navigation: false,
    loop: true,
    speed: 500,
    spaceBetween: 0,
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

const ProductsClient: FC<{ products: Product[] }> = ({ products }) => {
    const [navigation, setNavigation] = useState<{ prevEl: null | HTMLElement; nextEl: null | HTMLElement; }>({ prevEl: null, nextEl: null });
    const eventsRef = React.useRef<HTMLDivElement | null>(null);
    const headingRef = React.useRef<HTMLHeadingElement | null>(null);
    const popularProducts = products.filter(
        (product) => product.is_popular === true && product.active === true
    );
    return (
        <div ref={eventsRef}>
            <div className="py-10 sm:sm:py-16 lg:py-20">
                <Section>
                    <div className="flex flex-row gap-2 items-center lg:min-w-20 xl:min-w-50 mb-0 md:mr-4">
                        <GoDotFill aria-hidden="true" />
                        <Paragraph size="base" className="font-medium text-(--dark-blue) uppercase" id="about-us-heading">Everyday Commercial Use</Paragraph>
                    </div>
                    <Heading level={4} className="text-(--dark-blue)">Our Products</Heading>
                </Section>
                <div className="w-full relative mt-10" role="list" aria-label="Product list">
                    {popularProducts.length > 0 ? (
                        <Swiper {...swiperSettings} className="w-full">
                            {popularProducts.map((product) => (
                                <SwiperSlide key={product.id}>
                                    <ProductCard product={product} />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    ) : (
                        <div className="pb-10 text-center">
                            <Paragraph size="base" className="text-(--dark-blue)">
                                No data found
                            </Paragraph>
                        </div>
                    )}
                </div>
                <div className="flex justify-end mt-6 px-6 sm:px-4">
                    <a href="/products" className="inline-block rounded-full bg-(--orange) text-white font-semibold px-8 py-2 text-base shadow  transition-colors cursor-pointer focus:outline-none ">
                        <Paragraph size="base">View More</Paragraph>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ProductsClient;