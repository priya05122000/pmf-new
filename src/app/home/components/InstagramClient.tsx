"use client";

import Heading from "@/components/common/Heading";
import Paragraph from "@/components/common/Paragraph";
import Section from "@/components/common/Section";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

type MediaType = "IMAGE" | "VIDEO" | "CAROUSEL_ALBUM";

type InstagramPost = {
    id: string;
    media_url: string;
    permalink: string;
    thumbnail_url?: string;
    media_type: MediaType;
};

type Props = {
    posts: InstagramPost[];
};

/* ---------------------------------------------
   Reusable Media Renderer
---------------------------------------------- */
const InstagramMedia = ({ post }: { post: InstagramPost }) => {
    if (post.media_type === "VIDEO") {
        return (
            <video
                src={post.media_url}
                poster={post.thumbnail_url}
                muted
                loop
                autoPlay
                playsInline
                preload="metadata"
                className="w-full h-full object-cover rounded-inherit "
                aria-label="Instagram video post"
            />
        );
    }

    return (
        <Image
            src={post.media_url}
            alt="Instagram post image"
            fill
            sizes="(max-width: 768px) 100vw, 25vw"
            loading="lazy"
            className="object-cover rounded-inherit "
        />
    );
};

/* ---------------------------------------------
   Wrapper Card
---------------------------------------------- */
const InstagramCard = ({
    post,
    className,
}: {
    post?: InstagramPost;
    className: string;
}) => {
    if (!post) return null;

    return (
        <a
            href={post.permalink}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Open Instagram post"
            className={`${className} transition-shadow duration-300`}
        >
            <div className="absolute inset-0 rounded-inherit ">
                <InstagramMedia post={post} />
            </div>
        </a>
    );
};

/* ---------------------------------------------
   Main Component
---------------------------------------------- */
const InstagramClient: React.FC<Props> = ({ posts }) => {
    const latestPosts = posts.slice(0, 6); // ✅ latest 6 only
    return (
        <section aria-label="Instagram Feed">
            <div className="py-10 sm:py-16 lg:py-20">
                <div className="flex flex-col items-center text-center">
                    <Heading level={4} className="text-(--dark-blue)">
                        Our Latest Work
                    </Heading>
                    <Paragraph size="base" className="text-(--dark-blue) mt-4 max-w-2xl">
                        PMF World (Promed Metal Furniture) presents recent fabrication projects across retail, hospitality, and industrial spaces, built for durability, precision, and long-term performance.
                    </Paragraph>
                </div>
                <div
                    aria-label="Instagram feed"
                    className="flex flex-row items-center justify-center mt-10 gap-2 md:gap-6 w-full  overflow-hidden "
                >

                    {/* LEFT LARGE */}
                    <InstagramCard
                        post={latestPosts[0]}
                        className="relative flex-none h-28 md:h-52 lg:h-72 xl:h-92 w-[23%] md:w-[24%] overflow-hidden rounded-lg"
                    />

                    {/* RIGHT STACK */}
                    <div className="flex flex-col gap-2 md:gap-6 flex-1 w-full">

                        {/* TOP ROW */}
                        <div className="flex flex-row items-end gap-2 md:gap-6">
                            <InstagramCard
                                post={latestPosts[1]}
                                className="relative h-24 md:h-40 lg:h-52 xl:h-72 w-[30%] md:w-[32%] overflow-hidden rounded-lg"
                            />
                            <InstagramCard
                                post={latestPosts[2]}
                                className="relative h-32 md:h-56 lg:h-72 xl:h-96 w-[30%] md:w-[34%] overflow-hidden rounded-lg"
                            />
                            <InstagramCard
                                post={latestPosts[3]}
                                className="relative h-28 md:h-44 lg:h-60 xl:h-80 w-[30%] md:w-[34%] overflow-hidden rounded-lg"
                            />
                        </div>

                        {/* BOTTOM ROW */}
                        <div className="flex flex-row gap-2 md:gap-6">
                            <InstagramCard
                                post={latestPosts[4]}
                                className="relative h-20 md:h-40 lg:h-52 xl:h-64 w-[43%] overflow-hidden rounded-lg"
                            />
                            <InstagramCard
                                post={latestPosts[5]}
                                className="relative h-16 md:h-32 lg:h-36 xl:h-52 w-[32%] overflow-hidden rounded-lg"
                            />
                        </div>

                    </div>


                </div>
                <div className="flex justify-end mt-6 text-(--dark-blue) hover:underline">
                    <Link
                        href="https://www.instagram.com/pmf.world/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-sm  gap-2 transition-shadow"
                    >
                        See All <BsArrowRight />
                    </Link>
                </div>

            </div>

        </section>

    );
};

export default InstagramClient;
