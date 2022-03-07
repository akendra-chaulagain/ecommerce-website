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
                  <div className="col-md-12">
                    <div className="sliderImg">
                      <img
                        className="img-fluid"
                        src="https://m.media-amazon.com/images/I/61jovjd+f9L._SX3000_.jpg"
                        alt="..."
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="carousel-item">
                <div className="row">
                  <div className="col-md-12">
                    <div className="sliderImg">
                      <img
                        className="img-fluid"
                        src="https://images.pexels.com/photos/8101520/pexels-photo-8101520.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                        alt="..."
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="carousel-item">
                <div className="row">
                  <div className="col-md-12">
                    <div className="sliderImg">
                      <img
                        className="img-fluid"
                        src="https://m.media-amazon.com/images/I/71qid7QFWJL._SX3000_.jpg"
                        alt="..."
                      />
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
