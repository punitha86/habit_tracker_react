
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
  constructor(props){
      super(props)
      this.state = {
          toggleState : false,
          selectedDays :[]
  }
this.addSelectedDays = this.addSelectedDays.bind(this)
}

addSelectedDays(habit) {
  this.setState({selectedDays: [habit, ...this.state.selectedDays]})
}

toggleDays =  () =>{
  console.log(this.state.selectedDays);
  this.setState({
    toggleState: !this.state.toggleState
  })
}

  // ==============
  // RENDER
  // ==============
  render () {
    return (

      <tr>
              <td>{this.props.postData.id}</td>
              <td>{this.props.postData.habit}</td>
              <td>{this.props.postData.daysOfWeek}</td>
              <td>{this.props.postData.timing}</td>

              <td onClick={()=>
                this.toggleDays()}
               handleAdd={this.addSelectedDays}>
                {
                  this.state.toggleState
                ?
                <span className="lnr lnr-checkmark-circle" ></span>
                :
                <span className="lnr lnr-cross-circle" ></span>
                }
              </td>

              <td onClick={()=>this.toggleDays()}>
                {
                  this.state.toggleState
                ?
                <span className="lnr lnr-checkmark-circle" ></span>
                :
                <span className="lnr lnr-cross-circle" ></span>
                }
              </td>

              <td onClick={()=>this.toggleDays()}>
                {
                  this.state.toggleState
                ?
                <span className="lnr lnr-checkmark-circle" ></span>
                :
                <span className="lnr lnr-cross-circle" ></span>
                }
              </td>
              <td onClick={()=>this.toggleDays()}>
              {
                this.state.toggleState
              ?
              <span className="lnr lnr-checkmark-circle" ></span>
              :
              <span className="lnr lnr-cross-circle" ></span>
              }
              </td>
              <td onClick={()=>this.toggleDays()}>
              {
                this.state.toggleState
              ?
              <span className="lnr lnr-checkmark-circle" ></span>
              :
              <span className="lnr lnr-cross-circle" ></span>
              }
              </td>
              <td onClick={()=>this.toggleDays()}>
              {
                this.state.toggleState
              ?
              <span className="lnr lnr-checkmark-circle" ></span>
              :
              <span className="lnr lnr-cross-circle" ></span>
              }
              </td>

            <td onClick={()=>{
              this.toggleDays();}
            }>
              {
                this.state.toggleState
              ?
              <span className="lnr lnr-checkmark-circle" ></span>
              :
              <span className="lnr lnr-cross-circle" ></span>
              }
            </td>
            <td>
            <Example property={this.props}/>
            </td>
        </tr>
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
          <Modal.Title><span id="modalTitle">{property.property.postData.habit}</span></Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <h5>Description:  <span id="modalText">{property.property.postData.description}</span></h5>
            <h5>Comments: <span id="modalText">{property.property.postData.comments}</span></h5>
            <h5>Habit Week Days: <span id="modalText"> {property.property.postData.daysOfWeek}</span></h5>
            <h5>Haibt Times: <span id="modalText">{property.property.postData.timing}</span></h5>
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
