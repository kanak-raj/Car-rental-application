import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
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

class Landing extends Component {
  componentDidMount() {
    if (this.props.security.validToken) {
      this.props.history.push("/cars");
    }
  }
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
      <div className="landing">
        <div className="light-overlay landing-inner text-dark">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <h1 className="display-3 mb-2">Awesome Car Rental Tool</h1>
                <div style={{}}>
                  <Slider {...settings}>
                    <div>
                      <img
                        className="d-block w-100"
                        src={require("../../images/camaro.jpg")}
                        alt=""
                        style={{}}
                      />
                    </div>
                    <div>
                      <img
                        className="d-block w-100"
                        src={require("../../images/bmw.jpg")}
                        alt=""
                        style={{}}
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
                      />
                    </div>
                    <div>
                      <img
                        className="d-block w-100"
                        src={require("../../images/roys.jpg")}
                        alt=""
                        style={{}}
                      />
                    </div>
                    <div style={{ display: "inline-block" }}>
                      <img
                        className="d-block w-100  "
                        src={require("../../images/roys.jpg")}
                        alt=""
                        style={{}}
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
                        />
                      </div>
                    </div>
                  </Slider>
                </div>
                <p className="lead">
                  Create your account to become part of our awesome cars family
                  !
                </p>
                <hr />
                <Link
                  to="/register"
                  className="btn btn-lg btn-outline-dark mr-2"
                >
                  Sign Up
                </Link>
                <Link
                  to="/login"
                  className="btn btn-lg btn-outline-primary mr-2"
                >
                  Login
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Landing.propTypes = {
  security: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  security: state.security
});

export default connect(mapStateToProps)(Landing);
