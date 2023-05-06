import React from 'react';
import { Card, Button } from 'react-bootstrap';

const DataCard = ({ _id, handleDelete, name, email, university, msg }) => {
  return (
    <>
      <Card className="card">
        <Card.Img
          className="cardImg"
          variant="top"
          src="https://img.freepik.com/free-vector/contact-us-concept-landing-page_52683-12759.jpg"
        />
        <Card.Body>
          <Card.Title>User: {name}</Card.Title>
          <Card.Text>
            <strong>University: </strong>
            {university}
          </Card.Text>
          <p>
            <strong>Email:</strong> {email}
          </p>
          <p>
            <strong>Msg:</strong> {msg}
          </p>

          <Button variant="danger" onClick={() => handleDelete(_id)}>
            Delete
          </Button>
        </Card.Body>
      </Card>
    </>
  );
};

export default DataCard;
