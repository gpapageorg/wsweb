import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UnderBar from './Components/Navbar/UnderBar';
import Overview from './Pages/Overview'
import Patras from './Pages/Stations/Patras'
import Ioannina from './Pages/Stations/Ioannina'
import Fortosi from './Pages/Stations/Fortosi'
import Graphs from './Pages/Graphs/Graphs'
import LoginPage from './Pages/Login/LoginPage';
import PrivateRoute from './Utils/PrivateRoute';
import { AuthProvider } from './Context/AuthContext'

function App() {

  return (
    <div className="App">
      <Router>
        <AuthProvider>
        <Navbar/>
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/" element={<PrivateRoute><Overview /></PrivateRoute>} />
            <Route path='/patras' element={<PrivateRoute><Patras /></PrivateRoute>} />
            <Route path='/ioannina' element={<PrivateRoute><Ioannina /></PrivateRoute>} />
            <Route path='/fortosi' element={<PrivateRoute><Fortosi /></PrivateRoute>} />
            <Route path='/graphs' element={<PrivateRoute><Graphs /></PrivateRoute>} />

          </Routes>
        </AuthProvider>
      </Router>



    </div>
  );
}

export default App;
