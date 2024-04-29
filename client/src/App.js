import './App.css';
import { Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Forms from './components/Forms';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import KidneyDisease from './components/KidneyDisease';
import RiskCalculators from './components/RiskCalculators';
import GeneLookup from './components/GeneLookup';
import ResearchTrials from './components/ResearchTrials';
import ResearchTrial from './components/ResearchTrial';
import RiskCalculator from './components/RiskCalculator';

function App() {
  return (
    <div className="App bg-slate-100 min-h-screen">
      <Nav />
      <div className='md:px-20'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/kidneyDisease' element={<KidneyDisease />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/forms' element={<Forms />} />
          <Route path='/riskCalculators' element={<RiskCalculators />} />
          <Route path='/geneLookup' element={<GeneLookup />} />
          <Route path='/researchTrials' element={<ResearchTrials />} />
          {/* <Route path='/riskCalculators/KFRE1' element={<KFRE1 />} /> */}
          <Route path='/riskCalculators/:calculatorName' element={<RiskCalculator />} />
          <Route path='researchTrial/:trialName' element={<ResearchTrial />} />
        </Routes>
      </div>

    </div>
  );
}

export default App;
