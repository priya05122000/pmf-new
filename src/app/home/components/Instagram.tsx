"use client";

import Section from "@/components/common/Section";
import InstagramClient from "./InstagramClient";

type Props = {
    posts: any[];
};

const Instagram: React.FC<Props> = ({ posts }) => {
    return (
        <Section aria-label="Instagram Feed" className="bg-(--light-blue-one)">
            <InstagramClient posts={posts} />
        </Section>
    );
};

export default Instagram;
