import ProductBanner from "./components/ProductBanner";
import ProductFilter from "./components/ProductFilter";
import Explore from "./components/Explore";
import { getAllProducts } from "@/services/productService";
import { getAllCategories } from "@/services/CategoryService";

export default async function page() {
    const [products, categories] = await Promise.all([
        getAllProducts(),
        getAllCategories(),
    ]);
    return (
        <div>
            <ProductBanner />
            <ProductFilter
                products={products || []}
                categories={categories || []}
            />
            <Explore products={products || []} />
        </div>
    )
}

