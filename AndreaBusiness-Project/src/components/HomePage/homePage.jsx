import React from 'react';
import WelcomeMsg from './welcomeMSG';
import { FeaturedModel } from './featuredModel';
import { FeaturedMakeup } from './featuredMakeup';
import { BrandOverview } from './brandOverview';


const HomePage = () => {
    return (
        <div className="home">
            <WelcomeMsg />
            <FeaturedModel />
            <FeaturedMakeup />
            <BrandOverview />
        </div>
    );
};

export default HomePage;