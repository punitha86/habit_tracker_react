

// =============================
// DEPENDENCIES
// =============================
// packages

import React from 'react'



// components

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
                pageTitle: ''
            },
            formInputs: {
                habit: null,
                description: null,
                comments: null,
                daysOfWeek: null,
                timing: null,
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
            daysOfWeek: '',
            timing: '',
            id: null
        }
        switch(view) {
            case 'home':
                pageTitle="Track your habits here"
                break
            case 'addHabit':
                pageTitle="Add you new habit below"
                break
            case 'editHabit':
                pageTitle="Edit your habit here"
                formInputs = {
                    habit: postData.habit,
                    description: postData.description,
                    comments: postData.comments,
                    daysOfWeek: postData.daysOfWeek,
                    timing: postData.timing,
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
