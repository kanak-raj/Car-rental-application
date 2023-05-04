import React, { Component } from "react";
import { connect } from "react-redux";
import { getCars } from "../../actions/carActions";
import PropTypes from "prop-types";
import CarItem from "./CarItem";

class CarList extends Component {
  componentDidMount() {
    this.props.getCars();
  }

  render() {
    const { cars } = this.props.car;
    return (
      <div className="container">
        <div className="container">
          <div className="col-sm-12">
            <h2 className="display-4 text-center">Our awesome cars</h2>
            {cars.map(car => (
              <CarItem key={car.id} car={car} />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

CarList.propTypes = {
  car: PropTypes.object.isRequired,
  getCars: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  car: state.car
});

export default connect(
  mapStateToProps,
  { getCars }
)(CarList);
