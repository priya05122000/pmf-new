import Heading from '@/components/common/Heading';
import Paragraph from '@/components/common/Paragraph';
import Section from '@/components/common/Section';
import Image from 'next/image';
import type { FC, CSSProperties } from 'react';
import Banner from '@/components/common/Banner';

interface AboutUsBannerProps {
    heading?: string;
    description?: string;
    backgroundImageUrl?: string;
    className?: string;
    style?: CSSProperties;
}

const DEFAULT_HEADING = 'Built to Fit. Built to Last.';
const DEFAULT_DESCRIPTION =
    'PMF World (Promed Metal Furniture)  delivers custom fabrication solutions shaped to the changing needs of modern infrastructure and interior spaces. With advanced manufacturing, every project is finished with lasting strength, clean design, and precise detail.';
const DEFAULT_BG = "/home/banner.webp";

const AboutUsBanner: FC<AboutUsBannerProps> = ({
    heading = DEFAULT_HEADING,
    description = DEFAULT_DESCRIPTION,
    backgroundImageUrl = DEFAULT_BG,
    className = 'h-[80vh] sm:h-[70vh]',
    style = {},
}) => (
    <Banner
        heading={heading}
        description={description}
        backgroundImageUrl={backgroundImageUrl}
        className={className}
        style={style}
        headingClassName="text-white"
        descriptionClassName="text-white mt-4 max-w-2xl"
    />
);

export default AboutUsBanner;
