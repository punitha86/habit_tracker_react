// =============================
// DEPENDENCIES
// =============================
// packages
import React from 'react';
import Datetime from 'react-datetime';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';

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
      id: null
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
        daysOfWeek: this.props.formInputs.daysOfWeek,
        timing: this.props.formInputs.timing,
        id: this.props.formInputs.id
    })
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

        <Form.Group>
          <Form.Label>Description</Form.Label>
          <Form.Control type="text" placeholder="Describe your habit" id= "description" value={this.state.description} onChange={this.handleChange}/>
        </Form.Group>

        <Form.Group>
          <Form.Label>Comments</Form.Label>
          <Form.Control as="textarea" placeholder="Comments about your habit!" id= "comments" value={this.state.comments} onChange={this.handleChange}/>
        </Form.Group>

        <Form.Group>
          <Form.Label>Habit Weekday Goals</Form.Label>
          <Form.Control type="text" placeholder="Monday" id= "daysOfWeek" value={this.state.daysOfWeek} onChange={this.handleChange}/>
        </Form.Group>

        <Form.Group>
          <Form.Label>Habit Time</Form.Label>
          <Form.Control type="time" id= "timing" value={this.state.timing} onChange={this.handleChange}/>
        </Form.Group>

        <ButtonToolbar aria-label="Toolbar with button groups">
          <ButtonGroup className="mr-2" aria-label="First group">
          <Button>S</Button>
          <Button>M</Button>
          <Button>T</Button>
          <Button>W</Button>
          <Button>Th</Button>
          <Button>F</Button>
          <Button>Sa</Button>

          </ButtonGroup>
          </ButtonToolbar>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>

      </div>
    )
  }
}

// =============================
// EXPORT
// =============================
export default Forms
