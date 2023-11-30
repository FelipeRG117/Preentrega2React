import ItemListContainer from '../Components/ItemListContainer/ItemListContainer'
import { useEffect, useState } from 'react';
import axios from "axios";
import { useParams } from 'react-router-dom';

function Category() {
    const[products, setProducts]=useState([]);
    const {categoryId} = useParams()

  
    useEffect(()=>{
    axios.get(`https://dummyjson.com/products/category/${categoryId}`)
    .then((resp)=> setProducts(resp.data.products))
    .catch((err)=> console.log(err))
    },[categoryId])
    
    return (
    <div>
    <ItemListContainer products={products}/> 
    </div>
  )
}

export default Category