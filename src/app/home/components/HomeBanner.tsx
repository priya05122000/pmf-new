import Heading from '@/components/common/Heading';
import Paragraph from '@/components/common/Paragraph';
import Section from '@/components/common/Section';
import Image from 'next/image';
import type { FC, CSSProperties } from 'react';

interface HomeBannerProps {
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

// Reusable banner items config
const BANNER_ITEMS = [
    {
        src: "/home/steel.webp",
        alt: "Steel Products",
        label: "Products",
    },
    {
        src: "/home/contact.webp",
        alt: "24/7 Support",
        label: "Contact",
    },
    {
        src: "/home/catalogue.webp",
        alt: "Catalogue",
        label: "Catalogue",
    },
];

// Reusable BannerItem component
const BannerItem: FC<{ src: string; alt: string; label: string; withBorder?: boolean }> = ({ src, alt, label, withBorder }) => (
    <div
        className={`px-4 sm:px-10 py-4 sm:py-6 flex flex-col hover:bg-(--light-blue)/50 justify-center items-center select-none${withBorder ? ' border-x border-white/20' : ''} transition-colors duration-300`}
        tabIndex={-1}
    >
        <Image src={src} alt={alt} width={96} height={96} className="w-8 h-8 sm:w-10 sm:h-10 object-cover pointer-events-none" />
        <Paragraph size='base' className="text-center mt-2 pointer-events-none text-white">{label}</Paragraph>
    </div>
);

const HomeBanner: FC<HomeBannerProps> = ({
    heading = DEFAULT_HEADING,
    description = DEFAULT_DESCRIPTION,
    backgroundImageUrl = DEFAULT_BG,
    className = '',
    style = {},
}) => (
    <section
        className={`p-3 ${className}`.trim()}
        aria-label="Steel Quality Banner"
    >
        <Section
            className="w-full mb-20 h-[80vh] xl:h-[85vh] bg-cover bg-center rounded-xl bg-fixed relative"
            style={{ backgroundImage: `url('${backgroundImageUrl}')`, ...style }}
        >
            <div className="absolute inset-0 bg-(--light-blue)/30 rounded-xl z-0" aria-hidden="true"></div>
            <div className="h-[85vh] w-full flex items-center justify-start relative z-10">
                <div>
                    <Heading level={4} className="text-white">{heading}</Heading>
                    <Paragraph size="base" className="text-white mt-4 max-w-2xl">
                        {description}
                    </Paragraph>
                </div>
            </div>
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 rounded-md">
                <div className="flex justify-center sm:w-xl py-4 bg-(--dark-blue)/80 rounded-md">
                    {BANNER_ITEMS.map((item, idx) => (
                        <BannerItem key={item.label} {...item} withBorder={idx === 1} />
                    ))}
                </div>
            </div>
        </Section>
    </section>
);

export default HomeBanner;
