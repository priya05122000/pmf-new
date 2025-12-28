import ProductsClient from "./ProductsClient";
import type { FC } from 'react';

interface Product {
    id: string;
    title: string;
    primary_image_url?: string;
    category_id: string;
    is_popular?: boolean;
    active?: boolean;
}

const Products: FC<{ products: Product[] }> = ({ products }) => {
    return <ProductsClient products={products} />;
};

export default Products;
