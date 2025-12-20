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
import { XMarkIcon } from '@heroicons/react/24/outline';
import { PlusIcon, MinusIcon } from '@heroicons/react/20/solid';
import Section from '@/components/common/Section';

// --- Types ---
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

// --- Data ---
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

const categories = [
    { name: 'Totes', href: '#' },
    { name: 'Backpacks', href: '#' },
    { name: 'Travel Bags', href: '#' },
    { name: 'Hip Bags', href: '#' },
    { name: 'Laptop Sleeves', href: '#' },
];

// --- Utility ---
function classNames(...classes: (string | false | null | undefined)[]): string {
    return classes.filter(Boolean).join(' ');
}

// --- Reusable Components ---
interface FilterCheckboxProps {
    id: string;
    name: string;
    value: string;
    label: string;
    checked?: boolean;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
const FilterCheckbox: React.FC<FilterCheckboxProps> = ({ id, name, value, label, checked, onChange }) => (
    <div className="flex items-center gap-2">
        <div className="flex h-5 shrink-0 items-center">
            <div className="group grid size-4 grid-cols-1">
                <input
                    id={id}
                    name={name}
                    type="checkbox"
                    value={value}
                    defaultChecked={checked}
                    aria-checked={checked}
                    aria-label={label}
                    className="col-start-1 row-start-1 appearance-none rounded-sm border border-(--light-blue) bg-(--white) checked:border-(--orange) checked:bg-(--orange) indeterminate:border-(--orange) indeterminate:bg-(--orange) focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--light-blue) disabled:border-(--light-blue) disabled:bg-(--background) disabled:checked:bg-(--background) forced-colors:appearance-auto"
                    onChange={onChange}
                />
                <svg
                    fill="none"
                    viewBox="0 0 14 14"
                    className="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-(--white) group-has-disabled:stroke-(--dark-blue)/25"
                    aria-hidden="true"
                >
                    <path
                        d="M3 8L6 11L11 3.5"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="opacity-0 group-has-checked:opacity-100"
                    />
                    <path
                        d="M3 7H11"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="opacity-0 group-has-indeterminate:opacity-100"
                    />
                </svg>
            </div>
        </div>
        <label htmlFor={id} className="min-w-0 flex-1 text-(--light-blue) text-sm">
            {label}
        </label>
    </div>
);

interface FilterSectionPanelProps {
    section: FilterSection;
    mobile?: boolean;
}
const FilterSectionPanel: React.FC<FilterSectionPanelProps> = ({ section, mobile }) => (
    <Disclosure as="div" className={mobile ? 'border-t border-(--light-blue) px-4 py-4' : 'border-b border-(--light-blue) py-4'}>
        <h3 className={mobile ? '-mx-2 -my-2 flow-root' : '-my-2 flow-root'}>
            <DisclosureButton className={mobile ? 'group flex w-full items-center justify-between bg-(--white) px-2 py-2 text-(--light-blue) hover:text-(--orange)' : 'group flex w-full items-center justify-between bg-(--white) py-2 text-sm text-(--light-blue) hover:text-(--orange)'}>
                <span className="font-medium text-(--dark-blue)">{section.name}</span>
                <span className="ml-6 flex items-center">
                    <PlusIcon aria-hidden="true" className="size-5 group-data-open:hidden" />
                    <MinusIcon aria-hidden="true" className="size-5 group-not-data-open:hidden" />
                </span>
            </DisclosureButton>
        </h3>
        <DisclosurePanel className="pt-3">
            <div className={mobile ? 'flex flex-col gap-3' : 'flex flex-col gap-3'}>
                {section.options.map((option, idx) => (
                    <FilterCheckbox
                        key={option.value}
                        id={`${mobile ? 'filter-mobile' : 'filter'}-${section.id}-${idx}`}
                        name={`${section.id}[]`}
                        value={option.value}
                        label={option.label}
                        checked={option.checked}
                    />
                ))}
            </div>
        </DisclosurePanel>
    </Disclosure>
);

interface CategoryListProps {
    categories: { name: string; href: string }[];
    mobile?: boolean;
}
const CategoryList: React.FC<CategoryListProps> = ({ categories, mobile }) => (
    <ul
        role="list"
        className={
            mobile
                ? 'flex flex-col gap-2 px-2 py-3 font-medium text-(--dark-blue)'
                : 'flex flex-col gap-3 border-b border-(--light-blue) pb-6 text-sm font-medium text-(--dark-blue)'
        }
    >
        {categories.map((category) => (
            <li key={category.name} className="">
                <a
                    href={category.href}
                    className={
                        mobile
                            ? 'block px-2 py-2 rounded hover:bg-background transition-colors'
                            : 'block px-2 py-2 rounded hover:bg-background transition-colors'
                    }
                    tabIndex={0}
                    aria-label={category.name}
                >
                    {category.name}
                </a>
            </li>
        ))}
    </ul>
);

// --- Main Component ---
const ProductFilter: React.FC = () => {
    const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
    return (
        <Section>
            <div>
                {/* Mobile filter dialog */}
                <Dialog open={mobileFiltersOpen} onClose={setMobileFiltersOpen} className="relative z-40 lg:hidden">
                    <DialogBackdrop
                        transition
                        className="fixed inset-0 bg-(--dark-blue)/25 transition-opacity duration-300 ease-linear data-closed:opacity-0"
                    />
                    <div className="fixed inset-0 z-40 flex">
                        <DialogPanel
                            transition
                            className="relative ml-auto flex size-full max-w-xs transform flex-col overflow-y-auto pt-4 pb-6 shadow-xl transition duration-300 ease-in-out data-closed:translate-x-full"
                        >
                            <div className="flex items-center justify-between px-4">
                                <h2 className="text-lg font-medium text-(--dark-blue)">Filters</h2>
                                <button
                                    type="button"
                                    onClick={() => setMobileFiltersOpen(false)}
                                    className="relative -mr-2 flex size-10 items-center justify-center rounded-md p-2 text-(--light-blue) hover:bg-(--background) focus:ring-2 focus:ring-(--light-blue) focus:outline-hidden"
                                    aria-label="Close menu"
                                >
                                    <span className="absolute -inset-0.5" />
                                    <XMarkIcon aria-hidden="true" className="size-6" />
                                </button>
                            </div>
                            {/* Filters */}
                            <form className="mt-4 border-t border-(--light-blue)">
                                <h3 className="sr-only">Categories</h3>
                                <CategoryList categories={categories} mobile />
                                {filters.map((section) => (
                                    <FilterSectionPanel key={section.id} section={section} mobile />
                                ))}
                            </form>
                        </DialogPanel>
                    </div>
                </Dialog>
                <main>
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between border-b border-(--light-blue) pt-12 md:pt-24 pb-4 md:pb-6 gap-4 md:gap-0">
                        <h1 className="text-2xl md:text-4xl font-bold tracking-tight text-(--dark-blue)">New Arrivals</h1>
                        <div className="flex items-center w-full md:w-auto">
                            <div className="flex items-center justify-center w-full md:w-auto p-2 md:p-5">
                                <div className="flex w-full md:w-auto">
                                    <div className="flex w-10 items-center justify-center rounded-tl-lg bg-(--white) rounded-bl-lg border-r border-(--light-blue) p-2 md:p-5">
                                        <svg viewBox="0 0 20 20" aria-hidden="true" className="pointer-events-none absolute w-5 fill-(--light-blue) transition">
                                            <path d="M16.72 17.78a.75.75 0 1 0 1.06-1.06l-1.06 1.06ZM9 14.5A5.5 5.5 0 0 1 3.5 9H2a7 7 0 0 0 7 7v-1.5ZM3.5 9A5.5 5.5 0 0 1 9 3.5V2a7 7 0 0 0-7 7h1.5ZM9 3.5A5.5 5.5 0 0 1 14.5 9H16a7 7 0 0 0-7-7v1.5Zm3.89 10.45 3.83 3.83 1.06-1.06-3.83-3.83-1.06 1.06ZM14.5 9a5.48 5.48 0 0 1-1.61 3.89l1.06 1.06A6.98 6.98 0 0 0 16 9h-1.5Zm-1.61 3.89A5.48 5.48 0 0 1 9 14.5V16a6.98 6.98 0 0 0 4.95-2.05l-1.06-1.06Z" />
                                        </svg>
                                    </div>
                                    <input type="text" className="w-full bg-(--white) max-w-40 pl-2 text-base font-semibold outline-0" placeholder="Search..." />
                                    <input type="button" defaultValue="Search" className="bg-(--orange) p-2 rounded-tr-lg rounded-br-lg text-(--white) font-semibold hover:bg-(--light-blue) transition-colors" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <section aria-labelledby="products-heading" className="pt-4 md:pt-6 pb-12 md:pb-24">
                        <h2 id="products-heading" className="sr-only">
                            Products
                        </h2>
                        <div className="grid grid-cols-1 gap-x-4 md:gap-x-8 gap-y-6 md:gap-y-10 lg:grid-cols-4">
                            {/* Filters */}
                            <form className="hidden lg:block">
                                <h3 className="sr-only">Categories</h3>
                                {filters.map((section) => (
                                    <FilterSectionPanel key={section.id} section={section} />
                                ))}
                            </form>
                            {/* Product grid */}
                            <div className="lg:col-span-3">{/* Your content */}</div>
                        </div>
                    </section>
                </main>
            </div>
        </Section>
    );
};

export default ProductFilter;
