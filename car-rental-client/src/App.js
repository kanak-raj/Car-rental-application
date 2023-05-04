import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import CarList from "./components/Car/CarList";
import "./App.css";
import Header from "./components/layout/Header";
import AddCar from "./components/Car/AddCar";
import CarDetails from "./components/Car/CarDetails";
import CarPricing from "./components/Car/CarPricing";
import CarOrder from "./components/Car/CarOrder";
import PaymentProvider from "./components/Stripe/PaymentProvider";
import { Provider } from "react-redux";
import store from "./store";
import UpdateCar from "./components/Car/UpdateCar";

import jwt_decode from "jwt-decode";
import setJWTToken from "./securityUtils/setJWTToken";
import { SET_CURRENT_USER } from "./actions/types";
import { logout } from "./actions/securityActions";
import SecuredRoute from "./securityUtils/SecureRoute";
import Landing from "./components/layout/Landing";
import Register from "./components/UserManagement/Register";
import Login from "./components/UserManagement/Login";
import UserDetails from "./components/UserManagement/UserDetails";
import UpdateUserDetails from "./components/UserManagement/UpdateUserDetails";

const jwtToken = localStorage.jwtToken;

if (jwtToken) {
  setJWTToken(jwtToken);
  const decoded_jwtToken = jwt_decode(jwtToken);
  store.dispatch({
    type: SET_CURRENT_USER,
    payload: decoded_jwtToken
  });

  const currentTime = Date.now() / 1000;

  if (decoded_jwtToken.exp < currentTime) {
    store.dispatch(logout());
    window.location.href = "/";
  }
}

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App ">
            <Header />
            {
              //pub routes
            }
            <Route exact path="/" component={Landing} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/cars" component={CarList} />
            <Route exact path="/cars/pricing" component={CarPricing} />
            {
              //private routes
            }
            <Switch>
              <SecuredRoute exact path="/car/add" component={AddCar} />
              <SecuredRoute
                exact
                path="/car/update/:carIdentifier"
                component={UpdateCar}
              />
              <SecuredRoute
                exact
                path={"/car/details/:carIdentifier"}
                component={CarDetails}
              />
              <SecuredRoute
                exact
                path="/car/details/:carIdentifier/rent"
                component={CarOrder}
              />

              <SecuredRoute
                exact
                path="/car/details/:carIdentifier/rent/payment/charge"
                component={PaymentProvider}
              />

              <SecuredRoute
                exact
                path="/user/:id/details"
                component={UserDetails}
              />
              <SecuredRoute
                exact
                path="/user/:id/details/edit"
                component={UpdateUserDetails}
              />
            </Switch>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
