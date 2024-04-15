import './App.css';
import { Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Forms from './components/Forms';
import Home from './components/Home';
import Contact from './components/Contact';
import About from './components/About';
import KidneyDisease from './components/KidneyDisease';
import RiskCalculators from './components/RiskCalculators';
import GeneLookup from './components/GeneLookup';
import ResearchTrials from './components/ResearchTrials';
import KFRE from './components/KFRE';
import DRACS from './components/DRACS';
import DRACSCC from './components/DRACSCC';
import ContrastNephropathy from './components/ContrastNephropathy';
import ClinicalOutcomes from './components/ClinicalOutcomes';
import Apache from './components/Apache';
import AkiRisk from './components/AkiRisk';
import ResearchTrial from './components/ResearchTrial';

function App() {
  return (
    <div className="App">
      <Nav />
      <div className='mt-80 md:mt-52'>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/about' element={<About />}/>
          <Route path='/kidneyDisease' element={<KidneyDisease />}/>
          <Route path='/contact' element={<Contact />} />
          <Route path='/forms' element={<Forms />}/>
          <Route path='/riskCalculators' element={<RiskCalculators />} />
          <Route path='/geneLookup' element={<GeneLookup />} />
          <Route path='/researchTrials' element={<ResearchTrials />} />
          {/* <Route path='/riskCalculators/KFRE1' element={<KFRE1 />} /> */}
          <Route path='/riskCalculators/KidneyFailureRiskEquation' element={<KFRE />} />
          <Route path='/riskCalculators/DialysisRiskAfterCardiacSurgeryMehta' element={<DRACS />} />
          <Route path='/riskCalculators/DialysisRiskAfterCardiacSurgeryClevelandClinic' element={<DRACSCC />} />
          <Route path='/riskCalculators/ContrastNephropathyPost-PCI' element={<ContrastNephropathy />}/>
          <Route path='/riskCalculators/ClinicalOutcomesInCkdWithSeverelyDecreasedGFR' element={<ClinicalOutcomes />}/>
          <Route path='/riskCalculators/Apache' element={<Apache />}/>
          <Route path='/riskCalculators/AkiRiskAfterSurgery' element={<AkiRisk />}/>
          <Route path='researchTrial/:topicNumber' element={<ResearchTrial />}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
