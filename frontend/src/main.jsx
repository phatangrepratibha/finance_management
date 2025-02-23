import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { AuthProvider } from './store/auth.jsx'
import "@fortawesome/fontawesome-free/css/all.min.css";
import { ToastContainer, Bounce,Slide ,Flip} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

createRoot(document.getElementById('root')).render(
  <AuthProvider>
  <StrictMode>
    <App />
    <ToastContainer
position="top-center"
autoClose={1000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick={false}
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="dark"
transition={Flip}
// bodyClassName="toastBody"
style={{ fontSize: "15px" }}
/>
  </StrictMode>,
  </AuthProvider>
)
