import React from 'react';
import { Card, Button } from 'react-bootstrap';
const News = (props) => {
  const { title, urlToImage, description, url } = props.article;
  return (
    <>
      <Card>
        <Card.Img variant="top" src={urlToImage} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{description}</Card.Text>
          <Button>
            <a className="text-white" href={url}>
              Read More
            </a>
          </Button>
        </Card.Body>
      </Card>
    </>
  );
};

export default News;
