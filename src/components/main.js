// =============================
// DEPENDENCIES
// =============================
// packages
import React from 'react'

// components
import Habit from './Habit.js'
import Form from './Form.js'

// =============================
// COMPONENT CLASS
// =============================
let baseUrl = '';
if (process.env.NODE_ENV === 'development') {
  baseUrl = 'http://localhost:8888'
} else {
  console.log('https://my-habit-tracker.herokuapp.com/');
}

class Main extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        habits: []
      }
    }
    fetchHabits = () => {
        fetch(`${baseUrl}/habits`)
        .then(data => data.json())
        .then(jData => {
            this.setState({habits:jData})
        }).catch(err=>console.log(err))
    }

    handleCreate = (createData) => {
        fetch(`${baseUrl}/habits`, {
            body: JSON.stringify(createData),
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type' : 'application/json'
            }
        })
        .then(createdPost => {
            return createdPost.json()
        })
        .then(jsonedPost => {
            this.props.handleView('home')
            this.setState(prevState => {
                prevState.habits = jsonedPost
                return { habits: prevState.habits }
            })
        })
        .catch(err=>console.log(err))
    }

    handleUpdate = (updateData) => {
        fetch(`${baseUrl}/habits/${updateData.id}`, {
            body: JSON.stringify(updateData),
            method: 'PUT',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            }
        })
            .then(updatedPost => {
                this.props.handleView('home')
                this.fetchPost()
            })
            .catch(err=>console.log(err))
        }

    handleDelete = (id) => {
        fetch(`${baseUrl}/habits/${id}`, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            }})
            .then(json => {
                this.setState(prevState =>{
                    const habits = prevState.habits.filter(post=> post.id
                    !==id)
                    return{habits}
                })
            })
            .catch(err=>console.log(err))
        }

    componentDidMount(){
        this.fetchHabits()
    }


  // ==============
  // RENDER
  // ==============
  render () {
      return (
     <main>
        <h1>{this.props.view.pageTitle}</h1>
        { this.props.view.page === 'home'
            ? this.state.habits.map((postData) => (
              <Habit
               key={postData.id}
               postData={postData}
               handleView={this.props.handleView}
             />
            ))
         : <Form
                handleCreate={this.handleCreate}
                handleUpdate={this.handleUpdate}
                formInputs={this.props.formInputs}
                view={this.props.view}

            />
        }
     </main>
    )
  }
}

// =============================
// EXPORT
// =============================
export default Main
