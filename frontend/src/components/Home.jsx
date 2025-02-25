import React from "react";
import Lottie from "lottie-react";
import anim from "../animation/home.json";


export const Home = () => {
  return (
    <>
      {/* Carousel Section */}
      <div
        id="carouselExampleIndicators"
        className="carousel slide carousel-container"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
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
            <img src="h3.jpg" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="h1.jpg" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="h2.jpg" className="d-block w-100" alt="..." />
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
        <h2 className="service">Our Services</h2>
      </center>

      {/* Four Cards Section with Icons */}
      <div className="card-container">
        <div className="card">
          <i className="fa fa-cogs"></i> {/* Font Awesome icon */}
          <h3>Service 1</h3>
          <p>This is the content of card 1. It has a soft yellow background.</p>
        </div>
        <div className="card">
          <i className="fa fa-users"></i> {/* Font Awesome icon */}
          <h3>Service 2</h3>
          <p>This is the content of card 2. It has a soft yellow background.</p>
        </div>
        <div className="card">
          <i className="fa fa-chart-line"></i> {/* Font Awesome icon */}
          <h3>Service 3</h3>
          <p>This is the content of card 3. It has a soft yellow background.</p>
        </div>
        <div className="card">
          <i className="fa fa-handshake"></i> {/* Font Awesome icon */}
          <h3>Service 4</h3>
          <p>This is the content of card 4. It has a soft yellow background.</p>
        </div>
      </div>
    </>
  );
};