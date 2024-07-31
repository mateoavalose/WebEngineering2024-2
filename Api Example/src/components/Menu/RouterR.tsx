import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Component1 } from '../componentsExample/Component1';
import { Component2 } from '../componentsExample/Component2';
import { Component3 } from '../componentsExample/Component3';
import { ErrorComponent } from '../componentsExample/ErrorComponent';
import { Menu } from './Menu';

export const RouterR = () => {
    return (
        <Router>
            <Menu/>
            <Routes>
                <Route path="/" element={<Component1/>}/>
                <Route path="/Component1" element={<Component1/>}/>
                <Route path="/Component2" element={<Component2/>}/>
                <Route path="/Component3" element={<Component3/>}/>
                <Route path="*" element={<ErrorComponent/>}/>
            </Routes>
        </Router>
    )
}