
// =============================
// DEPENDENCIES
// =============================
// packages
import React, {useState} from 'react';
import Button from 'react-bootstrap/button';
import Modal from 'react-bootstrap/modal';



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
        <Example property={this.props.postData}/>
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
          <Modal.Title>{property.property.habit}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <h4>Description: {property.property.description}</h4>
            <h4>Comments: {property.property.comments}</h4>


            </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
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
