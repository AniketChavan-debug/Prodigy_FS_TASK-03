import React from 'react';

const Cart = ({ cartItems, removeFromCart }) => {
    const total = cartItems.reduce((acc, item) => acc + item.price, 0);

    return (
        <div>
            <h2>Shopping Cart</h2>
            {cartItems.length === 0 ? (
                <p>Your cart is empty</p>
            ) : (
                <div>
                    <ul>
                        {cartItems.map(item => (
                            <li key={item._id}>
                                {item.name} - ${item.price}
                                <button onClick={() => removeFromCart(item._id)}>Remove</button>
                            </li>
                        ))}
                    </ul>
                    <h3>Total: ${total.toFixed(2)}</h3>
                </div>
            )}
        </div>
    );
};

export default Cart;
