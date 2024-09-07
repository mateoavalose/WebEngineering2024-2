import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { NavBar } from './components/Menu/NavBar'
import { RouteError } from './components/Menu/RouteError';

// Components
import Home from './components/HomePage/homePage';
import { ModelShowcase } from './components/ModelsManagement/ModelShowcase';
import { MakeupShowcase } from './components/Makeup/MakeupShowcase';


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

          <Route path="*" element={<RouteError />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App
