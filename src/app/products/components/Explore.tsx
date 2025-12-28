import ExploreClient from './ExploreClient';

interface Product {
    id: string;
    title: string;
    primary_image_url?: string;
    category_id: string;
    is_popular?: boolean;
    active?: boolean;
}

const Explore = ({ products }: { products: Product[] }) => {
    const popularProducts = products.filter(
        (product) => product.is_popular === true && product.active === true
    );
    return (
        <ExploreClient products={popularProducts} />
    );
};

export default Explore;
