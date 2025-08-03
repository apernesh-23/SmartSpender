import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Herosection from './components/Herosection';
import FeatureSection from './components/FeatureSection';
import CTASection from './components/CTASection';
import ChartPreviewSection from './components/ChartPreviewSection';
import PrivateRoute from './components/PrivateRoute'; // 👈 wrapper
import Dashboard from './components/Dashboard';


import Login from './pages/Login';
import Register from './pages/Register';
import Footer from './components/Footer';

function App() {
 

  return (
    <div className="app-container">
      
        <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Herosection />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/dashboard"
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          />
        </Routes>
        <Dashboard/>
        <FeatureSection />
        <CTASection />
        <ChartPreviewSection />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
