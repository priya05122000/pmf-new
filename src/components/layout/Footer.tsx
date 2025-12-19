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
    { label: "Contact us", href: "/contact-us" },
];

export const Footer = () => {
    return (
        <footer className="w-full h-[70vh] sm:h-[60vh] lg:h-[70vh] pt-10 bg-(--light-blue)/10  relative overflow-hidden pb-0 flex flex-col  ">
            <div className="h-full flex  flex-col relative justify-between ">
                <div>
                    <Section>
                        <div className="w-full flex items-center relative">
                            <Image
                                src="/logo/logo.png"
                                alt="logo1"
                                height={1000}
                                width={1000}
                                quality={100}
                                className="object-contain h-20 w-20 "
                            />
                            <Span className="text-(--light-blue) absolute bottom-0 left-24  uppercase ">
                                Copyright 2025 Favorite Doctor,
                                <br /> All Rights Reserved
                            </Span>
                        </div>
                    </Section>
                </div>

                <div>
                    <RightSpaceGridSection>
                        <div className="col-span-2  ">
                            <div className="w-full  h-full flex flex-col-reverse   md:flex-row justify-between relative sm:gap-20 lg:gap-10">
                                <div className=" h-full -ml-6 sm:ml-0 mt-10 sm:mt-0">
                                    <Image
                                        src="/logo/pmf-1.png"
                                        alt="logo1"
                                        height={1000}
                                        width={1000}
                                        quality={100}
                                        className="object-contain h-full w-xl lg:w-3xl xl:w-6xl "
                                    />
                                </div>

                                <div className="h-full  block">
                                    <Heading
                                        level={6}
                                        className={` gradient-animation-one bg-clip-text text-(--dark-blue)`}
                                    >
                                        Explore
                                    </Heading>
                                    <nav className="mt-3 flex flex-col gap-1">
                                        {footerLinks.map((link) => (
                                            <Link
                                                key={link.label}
                                                href={link.href}
                                                className="text-(--light-blue)  transition-colors"
                                            >
                                                <Paragraph size="base" >
                                                    {link.label}
                                                </Paragraph>
                                            </Link>
                                        ))}
                                        <Span className="text-(--dark-blue) flex gap-3 mt-2 lg:mt-4 ">
                                            <FaFacebookF className="w-4 h-4" />
                                            <SiInstagram className="w-4 h-4" />
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
