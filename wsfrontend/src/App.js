import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UnderBar from './Components/Navbar/UnderBar';

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
      
    </div>
  );
}

export default App;
