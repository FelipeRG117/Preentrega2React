import Card from 'react-bootstrap/Card';
import { ItemQuantitySelector } from '../Components/ItemQuantitySelector';
import AddItemButton from '../Components/AddItemButton/AddItemButton';

const ItemDetailContainer = ({product}) => {
  console.log(product)
    return (
        <div >
         
            <Card key={product.title}>
                 <Card.Body>
                    <Card.Title>{product.title}</Card.Title>
                    <Card.Img variant="top" src={product.thumbnail} />
                    
                  </Card.Body>
                 <ItemQuantitySelector/>
                </Card>
           
       
        </div>
      )
    }
export default ItemDetailContainer