import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class UserDetails extends Component {
  render() {
    const { user } = this.props.security;
    return (
      <div>
        <h2>That's your profile</h2>
        <div className="container">
          <div className="card bg-light mb-2">
            <div className="row">
              <div className="card-body">
                <div className="container">
                  <div className="row justify-content-md-center">
                    <div className="col-md-auto">
                      <h3 className="card-title">
                        First name: {user.firstName}
                      </h3>
                      <h3 className="card-title">Last name: {user.lastName}</h3>
                      <h3 className="card-title">Username: {user.username}</h3>
                      <Link to={`/user/${user.id}/details/edit`}>
                        <button
                          type="button"
                          className="btn btn-lg btn-outline-dark "
                        >
                          &nbsp;&nbsp;&nbsp; Edit &nbsp;&nbsp;&nbsp;
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

UserDetails.propTypes = {
  security: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  security: state.security
});

export default connect(mapStateToProps)(UserDetails);
