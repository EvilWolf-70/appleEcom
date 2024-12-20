import React from 'react'
import HeroBanner from '../HeroBanner'
import FlashSales from '../Sections/FlashSales'
import Hr from '../inner-components/Hr'
import CategorySlider from '../Sections/CategorySlider'
import BestSelling from '../Sections/BestSelling'
import ExploreProducts from '../Sections/ExploreProducts'
import AdSection from '../inner-components/AdSection'
import NewArrival from '../Sections/NewArrival'
import ServiceSec from '../Sections/ServiceSec'

const Home = () => {
    
  return (
    <>
    <HeroBanner />
    <FlashSales />
    <Hr />
    <CategorySlider />
    <Hr />
    <BestSelling />
    <AdSection />
    <ExploreProducts />
    <NewArrival />
    <ServiceSec />
    </>
  )
}

export default Home