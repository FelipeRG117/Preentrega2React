import Card from 'react-bootstrap/Card';


const ItemDetailContainer = ({product}) => {
  console.log(product)
    return (
        <div >
         
            <Card key={product.title}
             style={{ width: '18rem', margin: 20, height: "200px" }}>
                 <Card.Body>
                    <Card.Title>{product.title}</Card.Title>
                    <Card.Img variant="top" src={product.thumbnail} />
                 
                  </Card.Body>
                </Card>
           
       
        </div>
      )
    }
export default ItemDetailContainer