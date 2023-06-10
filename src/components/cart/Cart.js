import React from 'react';

const Cart = ({cart}) => {
 return (
  <div>
     <h3>Order Summary</h3>
     <p>Selected Items:{cart.length}</p>
     <p>Total price:</p>
     <p>Total shoping Charge:</p>
     <p>Tax:</p>
     <h4>Grand Total: </h4>
     <div>
      <button>Cart</button><br />
      <button>Review Order</button>
     </div>
  </div>
 );
};

export default Cart;