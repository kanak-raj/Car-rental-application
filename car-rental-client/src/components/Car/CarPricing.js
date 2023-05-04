import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getCars } from "../../actions/carActions";
import PropTypes from "prop-types";

class CarPricing extends Component {
  componentDidMount() {
    this.props.getCars();
  }

  render() {
    const { cars } = this.props.car;
    return (
      <div className="d-flex">
        <table
          className="table table-striped table-light"
          style={{
            marginTop: "10px",
            fontSize: "24px"
          }}
        >
          <thead>
            <tr>
              <th scope="col">Car</th>
              <th scope="col">Price per day</th>
              <th scope="col">Just rent</th>
            </tr>
          </thead>
          <tbody>
            {cars.map(car => (
              <tr key={car.id}>
                <td>
                  {car.carName}&nbsp;{car.carModel}&nbsp;{car.engineType}
                </td>
                <td>{car.pricePerDay} zł</td>
                <td>
                  <Link
                    to={`/car/details/${car.carIdentifier}`}
                    style={{ color: "black" }}
                  >
                    Rent here
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

CarPricing.propTypes = {
  car: PropTypes.object.isRequired,
  getCars: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  car: state.car
});

export default connect(
  mapStateToProps,
  { getCars }
)(CarPricing);
