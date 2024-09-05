import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { NavBar } from './components/Menu/NavBar'
import { RouteError } from './components/Menu/RouteError';

// Components
import Home from './components/HomePage/homePage';


function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="*" element={<RouteError />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App
