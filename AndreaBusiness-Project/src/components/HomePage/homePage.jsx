import React from 'react';
import WelcomeMsg from './welcomeMSG';
import { FeaturedModel } from './featuredModel';
import { BrandOverview } from './brandOverview';


const HomePage = () => {
    return (
        <div className="home">
            <WelcomeMsg />
            <FeaturedModel />
            <BrandOverview />
        </div>
    );
};

export default HomePage;