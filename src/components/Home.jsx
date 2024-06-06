import React from 'react';
import Hero from '../components/Hero';
import Perks from './Perks';
import Popular from './Popular';
import Arrivals from './Arrivals';
import ShopCategory from './ShopCategory';

const Home = () =>{

    return(
        <>
        <Hero />
        <Perks />
        <Popular />
        <Arrivals />
        <ShopCategory />
        </>
    )
}

export default Home;