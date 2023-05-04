import React, { Component } from "react";
import Slider from "react-slick";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "transparent",
        marginRight: "50px"
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "transparent",
        marginLeft: "50px",
        zIndex: "1",
        fontSize: "20px"
      }}
      onClick={onClick}
    />
  );
}

export default class Home extends Component {
  render() {
    const settings = {
      dots: false,
      pauseOnHover: false,
      arrows: true,
      infinite: true,
      speed: 1500,
      slidesToShow: 1,
      slidesToScroll: 1,
      adaptiveHeight: true,
      autoplay: false,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />
    };
    return (
      <div style={{ backgroundColor: "black" }}>
        <Slider {...settings}>
          <div>
            <img
              className="d-block w-100"
              src={require("../../images/camaro.jpg")}
              alt=""
              style={{ height: "93.2vh" }}
            />
          </div>
          <div>
            <img
              className="d-block w-100"
              src={require("../../images/bmw.jpg")}
              alt=""
              style={{ height: "93.2vh" }}
            />

            <p
              style={{
                color: "white",
                fontSize: "26px",
                fontWeight: "bold",
                position: "absolute",
                top: "80%",
                left: "50%",
                transform: "translate(-50%, -50%)"
              }}
            >
              ELOELOELOE2222
            </p>
          </div>
          <div>
            <img
              className="d-block w-100"
              src={require("../../images/roys.jpg")}
              alt=""
              style={{ height: "93.2vh" }}
            />
          </div>
          <div style={{ display: "inline-block" }}>
            <img
              className="d-block w-100  "
              src={require("../../images/roys.jpg")}
              alt=""
              style={{ height: "93.2vh" }}
            />
            <div
              style={{
                position: "absolute",
                top: "80%",
                left: "50%",
                transform: "translate(-50%, -50%)"
              }}
            >
              <p
                style={{
                  color: "white",
                  fontSize: "26px",
                  fontWeight: "bold"
                }}
              >
                ELOELOELOE
              </p>
            </div>
          </div>
        </Slider>
      </div>
    );
  }
}
