import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import "../css/header.css";

export default function Layout(props) {
  return (
    <>
      <header>
        <Navbar
          collapseOnSelect
          expand="lg"
          bg="dark"
          variant="dark"
          className="header"
        >
          <Navbar.Brand href="/">Logiqbits</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/about">About</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="/download">Download</Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
                contact us
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </header>
      <div
        style={{
          padding: "10px",
        }}
      >
        {props.children}
      </div>
    </>
  );
}
