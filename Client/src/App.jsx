import { Navigate, Route, Routes } from 'react-router-dom';
import React from 'react';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Login from './Components/Login';
import Footer from './Components/Footer';
import Dashboard from './Components/Dashboard';
import About from './Pages/About';
import Atm from './Pages/Atm';
import SignUp from './Pages/SignUp';
import Help from './Pages/Help';
import './App.css'
import { Toaster } from 'react-hot-toast';
import ResetPass from './Pages/ResetPass';
import Setting from './Pages/Setting';

function App() {
  const token = localStorage.getItem('token');

  return (
    <>
    {/* <Navbar/> */}
    <Toaster/>
    <Routes>
      {/* <Route path="/" element={<Home/>} /> */}
      <Route path="/" element={<Home />}/>
      <Route path="/home" element={<Navigate to="/"/>}/>
      <Route path="/about" element={<About />}/>
      <Route path="/atm" element={<Atm/>} />
      <Route path="/help" element={<Help/>} />
      <Route path="/signup" element={<SignUp/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/reset_password" element={<ResetPass/>}/>
      <Route path="/dashboard" element={token ? <Dashboard /> : <Navigate to="/login"/>}/>
      <Route path="/dashboard/setting" element={token ? <Setting /> : <Navigate to="/login"/>}/>

      {/* <Route path="*" element={<Err />} /> */}
      
    </Routes>
    {/* <Footer/> */}
    </>
  )
}

export default App
