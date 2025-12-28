import Section from '@/components/common/Section';
import ProductFilterClient from './ProductFilterClient';

interface Category {
    id: string;
    name: string;
}

interface Product {
    id: string;
    title: string;
    primary_image_url?: string;
    category_id: string;
    active: boolean;
}

const ProductFilter = async ({
    products,
    categories,
}: {
    products: Product[];
    categories: Category[];
}) => {
    return (
        <Section>
            <div className='bg-(--gray) -mt-20 rounded-md'>
                <main>
                    <ProductFilterClient products={products} categories={categories} />
                </main>
            </div>
        </Section>
    );
};

export default ProductFilter;
