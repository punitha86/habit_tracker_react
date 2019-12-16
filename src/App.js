

// =============================
// DEPENDENCIES
// =============================
// packages

import React from 'react'



// components
import Habit from './components/Habit.js'
import Navigation from './components/Navigation.js'
import Main from './components/Main.js'

// =============================
// COMPONENT CLASS
// =============================
class App extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            view: {
                page: 'home',
                pageTitle: '...'
            },
            formInputs: {
                habit: null,
                description: null,
                comments: null,
                id: null
            }
        }
    }


    handleView = (view, postData) => {
        let pageTitle = ''
        let formInputs = {
            habit: '',
            description: '',
            comments: '',
            id: null
        }
        switch(view) {
            case 'home':
                pageTitle="I heard that..."
                break
            case 'addHabit':
                pageTitle="What did you say?"
                break
            case 'editHabit':
                pageTitle="What did you really say?"
                formInputs = {
                    habit: postData.title,
                    description: postData.description,
                    comments: postData.comments,
                    id: postData.id
                }
                break
            default:
                break
        }
        this.setState({
            view: {
                page: view,
                pageTitle: pageTitle
            },
            formInputs: formInputs
        })
    }


  // ==============
  // RENDER
  // ==============
  render () {
    return (
        <div className="main-container">
        <Navigation handleView={this.handleView} />
        <Main
          view={this.state.view}
          handleView={this.handleView}
          formInputs={this.state.formInputs}
         />
        </div>
    )
  }
}

// =============================
// EXPORT
// =============================
export default App
