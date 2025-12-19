"use client";
import HomeBanner from './components/HomeBanner'
import AboutUs from './components/AboutUs'
import LogoSlider from './components/LogoSlider'
import RecentBlog from './components/RecentBlog'
import Testimonial from './components/Testimonials'
import Products from './components/Products';
import Services from './components/Services';
import WeSupport from './components/WeSupport';

const HomePage = () => {
    return (
        <div>
            <HomeBanner />
            <AboutUs />
            <LogoSlider />
            <WeSupport />
            <Services />
            <Products />
            <RecentBlog />
            <Testimonial />
        </div>
    )
}

export default HomePage
