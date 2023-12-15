import { useEffect, useState } from 'react'
import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer'
import {getDocs, getFirestore, collection, getDoc, doc} from 'firebase/firestore'
import { useParams } from 'react-router-dom';

useEffect
function Item() {
  const[product, setProduct]=useState({});
console.log(product)
  const {id} = useParams()

useEffect(()=>{
  const db = getFirestore()
  const docRef = doc(db, "asd", id)
  getDoc(docRef)
  .then((res)=>{
   console.log(res)
   const data = {
    id: res.id,
    ...res.data()
   }
   setProduct(data)
   console.log(data)
  })

 },[])

  return (
    <div ><ItemDetailContainer product={product}/> </div>
    
  )
}

export default Item