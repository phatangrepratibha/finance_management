import { useEffect, useState } from "react";
import { useAuth } from "../store/auth.jsx";
import { useNavigate } from "react-router-dom";
import Spinner from "./Spinner.jsx";
import {  toast } from 'react-toastify';
import Lottie from "lottie-react"
import anim from "../animation/log.json"

export const Register = () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
  });

  const[Loading,setLoading]=useState(false)
  const navigate=useNavigate();

const{storeTokenInLs,token}=useAuth();

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit =async (e) => {
    e.preventDefault();
    

    try {
      setLoading(true)
      const response=await fetch("http://localhost:3000/register",{
          method:"POST",
          headers:{
            "Content-Type":"application/json"
          },
          body:JSON.stringify(user),
      });
      const responsedata=await response.json();
      console.log(responsedata);
      if(response.ok)
      {
           
        toast.success("Registration Successfull!!!");
            storeTokenInLs(responsedata.token);
           setUser({username:"",email:"",phone:"",password:""});
           console.log(responsedata)
           setLoading(false)
           navigate("/login")
           
  
      }else
      {
        toast.error(responsedata.extraDetails ? responsedata.extraDetails.join(", ") : responsedata.message);
      }

      
    } catch (error) {
      setLoading(false)
       console.log(error);
       toast.error("Something went wrong. Please try again.");
       
       
    }
  };


  useEffect(()=>{
if(token)
{
    navigate("/")
}

  },[navigate])
 

  return (
    <>
      <div className="regcontainer text-center">
        {Loading && <Spinner/>}
        <div className="row">
          {/* Image Section */}
          <div className="col">
          <Lottie animationData={anim} loop={true} style={{width:"500px",height:"300px", marginLeft:"60px"}} />
          </div>

          {/* Form Section */}
          <div className="col">
            <div className="container ">
              <div className="row justify-content-center">
                <div className="col-md-10">
                  <div className="card shadow">
                    <div className="card-body">
                      <h2 className="card-title text-center mb-4">Register</h2>
                      <form onSubmit={handleSubmit}>
                        {/* Username Field */}
                        <div className="mb-3">
                          <label htmlFor="name" className="form-label">
                            Username
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            value={user.username}
                            name="username"
                            placeholder="Enter your username"
                            onChange={handleChange}
                            required
                          />
                        </div>

                        {/* Email Field */}
                        <div className="mb-3">
                          <label htmlFor="email" className="form-label">
                            Email
                          </label>
                          <input
                            type="email"
                            className="form-control"
                            value={user.email}
                            name="email"
                            placeholder="Enter your email"
                            onChange={handleChange}
                            required
                          />
                        </div>

                      
                        {/* Password Field */}
                        <div className="mb-3">
                          <label htmlFor="password" className="form-label">
                            Password
                          </label>
                          <input
                            type="password"
                            className="form-control"
                            value={user.password}
                            name="password"
                            placeholder="Enter your password"
                            onChange={handleChange}
                            required
                          />
                        </div>

                        {/* Submit Button */}
                        <div className="d-grid">
                          <button type="submit" className="btn btn-dark">
                         Sign UP
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
