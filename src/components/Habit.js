
// =============================
// DEPENDENCIES
// =============================
// packages
import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';



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
        <div className="post-header">
            <h1>{this.props.postData.habit}</h1>

        </div>

        <div className="post-options">
            <ul>
                <li onClick={()=> {this.props.handleView('editHabit', this.props.postData)}}><span className="lnr lnr-pencil"></span></li>
                <li onClick={()=> {this.props.handleDelete(this.props.postData.id)}}><span className="lnr lnr-trash"></span></li>
            </ul>
        </div>
        <Example property={this.props}/>
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


            </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={()=> {property.property.handleView('editHabit', property.property.postData)}}>
            Edit
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
