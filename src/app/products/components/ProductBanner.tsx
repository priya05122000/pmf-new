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

// Large decorative text component
const BannerDecorText: FC<{ text: string }> = ({ text }) => (
    <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 leading-tight text-(--gray) font-bold select-none pointer-events-none text-9xl sm:text-[256px] lg:text-[384px] xl:text-[512px]"
        aria-hidden="true"
        style={{
            lineHeight: 1,
            whiteSpace: 'nowrap',
        }}
    >
        {text}
    </div>
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
            className="w-full h-[80vh] xl:h-[85vh] bg-cover bg-center rounded-xl bg-fixed relative"
            style={{ backgroundImage: `url('${backgroundImageUrl}')`, ...style }}
        >
            <BannerOverlay />
            <BannerDecorText text="Shop" />
        </Section>
    </section>
);

export default ProductBanner;
