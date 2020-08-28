import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
// import { TransitionGroup } from 'react-transition-group';
import Home from './components/Home.js';
import Writing from './components/Writing.js';
import Standup from './components/Standup.js';
import Projects from './components/Projects.js';
import Contact from './components/Contact.js';
import { Navbar, Nav } from 'react-bootstrap';
import './App.scss';

// This site has 3 pages, all of which are rendered
// dynamically in the browser (not server rendered).
//
// Although the page does not ever refresh, notice how
// React Router keeps the URL up to date as you navigate
// through the site. This preserves the browser history,
// making sure things like the back button and bookmarks
// work properly.

export default function BasicExample() {
  return (
    <Router>
      <div>
      <Navbar className="justify-content-end">
        <Navbar.Brand href="/">Home</Navbar.Brand>
        <Nav>
          <Nav.Link href="/writing">Writing</Nav.Link>
          <Nav.Link href="/standup">Stand Up</Nav.Link>
          <Nav.Link href="/projects">Projects</Nav.Link>
          <Nav.Link href="/contact">Contact</Nav.Link>
        </Nav>
      </Navbar>
        {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/writing">
            <Writing />
          </Route>
          <Route path="/standup">
            <Standup />
          </Route>
          <Route path="/projects">
            <Projects />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};
