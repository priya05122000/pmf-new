import Heading from '@/components/common/Heading';
import Paragraph from '@/components/common/Paragraph';
import Section from '@/components/common/Section';
import Image from 'next/image';
import type { FC, CSSProperties } from 'react';

interface AboutUsBannerProps {
    heading?: string;
    description?: string;
    backgroundImageUrl?: string;
    className?: string;
    style?: CSSProperties;
}

const DEFAULT_HEADING = 'Built to Fit. Built to Last.';
const DEFAULT_DESCRIPTION =
    'PMF World delivers custom fabrication solutions shaped to the changing needs of modern infrastructure and interior spaces. With advanced manufacturing, every project is finished with lasting strength, clean design, and precise detail.';
const DEFAULT_BG = "/home/banner.webp";

const AboutUsBanner: FC<AboutUsBannerProps> = ({
    heading = DEFAULT_HEADING,
    description = DEFAULT_DESCRIPTION,
    backgroundImageUrl = DEFAULT_BG,
    className = 'h-[80vh] sm:h-[70vh]',
    style = {},
}) => (
    <section
        className={`p-3 ${className}`.trim()}
        aria-label="Steel Quality Banner"
    >
        <Section
            className="w-full mb-10 h-full bg-cover bg-center rounded-xl bg-fixed relative"
            style={{ backgroundImage: `url('${backgroundImageUrl}')`, ...style }}
        >
            <div className="absolute inset-0 bg-(--light-blue)/30 rounded-xl z-0" aria-hidden="true"></div>
            <div className="h-[80vh] sm:h-[70vh] w-full flex items-center justify-center relative z-10">
                <div className='text-center'>
                    <Heading level={4} className="text-white">{heading}</Heading>
                    <Paragraph size="base" className="text-white mt-4 max-w-2xl">
                        {description}
                    </Paragraph>
                </div>
            </div>
        </Section>
    </section>
);

export default AboutUsBanner;
