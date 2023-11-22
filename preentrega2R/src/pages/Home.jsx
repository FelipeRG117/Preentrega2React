import ItemListContainer from '../Components/ItemListContainer/ItemListContainer'
import { useEffect, useState } from 'react';
import axios from "axios";

const Home = () => {
 const[products, setProducts]=useState([]);

useEffect(()=>{
axios.get('https://dummyjson.com/products/?limit=10')
.then((resp)=> setProducts(resp.data.products))
.catch((err)=> console.log(err))
},[])

console.log(products)
  return (
    <div> <ItemListContainer products={products}/> </div>
  )  
}

export default Home