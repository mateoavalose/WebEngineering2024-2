import React from 'react';
import WelcomeMsg from './welcomeMSG';
import { FeaturedModel } from './featuredModel';
import { FeaturedMakeup } from './featuredMakeup';
import { BrandOverview } from './brandOverview';
import { FeaturedEvents } from './featuredEvents';


const HomePage = () => {
    return (
        <div className="home">
            <WelcomeMsg />
            <FeaturedEvents />
            <FeaturedModel />
            <FeaturedMakeup />
            <BrandOverview />
        </div>
    );
};

export default HomePage;