import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UnderBar from './Components/Navbar/UnderBar';
import BoxComponent from './Components/BoxComponent/BoxComponent'
function App() {
  const patras = {name : "Patras", temp: 30, hum: 92, press: 1013, alt:900};
  const ioannina = {name : "Patras", temp: 30, hum: 90, press: 1013, alt:900};
  const fortosi = {name : "Patras", temp: 30, hum: 90, press: 1013, alt:900};

  return (
    <div className="App">
      <Router>
        <Navbar />
        <UnderBar />
        <Routes>
          <Route path='/' />
        </Routes>
      </Router>

        <BoxComponent station= {patras}/>
        <BoxComponent station={ioannina} />
        <BoxComponent station={fortosi} />
      
    </div>
  );
}

export default App;
