// =============================
// DEPENDENCIES
// =============================
// packages
import React from 'react'

// =============================
// COMPONENT CLASS
// =============================
class Form extends React.Component {
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
      <form onSubmit={this.handleSubmit}>
        <label>
          Habit
          <input type="text" placeholder="your habit" id="habit" value={this.state.habit} onChange={this.handleChange}/>
        </label>
        <label>
          Description
          <input type="text" placeholder="your description" id="description" value={this.state.description} onChange={this.handleChange}/>
        </label>
        <label id="post-form">
          Comments
          <textarea placeholder="write your words" id="comments" value={this.state.comments} onChange={this.handleChange}></textarea>
        </label>
        <label>
          Habit Week Days
          <input type="text" placeholder="habit week days" id="daysOfWeek" value={this.state.daysOfWeek} onChange={this.handleChange}/>
        </label>
        <label>
          Habit Times
          <input type="text" placeholder="habit times" id="timing" value={this.state.timing} onChange={this.handleChange}/>
        </label>
        <input type="submit" value="Add Habit"/>
      </form>
    )
  }
}

// =============================
// EXPORT
// =============================
export default Form
