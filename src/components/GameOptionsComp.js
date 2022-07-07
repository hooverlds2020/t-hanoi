import { Row, Col, Button } from "react-bootstrap";
// import React, { useState } from "react";

const GameOptionsComp = ({ disks, setDisks, reset, solve, moveCount }) => {

  return (
    
    <Row className="btn-menu">
      <Col>
        <span>Discos: {disks}  </span>
        <Button
          className="mx-3 btn-success text-white"
          variant="outline-secondary"
          onClick={() => {
            setDisks((disks += 1));
          }}
        >
          +
        </Button>
        <Button
          className="btn-warning text-white"
          variant="outline-secondary"
          onClick={() => {
            if (disks >= 2) {
              setDisks((disks -= 1));
            }
          }}
        >
          -
        </Button>
      </Col>
      <Col>
        <Button
          className="mx-3 btn-danger text-white"
          variant="outline-secondary" 
          onClick={() => reset()}
          >
          Reiniciar
        </Button>
        <Button
          className="btn btn-primary text-white"
          variant="outline-secondary" 
          onClick={() => solve()}
          >
          Resolver
        </Button>
      </Col>
    </Row>
  );
};

export default GameOptionsComp;
