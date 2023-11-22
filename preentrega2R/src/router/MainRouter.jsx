import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from '../pages/Home'
import NavBar from '../Components/ComponenteNavBar/ComponentNavbar'
import Category from '../pages/Category'
import Item from '../pages/Item'

export const MainRouter = ()=>{


  return(
<BrowserRouter>
<NavBar/>

<Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/category/:categoryId' element={<Category/>}/>
  <Route path='/item/:id' element={<Item/>}/>
</Routes>
</BrowserRouter>
  )
}