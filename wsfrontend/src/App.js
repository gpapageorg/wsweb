import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UnderBar from './Components/Navbar/UnderBar';
import BoxComponent from './Components/BoxComponent/BoxComponent'
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <UnderBar />
        <Routes>
          <Route path='/' />
        </Routes>
      </Router>
      
        <BoxComponent station={"Patras"} />
        <BoxComponent station={"Ioannina"} />
        <BoxComponent station={"Fortosi"} />
      
    </div>
  );
}

export default App;
