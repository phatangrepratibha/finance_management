import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { About } from "./components/About";
import { Home } from "./components/Home";
import { Register } from "./components/Register"; 
import { Login } from "./components/Login";
import { useAuth } from "./store/auth";
import Logout from "./components/Logout";
import Add from "./components/Add";
import Footer from "./components/Footer";
import './App.css'; // Import your CSS file

const App = () => {
  return (
    <BrowserRouter>
      <div className="app-container">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<ProtectedRoutes><About /></ProtectedRoutes>} />
            <Route path="/add" element={<ProtectedRoutes><Add /></ProtectedRoutes>} />
            <Route path="/logout" element={<Logout/>} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export function ProtectedRoutes({ children }) {
  const { token } = useAuth();
  return token ? children : <Navigate to="/login" />;
}

export default App;