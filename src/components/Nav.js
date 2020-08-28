import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

// import ReactDOM from "react-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.scss';

class Home extends React.Component {
  render() {
    return (
    <header className="App-header">
      <Navbar className="justify-content-end">
        <Navbar.Brand href="/">Home</Navbar.Brand>
        <Nav>
          <Nav.Link href="/writing">Writing</Nav.Link>
          <Nav.Link href="#pricing">Stand Up</Nav.Link>
          <Nav.Link href="#pricing">Contact</Nav.Link>
        </Nav>
      </Navbar>
    </header>
  );

}
}

export default Nav;
