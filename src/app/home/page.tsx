"use client";
import HomeBanner from './components/HomeBanner'
import AboutUs from './components/AboutUs'
import LogoSlider from './components/LogoSlider'
import Testimonial from './components/Testimonials'
import Products from './components/Products';
import Services from './components/Services';
import WeSupport from './components/WeSupport';
import RecentProject from './components/RecentProjects';

const HomePage = () => {
    return (
        <div>
            <HomeBanner />
            <AboutUs />
            <LogoSlider />
            <Services />
            <WeSupport />
            <Products />
            <RecentProject />
            <Testimonial />
        </div>
    )
}

export default HomePage
