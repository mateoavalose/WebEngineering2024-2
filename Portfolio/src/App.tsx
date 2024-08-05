import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from './components/NavBar';
import { Banner } from './components/Banner';
import { ProjectsSkills } from './components/ProjectsSkills';
import { Contact } from './components/Contact';
import { Footer } from './components/footer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <ProjectsSkills />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;