import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from './components/NavBar';
import { Banner } from './components/Banner';
import { AddInfo } from './components/AddInfo';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <AddInfo />
    </div>
  );
}

export default App;