"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, KeyboardEvent } from "react";
import { IoMdClose } from "react-icons/io";
import { HiOutlineBars3 } from "react-icons/hi2";
import { usePathname } from "next/navigation";
import Paragraph from "../common/Paragraph";
import Section from "../common/Section";

// Navigation links config for reuse
const NAV_LINKS = [
    { href: "/", label: "Home" },
    { href: "/about-us", label: "About Us" },
    { href: "/products", label: "Products" },
    { href: "/projects", label: "Projects" },
    { href: "/contact-us", label: "Contact Us" },
];

// Reusable NavLink component
const NavLink = ({ href, label, isActive, onClick }: { href: string; label: string; isActive: boolean; onClick?: () => void }) => (
    <li>
        <Link
            href={href}
            className={`transition-colors cursor-pointer duration-200 font-medium  px-2 py-1 rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-(--orange) hover:text-(--orange) ${isActive ? "text-(--orange)" : "text-(--white)"}`}
            aria-current={isActive ? "page" : undefined}
            tabIndex={0}
            onClick={onClick}
        >
            <Paragraph size="base">{label}</Paragraph>
        </Link>
    </li>
);

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const pathname = usePathname();

    // Accessibility: close menu on Escape
    const handleKeyDown = (e: KeyboardEvent<HTMLElement>) => {
        if (e.key === "Escape") setMenuOpen(false);
    };

    return (
        <Section>
            <header className="w-full left-0 top-6 fixed z-50 px-6 sm:px-4">
                <div className="bg-(--dark-blue-eight) backdrop-blur-md bg-blend-overlay shadow-lg rounded-md max-w-full sm:max-w-2xl md:max-w-2xl lg:max-w-4xl xl:max-w-7xl mx-auto flex items-center justify-between px-6 sm:px-4 h-16">
                    {/* Logo */}
                    <div className="flex items-center h-16">
                        <Link href="/" className="flex items-center cursor-pointer h-full" aria-label="Go to homepage">
                            <Image
                                src="/logo/pmf-logo.webp"
                                alt="PMF (Promed Metal Furniture) Logo"
                                width={140}
                                height={40}
                                className="h-10 w-auto object-contain"
                                priority
                            />
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex items-center h-16" role="navigation" aria-label="Main navigation">
                        <ul className="flex gap-8">
                            {NAV_LINKS.map((link) => (
                                <NavLink key={link.href} href={link.href} label={link.label} isActive={pathname === link.href} />
                            ))}
                        </ul>
                    </nav>

                    {/* Mobile Hamburger */}
                    <button
                        className="lg:hidden flex items-center justify-center cursor-pointer ml-2 text-(--orange) focus:outline-none focus:ring-2 focus:ring-(--orange)"
                        aria-label="Open menu"
                        aria-controls="mobile-menu"
                        aria-expanded={menuOpen}
                        onClick={() => setMenuOpen(true)}
                    >
                        <HiOutlineBars3 className="w-8 h-8" />
                    </button>
                </div>

                {/* Mobile Menu Overlay */}
                <nav
                    id="mobile-menu"
                    className={`fixed inset-0 bg-(--dark-blue) bg-opacity-95 flex flex-col items-center justify-center z-50 text-(--orange) text-lg font-medium transition-all duration-500 ease-in-out ${menuOpen ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-8 pointer-events-none"} lg:hidden`}
                    role="navigation"
                    aria-label="Mobile navigation"
                    tabIndex={-1}
                    onKeyDown={handleKeyDown}
                >
                    <button
                        className="absolute cursor-pointer top-6 right-6 sm:right-8 text-(--orange) focus:outline-none focus:ring-2 focus:ring-(--orange)"
                        aria-label="Close menu"
                        onClick={() => setMenuOpen(false)}
                    >
                        <IoMdClose className="w-8 h-8" />
                    </button>
                    <ul className="flex flex-col items-center gap-0 lg:gap-2 mt-0 lg:mt-8">
                        {NAV_LINKS.map((link) => (
                            <NavLink
                                key={link.href}
                                href={link.href}
                                label={link.label}
                                isActive={pathname === link.href}
                                onClick={() => setMenuOpen(false)}
                            />
                        ))}
                    </ul>
                </nav>
            </header>
        </Section>
    );
};

export default Navbar;
