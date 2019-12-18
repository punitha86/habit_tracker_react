// =============================
// DEPENDENCIES
// =============================
// packages
import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';

// =============================
// COMPONENT CLASS
// =============================
class Forms extends React.Component {
  // ==============
  // STATE
  // ==============
  constructor() {
    super()
    this.state = {
      habit: '',
      description: '',
      comments: '',
      daysOfWeek: '',
      timing: '',
      id: null,
      habitSelectedDays:[]
    }
  }
  // ==============
  // HANDLERS
  // ==============
  // handles form change
  handleChange = (e) => {
    this.setState({[e.target.id] : e.target.value})
  }
  // handles submit
  handleSubmit = (e) => {
    e.preventDefault()
    const uniqueValues = Array.from(new Set(this.state.habitSelectedDays));
    const joinedValues=uniqueValues.join();
    const stringValue=joinedValues.toString();
    if(stringValue!="")
    this.state.daysOfWeek=stringValue;
    const temp=this.state.timing;
    this.state.timing= temp.toString();
    console.log(this.state);
    if (this.props.view.page === 'addHabit') {
        this.props.handleCreate(this.state);
    } else if (this.props.view.page === 'editHabit') {
        this.props.handleUpdate(this.state)
    }
}
componentDidMount(){
    this.setState({
        habit: this.props.formInputs.habit,
        description: this.props.formInputs.description,
        comments: this.props.formInputs.comments,
        daysOfWeek:this.props.formInputs.daysOfWeek,
        timing: this.props.formInputs.timing,
        id: this.props.formInputs.id
    })
}
addHabitSelectedDays(habitpassedDays) {
  this.setState(previousState =>
    ({
    habitSelectedDays: [...previousState.habitSelectedDays, habitpassedDays]
    }
    ));
    console.log(this.state.habitSelectedDays);
}
addHabitDays =  (str) =>{
switch (str)
{
      case "Sunday":
      this.addHabitSelectedDays("Sunday");
      break
      case "Monday":
      this.addHabitSelectedDays("Monday");
      break
      case "Tuesday":
      this.addHabitSelectedDays("Tuesday");
      break
      case "Wednesday":
      this.addHabitSelectedDays("Wednesday");
      break
      case "Thursday":
      this.addHabitSelectedDays("Thursday");
      break
      case "Friday":
      this.addHabitSelectedDays("Friday");
      break
      case "Saturday":
      this.addHabitSelectedDays("Saturday");
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
      <div className="container">
      <Form onSubmit={this.handleSubmit}>
        <Form.Group >
          <Form.Label>Habit</Form.Label>
          <Form.Control type="text" placeholder="Your Habit" id= "habit" value={this.state.habit} onChange={this.handleChange}/>
        </Form.Group>
​
        <Form.Group>
          <Form.Label>Description</Form.Label>
          <Form.Control type="text" placeholder="Describe your habit" id= "description" value={this.state.description} onChange={this.handleChange}/>
        </Form.Group>
​
        <Form.Group>
          <Form.Label>Comments</Form.Label>
          <Form.Control as="textarea" placeholder="Comments about your habit!" id= "comments" value={this.state.comments} onChange={this.handleChange}/>
        </Form.Group>
​
        <Form.Group>
          <Form.Label>Habit Weekday Goals</Form.Label>
          <ButtonToolbar>
            <ToggleButtonGroup type="checkbox">
              <ToggleButton value={1} onChange={()=>this.addHabitDays("Sunday")} >Sun</ToggleButton>
              <ToggleButton  value={2} onChange={()=>this.addHabitDays("Monday")} >Mon</ToggleButton>
              <ToggleButton value={3} onChange={()=>this.addHabitDays("Tuesday")}>Tue</ToggleButton>
              <ToggleButton value={4} onChange={()=>this.addHabitDays("Wednesday")}>Wed</ToggleButton>
              <ToggleButton value={5} onChange={()=>this.addHabitDays("Thursday")}>Thur</ToggleButton>
              <ToggleButton value={6} onChange={()=>this.addHabitDays("Friday")}>Fri</ToggleButton>
              <ToggleButton value={7} onChange={()=>this.addHabitDays("Saturday")}>Sat</ToggleButton>
            </ToggleButtonGroup>
          </ButtonToolbar>
        </Form.Group>
        <Form.Group>
          <Form.Label>Habit Time</Form.Label>
          <Form.Control type="time" id= "timing" value={this.state.timing} onChange={this.handleChange}/>
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
​
      </div>
    )
  }
}
// =============================
// EXPORT
// =============================
export default Forms
