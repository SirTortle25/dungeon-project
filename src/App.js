import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Navbar from './components/Navbar'
import Home from './pages/Home'
import Test from './pages/Test'

import './App.css';

function App() {
    
  return (
    <div className="flex flex-col h-screen relative">
        <Navbar />
        <Router>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/test" element={<Test/>} />
            </Routes>
        </Router>
    </div>
  );
}

export default App;
