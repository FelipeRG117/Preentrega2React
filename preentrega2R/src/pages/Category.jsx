import ItemListContainer from '../Components/ItemListContainer/ItemListContainer'
import { useEffect, useState } from 'react';
import {getDocs, getFirestore, collection, getDoc, doc,query, where} from 'firebase/firestore'

import axios from "axios";
import { useParams } from 'react-router-dom';

function Category() {
    const[products, setProducts]=useState([]);
    const {categoryId} = useParams()

  
    useEffect(()=>{
      const db = getFirestore()
      const collectionRef = collection(db, "asd")
     const categoryQuery = query(collectionRef, where("category", "==", categoryId))
     getDocs(categoryQuery)
 .then((res)=>{
  console.log(res)
  const data = res.docs.map((doc)=>({
   
    id: doc.id,
    ...doc.data()
    
  }))
  setProducts(data)
  console.log(data)
 })
},[categoryId])

   
    
    return (
    <div>
    <ItemListContainer products={products}/> 
    </div>
  )
}

export default Category