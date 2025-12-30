"use client";

import dynamic from "next/dynamic";
import type { FC } from "react";

const Testimonials = dynamic(() => import("./Testimonials"), {
    ssr: false, // 🚨 THIS IS THE FIX
});

interface TestimonialClientProps {
    testimonials: any[];
}

const TestimonialClient: FC<TestimonialClientProps> = ({ testimonials }) => {
    return <Testimonials testimonials={testimonials} />;
};

export default TestimonialClient;
