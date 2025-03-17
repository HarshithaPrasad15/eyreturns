import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import SignUp from './pages/SignUp';

function App() {
  return (
       
    <Router>
    <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/SignUp" element={<SignUp />} />
    </Routes>
</Router>
  )
      
}

export default App;