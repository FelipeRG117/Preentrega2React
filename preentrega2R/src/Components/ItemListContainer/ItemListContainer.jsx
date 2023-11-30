import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';


const ItemListContainer = ({products}) => {
  return (
    <div >
    {products.map((product)=>{
      return(
        <Card key={product.title}
         style={{ width: '18rem', margin: 20, height: "300px" }}>
          <Link to={`/item/${product.id}`}> <Card.Img variant="top" src={product.thumbnail} /> </Link>
             <Card.Body>
                <Card.Title>{product.title}</Card.Title>
              
             
              </Card.Body>
            </Card>
      ) 
    })}
    </div>
  )
}

export default ItemListContainer