import React from 'react';
import { Card } from 'react-bootstrap';
import product from '../Product/product';

function Price() {
  return <Card.Text>Price: {product.price}</Card.Text>;
}

export default Price;
