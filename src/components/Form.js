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
    if (this.props.view.page === 'addPost') {
        this.props.handleCreate(this.state)
    } else if (this.props.view.page === 'editPost') {
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
        <input type="submit" value="share"/>
      </form>
    )
  }
}

// =============================
// EXPORT
// =============================
export default Form
