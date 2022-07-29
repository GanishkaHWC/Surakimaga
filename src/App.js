
import './App.css';
import header from './components/header';
import Navbarcomp from './components/Navbarcomp';
import {Route, Routes, BrowserRouter as Router} from "react-router-dom";
import Requests from './pages/Requests';
import Dashboard from './pages/Dashboard';
import Complaints from './pages/Complaints';
import Account from './pages/Account';

function App() {
  return (
    <>
   
    <Router>
    <Navbarcomp />
        <Routes>
                        <Route exact path="/" element={<Dashboard />}  />
                        <Route path="/Requests" element={<Requests/>}/>
                        <Route path="/Complaints" element={<Complaints />} />
                        <Route path="/Profile" element={<Account />} />
        </Routes>
      
    </Router>
    </>
  );
}

export default App;
