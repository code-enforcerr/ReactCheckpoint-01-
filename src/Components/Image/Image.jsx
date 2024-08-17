import React from 'react';
import { Card } from 'react-bootstrap';
import product from '../Product/product';

function Image() {
  return <Card.Img variant="top" src={product.imageUrl} alt={product.name} />;
}

export default Image;
