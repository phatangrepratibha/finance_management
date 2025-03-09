import React from "react";
import Lottie from "lottie-react";
import anim from "../animation/home.json";
import { FaChartLine, FaWallet, FaHandshake, FaCreditCard } from "react-icons/fa";
import { useAuth } from "../store/auth";
import anim1 from "../animation/a2.json"
import { NavLink } from "react-router-dom";


export const Home = () => {

  const{user}=useAuth();
  return (
    <>
      {/* Carousel Section */}
      <div
        id="carouselExampleIndicators"
        className="carousel slide carousel-container">
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1" ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="b1.jpg" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="b4.jpg" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="b3.jpg" className="d-block w-100" alt="..." />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <hr />

      {/* Our Services Heading */}
      <center>
        <h2 className="service">Our <span style={{color:"purple"}}>Services</span></h2><hr className="border1"/>
      </center>

      {/* Four Cards Section with Icons */}
      <div className="card-container1">
        <div className="card1">
          <i className="fa fa-cogs"></i> 
          <h3>Service 1</h3>
          <p>This is the content of card 1. It has a soft yellow background.</p>
        </div>
        <div className="card1">
          <i className="fa fa-users"></i>
          <h3>Service 2</h3>
          <p>This is the content of card 2. It has a soft yellow background.</p>
        </div>
        <div className="card1">
          <i className="fa fa-chart-line"></i> 
          <h3>Service 3</h3>
          <p>This is the content of card 3. It has a soft yellow background.</p>
        </div>
        <div className="card1">
          <i className="fa fa-handshake"></i> 
          <h3>Service 4</h3>
          <p>This is the content of card 4. It has a soft yellow background.</p>
        </div>
      </div>



      <div className="about-us">
  <div className="about-us-container">
    <div className="about-text">
    

     <p>
      We are passionate about helping individuals achieve financial freedom and make informed decisions about their money. Whether you're just starting your financial journey or looking to optimize your wealth, we provide valuable insights, tools, and resources tailored to your needs.
    
      We aim to empower you with practical financial knowledge, guiding you toward smart budgeting, saving, investing, and wealth-building strategies. Our goal is to help you gain control over your finances and create a secure future.
      Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
      </p> <hr style={{color:"blue"}}/>
    </div>
    <div className="about-image">
    <img src="sim.jpg" alt="" />
    </div>
  </div>
  </div>


  <div className="about-us">
  <div className="about-us-container">
    
    <div className="about-image">
     <img src="home.jpg" alt="" />
    </div>

    <div className="about-text">
 <hr/>

     <p>
      We are passionate about helping individuals achieve financial freedom and make informed decisions about their money. Whether you're just starting your financial journey or looking to optimize your wealth, we provide valuable insights, tools, and resources tailored to your needs.
    
      We aim to empower you with practical financial knowledge, guiding you toward smart budgeting, saving, investing, and wealth-building strategies. Our goal is to help you gain control over your finances and create a secure future.
      Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
      </p> 
    </div>
  </div>
  </div>




<div className="about-us">
  <div className="about-us-container">
    <div className="about-text">
      <h2>About Us</h2><hr/>
     <b> <p>Welcome,{user?`${user.username}!! 
              `:`to our webiste`
                }</p></b>
      <p>
      We are passionate about helping individuals achieve financial freedom and make informed decisions about their money. Whether you're just starting your financial journey or looking to optimize your wealth, we provide valuable insights, tools, and resources tailored to your needs.</p>
      <p>
      We aim to empower you with practical financial knowledge, guiding you toward smart budgeting, saving, investing, and wealth-building strategies. Our goal is to help you gain control over your finances and create a secure future.
      </p>
    </div>
    <div className="about-image">
      <Lottie animationData={anim1} loop={true} style={{width:"500px"}}/>
    </div>
  </div>
</div>

<section className="features-section">
        <h2>Why Choose Us?</h2>
        <div className="features-grid">
          <div className="feature-card">
            <FaChartLine className="feature-icon" />
            <h3>Track Spending</h3>
            <p>
              Monitor your expenses and income with easy-to-read charts and
              reports.
            </p>
          </div>
          <div className="feature-card">
            <FaWallet className="feature-icon" />
            <h3>Budgeting Tools</h3>
            <p>
              Create and manage budgets to stay on top of your financial goals.
            </p>
          </div>
          <div className="feature-card">
            <FaHandshake className="feature-icon" />
            <h3>Investment Advice</h3>
            <p>
              Get expert advice to grow your wealth and make smart investment
              decisions.
            </p>
          </div>
          <div className="feature-card">
            <FaCreditCard className="feature-icon" />
            <h3>Secure Transactions</h3>
            <p>
              Enjoy secure and seamless transactions with our advanced
              encryption technology.
            </p>
          </div>
        </div>
      </section>

<section className="cta-section">
        <div className="cta-content">
          <h2>Ready to Take the Next Step?</h2>
          <p>
            Join thousands of users who are already managing their finances
            smarter.
          </p>
          <NavLink to="/register" className="btn btn-dark">Register Now</NavLink>
        </div>
      </section>

      <section style={{ marginTop: "80px", padding: "40px", backgroundColor: "black", color: "white", textAlign: "center" }}>
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          {[
            { number: "500+", label: "Happy Clients" },
            { number: "300+", label: "Projects Delivered" },
            { number: "100+", label: "Team Members" },
            { number: "24/7", label: "Support" },
          ].map((item, index) => (
            <div key={index} style={{ borderRight: index !== 3 ? "2px solid #fff" : "none", padding: "0 20px" }}>
              <h2 style={{ fontSize: "2.5rem", margin: "0" }}>{item.number}</h2>
              <p style={{ fontSize: "1.2rem" }}>{item.label}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};