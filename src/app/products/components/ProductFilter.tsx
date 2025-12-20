'use client'

import { useState } from 'react';
import {
    Dialog,
    DialogBackdrop,
    DialogPanel,
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
} from '@headlessui/react';
import { XMarkIcon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import { FunnelIcon } from '@heroicons/react/20/solid';
import Section from '@/components/common/Section';
import { MdOutlineKeyboardArrowDown, MdOutlineKeyboardArrowUp } from 'react-icons/md';
import { BiSearch } from 'react-icons/bi';
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

const sortOptions: SortOption[] = [
    { name: 'Most Popular', href: '#', current: true },
    { name: 'Best Rating', href: '#', current: false },
    { name: 'Newest', href: '#', current: false },
    { name: 'Price: Low to High', href: '#', current: false },
    { name: 'Price: High to Low', href: '#', current: false },
];

const filters: FilterSection[] = [
    {
        id: 'color',
        name: 'Color',
        options: [
            { value: 'white', label: 'White', checked: false },
            { value: 'beige', label: 'Beige', checked: false },
            { value: 'blue', label: 'Blue', checked: true },
            { value: 'brown', label: 'Brown', checked: false },
            { value: 'green', label: 'Green', checked: false },
            { value: 'purple', label: 'Purple', checked: false },
        ],
    },
    {
        id: 'category',
        name: 'Category',
        options: [
            { value: 'new-arrivals', label: 'New Arrivals', checked: false },
            { value: 'sale', label: 'Sale', checked: false },
            { value: 'travel', label: 'Travel', checked: true },
            { value: 'organization', label: 'Organization', checked: false },
            { value: 'accessories', label: 'Accessories', checked: false },
        ],
    },
    {
        id: 'size',
        name: 'Size',
        options: [
            { value: '2l', label: '2L', checked: false },
            { value: '6l', label: '6L', checked: false },
            { value: '12l', label: '12L', checked: false },
            { value: '18l', label: '18L', checked: false },
            { value: '20l', label: '20L', checked: false },
            { value: '40l', label: '40L', checked: true },
        ],
    },
];

export const products = [
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

const ProductCard = ({ product }: { product: typeof products[0] }) => (
    <div key={product.id} className="group relative">
        <img
            alt={product.imageAlt}
            src={product.imageSrc}
            className="aspect-square w-full rounded-md  object-cover  lg:aspect-auto lg:h-72"
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

function classNames(...classes: (string | false | null | undefined)[]): string {
    return classes.filter(Boolean).join(' ');
}



const ProductFilter = () => {
    const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
    const [search, setSearch] = useState("");

    return (
        <Section >
            <div className='bg-(--gray) -mt-20 px-4 rounded-md'>
                {/* Mobile filter dialog */}
                <Dialog open={mobileFiltersOpen} onClose={setMobileFiltersOpen} className="relative z-40 lg:hidden">
                    <DialogBackdrop
                        transition
                        className="fixed inset-0 bg-black/25 transition-opacity duration-300 ease-linear data-closed:opacity-0"
                    />

                    <div className="fixed inset-0 z-40 flex">
                        <DialogPanel
                            transition
                            className="relative ml-auto flex size-full max-w-xs transform flex-col overflow-y-auto bg-white pt-4 pb-6 shadow-xl transition duration-300 ease-in-out data-closed:translate-x-full"
                        >
                            <div className="flex items-center justify-between px-4">
                                <h2 className="text-lg font-medium text-gray-900">Filters</h2>
                                <button
                                    type="button"
                                    onClick={() => setMobileFiltersOpen(false)}
                                    className="relative -mr-2 flex size-10 items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-50"
                                    aria-label="Close menu"
                                >
                                    <span className="absolute -inset-0.5" />
                                    <XMarkIcon aria-hidden="true" className="size-6" />
                                </button>
                            </div>

                            {/* Filters */}
                            <form className="mt-4">
                                <h3 className="sr-only">Categories</h3>
                                {/* Category list removed */}
                                {filters.map((section) => (
                                    <Disclosure key={section.id} as="div" className=" px-4 py-6">
                                        <h3 className="-mx-2 -my-3 flow-root">
                                            <DisclosureButton className="group flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500">
                                                <span className="font-medium text-gray-900">{section.name}</span>
                                                <span className="ml-6 flex items-center">
                                                    <MdOutlineKeyboardArrowDown aria-hidden="true" className="size-5 group-data-open:hidden" />
                                                    <MdOutlineKeyboardArrowUp aria-hidden="true" className="size-5 group-not-data-open:hidden" />
                                                </span>
                                            </DisclosureButton>
                                        </h3>
                                        <DisclosurePanel className="pt-6">
                                            <div className="space-y-6">
                                                {section.options.map((option, optionIdx) => (
                                                    <div key={option.value} className="flex gap-3">
                                                        <div className="flex h-5 shrink-0 items-center">
                                                            <input
                                                                defaultValue={option.value}
                                                                id={`filter-mobile-${section.id}-${optionIdx}`}
                                                                name={`${section.id}[]`}
                                                                type="checkbox"
                                                                defaultChecked={option.checked}
                                                                className="size-4 rounded-sm  text-indigo-600"
                                                            />
                                                        </div>
                                                        <label
                                                            htmlFor={`filter-mobile-${section.id}-${optionIdx}`}
                                                            className="min-w-0 flex-1 text-gray-500"
                                                        >
                                                            {option.label}
                                                        </label>
                                                    </div>
                                                ))}
                                            </div>
                                        </DisclosurePanel>
                                    </Disclosure>
                                ))}
                            </form>
                        </DialogPanel>
                    </div>
                </Dialog>

                <main className="">
                    <div className="flex items-center justify-between py-4 ">
                        <Heading level={4} className=" font-bold tracking-tight text-(--dark-blue)">Give All You Need</Heading>

                        <div className="flex items-center gap-2 w-full max-w-xs  rounded-full border border-(--light-blue)/10  pl-2 ">
                            <BiSearch className="size-5 text-(--light-blue)/20 " />
                            <input
                                type="text"
                                value={search}
                                onChange={e => setSearch(e.target.value)}
                                placeholder="Search"
                                className="flex-1 bg-transparent  outline-none  py-2 text-sm text-(--light-blue)"
                                aria-label="Search products"
                            />
                            <button
                                type="button"
                                className="rounded-full bg-(--dark-blue) px-5 py-2 text-sm font-semibold text-white cursor-pointer "
                                aria-label="Search"
                            >
                                Search
                            </button>


                        </div>
                        <button
                            type="button"
                            onClick={() => setMobileFiltersOpen(true)}
                            className="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden"
                            aria-label="Filters"
                        >
                            <FunnelIcon aria-hidden="true" className="size-5" />
                        </button>
                    </div>

                    <section aria-labelledby="products-heading" className=" py-10">


                        <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4 ">
                            {/* Filters */}
                            <form className="hidden lg:block">
                                <h3 className="sr-only">Categories</h3>
                                {/* Category list removed */}
                                {filters.map((section) => (
                                    <Disclosure key={section.id} as="div" className=" py-4">
                                        <h3 className="-my-3 flow-root">
                                            <DisclosureButton className="group flex w-full items-center justify-between  py-3 text-sm text-gray-400 hover:text-gray-500">
                                                <span className="font-medium text-gray-900">{section.name}</span>
                                                <span className="ml-6 flex items-center">
                                                    <MdOutlineKeyboardArrowDown aria-hidden="true" className="size-5 group-data-open:hidden" />
                                                    <MdOutlineKeyboardArrowUp aria-hidden="true" className="size-5 group-not-data-open:hidden" />
                                                </span>
                                            </DisclosureButton>
                                        </h3>
                                        <DisclosurePanel className="pt-6">
                                            <div className="space-y-4">
                                                {section.options.map((option, optionIdx) => (
                                                    <div key={option.value} className="flex gap-3">
                                                        <div className="flex h-5 shrink-0 items-center">
                                                            <input
                                                                defaultValue={option.value}
                                                                defaultChecked={option.checked}
                                                                id={`filter-${section.id}-${optionIdx}`}
                                                                name={`${section.id}[]`}
                                                                type="checkbox"
                                                                className="size-4 rounded-sm  text-indigo-600"
                                                            />
                                                        </div>
                                                        <label htmlFor={`filter-${section.id}-${optionIdx}`} className="text-sm text-gray-600">
                                                            {option.label}
                                                        </label>
                                                    </div>
                                                ))}
                                            </div>
                                        </DisclosurePanel>
                                    </Disclosure>
                                ))}
                            </form>

                            {/* Product grid */}
                            <div className="lg:col-span-3">
                                <div >
                                    <div className=" grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
                                        {products.map(product => (
                                            <ProductCard key={product.id} product={product} />
                                        ))}
                                    </div>
                                    <Pagination />
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
