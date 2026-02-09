"use client";

import { useEffect } from "react";

export default function Instagram() {
    useEffect(() => {
        if (!document.querySelector('script[src="https://www.instagram.com/embed.js"]')) {
            const script = document.createElement("script");
            script.src = "https://www.instagram.com/embed.js";
            script.async = true;
            document.body.appendChild(script);
        } else {
            // Re-render embeds if script already exists
            // @ts-ignore
            window.instgrm?.Embeds.process();
        }
    }, []);

    const posts = [
        "https://www.instagram.com/p/DUSIjI0EuOb/",
        "https://www.instagram.com/p/DUSG_hqEq6u/",
        "https://www.instagram.com/p/DUSG0PMknqc/",
        "https://www.instagram.com/p/DS1ttVyFq9g/",
        "https://www.instagram.com/p/DS1s5BSAdo7/",
    ];

    return (
        <section
            style={{
                maxWidth: "1200px",
                margin: "0 auto",
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
                gap: "24px",
            }}
        >
            {posts.map((url, index) => (
                <blockquote
                    key={index}
                    className="instagram-media"
                    data-instgrm-permalink={url}
                    data-instgrm-version="14"
                    style={{ margin: "0 auto", width: "100%" }}
                />
            ))}
        </section>
    );
}
