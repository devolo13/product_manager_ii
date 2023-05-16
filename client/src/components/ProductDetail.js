import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const Detail = (props) => {
  const [product, setProduct] = useState({});
  const { id } = useParams();

  useEffect(() => {
    axios
      .get('http://localhost:8000/api/product/' + id)
      .then((res) => setProduct(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className='mt-3 text-center'>
      <h4 className='mb-3'>{product.title}</h4>
      <p className='mb-2'>Price: ${product.price}</p>
      <p className='mb-2'>Description: {product.description}</p>
    </div>
  );
};

export default Detail;
