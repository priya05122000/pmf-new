import type { FC, CSSProperties } from 'react';
import Banner from '@/components/common/Banner';

interface ProductBannerProps {
    heading?: string;
    description?: string;
    backgroundImageUrl?: string;
    className?: string;
    style?: CSSProperties;
}

const DEFAULT_HEADING = 'Our Products';
const DEFAULT_DESCRIPTION =
    'Discover premium refractory solutions designed to enhance steel production efficiency and quality.';
const DEFAULT_BG = "/home/banner.webp";

const ProductBanner: FC<ProductBannerProps> = ({
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

export default ProductBanner;
