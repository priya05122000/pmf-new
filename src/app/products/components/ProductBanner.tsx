import Section from '@/components/common/Section';
import Image from 'next/image';
import type { FC, CSSProperties } from 'react';

interface ProductBannerProps {
    backgroundImageUrl?: string;
    className?: string;
    style?: CSSProperties;
}

const DEFAULTS = {
    backgroundImageUrl: '/home/banner.webp',
    className: 'h-[60vh]',
    style: {} as CSSProperties,
};

const ProductBanner: FC<ProductBannerProps> = ({
    backgroundImageUrl = DEFAULTS.backgroundImageUrl,
    className = DEFAULTS.className,
    style = DEFAULTS.style,
}) => (
    <section
        className={`p-3 ${className}`.trim()}
        aria-label="Steel Quality Banner"
        role="region"
    >
        <div
            className="w-full h-full bg-cover bg-center rounded-xl bg-fixed relative flex items-center justify-center"
            style={{ backgroundImage: `url('${backgroundImageUrl}')`, ...style }}
            aria-hidden="true"
        >
        </div>
    </section>
);

export default ProductBanner;
