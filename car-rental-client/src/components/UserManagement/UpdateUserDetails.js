import React, { Component } from "react";
import { createUser } from "../../actions/securityActions";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import classnames from "classnames";

class UpdateUserDetails extends Component {
  constructor() {
    super();
    this.state = {
      id: "",
      firstName: "",
      lastName: "",
      username: "",
      errors: {}
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
    const { id, firstName, lastName, username } = nextProps.security.user;

    this.setState({
      id,
      firstName,
      lastName,
      username
    });
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();

    const updateUser = {
      id: this.state.id,
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      username: this.state.username
    };
    this.props.createUser(updateUser, this.props.history);
  };

  render() {
    const { errors } = this.state;
    return <div>ELO{this.state.username}</div>;
  }
}

UpdateUserDetails.propTypes = {
  createUser: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  user: state.security.user,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { createUser }
)(UpdateUserDetails);
