import React from 'react';
import Product from './Product.js';
import AddItem from './AddItem.js';
export default function ProductList(props) {
  return (
    props.productList.map((product,i)=>{
      return <Product  product= {product} key={i} increamentQuantity = {props.increamentQuantity} index={i} decreamentQuantity={props.decreamentQuantity} removeitem={props.removeitem}/>
    })
  )
  }


