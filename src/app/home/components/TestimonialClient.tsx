"use client";

import dynamic from "next/dynamic";

const Testimonials = dynamic(
    () => import("./Testimonials"),
    { ssr: false }
);

export default function TestimonialClient({
    testimonials,
}: {
    testimonials: any[];
}) {
    return <Testimonials testimonials={testimonials} />;
}
