import React, { Component } from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import { getCar } from "../../actions/carActions";
import PropTypes from "prop-types";
import { connect } from "react-redux";

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

class CarDetails extends Component {
  componentDidMount() {
    const { carIdentifier } = this.props.match.params;
    this.props.getCar(carIdentifier, this.props.history);
  }

  render() {
    const { car } = this.props.car;
    //const img = "../../images/" + `${this.state.car.image1}`;
    const settings = {
      dots: false,
      pauseOnHover: false,
      arrows: false,
      infinite: true,
      speed: 1500,
      slidesToShow: 1,
      slidesToScroll: 1,
      adaptiveHeight: true,
      autoplay: true,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />
    };

    return (
      <div className="container">
        <div
          style={{
            justifyContent: "center",
            alignItems: "center",
            fontSize: "22px",
            marginTop: "5px",
            marginBottom: "5px"
          }}
        >
          <Link to={`/car/details/${car.carIdentifier}/rent`}>
            <button
              type="button"
              className="btn btn-lg btn-outline-dark "
              style={{}}
            >
              &nbsp;&nbsp;&nbsp;Rent now ! &nbsp;&nbsp;&nbsp;
            </button>
          </Link>
          <h3 style={{ marginTop: "10px" }}>
            Just {car.pricePerDay} zł per day !
          </h3>
        </div>
        <div className="row">
          <div className="col-sm" style={{ marginLeft: "10px" }}>
            <table className="table" style={{ fontSize: "18px" }}>
              <tbody>
                <tr>
                  <th scope="row">Brand</th>
                </tr>
                <tr>
                  <th scope="row">Model</th>
                </tr>
                <tr>
                  <th scope="row">Engine</th>
                </tr>
                <tr>
                  <th scope="row">Fuel</th>
                </tr>
                <tr>
                  <th scope="row">Transmission</th>
                </tr>
                <tr>
                  <th scope="row">Type of drive</th>
                </tr>
                <tr>
                  <th scope="row">Year of production</th>
                </tr>
                <tr>
                  <th scope="row">Milage</th>
                </tr>
                <tr>
                  <th scope="row">Seats</th>
                </tr>
                <tr>
                  <th scope="row">Trunk capacity</th>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="col-sm">
            <table
              className="table"
              style={{ fontSize: "18px", alignItems: "left" }}
            >
              <tbody>
                <tr>
                  <th scope="row">{car.carName}</th>
                </tr>
                <tr>
                  <th scope="row">{car.carModel}</th>
                </tr>
                <tr>
                  <th scope="row">{car.engineType}</th>
                </tr>
                <tr>
                  <th scope="row">{car.fuelType}</th>
                </tr>
                <tr>
                  <th scope="row">{car.transmission}</th>
                </tr>
                <tr>
                  <th scope="row">{car.typeOfDrive}</th>
                </tr>
                <tr>
                  <th scope="row">{car.yearOfProduction}</th>
                </tr>
                <tr>
                  <th scope="row">{car.milage} km</th>
                </tr>
                <tr>
                  <th scope="row">{car.noOfSeats}</th>
                </tr>
                <tr>
                  <th scope="row">{car.trunk} L</th>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div
          style={{
            justifyContent: "center",
            alignItems: "center",
            fontSize: "22px"
          }}
        >
          Check this out !
        </div>

        <Slider {...settings}>
          <div>
            <img
              className="d-block w-100"
              src={require("../../images/ferrarif50.jpg")}
              alt=""
            />
          </div>
          <div>
            <img
              className="d-block w-100"
              src={require("../../images/ferrariinterior.jpg")}
              alt=""
            />
          </div>
          <div>
            <img
              className="d-block w-100"
              src={require("../../images/ferrariEngine.jpg")}
              alt=""
            />
          </div>
        </Slider>
      </div>
    );
  }
}

CarDetails.propTypes = {
  getCar: PropTypes.func.isRequired,
  car: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  car: state.car
});

export default connect(
  mapStateToProps,
  { getCar }
)(CarDetails);
