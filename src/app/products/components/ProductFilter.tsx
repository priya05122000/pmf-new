'use client'

import React, { useState, ChangeEvent, FC, memo } from 'react';
import { BiSearch } from 'react-icons/bi';
import Section from '@/components/common/Section';
import Paragraph from '@/components/common/Paragraph';
import Heading from '@/components/common/Heading';
import Image from 'next/image';

/* ---------- TYPES ---------- */

interface Category {
    id: string;
    name: string;
}

interface Product {
    id: string;
    title: string;
    primary_image_url?: string;
    category_id: string;
    active: boolean
}


/* ---------- HELPERS ---------- */

const getImageUrl = (primary_image_url?: string | null) => {
    if (!primary_image_url || primary_image_url.trim() === "") return null;
    return `${process.env.NEXT_PUBLIC_API_BASE_URL}/uploads/${primary_image_url}`;
};


/* ---------- ProductCard (UI SAME) ---------- */

const ProductCard: FC<{ product: Product }> = memo(({ product }) => {
    const imageUrl = getImageUrl(product.primary_image_url);
    console.log(imageUrl)
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
                    /* fallback (optional but recommended) */
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
    )
});

/* ---------- Category List (UI SAME) ---------- */

const CategoryList: FC<{
    categories: Category[];
    selected: string;
    onSelect: (id: string) => void;
}> = ({ categories, selected, onSelect }) => (
    <nav aria-label="Product categories" className="flex flex-col gap-1 mb-4 sticky top-28">
        <div className="bg-(--gray) rounded-md shadow p-4 sticky top-28">
            <ul className="flex flex-col gap-2 lg:gap-3">

                {/* All */}
                <li>
                    <button
                        onClick={() => onSelect('all')}
                        className={`w-full text-left px-4 py-2 rounded-md font-medium cursor-pointer ${selected === 'all'
                            ? "bg-(--orange) text-white"
                            : "bg-(--light-blue-one) text-(--dark-blue)"
                            }`}
                    >
                        All
                    </button>
                </li>

                {categories.map(cat => (
                    <li key={cat.id}>
                        <button
                            onClick={() => onSelect(cat.id)}
                            className={`w-full text-left px-4 py-2 rounded-md cursor-pointer font-medium ${selected === cat.id
                                ? "bg-(--orange) text-white"
                                : "bg-(--light-blue-one) text-(--dark-blue)"
                                }`}
                        >
                            {cat.name}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    </nav>
);

/* ---------- MAIN COMPONENT ---------- */

const ProductFilter: FC<{
    products: Product[];
    categories: Category[];
}> = ({ products, categories }) => {

    const [search, setSearch] = useState("");
    const [category, setCategory] = useState<string>('all');

    const filteredProducts = products.filter(p => {
        const matchesSearch =
            p.title.toLowerCase().includes(search.toLowerCase());

        const matchesCategory =
            category === 'all' || p.category_id === category;

        const isActive = p.active === true;


        return matchesSearch && matchesCategory && isActive;
    });

    const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) =>
        setSearch(e.target.value);

    return (
        <Section>
            <div className='bg-(--gray) -mt-20 rounded-md'>
                <main>

                    {/* HEADER – UI SAME */}
                    <div className="flex flex-col md:flex-row items-center justify-between py-4 gap-4 px-4">
                        <Heading level={4} className="font-bold tracking-tight text-(--dark-blue)">
                            Give All You Need
                        </Heading>

                        <form
                            className="flex items-center gap-2 w-full max-w-xs rounded-md border border-(--light-blue-one) pl-2"
                            onSubmit={e => e.preventDefault()}
                        >
                            <BiSearch className="size-5 text-(--light-blue-two)" aria-hidden="true" />
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

                    {/* BODY – UI SAME */}
                    <section className="py-10">
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-x-8 gap-y-10 lg:grid-cols-4">

                            <div>
                                <CategoryList
                                    categories={categories}
                                    selected={category}
                                    onSelect={setCategory}
                                />
                            </div>

                            <div className="sm:col-span-2 lg:col-span-3">
                                <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
                                    {filteredProducts.length ? (
                                        filteredProducts.map(p => (
                                            <ProductCard key={p.id} product={p} />
                                        ))
                                    ) : (
                                        <Paragraph className="col-span-full text-center">
                                            No products found.
                                        </Paragraph>
                                    )}
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
