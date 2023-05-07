import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

const Navigation = () => {
  return (
    <Navbar
      bg="dark"
      variant="dark"
      expand="lg"
      className="d-flex justify-content-center"
    >
      <Navbar.Brand href="#home">Previous Papers | Contact info</Navbar.Brand>
    </Navbar>
  );
};

export default Navigation;
