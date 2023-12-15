import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Carwidget from '../CarWidget/Carwidget';
import { Link } from "react-router-dom";
import { useEffect, useState } from 'react';
import {getDocs, getFirestore, collection, getDoc, doc,query, where} from 'firebase/firestore'


function NavBar() {
const [categories, setCategories] = useState([])

useEffect(()=>{
  const db = getFirestore();
  const productsCollection = collection(db, "asd");

  getDocs(productsCollection)
    .then((res) => {
      const uniqueCategories = new Set();
      res.docs.forEach((doc) => {
        const productData = doc.data();
        if (productData.category) {
          uniqueCategories.add(productData.category);
        }
      });
      const categoriesArray = Array.from(uniqueCategories);
      setCategories(categoriesArray);
    })
    .catch((err) => console.error(err));
}, []);


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