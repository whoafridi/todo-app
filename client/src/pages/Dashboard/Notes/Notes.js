import React from "react";
import { Col } from "react-bootstrap";

const Notes = ({ note }) => {
  // destructuring all values from notes
  const { title, description, date } = note;
  return (
    <Col>
      <div className="shadow-lg p-3 my-3 rounded">
          <h2>{title}</h2>
          <p>
              {description}
          </p>
          <span className="mt-3 text-secondary">
              {date.slice(0,10)}
          </span>
      </div>
    </Col>
  );
};

export default Notes;