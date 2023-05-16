// import thing from place
import { useEffect, useState } from "react";
import ProductForm from "./ProductForm";
import ProductList from "./ProductList";
import axios from 'axios';
import { Route, Routes } from "react-router-dom";
// const ProductController = require('../controllers/product.controller');
// import {Routes, Route, Link} from "react-router-dom"

function Main() {
  const [products, setProducts] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(()=>{
    axios.get('http://localhost:8000/api/products')
      .then(res=>{
        setProducts(res.data);
        setLoaded(true);
      })
      .catch(err => console.log(err));
  },[]);

  return (
    <div className="container mt-3">
      <h1 className="text-center">Product Manager</h1>
      <ProductForm/>
      <hr />
      {loaded && <ProductList products={products}/>}
    </div>
  );
}

export default Main;
