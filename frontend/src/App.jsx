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


const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home /> } />

        <Route path="/about" element={   <ProtectedRoutes> <About /> </ProtectedRoutes> } />
        <Route path="/add" element={   <ProtectedRoutes> <Add /> </ProtectedRoutes> } />

        {/* Public Routes */}
        <Route path="/logout" element={<Logout/>} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
 
 <Footer/>
    </BrowserRouter>
  );
};


export function ProtectedRoutes({ children }) {
  const { token } = useAuth();
  return token ? children : <Navigate to="/login" />;
}

export default App;
