import React from 'react';
import { Jumbotron, Button, Alert } from 'react-bootstrap';
const Header = () => {
  return (
    <Jumbotron>
      <h1>Hello, world!</h1>
      <p>
        This is a simple hero unit, a simple jumbotron-style component for
        calling extra attention to featured content or information.
      </p>
      <p>
        <Button variant="primary">Learn more</Button>
        <Alert variant="primary">hello</Alert>
      </p>
    </Jumbotron>
  );
};

export default Header;
