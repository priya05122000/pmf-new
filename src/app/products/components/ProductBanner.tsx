import Section from '@/components/common/Section';
import type { FC, CSSProperties, ReactNode } from 'react';

interface ProductBannerProps {
    backgroundImageUrl?: string;
    className?: string;
    style?: CSSProperties;
}

const DEFAULT_BG = "/home/banner.webp";



// Overlay component for reusability
const BannerOverlay: FC = () => (
    <div
        className="absolute inset-0 bg-[rgba(var(--light-blue),0.3)] rounded-xl z-0"
        aria-hidden="true"
        data-testid="banner-overlay"
    />
);


const ProductBanner: FC<ProductBannerProps> = ({
    backgroundImageUrl = DEFAULT_BG,
    className = '',
    style = {},
}) => (
    <section
        className={`p-3 ${className}`.trim()}
        aria-label="Steel Quality Banner"
        tabIndex={-1}
        role="region"
        style={{ outline: 'none' }}
    >
        <Section
            className="w-full h-[60vh] bg-cover bg-center rounded-xl bg-fixed relative"
            style={{ backgroundImage: `url('${backgroundImageUrl}')`, ...style }}
        >
            <BannerOverlay />
        </Section>
    </section>
);

export default ProductBanner;
