import React, { Component } from "react";
import { Elements, StripeProvider } from "react-stripe-elements";
import CheckoutForm from "./CheckoutForm";
import StripeCheckout from "react-stripe-checkout";

export default class PaymentProvider extends Component {
  render() {
    return (
      <StripeProvider apiKey="pk_test_dpWQ1A2o3bDVW8vbb1QeBZyB">
        <Elements>
          <CheckoutForm />
        </Elements>
      </StripeProvider>
    );
  }
}
