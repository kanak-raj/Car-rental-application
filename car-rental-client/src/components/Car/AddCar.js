import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { createCar } from "../../actions/carActions";
import classnames from "classnames";

class AddCar extends Component {
  constructor() {
    super();
    this.state = {
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
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();

    const car = {
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

    this.props.createCar(car, this.props.history);
  };

  render() {
    const { errors } = this.state;
    return (
      <div className="container" style={{ marginTop: 20 }}>
        <div className="row">
          <div className="col-sm" />
          <div className="col-md-8 m-auto">
            <h1 className="display-6 text-center">Add new car form</h1>
            <form onSubmit={this.handleSubmit}>
              <div className="form-row">
                <div className="form-group col-md-6">
                  <label htmlFor="brand">Car brand</label>
                  <input
                    type="text"
                    className={classnames("form-control ", {
                      "is-invalid": errors.carName
                    })}
                    id="brand"
                    name="carName"
                    placeholder="brand"
                    onChange={this.handleChange}
                  />
                  {errors.carName && (
                    <div className="invalid-feedback">{errors.carName}</div>
                  )}
                </div>
                <div className="form-group col-md-6">
                  <label htmlFor="model">Model</label>
                  <input
                    type="text"
                    className={classnames("form-control", {
                      "is-invalid": errors.carModel
                    })}
                    id="model"
                    name="carModel"
                    placeholder="model"
                    onChange={this.handleChange}
                  />
                  {errors.carModel && (
                    <div className="invalid-feedback">{errors.carModel}</div>
                  )}
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="carId">Car identifier</label>
                <input
                  type="text"
                  className={classnames("form-control", {
                    "is-invalid": errors.carIdentifier
                  })}
                  id="carId"
                  name="carIdentifier"
                  onChange={this.handleChange}
                />
                {errors.carIdentifier && (
                  <div className="invalid-feedback">{errors.carIdentifier}</div>
                )}
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
                    className={classnames("form-control", {
                      "is-invalid": errors.yearOfProduction
                    })}
                    id="year"
                    name="yearOfProduction"
                    placeholder="YYYY-MM-DD"
                    onChange={this.handleChange}
                  />
                  {errors.yearOfProduction && (
                    <div className="invalid-feedback">
                      {errors.yearOfProduction}
                    </div>
                  )}
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
                  onChange={this.handleChange}
                />
                {errors.pricePerDay && (
                  <div className="invalid-feedback">{errors.pricePerDay}</div>
                )}
              </div>
              <button type="submit" className="btn btn-primary">
                &nbsp; &nbsp; &nbsp; &nbsp;Add &nbsp; &nbsp; &nbsp;&nbsp;
              </button>
            </form>
          </div>
          <div className="col-sm" />
        </div>
      </div>
    );
  }
}

AddCar.propTypes = {
  createCar: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { createCar }
)(AddCar);
