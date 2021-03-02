import React from 'react';
import { Card, Button } from 'react-bootstrap';
const Cardcom = (props) => {
  const { title, urlToImage, description } = props.article;
  return (
    <div>
      <Card className="d-flex">
        <Card.Img variant="top" src={urlToImage} />
        <Card.Body>
          <Card.Title>somethign {title}</Card.Title>
          <Card.Text>{description}</Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Cardcom;
