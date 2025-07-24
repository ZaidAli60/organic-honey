// pages/CartPage.jsx
import React from 'react';
import { useCart } from '../../../context/CartContext';

export default function CartPage() {
  const { cartItems, removeFromCart, updateQuantity } = useCart();

  const total = cartItems.reduce((sum, item) => sum + item.quantity * parseFloat(item.price.replace('$', '')), 0);

  return (
    <div className="container my-5" style={{height:"50vh"}}>
      <h2 className="mb-4">🛒 Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="table-responsive">
          <table className="table align-middle">
            <thead>
              <tr>
                <th>Product</th>
                <th>Title</th>
                <th>Qty</th>
                <th>Price</th>
                <th>Total</th>
                <th />
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item, idx) => (
                <tr key={idx}>
                  <td><img src={item.image} alt={item.title} width={50} /></td>
                  <td>{item.title}</td>
                  <td>
                    <input
                      type="number"
                      value={item.quantity}
                      min={1}
                      className="form-control"
                      style={{ width: '70px' }}
                      onChange={(e) => updateQuantity(item.title, parseInt(e.target.value))}
                    />
                  </td>
                  <td>{item.price}</td>
                  <td>${(item.quantity * parseFloat(item.price.replace('$', ''))).toFixed(2)}</td>
                  <td>
                    <button onClick={() => removeFromCart(item.title)} className="btn btn-sm btn-danger">Remove</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <h4 className="text-end">Total: ${total.toFixed(2)}</h4>
          <div className="text-end">
            <button className="btn btn-success">Proceed to Checkout</button>
          </div>
        </div>
      )}
    </div>
  );
}
