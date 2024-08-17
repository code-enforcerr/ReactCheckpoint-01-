import React from 'react';
import { Card } from 'react-bootstrap';
import product from '../Product/product';

function Description() {
  return <Card.Text>{product.description}</Card.Text>;
}

export default Description;
