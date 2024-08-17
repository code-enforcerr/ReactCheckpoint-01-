import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Card } from 'react-bootstrap';
import './App.css';

import Name from './Components/Name/Name';
import Price from './Components/Price/Price';
import Description from './Components/Desc/Desc';
import Image from './Components/Image/Image';

const firstName = "RSK!"; 

function App() {
  return (
    <Container className="mt-5">
      <Card style={{ width: '18rem'}}>
        <Image />
        <Card.Body style={{textAlign:'start'}}>
          <Name />
          <Price />
          <Description />
        </Card.Body>
      </Card>
      <h2 className="mt-3">
        {firstName ? `Hello, ${firstName}!` : "Hello, there!"}
      </h2>
      {firstName && <img style={{width:'200px'}} src="https://www.cartier.com/on/demandware.static/-/Library-Sites-CartierSharedLibrary-BGTJ/default/dwc77ce37b/plp-inserts/watches/collections/Final_CARTIER_FINDYOURCATIERWATCH_1920x1368_small.gif" alt="" />}
      
    </Container>
  );
}


export default App;
