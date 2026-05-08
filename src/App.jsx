// Main Application UI Component for Cart Simulation

import { useCart, PRODUCTS } from './useCart';

export default function App() {
  const { cart, addToCart, updateQty, total } = useCart();

  return (
    <div className="container">
      <h1>The Audio Store</h1>
      <h2>Products</h2>
      <div className="product-list">
        {PRODUCTS.map(p => (
          <div key={p.id} className="product-card">
            <span>{p.name} (&pound;{p.price.toFixed(2)})</span><br/>
            <button onClick={() => addToCart(p)}>Add to Cart</button>
          </div>
        ))}
      </div>

      <div className="cart-container">
        <h2>Your Basket</h2>
        {cart.length === 0 ? <p>No items yet.</p> : (
          <div className="cart-list">
            {cart.map(item => (
              <div key={item.id} className="product-item">
                <div>
                  <strong>{item.name}</strong><br/>
                  &pound;{item.price.toFixed(2)} each
                </div>
                <div className="quantity-controls">
                  <span>Sub: &pound;{ (item.price * item.qty).toFixed(2) }</span>
                  <button onClick={() => updateQty(item.id, -1)}>-</button>
                  {item.qty}
                  <button onClick={() => updateQty(item.id, 1)}>+</button>
                </div>
              </div>
            ))}
            <div className="total-section">Grand Total: &pound;{total.toFixed(2)}</div>
          </div>
        )}
      </div>
    </div>
  );
}