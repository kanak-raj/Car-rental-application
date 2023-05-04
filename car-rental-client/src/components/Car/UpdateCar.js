import React, { Component } from "react";
import { getCar, createCar } from "../../actions/carActions";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import classnames from "classnames";

class UpdateCar extends Component {
  constructor() {
    super();
    this.state = {
      id: "",
      carName: "",
      carModel: "",
      carIdentifier: "",
      engineType: "",
      fuelType: "Petrol",
      typeOfDrive: "RWD",
      transmission: "Automatic",
      milage: "",
      rating: "",
      yearOfProduction: "",
      isRented: "no",
      noOfSeats: "",
      trunk: "",
      pricePerDay: "",
      errors: {}
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
    const {
      id,
      carName,
      carModel,
      carIdentifier,
      engineType,
      fuelType,
      typeOfDrive,
      transmission,
      milage,
      rating,
      yearOfProduction,
      isRented,
      noOfSeats,
      trunk,
      pricePerDay
    } = nextProps.car;

    this.setState({
      id,
      carName,
      carModel,
      carIdentifier,
      engineType,
      fuelType,
      typeOfDrive,
      transmission,
      milage,
      rating,
      yearOfProduction,
      isRented,
      noOfSeats,
      trunk,
      pricePerDay
    });
  }
  componentDidMount() {
    const { carIdentifier } = this.props.match.params;
    this.props.getCar(carIdentifier, this.props.history);
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();

    const updateCar = {
      id: this.state.id,
      carName: this.state.carName,
      carModel: this.state.carModel,
      carIdentifier: this.state.carIdentifier,
      engineType: this.state.engineType,
      fuelType: this.state.fuelType,
      typeOfDrive: this.state.typeOfDrive,
      transmission: this.state.transmission,
      milage: this.state.milage,
      rating: this.state.rating,
      yearOfProduction: this.state.yearOfProduction,
      isRented: this.state.isRented,
      noOfSeats: this.state.noOfSeats,
      trunk: this.state.trunk,
      pricePerDay: this.state.pricePerDay
    };

    this.props.createCar(updateCar, this.props.history);
  };

  render() {
    const { errors } = this.state;
    return (
      <div className="container" style={{ marginTop: 20 }}>
        <div className="row">
          <div className="col-sm" />
          <div className="col-md-8 m-auto">
            <h1 className="display-6 text-center">Update car</h1>
            <form onSubmit={this.handleSubmit}>
              <div className="form-row">
                <div className="form-group col-md-6">
                  <label htmlFor="brand">Car brand</label>
                  <input
                    type="text"
                    className="form-control "
                    id="brand"
                    name="carName"
                    placeholder="brand"
                    value={this.state.carName}
                    disabled
                  />
                </div>
                <div className="form-group col-md-6">
                  <label htmlFor="model">Model</label>
                  <input
                    type="text"
                    className="form-control"
                    id="model"
                    name="carModel"
                    placeholder="model"
                    value={this.state.carModel}
                    disabled
                  />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="carId">Car identifier</label>
                <input
                  type="text"
                  className="form-control"
                  id="carId"
                  name="carIdentifier"
                  value={this.state.carIdentifier}
                  disabled
                />
              </div>
              <div className="form-row">
                <div className="form-group col-md-3">
                  <label htmlFor="engine">engine</label>
                  <input
                    type="text"
                    className={classnames("form-control", {
                      "is-invalid": errors.engineType
                    })}
                    id="engine"
                    name="engineType"
                    value={this.state.engineType}
                    onChange={this.handleChange}
                  />
                  {errors.engineType && (
                    <div className="invalid-feedback">{errors.engineType}</div>
                  )}
                </div>
                <div className="form-group col-md-4">
                  <label htmlFor="drive">type of drive</label>
                  <select
                    id="drive"
                    className="form-control"
                    name="typeOfDrive"
                    value={this.state.typeOfDrive}
                    onChange={this.handleChange}
                  >
                    <option defaultValue>RWD</option>
                    <option>FWD</option>
                    <option>AWD</option>
                  </select>
                </div>

                <div className="form-group col-md-5">
                  <label htmlFor="fuel">fuel type</label>
                  <select
                    id="fuel"
                    className="form-control"
                    name="fuelType"
                    value={this.state.fuelType}
                    onChange={this.handleChange}
                  >
                    <option defaultValue>Petrol</option>
                    <option>Diesel</option>
                    <option>Gas</option>
                    <option>Electricity</option>
                  </select>
                </div>
              </div>
              <div className="form-row">
                <div className="form-group col-md-6">
                  <label htmlFor="trans">transmission</label>
                  <select
                    id="trans"
                    className="form-control"
                    name="transmission"
                    value={this.state.transmission}
                    onChange={this.handleChange}
                  >
                    <option defaultValue>Automatic</option>
                    <option>Manual</option>
                    <option>Sequential</option>
                  </select>
                </div>
                <div className="form-group col-md-6">
                  <label htmlFor="milage">milage</label>
                  <input
                    type="number"
                    min="0"
                    max="9999999"
                    className={classnames("form-control", {
                      "is-invalid": errors.milage
                    })}
                    id="milage"
                    name="milage"
                    size="20"
                    value={this.state.milage}
                    onChange={this.handleChange}
                  />
                  {errors.milage && (
                    <div className="invalid-feedback">{errors.milage}</div>
                  )}
                </div>
              </div>

              <div className="form-row">
                <div className="form-group col-md-6">
                  <label htmlFor="year">Number of seats</label>
                  <input
                    type="number"
                    className={classnames("form-control", {
                      "is-invalid": errors.noOfSeats
                    })}
                    id="seats"
                    name="noOfSeats"
                    placeholder=""
                    value={this.state.noOfSeats}
                    onChange={this.handleChange}
                  />
                  {errors.noOfSeats && (
                    <div className="invalid-feedback">{errors.noOfSeats}</div>
                  )}
                </div>
                <div className="form-group col-md-6">
                  <label htmlFor="rating">Trunk capacity</label>
                  <input
                    type="number"
                    min="0"
                    max="10000"
                    className={classnames("form-control", {
                      "is-invalid": errors.trunk
                    })}
                    id="trunk"
                    name="trunk"
                    placeholder="Liters"
                    value={this.state.trunk}
                    onChange={this.handleChange}
                  />
                  {errors.trunk && (
                    <div className="invalid-feedback">{errors.trunk}</div>
                  )}
                </div>
              </div>
              <div className="form-row">
                <div className="form-group col-md-6">
                  <label htmlFor="year">Production year</label>
                  <input
                    type="date"
                    className="form-control"
                    id="year"
                    name="yearOfProduction"
                    placeholder="YYYY-MM-DD"
                    value={this.state.yearOfProduction}
                    disabled
                  />
                </div>
                <div className="form-group col-md-6">
                  <label htmlFor="rating">rating</label>
                  <input
                    type="number"
                    min="0"
                    max="10"
                    className={classnames("form-control", {
                      "is-invalid": errors.rating
                    })}
                    id="rating"
                    name="rating"
                    placeholder="0-10"
                    value={this.state.rating}
                    onChange={this.handleChange}
                  />
                  {errors.rating && (
                    <div className="invalid-feedback">{errors.rating}</div>
                  )}
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="carId">Price per day</label>
                <input
                  type="number"
                  className={classnames("form-control", {
                    "is-invalid": errors.pricePerDay
                  })}
                  id="pricePerDay"
                  name="pricePerDay"
                  placeholder="in ZŁ"
                  value={this.state.pricePerDay}
                  onChange={this.handleChange}
                />
                {errors.pricePerDay && (
                  <div className="invalid-feedback">{errors.pricePerDay}</div>
                )}
              </div>
              <button type="submit" className="btn btn-primary">
                &nbsp; &nbsp; &nbsp; &nbsp; Update &nbsp; &nbsp; &nbsp;&nbsp;
              </button>
            </form>
          </div>
          <div className="col-sm" />
        </div>
      </div>
    );
  }
}

UpdateCar.propTypes = {
  getCar: PropTypes.func.isRequired,
  createCar: PropTypes.func.isRequired,
  car: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  car: state.car.car,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { getCar, createCar }
)(UpdateCar);
