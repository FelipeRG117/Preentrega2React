import { useEffect, useState } from 'react'
import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer'
import axios from 'axios';
import { useParams } from 'react-router-dom';

useEffect
function Item() {
  const[product, setProduct]=useState({});
console.log(product)
  const {id} = useParams()

useEffect(()=>{
axios.get(`https://dummyjson.com/products/${id}`)
.then((resp)=> setProduct(resp.data))
.catch((err)=> console.log(err))
},[id])

  return (
    <div ><ItemDetailContainer product={product}/> </div>
    
  )
}

export default Item