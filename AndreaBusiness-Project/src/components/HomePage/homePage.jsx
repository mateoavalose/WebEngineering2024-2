import React from 'react';
import WelcomeMsg from './welcomeMSG';
import { BrandOverview } from './brandOverview';

const HomePage = () => {
    return (
        <div className="home">
            <WelcomeMsg />
            <BrandOverview />
        </div>
    );
};

export default HomePage;