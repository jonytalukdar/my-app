import React from 'react';
import { Card, Button } from 'react-bootstrap';
const News = (props) => {
  const { title, urlToImage, description } = props.article;
  return (
    <div>
      <Card>
        <Card.Img variant="top" src={urlToImage} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{description}</Card.Text>
          <Button variant="primary">Read More</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default News;
