import React from 'react';
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom';
import './App.css'; 
import Home from './components/Home'
import Navbar from './components/Navbar';
import Exercises from './components/Exercises';
import UserProfile from './components/UserProfile';
import Workouts from './components/Workouts';
import Pricing from './components/Pricing';
import Settings from "./components/Settings";
import ProgramBuilder from "./components/ProgramBuilder"
import Header from './components/Header';

function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path='/home' element={<Home />}></Route>
      <Route path="/Exercises" element={<Exercises />} />
      <Route path="/Workouts" element={<Workouts />} />
      <Route path="/ProgramBuilder" element={<ProgramBuilder />} />
      <Route path="/UserProfile" element={<UserProfile />} />
      <Route path='/Pricing' element={<Pricing />} />
      <Route path='/Settings' element={<Settings />} />
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;