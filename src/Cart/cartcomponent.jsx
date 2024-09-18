import React, { useContext, useState } from 'react';
import { CartContext } from '../assets/context';
import { product } from '../assets/localdata';



const CartItem = () => {
  const { quantity, updateQuantity } = useContext(CartContext);  // Consume the context
  const [products]= useState(product)

  // Function to handle quantity change
  const handleQuantityChange = (event) => {
    const newQuantity = parseInt(event.target.value);
    updateQuantity(newQuantity);
  };

  return (
    <div style={styles.cartItemContainer}>
      <div style={styles.bookDetails}>
        <img src={products.products[0].image} alt="book" style={styles.bookImage} />
        <div>
          <h2>{products.products[0].title}</h2>
          <p>Details & Care</p>
          <p>{products.products[0].description}</p>
          <p>Sustainability</p>
        </div>
      </div>

          <div style={styles.quantityAndPrice}>
              <div style={styles.twotwo}>
                  <span><h3>Quantity :</h3></span><input
                      type="number"
                      value={quantity}
                      onChange={handleQuantityChange}
                      min="1"
                      style={styles.quantityInput}
                  />
              </div>
              <div style={styles.price}>${(quantity * parseInt(products.products[0].price)).toFixed(2)}</div>
              <button style={styles.removeButton}>REMOVE</button>
          </div>

      <div style={styles.totalSection}>
        <p style={styles.price}>Subtotal: ${(quantity * parseInt(products.products[0].price)).toFixed(2)}</p>
        <p>Shipping: FREE</p>
        <p style={styles.price}>Total: ${(quantity * parseInt(products.products[0].price)).toFixed(2)}</p>
      </div>
    </div>
  );
};

// Inline styles for quick setup (optional, feel free to replace with your own CSS)
const styles = {
  cartItemContainer: {
    display: 'flex',
    flexDirection: 'column',
    border: '1px solid #ddd',
    padding: '20px',
    margin: '20px 0',
  },
  bookDetails: {
    display: 'flex',
    marginBottom: '20px',
  },
  bookImage: {
    width: '100px',
    height: '150px',
    marginRight: '20px',
  },
  quantityAndPrice: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    border: '1px dotted black'
  },
  quantityInput: {
    width: '50px',
    padding: '5px',
    textAlign: 'center',
  },
  price: {
    fontSize: '18px',
    fontWeight: 'bold',
  },
  removeButton: {
    backgroundColor: 'orange',
    color: '#fff',
    border: 'none',
    padding: '5px 10px',
    cursor: 'pointer',
  },
  totalSection: {
    fontWeight:'normal'
  },
  twotwo :{
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
  }
};

export default CartItem;
