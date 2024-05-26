import React, { useContext } from 'react';
import Layout from '../../components/layout/Layout';
import HeroSection from '../../components/heroSection/HeroSection';
import Category from '../../components/category/Category';
import HomePageProductCard from '../../components/homepageproductcard/HomePageProductCard';
import Track from '../../components/tracks/Tracks';
import Testimonial from '../../components/testimonial/Testimonial';
import MyContext from '../../context/MyContext';
import { Loader } from 'lucide-react';


const HomePage = () => {
    const context = useContext(MyContext);
    const name = context;
  return (
    <Layout>
      <HeroSection />
      <Category />
      <HomePageProductCard />
      <Track />
      <Testimonial />
     <Loader />
    </Layout>
  )
}

export default HomePage;