import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaFacebookF } from "react-icons/fa6";
import { SiInstagram } from "react-icons/si";
import Span from "../common/Span";
import Section from "../common/Section";
import Heading from "../common/Heading";
import RightSpaceGridSection from "../common/RightSpaceGridSection";
import Paragraph from "../common/Paragraph";

const footerLinks = [
    { label: "Home", href: "/" },
    { label: "About-us", href: "/about-us" },
    { label: "Products", href: "/products" },
    { label: "Projects", href: "/projects" },
    { label: "Contact us", href: "/contact-us" },
];

export const Footer = () => {
    return (
        <footer className="w-full h-full sm:h-[60vh] lg:h-[80vh] pt-10 bg-(--light-blue-one)  relative overflow-hidden pb-0 flex flex-col  ">
            {/* <footer className="w-full h-[70vh] sm:h-[60vh] lg:h-[70vh] pt-10 bg-(--light-blue-one)  relative overflow-hidden pb-0 flex flex-col  "> */}
            <div className="h-full flex  flex-col relative justify-between ">
                <div>
                    <Section>
                        {/* <div className="w-full flex items-center relative">
                            <Image
                                src="/logo/footerlogo.webp"
                                alt="logo1"
                                height={1000}
                                width={1000}
                                quality={100}
                                className="object-contain h-full w-20 "
                            />
                            <span className="text-xs sm:text-sm text-(--light-blue) absolute bottom-0 left-24  uppercase ">
                                © 2025 PROMED Metal Furniture LLC-FX.
                                <br /> All Rights Reserved.
                            </span>
                        </div> */}
                        <Span className=" text-(--light-blue)  uppercase ">
                            © 2025 PROMED Metal Furniture LLC-FX.
                            <br /> All Rights Reserved.
                        </Span>
                    </Section>
                </div>

                <div>
                    <RightSpaceGridSection>
                        <div className="col-span-2 sm:mt-10">
                            <div className="w-full  h-full flex flex-col-reverse   md:flex-row justify-between relative sm:gap-10 ">
                                <div className=" h-full -ml-6 sm:ml-0 mt-10 sm:mt-0">
                                    {/* <Image
                                        src="/logo/bigpmf.webp"
                                        alt="logo1"
                                        height={1000}
                                        width={1000}
                                        quality={100}
                                        className="object-contain h-full w-xl sm:w-5xl xl:w-6xl "
                                    /> */}
                                    <Image
                                        src="/logo/bigpmf.webp"
                                        alt="logo1"
                                        height={1000}
                                        width={1000}
                                        quality={100}
                                        className="object-contain h-full "
                                    />
                                </div>

                                <div className="h-full mt-8 sm:mt-0   block">
                                    <Heading
                                        level={6}
                                        className={`leading-none text-(--dark-blue) `}
                                    >
                                        Explore
                                    </Heading>
                                    <nav className="mt-3 flex flex-col gap-1">
                                        {footerLinks.map((link) => (
                                            <Link
                                                key={link.label}
                                                href={link.href}
                                                className="text-(--light-blue)
                                                cursor-pointer transition-colors"
                                            >
                                                <Paragraph size="base" >
                                                    {link.label}
                                                </Paragraph>
                                            </Link>
                                        ))}
                                        <Span className="text-(--dark-blue) flex gap-3 mt-2 lg:mt-4 ">
                                            <Link href="https://www.facebook.com/profile.php?id=61585444726813" target="_blank" rel="noopener noreferrer">
                                                <FaFacebookF className="w-4 h-4" />
                                            </Link>
                                            <Link href="https://instagram.com/pmf.world" target="_blank" rel="noopener noreferrer">
                                                <SiInstagram className="w-4 h-4" />
                                            </Link>
                                        </Span>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </RightSpaceGridSection>
                </div>
            </div>
        </footer>
    );
};
