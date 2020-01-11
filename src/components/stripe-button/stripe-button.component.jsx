import React from "react";
import StripeCheckout from "react-stripe-checkout";

import "./stripe-button.styles.scss";

const StripeButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = "pk_test_CtErr3dP2FadRAJepbhl8xIQ00Du2ZeEkN";

  const onToken = token => {
    console.log(token);
    alert("Payment Successful");
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="Crown Clothing Ltd."
      shipingAddress
      billingAddress
      image="https://sendeyo.com/up/d/f3eb2117da"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeButton;
