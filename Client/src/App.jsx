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
import Error from './Pages/Error';
import './App.css'
import { Toaster } from 'react-hot-toast';

function App() {
  const token = localStorage.getItem('token');

  return (
    <>
    {/* <Navbar/> */}
    <Toaster/>
    <Routes>
      {/* <Route path="/" element={<Home/>} /> */}
      <Route path="/home" element={<Home />}/>
      <Route path="/home" element={<Navigate to="/"/>}/>
      <Route path="/about" element={<About />}/>
      <Route path="/atm" element={<Atm/>} />
      <Route path="/signup" element={<SignUp/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/dashboard" element={token ? <Dashboard /> : <Navigate to="/login"/>}/>
 
      {/* <Route path="*" element={<Err />} /> */}
      
    </Routes>
    {/* <Footer/> */}
    </>
  )
}

export default App
