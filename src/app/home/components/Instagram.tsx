"use client";

import Section from "@/components/common/Section";
import InstagramClient from "./InstagramClient";

type Props = {
    posts: any[];
};

const Instagram: React.FC<Props> = ({ posts }) => {
    // Nothing to show (feed unavailable / token needs re-auth) -> hide the whole section.
    // It reappears automatically once the backend serves media again.
    if (!posts || posts.length === 0) return null;

    return (
        <Section aria-label="Instagram Feed" className="bg-(--light-blue-one)">
            <InstagramClient posts={posts} />
        </Section>
    );
};

export default Instagram;
