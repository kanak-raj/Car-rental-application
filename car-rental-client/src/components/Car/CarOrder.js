import React, { Component } from "react";
import axios from "axios";
import PaymentProvider from "../Stripe/PaymentProvider";
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

class CarOrder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "1",
      amount: "0"
    };
  }

  componentDidMount() {
    const { carIdentifier } = this.props.match.params;
    this.props.getCar(carIdentifier, this.props.history);
  }

  handleSubmit = event => {
    event.preventDefault();

    const car = {
      id: this.props.car.car.id,
      carName: this.props.car.car.carName,
      carModel: this.props.car.car.carModel,
      carIdentifier: this.props.car.car.carIdentifier
    };

    axios({
      headers: {
        "Content-Type": "application/json; charset=utf8"
      },
      method: "POST",
      url: `/api/car/${this.props.car.car.id}/${this.state.value}`,
      data: car
    })
      .then(res => {})
      .catch(error => {
        console.log(error);
      });
  };

  handleChange = event => {
    this.setState({ value: event.target.value });
    this.setState({
      amount:
        this.props.car.car.pricePerDay * this.state.value +
        this.props.car.car.pricePerDay
    });
  };

  render() {
    const { car } = this.props.car;
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
      <div className="card text-center">
        <div className="card-header">
          {" "}
          <h2>Your order looks like this</h2>
        </div>
        <div className="card-body">
          <div>
            <div
              className="container"
              style={{ justifyContent: "center", alignItems: "center" }}
            >
              <form onSubmit={this.handleSubmit}>
                <div className="row justify-content-md-center">
                  <div className="col-sm"> </div>
                  <div className="col-md-auto">
                    <table
                      className="table"
                      style={{ fontSize: "25px", fontWeight: "bold" }}
                    >
                      <tbody>
                        <tr>
                          <th scope="row">
                            {car.carName}&nbsp;
                            {car.carModel}
                            &nbsp; {car.engineType}
                          </th>
                        </tr>

                        <tr>
                          <th scope="row">
                            {car.typeOfDrive} drive type with {car.transmission}{" "}
                            gear box
                          </th>
                        </tr>
                        <tr>
                          <th scope="row">
                            Manufactured in {car.yearOfProduction}
                          </th>
                        </tr>
                        <tr>
                          <th scope="row">
                            {car.milage} km driven with this car
                          </th>
                        </tr>
                        <tr>
                          <th scope="row">
                            {car.noOfSeats} seats with {car.trunk} L trunk
                          </th>
                        </tr>
                        <tr>
                          <th scope="row">
                            {`${car.pricePerDay}` * `${this.state.value}`} ZŁ
                            you have to pay
                          </th>
                        </tr>
                        <tr>
                          <th scope="row">
                            Days of rent:{" "}
                            <input
                              type="number"
                              value={this.state.value}
                              onChange={this.handleChange}
                              min="1"
                            />
                          </th>
                        </tr>
                      </tbody>
                    </table>
                    <PaymentProvider />
                  </div>
                  <div className="col-sm"> </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

CarOrder.propTypes = {
  getCar: PropTypes.func.isRequired,
  car: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  car: state.car
});

export default connect(
  mapStateToProps,
  { getCar }
)(CarOrder);
