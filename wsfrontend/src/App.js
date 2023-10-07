import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UnderBar from './Components/Navbar/UnderBar';
import Overview from './Pages/Overview'
import Patras from './Pages/Stations/Patras'
import Ioannina from './Pages/Stations/Ioannina'
import Fortosi from './Pages/Stations/Fortosi'
import Graphs from './Pages/Graphs/Graphs'

function App() {

  return (
    <div className="App">
      <Router>
        <Routes> </Routes>
        <Navbar />
        <Routes>
          <Route path='/' element={<Overview />}/>
          <Route path='/patras'  element={<Patras />}/>
          <Route path='/ioannina'  element={<Ioannina />}/>
          <Route path='/fortosi'  element={<Fortosi />}/>
          <Route path='/graphs'  element={<Graphs />}/>
        </Routes>
      </Router>


      
    </div>
  );
}

export default App;
