import React from 'react';
import './Cart.css'

const Cart = (props) => {
    // const cart = props.cart; // option 1
    const { cart } = props; // option 2

    console.log(cart);
    let total = 0;
    let totalShipping = 0;

    for (const product of cart) {
        total = total + product.price;
        totalShipping = totalShipping + product.shipping;
    }
    const tax = total * 7 / 100;

    const grandTotal = total + totalShipping + tax;
    return (
        <div className='cart'>
            <h4>Order Summary</h4>
            <p>Selected Items: {cart.length}</p>
            <p>Total Price: ${total}</p>
            <p>Shipping Bill: ${totalShipping}</p>
            <p>Tax: ${tax}</p>
            <p>Grand Total: ${grandTotal} </p>
        </div>
    );
};

export default Cart;