import Card from 'react-bootstrap/Card';


const ItemListContainer = ({products}) => {
  return (
    <div >
    {products.map((product)=>{
      console.log(product)
      return(
        <Card key={product.name}
         style={{ width: '18rem', margin: 20, height: "200px" }}>
             <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Img variant="top" src="ndjsnjsdjj" />
             
              </Card.Body>
            </Card>
      ) 
    })}
    </div>
  )
}

export default ItemListContainer