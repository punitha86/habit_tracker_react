
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
        toggleState0 : false,
          toggleState1 : false,
          toggleState2 : false,
          toggleState3 : false,
          toggleState4 : false,
          toggleState5 : false,
          toggleState6 : false,
          selectedDays :[]
  }
 this.addSelectedDays = this.addSelectedDays.bind(this)
}

addSelectedDays(habitDays) {
  this.setState({selectedDays: [habitDays, ...this.state.selectedDays]})
}

toggleDays =  (str) =>{
switch (str)
{
case "sun":
  this.addSelectedDays("Sunday");
  console.log(this.state.selectedDays);
    this.setState({
      toggleState0: !this.state.toggleState0
    })

break
case "mon":
this.addSelectedDays("Monday");
console.log(this.state.selectedDays);
  this.setState({
    toggleState1: !this.state.toggleState1
  })

break
case "tue":
this.addSelectedDays("Tuesday");
console.log(this.state.selectedDays);
  this.setState({
    toggleState2: !this.state.toggleState2
  })
break
case "wed":
this.addSelectedDays("Wednesday");
console.log(this.state.selectedDays);
  this.setState({
    toggleState3: !this.state.toggleState3
  })
break
case "thur":
this.addSelectedDays("Thursday");
console.log(this.state.selectedDays);
  this.setState({
    toggleState4: !this.state.toggleState4
  })
break
case "fri":
this.addSelectedDays("Friday");
console.log(this.state.selectedDays);
  this.setState({
    toggleState5: !this.state.toggleState5
  })
break
case "sat":
this.addSelectedDays("Saturday");
console.log(this.state.selectedDays);
  this.setState({
    toggleState6: !this.state.toggleState6
  })
break

default:
break
}
}

  // ==============
  // RENDER
  // ==============
  render () {
    return (

      <tr>

              <td>{this.props.postData.habit}</td>
              <td>{this.props.postData.daysOfWeek}</td>
              <td>{this.props.postData.timing}</td>

              <td onClick={()=>this.toggleDays("sun")}>
                {this.state.toggleState0
                ?<span className="lnr lnr-checkmark-circle" ></span>
                :<span className="lnr lnr-cross-circle" ></span>}
              </td>

              <td onClick={()=>this.toggleDays("mon")}>
                {this.state.toggleState1
                ?<span className="lnr lnr-checkmark-circle" ></span>
                :<span className="lnr lnr-cross-circle" ></span>}
              </td>

              <td onClick={()=>this.toggleDays("tue")}>
                {this.state.toggleState2
                ?<span className="lnr lnr-checkmark-circle" ></span>
                :<span className="lnr lnr-cross-circle" ></span>}
              </td>

              <td onClick={()=>this.toggleDays("wed")}>
                {this.state.toggleState3
                ?<span className="lnr lnr-checkmark-circle" ></span>
                :<span className="lnr lnr-cross-circle" ></span>}
              </td>

              <td onClick={()=>this.toggleDays("thur")}>
              {this.state.toggleState4
              ?<span className="lnr lnr-checkmark-circle" ></span>
              :<span className="lnr lnr-cross-circle" ></span>}
              </td>

              <td onClick={()=>this.toggleDays("fri")}>
              {this.state.toggleState5
              ?<span className="lnr lnr-checkmark-circle" ></span>
              :<span className="lnr lnr-cross-circle" ></span>}
              </td>

              <td onClick={()=>this.toggleDays("sat")}>
              {
                this.state.toggleState6
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
      <Button variant="info" onClick={handleShow}>
        View/Edit Habit
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title><span id="modalTitle">{property.property.postData.habit}</span></Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <h5>Description:  <span id="modalText">{property.property.postData.description}</span></h5>
            <h5>Comments: <span id="modalText">{property.property.postData.comments}</span></h5>
            <h5>Haibt Weekday Goals: <span id="modalText"> {property.property.postData.daysOfWeek}</span></h5>
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
