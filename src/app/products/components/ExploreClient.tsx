'use client'

import Heading from '@/components/common/Heading';
import Paragraph from '@/components/common/Paragraph';
import React, { useState, FC, memo, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import Image from 'next/image';
import Span from '@/components/common/Span';
import { CgArrowLongLeft, CgArrowLongRight } from 'react-icons/cg';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import Section from '@/components/common/Section';

interface Product {
    id: string;
    title: string;
    primary_image_url?: string;
    category_id: string;
    is_popular?: boolean;
    active?: boolean;
}

const getImageUrl = (primary_image_url?: string | null) => {
    if (!primary_image_url || primary_image_url.trim() === "") return null;
    return `${process.env.NEXT_PUBLIC_API_BASE_URL}/${primary_image_url}`;
};

const ProductCard: FC<{ product: Product }> = memo(({ product }) => {
    const imageUrl = getImageUrl(product.primary_image_url);
    return (
        <article className="group shadow rounded-md overflow-hidden relative" aria-label={product.title} tabIndex={0}>
            <div className="flex justify-around items-center w-full overflow-hidden p-6 neumorphic-variation2 bg-[radial-gradient(circle_at_center,color-mix(in_srgb,var(--light-blue)_10%,transparent),var(--dark-blue)_120%)] h-56 xl:h-72">
                {imageUrl ? (
                    <Image
                        alt={product.title}
                        src={imageUrl}
                        className="w-full h-full rounded-md object-contain"
                        width={300}
                        height={300}
                        loading="lazy"
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
    );
});
ProductCard.displayName = 'ProductCard';

const ExploreClient: FC<{ products: Product[] }> = ({ products }) => {
    const [navigation, setNavigation] = useState<{ prevEl: null | HTMLElement; nextEl: null | HTMLElement; }>({ prevEl: null, nextEl: null });
    const eventsRef = useRef<HTMLDivElement | null>(null);
    const headingRef = useRef<HTMLHeadingElement | null>(null);
    const canNavigate = products.length > 4; // 4 = max slidesPerView

    return (
        <div ref={eventsRef}>
            <Section>
                <div className="py-10 sm:py-16 lg:py-20">
                    <div className="mb-8">
                        <Heading ref={headingRef} level={4} className="text-(--dark-blue) mt-1 leading-tight uppercase latest-title">
                            Our Popular Products
                        </Heading>
                    </div>
                    {products.length === 0 ? (
                        <Paragraph size='base' className="text-center text-(--dark-blue)">No data found</Paragraph>
                    ) : (
                        <>
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
                                    640: { slidesPerView: 3, spaceBetween: 24 },
                                    1024: { slidesPerView: 3, spaceBetween: 32 },
                                    1280: { slidesPerView: 4, spaceBetween: 32 },
                                }}
                                aria-label="Popular Products Carousel"
                            >
                                {products.map((product) => (
                                    <SwiperSlide key={product.id} role="group" aria-label={product.title}>
                                        <ProductCard product={product} />
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                            <div className="flex flex-col items-end mt-6 ">
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
                        </>
                    )}
                </div>
            </Section>
        </div>
    );
};

export default ExploreClient;
