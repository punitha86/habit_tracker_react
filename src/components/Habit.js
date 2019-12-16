
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
            <h1>{this.props.postData.title}</h1>

        </div>
        <div className="post-body">
            <h4>{this.props.postData.description} </h4>
            <h5>{this.props.postData.comments} </h5>
        </div>
        <div className="post-options">
            <ul>
                <li onClick={()=> {this.props.handleView('editHabit', this.props.postData)}}><span class="lnr lnr-pencil"></span></li>
                <li onClick={()=> {this.props.handleDelete(this.props.postData.id)}}><span class="lnr lnr-trash"></span></li>
            </ul>
        </div>
        <Example />
      </article>
    )
  }
}

function Example() {
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
          <Modal.Title>header</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
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
