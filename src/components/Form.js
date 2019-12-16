// =============================
// DEPENDENCIES
// =============================
// packages
import React from 'react';
import Datetime from 'react-datetime';
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
        id: this.props.formInputs.id
    })
}
renderDay=(props, currentDate, selectedDate )=>{
        return <td {...props}>{ '0' + currentDate.date() }</td>;
    }
renderMonth=( props, month, year, selectedDate )=>{
        return <td {...props}>{ month }</td>;
    }
renderYear=( props, year, selectedDate )=>{
        return <td {...props}>{ year % 100 }</td>;
    }
  // ==============
  // RENDER
  // ==============
  render () {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          habit
          <input type="text" placeholder="your habit" id="habit" value={this.state.habit} onChange={this.handleChange}/>
        </label>
        <label>
          description
          <input type="text" placeholder="your description" id="description" value={this.state.description} onChange={this.handleChange}/>
        </label>
        <label id="post-form">
          comments
          <textarea placeholder="write your words" id="comments" value={this.state.comments} onChange={this.handleChange}></textarea>
        </label>
        Date: <Datetime
          renderDay={ this.renderDay }
          renderMonth={ this.renderMonth }
          renderYear={ this.renderYear }
          timeFormat={false}
      />
      Time: <Datetime dateFormat={false} />
        <input type="submit" value="Add Habit"/>
      </form>
    )
  }
}

// =============================
// EXPORT
// =============================
export default Form
