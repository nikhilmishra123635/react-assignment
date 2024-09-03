import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import PageOne from './components/PageOne';
import PageTwo from './components/PageTwo';
import PageThree from './components/PageThree';
import Footer from './components/Footer';

import './App.css';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/one" element={<PageOne />} />
        <Route path="/two" element={<PageTwo />} />
        <Route path="/three" element={<PageThree />} />
        <Route path="/" element={<Navigate to="/one" />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
