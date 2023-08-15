
import React from 'react';
import product from './Product';
import Name from './component/Name/Name';
import Price from './component/Price/Price';
import Description from './component/Description/Description';
import Image from './component/Image/Image';
import { Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import img from './component/pexels-anna-shvets-5325597.jpg'



function App() {
  const firstName = 'Senior dev'; 
  return (
    
    <div>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Name name={product.name} />
          <Price price={product.price} />
          <Description description={product.description} />
        </Card.Body>
      </Card>
      {firstName ? (
        <>
          <p>Hello, {firstName}!</p>
          <Image image={product.image} />
        </>
      ) : (
        <p>Hello, there!</p>
      )}
    </div>
  );
};


export default App;
