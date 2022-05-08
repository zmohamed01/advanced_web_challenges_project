import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price ;
    const publishableKey = 'pk_test_51KxELjFanucfaMniYsejCe1avEv2l1Vab8yCSowt41KlBZYlkgTX9VugM8xez31vvHnd5Cf2kOmTTvxNd7Nfi33q00O0oijhoM';

    const onToken = token => {
        console.log(token);
        alert('Payment Succesful!');
    };

    return (
        <StripeCheckout
            label='Pay Now'
            name='University Of Surrey'
            billingAddress
            shippingAddress
            // image='https://www.freakyjolly.com/wp-content/uploads/2020/04/fj-logo.png'
            description={`Your total is GBP ${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton;