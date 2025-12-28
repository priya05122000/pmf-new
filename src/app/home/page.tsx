import HomeBanner from "./components/HomeBanner";
import AboutUs from "./components/AboutUs";
import LogoSlider from "./components/LogoSlider";
import TestimonialClient from "./components/TestimonialClient";
import Products from "./components/Products";
import Services from "./components/Services";
import WeSupport from "./components/WeSupport";
import RecentProject from "./components/RecentProjects";

import { getAllProducts } from "@/services/productService";
import { getAllProjects } from "@/services/projectService";
import { getAllProjectCategories } from "@/services/projectCategoryService";
import { getAllPartners } from "@/services/partnerService";
import { getAllTestimonials } from "@/services/testimonialService";

export default async function HomePage() {
    const [products, projects, categories, partners, testimonials] = await Promise.all([
        getAllProducts(),
        getAllProjects(),
        getAllProjectCategories(),
        getAllPartners(),
        getAllTestimonials()
    ]);

    return (
        <div>
            <HomeBanner />
            <AboutUs />
            <LogoSlider partners={partners || []} />
            <Services />
            <WeSupport />
            <Products products={products || []} />
            <RecentProject
                projects={projects || []}
                projectCategories={categories || []}
            />
            <TestimonialClient testimonials={testimonials || []} />
        </div>
    );
}
