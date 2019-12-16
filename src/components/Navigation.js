import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
class Navigation extends React.Component {
render(){
  return <Navbar bg="light" expand="lg">
    <Navbar.Brand href="#home">HabitsApp</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link onClick={() => {this.props.handleView('home')}} href="#home">Home</Nav.Link>
        <Nav.Link onClick={() => {this.props.handleView('addHabit')}} href="#link">Add Habit</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
}
}




export default Navigation
