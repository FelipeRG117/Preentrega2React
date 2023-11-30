import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Carwidget from '../CarWidget/Carwidget';
import { Link } from "react-router-dom";
import { useEffect, useState } from 'react';
import axios from "axios";


function NavBar() {
const [categories, setCategories] = useState([])

useEffect(()=>{
axios.get('https://dummyjson.com/products/categories')
.then(res =>setCategories(res.data))
.catch(err => console.log(err))
},[])

  return (
    <Navbar  expand="lg" className="bg-body-tertiary">
      <Container className='Container'>
        <Navbar.Brand > <Link to={"/"}>The MagicBread</Link> </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="Categorias" id="basic-nav-dropdown">
{
  categories.map((category, index)=>{
    return(
    <NavDropdown.Item key={index}>
      <Link to={`/category/${category}`}>{category}</Link>
      </NavDropdown.Item>
      )
  })
}

          
            </NavDropdown>

          </Nav>
          <Carwidget/>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;