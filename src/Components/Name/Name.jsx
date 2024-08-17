import React from 'react';
import { Card } from 'react-bootstrap';
import product from '../Product/product';

function Name() {
  return <Card.Title>{product.name}</Card.Title>;
}

export default Name;
