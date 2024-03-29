import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
class Navigation extends React.Component {
render(){
  return <Navbar bg="light" expand="lg">
    <Navbar.Brand href="#home">Hello Healthy Habits!</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link onClick={() => {this.props.handleView('home')}} href="#home">Home</Nav.Link>
        <Nav.Link onClick={() => {this.props.handleView('addHabit')}} href="#link">Add Habit</Nav.Link>
        <Nav.Link onClick={() => {this.props.handleView('home')}} href="#home">View All Habit Dates</Nav.Link>
        <Nav.Link onClick={() => {this.props.handleView('home')}} href="#home">See My Progress</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
}
}




export default Navigation
