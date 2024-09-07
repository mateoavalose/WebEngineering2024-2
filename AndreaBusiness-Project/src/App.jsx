import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { NavBar } from './components/Menu/NavBar'
import { RouteError } from './components/Menu/RouteError';

// Components
import Home from './components/HomePage/homePage';
import { ModelShowcase } from './components/ModelsManagement/ModelShowcase';
import { MakeupShowcase } from './components/Makeup/MakeupShowcase';
import { MonthlyCalendar } from './components/FashionEvents/MonthlyCalendar';
import { PhotoShowcase } from './components/PhotoSales/PhotoShowcase';
import { Membership } from './components/Memberships/Membership';
import { SignUp } from './components/Memberships/SignUp';


function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/models" element={<ModelShowcase />} />
          <Route path="/makeup" element={<MakeupShowcase />} />
          <Route path="/fashion" element={<MonthlyCalendar />} />
          <Route path="/photo" element={<PhotoShowcase />} />
          <Route path="/memberships" element={<Membership />} />
          <Route path="/signup" element={<SignUp />} />

          <Route path="*" element={<RouteError />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App
