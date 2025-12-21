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

const DEFAULT_HEADING = 'Power Up for Steel Quality';
const DEFAULT_DESCRIPTION =
    'Discover premium refractory solutions designed to enhance steel production efficiency and quality. Our advanced materials ensure durability and optimal performance in the most demanding environments.';
const DEFAULT_BG = "/home/banner.webp";

const AboutUsBanner: FC<AboutUsBannerProps> = ({
    heading = DEFAULT_HEADING,
    description = DEFAULT_DESCRIPTION,
    backgroundImageUrl = DEFAULT_BG,
    className = 'h-[90vh] lg:min-h-screen',
    style = {},
}) => (
    <section
        className={`p-3 ${className}`.trim()}
        aria-label="Steel Quality Banner"
    >
        <Section
            className="w-full mb-10 h-[80vh] lg:h-[90vh] bg-cover bg-center rounded-xl bg-fixed relative"
            style={{ backgroundImage: `url('${backgroundImageUrl}')`, ...style }}
        >
            <div className="absolute inset-0 bg-(--light-blue)/30 rounded-xl z-0" aria-hidden="true"></div>
            <div className="h-[90vh] w-full flex items-center justify-start relative z-10">
                <div>
                    <Heading level={4} className="text-white">{heading}</Heading>
                    <Paragraph size="base" className="text-white mt-4 max-w-2xl">
                        {description}
                    </Paragraph>
                    <button>
                        <span className="inline-block mt-6 px-4 py-2 bg-(--dark-blue) text-white rounded-md cursor-pointer">
                            Learn More
                        </span>
                    </button>
                </div>
            </div>
        </Section>
    </section>
);

export default AboutUsBanner;
