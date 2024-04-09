import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import Nav from './components/Nav';
import Forms from './components/Forms';
import Home from './components/Home';
import Contact from './components/Contact';
import About from './components/About';
import KidneyDisease from './components/KidneyDisease';
import RiskCalculators from './components/RiskCalculators';
import GeneLookup from './components/GeneLookup';

function App() {
  return (
    <div className="App min-h-screen">
      <Nav />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/kidneyDisease' element={<KidneyDisease />}/>
        <Route path='/contact' element={<Contact />} />
        <Route path='/forms' element={<Forms />}/>
        <Route path='/riskCalculators' element={<RiskCalculators />} />
        <Route path='/geneLookup' element={<GeneLookup />} />
      </Routes>
    </div>
  );
}

export default App;
