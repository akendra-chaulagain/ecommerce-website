import React from "react";
import "./Slider.css";

const Slider = () => {
  return (
    <>
      <div className="container-fluid sliderContainer">
        <div className=" sliderContainer">
          <div
            id="carouselExampleControls"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active ">
                <div className="row">
                  <div className="col-md-6">
                    <div className="sliderImg">
                      <img src="../images/4.png" alt="..." />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="sliderData">
                      <h1>SUMMER SALE</h1>
                      <p>
                        Don't Compare Your Style! Get flat 20% for <br /> new
                        arrivals
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="row">
                  <div className="col-md-6">
                    <div className="sliderImg">
                      <img src="../images/2.png" alt="..." />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="sliderData">
                      <h1>WINTER SALE</h1>
                      <p>
                        Make Your Style Unique! Get flat 20% for <br /> new
                        arrivals
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="row">
                  <div className="col-md-6">
                    <div className="sliderImg">
                      <img src="../images/3.png" alt="..." />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="sliderData">
                      <h1> MONSOON LOVE</h1>
                      <p>
                        Make Your Own Style! Get flat 10% for <br /> new
                        visiters
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Slider;
