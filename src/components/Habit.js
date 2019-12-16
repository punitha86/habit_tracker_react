
// =============================
// DEPENDENCIES
// =============================
// packages
import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Table from 'react-bootstrap/Table';
import Jumbotron from 'react-bootstrap/Jumbotron';



// =============================
// COMPONENT CLASS
// =============================
class Habit extends React.Component {


  // ==============
  // RENDER
  // ==============
  render () {
    return (
      <article>
      <Jumbotron>
      <h1>My Habit Tracker</h1>
      <p>
      <Button variant="primary">Learn more</Button>
      </p>
      </Jumbotron>
      <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>#</th>
              <th>Habit</th>
              <th> Week days </th>
              <th> time </th>
              <th>S</th>
              <th>M</th>
              <th>T</th>
              <th>W</th>
              <th>Th</th>
              <th>F</th>
              <th>S</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{this.props.postData.id}</td>
              <td>{this.props.postData.habit}</td>
              <td>{this.props.postData.daysOfWeek}</td>
              <td>{this.props.postData.timing}</td>
              <td>{this.props.postData.completed}</td>
              <td>{this.props.postData.completed}</td>
              <td>{this.props.postData.completed}</td>
              <td>{this.props.postData.completed}</td>
              <td>{this.props.postData.completed}</td>
              <td>{this.props.postData.completed}</td>
              <td>{this.props.postData.completed}</td>
              <td><Example property={this.props}/></td>
            </tr>

          </tbody>
    </Table>


      </article>
    )
  }
}

function Example(property) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        View/Edit Habit
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{property.property.postData.habit}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <h4>Description: {property.property.postData.description}</h4>
            <h4>Comments: {property.property.postData.comments}</h4>
            <h4>Habit Week Days: {property.property.postData.daysOfWeek}</h4>
            <h4>Haibt Times: {property.property.postData.timing}</h4>
            </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={()=> {property.property.handleView('editHabit', property.property.postData)}}>
            Edit <span className="lnr lnr-pencil"></span>
          </Button>
          <Button variant="danger" onClick={()=> {property.property.handleDelete(property.property.postData.id)}}>
            Delete <span className="lnr lnr-trash"></span>
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}


// =============================
// EXPORT
// =============================
export default Habit
