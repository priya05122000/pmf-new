"use client";

import { useEffect } from "react";
import Heading from "@/components/common/Heading";
import Paragraph from "@/components/common/Paragraph";

/**
 * Backstop error boundary for the homepage. Instagram can no longer throw
 * (its service returns [] on failure), so this only triggers if some other
 * homepage data source fails.
 */
export default function HomeError({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        console.error("Home page error:", error);
    }, [error]);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-color-custom text-center p-8">
            <Heading level={4} className="mb-2 font-bold text-(--dark-blue)">
                Something went wrong
            </Heading>
            <Paragraph size="base" className="mb-6 text-(--dark-blue)">
                We couldn&apos;t load this page right now. Please try again.
            </Paragraph>
            <button
                onClick={reset}
                className="px-6 py-2 bg-(--orange) text-white rounded-md shadow cursor-pointer transition"
            >
                Try again
            </button>
        </div>
    );
}
