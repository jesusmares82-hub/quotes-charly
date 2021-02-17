import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/FormGroup";

const Quote = ({ id, quote, clase, onDeleteQuote, onEditQuote }) => {
  return (
    <>
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>Charly says:</Card.Title>
          <Card.Text>{quote}</Card.Text>
          <Card.Text className="ml-4">{clase}</Card.Text>
          <label>
            Edit Quote:
            <input type="text" name="quote" placeholder="Type quote here..." />
          </label>
          <Button variant="outline-success" onClick={() => onDeleteQuote(id)}>
            Delete Quote
          </Button>
          <Button variant="outline-success" onClick={() => onEditQuote(id)}>
            Edit Quote
          </Button>
        </Card.Body>
      </Card>
    </>
  );
};

export default Quote;
