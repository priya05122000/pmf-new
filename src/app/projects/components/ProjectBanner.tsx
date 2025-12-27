import Heading from '@/components/common/Heading';
import Paragraph from '@/components/common/Paragraph';
import Section from '@/components/common/Section';
import Image from 'next/image';
import type { FC, CSSProperties } from 'react';

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
    <section
        className={`p-3 ${className}`.trim()}
        aria-label="Steel Quality Banner"
    >
        <Section
            className="w-full h-full bg-cover bg-center rounded-xl bg-fixed relative flex items-center justify-center"
            style={{ backgroundImage: `url('${backgroundImageUrl}')`, ...style }}
        >
            <div className="absolute inset-0 bg-(--light-blue-three) rounded-xl z-0" aria-hidden="true"></div>
            <div className="h-full w-full flex items-center justify-center relative z-10">
                <div className="flex flex-col items-center justify-center h-full w-full">
                    <Heading level={4} className="text-white text-center">{heading}</Heading>
                    <Paragraph size="base" className="text-white mt-4 max-w-2xl text-center">
                        {description}
                    </Paragraph>
                </div>
            </div>
        </Section>
    </section>
);

export default ContactBanner;
