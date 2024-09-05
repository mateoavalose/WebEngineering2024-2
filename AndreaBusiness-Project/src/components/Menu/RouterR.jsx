import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { NavBar } from './NavBar';
import { RouteError } from './RouteError';

// Components
import Home from '../HomePage/homePage';

export const RouterR = () => {
    return (
        <Router>
            <NavBar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="*" element={<RouteError />} />
            </Routes>
        </Router>
    )
}