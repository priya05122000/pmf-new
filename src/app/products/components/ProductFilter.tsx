'use client'

import React, { useState, ChangeEvent, FC, memo } from 'react';
import { BiSearch } from 'react-icons/bi';
import Section from '@/components/common/Section';
import Paragraph from '@/components/common/Paragraph';
import Heading from '@/components/common/Heading';
import { Pagination } from '../subcomponents/Pagination';

interface SortOption {
    name: string;
    href: string;
    current: boolean;
}

interface FilterOption {
    value: string;
    label: string;
    checked: boolean;
}
interface FilterSection {
    id: string;
    name: string;
    options: FilterOption[];
}


export const products = [
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

// Types
export interface Product {
    id: number;
    name: string;
    href: string;
    imageSrc: string;
    imageAlt: string;
    price: string;
    color: string;
}

// Reusable ProductCard
const ProductCard: FC<{ product: Product }> = memo(({ product }) => (
    <article className="group relative" aria-label={product.name} tabIndex={0}>
        <div className="flex justify-around items-center w-full h-full rounded-t-md overflow-hidden p-6 neumorphic-variation2 bg-(--light-blue)/10 shadow-[inset_6px_6px_10px_0_rgba(0,0,0,0.1),inset_-6px_-6px_40px_0_rgba(255,255,255,0.5)] lg:h-72">
            <img
                alt={product.imageAlt}
                src={product.imageSrc}
                className=" w-full h-full  rounded-md object-contain "
                loading="lazy"
                width={300}
                height={300}
            />
        </div>
        <div className=" border-x border-b rounded-b-md p-2 border-(--light-blue)/20 text-center">
            <div>
                <Paragraph size='lg' className="font-medium">
                    <a href={product.href} tabIndex={-1}>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {product.name}
                    </a>
                </Paragraph>
            </div>

        </div>
        {/* Removed Add to Cart and Buy Now buttons */}
    </article>
));

// Reusable CategoryList
const categories = [
    'All',
    'Architectural',
    'Food Processing',
    'Retail Displays',
];
const CategoryList: FC<{ selected: string; onSelect: (cat: string) => void }> = ({ selected, onSelect }) => (
    <nav aria-label="Product categories" className="flex flex-col gap-1 mb-4">
        {categories.map(cat => (
            <button
                key={cat}
                className={`text-left px-2 py-1 cursor-pointer rounded-md ${selected === cat ? 'bg-(--light-blue)/10 font-medium' : ''}`}
                onClick={() => onSelect(cat)}
                aria-current={selected === cat ? 'page' : undefined}
            >
                <Paragraph size='base'>{cat}</Paragraph>
            </button>
        ))}
    </nav>
);

// Main ProductFilter
const ProductFilter: FC = () => {
    const [search, setSearch] = useState("");
    const [category, setCategory] = useState(categories[0]);

    // Filter products by search and category
    let filteredProducts = products.filter(product => {
        const matchesSearch = product.name.toLowerCase().includes(search.toLowerCase()) || product.color.toLowerCase().includes(search.toLowerCase());
        const matchesCategory = category === 'All' || product.name.toLowerCase().includes(category.toLowerCase());
        return matchesSearch && matchesCategory;
    });

    // If Architectural is selected, only show product 1, 2, 3
    if (category === 'Architectural') {
        filteredProducts = products.filter(p => [1, 2, 3].includes(p.id));
    }
    // If Food Processing is selected, only show product 4, 5, 6
    else if (category === 'Food Processing') {
        filteredProducts = products.filter(p => [4, 5, 6, 7, 8, 9].includes(p.id));
    }
    // If Retail Displays is selected, only show product 10, 11, 12
    else if (category === 'Retail Displays') {
        filteredProducts = products.filter(p => [10, 11, 12].includes(p.id));
    }

    const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => setSearch(e.target.value);

    return (
        <Section>
            <div className='bg-(--gray) -mt-20 px-4 rounded-md'>
                <main>
                    <div className="flex flex-col md:flex-row items-center justify-between py-4 gap-4">
                        <Heading level={4} className="font-bold tracking-tight text-(--dark-blue)">Give All You Need</Heading>
                        <form className="flex items-center gap-2 w-full max-w-xs rounded-md border border-(--light-blue)/10 pl-2" role="search" aria-label="Search products" onSubmit={e => e.preventDefault()}>
                            <BiSearch className="size-5 text-(--light-blue)/20" aria-hidden="true" />
                            <input
                                type="text"
                                value={search}
                                onChange={handleSearchChange}
                                placeholder="Search"
                                className="flex-1 bg-transparent outline-none py-2 text-sm text-(--light-blue)"
                                aria-label="Search products"
                                autoComplete="off"
                            />
                            <button
                                type="submit"
                                className="rounded-md bg-(--dark-blue) px-5 py-2 text-sm font-semibold text-white cursor-pointer"
                                aria-label="Search"
                            >
                                Search
                            </button>
                        </form>
                    </div>
                    <section aria-labelledby="products-heading" className="py-10">
                        <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-5">
                            <div>
                                <CategoryList selected={category} onSelect={setCategory} />
                            </div>
                            {/* Product grid */}
                            <div className="lg:col-span-4">
                                <div>
                                    <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
                                        {filteredProducts.length > 0 ? (
                                            filteredProducts.map(product => (
                                                <ProductCard key={product.id} product={product} />
                                            ))
                                        ) : (
                                            <Paragraph size="lg" className="col-span-full text-center text-gray-500">No products found.</Paragraph>
                                        )}
                                    </div>
                                    {/* <Pagination /> */}
                                </div>
                            </div>
                        </div>
                    </section>
                </main>
            </div>
        </Section>
    );
};

export default ProductFilter;
