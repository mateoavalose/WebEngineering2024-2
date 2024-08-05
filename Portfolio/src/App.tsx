import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from './components/NavBar';
import { Banner } from './components/Banner';
import { ProjectsSkills } from './components/ProjectsSkills';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <ProjectsSkills />
    </div>
  );
}

export default App;