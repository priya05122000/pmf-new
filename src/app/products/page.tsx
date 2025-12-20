import React from 'react'
import ProductBanner from './components/ProductBanner'
import ProductFilter from './components/ProductFilter'
import Explore from './components/Explore'

const page = () => {
    return (
        <div>
            <ProductBanner />
            <ProductFilter />
            <Explore />
        </div>
    )
}

export default page
