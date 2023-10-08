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
import DisplayNav from './Utils/DisplayNav'
import { ToastContainer, toast } from 'react-toastify';
import IsLogged from './Utils/IsLogged';

function App() {

  return (
    <div className="App">

      <Router>
        <AuthProvider>
          <DisplayNav />
          <IsLogged/>
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



      <ToastContainer
        position="top-center"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
}

export default App;
