import { useSelector, useDispatch} from 'react-redux'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { remove } from "../../store/slices/cartSlice";



export const Cart = () => {

    const cartProducts=useSelector(state=>state.cart)
    const dispatch = useDispatch()

    const handleDelete=(id)=>{
        dispatch(remove(id))
    }


    const cards = cartProducts.map((product) => (
        <div key={product.id} className="col-md-3">
          <Card  style={{ width: "18rem" }}>
            <Card.Img variant="top" src={product.image} />
            <Card.Body>
              <Card.Title>{product.title}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">{product.category}-{product.price}</Card.Subtitle>
              <Card.Text>
               {product.description}
              </Card.Text>
              <Button variant="danger" onClick={()=>handleDelete(product.id)}>Eliminar</Button>
            </Card.Body>
          </Card>
        </div>
      ));

  return (
    <>
        <h1>Your Cart</h1>
        {cards}
    </>

  )
}
