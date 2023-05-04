import React, { Component } from "react";
import { injectStripe } from "react-stripe-elements";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";

const CURRENCY = "USD";

const successPayment = data => {
  alert("Payment succesful !");
};

const badPayment = data => {
  alert("Payment error !");
};

const fixAmount = amount => amount * 100;

const onToken = (amount, description) => token => {
  axios
    .post("/payment/charge", {
      description,
      source: token.id,
      currency: CURRENCY,
      amount: fixAmount(amount)
    })
    .then(successPayment)
    .catch(badPayment);
};

const Checkout = ({ amount }) => (
  <StripeCheckout
    stripeKey="pk_test_dpWQ1A2o3bDVW8vbb1QeBZyB"
    image="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/320px-React-icon.svg.png"
    locale="auto"
    name="Awesome Car Rental"
    description="The most realiable cars"
    amount={amount}
    token={this.submit}
    panelLabel="Rent for {{amount}}"
  />
);

class CheckoutForm extends Component {
  /*  constructor(props) {
    super(props);
    this.state = { complete: false };
    this.submit = this.submit.bind(this);
  }

  async submit(ev) {
    let { token } = await this.props.stripe.createToken({ name: "Name" });
    let { response } = await fetch("/payment/charge", {
      method: "POST",
      headers: { "Content-Type": "text/plain" },
      body: token.id
    });

    if (response.ok) {
      this.setState({ complete: true });
      this.props.history.push("/cars");
    }
  }*/

  onToken = token => {
    fetch("/payment/charge", {
      method: "POST",
      headers: { "Content-Type": "text/plain", amount: 9, token: token },
      body: JSON.stringify(token.id)
    });
  };

  render() {
    return (
      <StripeCheckout
        stripeKey="pk_test_dpWQ1A2o3bDVW8vbb1QeBZyB"
        image="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/320px-React-icon.svg.png"
        locale="auto"
        name="Awesome Car Rental"
        description="The most realiable cars"
        amount={900}
        token={this.onToken}
        currency="PLN"
        panelLabel="Rent for {{amount}}"
      />
    );
  }
}

export default injectStripe(CheckoutForm);
