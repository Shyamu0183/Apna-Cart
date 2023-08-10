import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar.js';
import ProductList from './components/ProductList.js';
import React, {useState} from 'react';
import Footer from './components/Footer';
import Product from './components/Product';
import AddItem from './components/AddItem';
function App() {
  const products = [
  {
price:66999,
name:"I Phone 13",
color:"Red",
quantity:0
  },
  {
    price:48999,
    name:"I Phone X",
    color:"White",
    quantity:0
  }    
]
const [productList , setProductList] = useState(products);
const [totalAmount , settotalAmount] = useState(0);
 
let increamentQuantity = (index) => {
  let newProductList = [...productList];
  let newtotalAmount =totalAmount;

  newProductList[index].quantity++;
  newtotalAmount+=newProductList[index].price;
  settotalAmount(newtotalAmount)
  setProductList(newProductList);
}
 let decreamentQuantity = (index) => {
  let newProductList = [...productList]
  let newtotalAmount =totalAmount;

 if(  newProductList[index].quantity > 0 ){
  newProductList[index].quantity--
  newtotalAmount-=newProductList[index].price
 }
  setProductList(newProductList);
}
const resetQuantity = () => {
  let newProductList = [...productList]
newProductList.map((products)=>{
  products.quantity=0;
})
setProductList(newProductList);
settotalAmount(0);
}
const removeitem=(index)=>{
  let newProductList = [...productList]
  let newtotalAmount =totalAmount;
newtotalAmount-=
newProductList[index].quantity*newProductList[index].price;
 newProductList.splice(index, 1);
 setProductList(newProductList);
settotalAmount(newtotalAmount)
}
const addItem = (name,price)=>{
let newProductList = [...productList];
newProductList.push({
  price:price,
  name:name,
  quantity:0
});
setProductList(newProductList);

}
  return (
    <>
    <Navbar/>
   <main className='container mt-5 '>
    <AddItem addItem={addItem}/>
     <ProductList productList={productList} increamentQuantity={increamentQuantity} decreamentQuantity={decreamentQuantity} removeitem={removeitem}/>
  
   </main> <Footer totalAmount={totalAmount} resetQuantity={resetQuantity}/>
    </>
  );
};
export default App;
