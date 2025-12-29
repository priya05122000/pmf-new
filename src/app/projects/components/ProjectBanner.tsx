import Heading from '@/components/common/Heading';
import Paragraph from '@/components/common/Paragraph';
import Section from '@/components/common/Section';
import Image from 'next/image';
import type { FC, CSSProperties } from 'react';
import Banner from '@/components/common/Banner';

interface ContactBannerProps {
    heading?: string;
    description?: string;
    backgroundImageUrl?: string;
    className?: string;
    style?: CSSProperties;
}

const DEFAULT_HEADING = 'Our Projects';
const DEFAULT_DESCRIPTION =
    'Discover premium refractory solutions designed to enhance steel production efficiency and quality.';
const DEFAULT_BG = "/home/banner.webp";

const ContactBanner: FC<ContactBannerProps> = ({
    heading = DEFAULT_HEADING,
    description = DEFAULT_DESCRIPTION,
    backgroundImageUrl = DEFAULT_BG,
    className = 'h-[60vh]',
    style = {},
}) => (
    <Banner
        heading={heading}
        description={description}
        backgroundImageUrl={backgroundImageUrl}
        className={className}
        style={style}
        headingClassName="text-white text-center"
        descriptionClassName="text-white mt-4 max-w-2xl text-center"
    />
);

export default ContactBanner;
