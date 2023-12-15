import ItemListContainer from '../Components/ItemListContainer/ItemListContainer'
import { useEffect, useState } from 'react';
import {getDocs, getFirestore, collection} from 'firebase/firestore'

const Home = () => {
 const[products, setProducts]=useState([]);

useEffect(()=>{
  const db = getFirestore()
 const collectionRef = collection(db, "asd")
 getDocs(collectionRef)
 .then((res)=>{
  console.log(res)
  const data = res.docs.map((doc)=>({
   
    id: doc.id,
    ...doc.data()
    
  }))
  setProducts(data)
  console.log(data)
 })
},[])

  return (
    <div> <ItemListContainer products={products}/> </div>
  )  
}

export default Home