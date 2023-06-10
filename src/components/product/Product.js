import React from 'react';
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart} from '@fortawesome/free-solid-svg-icons'


const Product = (props) => {
 const {category,id,img,name,price,seller,ratingsCount,quantity} = props.product
 return (
  <div className='product'>
     <img src={img} alt="" />
     <div className="product-info">
         <h4 className='product-name'>{name}</h4>
         <h5 className='product-price'>Price: ${price}</h5>
         <p>Manufacture:  {seller}</p>
         <p>Ratings:  {ratingsCount}stars</p>
     </div>
     <button onClick={()=>props.addToHandleCart(props.product)} className='btn'>
        <p className='btn-text'>Add To Cart</p>
        <FontAwesomeIcon icon={faShoppingCart} />
     </button>
  </div>
 );
};

export default Product;