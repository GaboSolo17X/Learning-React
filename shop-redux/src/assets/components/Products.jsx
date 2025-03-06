import { useEffect } from "react";
import { useState } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch, useSelector} from 'react-redux'
import { add } from "../../store/slices/cartSlice"; 
import { getProducts } from "../../store/slices/productSlice";

export const Products = () => {
  const dispatch =useDispatch()
const data = useSelector(state=>state.products)
console.log(data)
  // const getProducts = () => {
  //   fetch("https://fakestoreapi.com/products")
  //     .then((data) => data.json())
  //     .then((response) => setProducts(response));
  // };

  useEffect(() => {
    dispatch(getProducts());
    // getProducts();
  }, [dispatch]);

  const addToCart = (product)=>{
   dispatch(add(product))
  }

  const cards = products.map((product) => (
    <div key={product.id} className="col-md-3">
      <Card  style={{ width: "18rem" }}>
        <Card.Img variant="top" src={product.image} />
        <Card.Body>
          <Card.Title>{product.title}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">{product.category}-{product.price}</Card.Subtitle>
          <Card.Text>
           {product.description}
          </Card.Text>
          <Button variant="primary" onClick={()=>addToCart(product)}>Buy</Button>
        </Card.Body>
      </Card>
    </div>
  ));

  return (
    <>
      <div className="row">
        {cards}
      </div>
    </>
  );
};
