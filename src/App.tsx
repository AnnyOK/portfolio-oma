import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import './App.css';
import { Home } from './pages/home';

function App() {
  return (
      <Router>
        <Routes>
          <Route />
          <Route index element={<Home />} />


        </Routes>
      </Router>
    
  );
}

export default App;
