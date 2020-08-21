import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';


function App() {
  const names =['Sakib Khan','osman','Tanisha','Sorder']
  const product = [
    {name: 'PhotoShop', price :'$99.99'},
    {name: 'Illustrator', price :'$80.99'},
    {name: 'Pdf reader', price :'$1.99'},
    {name: 'After effect', price :'$34.99'}
  ]

  const namesGuy = names.map(names => names);
  console.log(namesGuy);
  
  return ( 
    <div>
      <header>
        <p>Hi I am using react</p>
        <Users></Users>
        <Counter></Counter>
        <ul>
          {
            names.map(names =><li>{names}</li>)
          }
          
        </ul>
        
          {
            product.map(pd => <Product product={pd}></Product>)
          }
          

      </header>
    </div>
  );
}
function Users(){
  const someStyle = {
    fontSize:'20px',
    margin: '50px'
 
}
const [count, setCount] = useState([])
useEffect(( )=> {
  fetch (`https://jsonplaceholder.typicode.com/users`)
  .then(res => res.json())
  .then (user => setCount(user))
}, [] )

  return (
    <div style= {someStyle}>
      <h3>Dynamic Users : {count.length} </h3>
        <ul>
        {
          count.map(user => <li>{user.name}</li>)
        }
        </ul>
        {
          console.log(count)
        }
        
    </div>
  )
}
function Counter(){
  const someStyle = {
    fontSize:'20px',
    margin: '50px'
}
  const [count, setCount] = useState(10)
  return (
   <div style = {someStyle}>
    <h1> Count: {count} </h1>
    <button onClick={() => {setCount (count - 1)}}> Decrease </button>
    <button onClick={() => {setCount (count + 1)}}>Increase</button>
   </div>
  )
}
function Product (props){
  const productStyle = {
    border :'1px solid gray',
    borderRadius :'5px',
    backgroundColor :'tomato',
    height:'200px',
    width:'200px',
    margin:'10px',
    float:'left',
   
    textAlign :'center'
  }
  const {name, price} = props.product;
  console.log(name , price)
  return (
    <div style ={productStyle}>
      <h3>Product Name:{name}</h3>
      <h5>Price:{price} </h5>
      <button>Buy Now</button>
    </div>
  )
  
}

export default App;
