import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage.jsx';
import DestinationsPage from './pages/DestinationsPage.jsx';
import HotelsPage from './pages/HotelsPage.jsx';
import PackagesPage from './pages/PackagesPage.jsx';
import ContactPage from './pages/ContactPage.jsx';

const App = () => {
  return (
    <div className="te-app-shell" id="te-app-shell">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/destinations" element={<DestinationsPage />} />
        <Route path="/hotels" element={<HotelsPage />} />
        <Route path="/packages" element={<PackagesPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </div>
  );
};

export default App;


