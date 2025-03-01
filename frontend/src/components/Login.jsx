import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../store/auth.jsx";
import Spinner from "./Spinner.jsx";
import {  toast } from 'react-toastify';
import Lottie from "lottie-react"
import anim from "../animation/log.json"


export const Login = () => {
  const[user,setUser]=useState({
    email:"",
    password:""
  });


  const[Loading,setLoading]=useState(false)

  const navigate=useNavigate();
  const{storeTokenInLs,token}=useAuth();

  const  handleChange=(e)=>{
    setUser({...user,[e.target.name]:e.target.value})
  };

  const  handleSubmit=async(e)=>{
    e.preventDefault();

    try{
      setLoading(true)
        const response=await fetch("http://localhost:3000/login",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"   
            },
            body:JSON.stringify(user),
        });
        const responsedata=await response.json();
        console.log("res from server",responsedata);

        if(response.ok)
        {
            
            toast.success("Login Successfull!!!");
           storeTokenInLs(responsedata.token);
            setUser({ email: "", password: "" });
            console.log(responsedata);
            setLoading(false)
            navigate("/");
            
        }
        else
        {
          setLoading(false)
          toast.error(responsedata.extraDetails ? responsedata.extraDetails.join(", ") : responsedata.message);
        }
        

    }catch{
      setLoading(false)
        console.log(error);
        toast.error("Something went wrong. Please try again.");
    }

  }
  
  useEffect(()=>{
if(token)
{
    navigate("/")
}

  },[navigate])
    
  // <form onSubmit={handleSubmit}>
  //    value={user.email}
  //    onChange={handleChange}
 

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
                      <h2 className="card-title text-center mb-4">Login</h2>
                      <form onSubmit={handleSubmit}>
                       
                       

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
                            Login
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
