import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import Nav from './components/Nav';
import Forms from './components/Forms';
import Home from './components/Home';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path='/home' element={<Home />}/>
        <Route path='/contact' element={<Contact />} />
        <Route path='/forms' element={<Forms />}/>
      </Routes>
    </div>
  );
}

export default App;
