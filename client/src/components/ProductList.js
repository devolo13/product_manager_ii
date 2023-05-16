import React from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

const ProductList = (props) => {
  return (
    <div className='text-center'>
      <h2>All Products:</h2>
      {props.products.map((product, i) =>
        <Link to={`/product/${product._id}`} key={product._id} className='d-block'>{product.title}</Link>
      )}
    </div>
  )
}

export default ProductList;