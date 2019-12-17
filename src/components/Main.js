// =============================
// DEPENDENCIES
// =============================
// packages
import React from 'react';


import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Table from 'react-bootstrap/Table';
import Jumbotron from 'react-bootstrap/Jumbotron';
// components
import Habit from './Habit.js'
import Forms from './Form.js'
import Navigation from './Navigation.js'





// =============================
// COMPONENT CLASS
// =============================
let baseUrl = '';
if (process.env.NODE_ENV === 'development') {
  baseUrl = 'http://localhost:8888'
} else {
  baseUrl = 'https://cors-anywhere.herokuapp.com/http://habit-tracker-api-test.herokuapp.com/api';
}

class Main extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        postData: []
      }
    }
    fetchHabits = () => {
        fetch(`${baseUrl}/habits`)
        .then(data => data.json())
        .then(jData =>
            this.setState({postData:jData}),
        err=>console.log(err))
    }

    handleCreate = (createData) => {
      //forming the data to be passed to the api format
      let stringifiedData={habit: createData.habit,
         description:createData.description,
         daysOfWeek:createData.daysOfWeek,
         timing:createData.timing,
         completed:"false",
         comments:createData.comments};
      //console.log(stringifiedData);
        fetch(`${baseUrl}/habits`, {
            body: JSON.stringify(stringifiedData),
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
                prevState.postData = jsonedPost
                return { postData: prevState.postData }
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
                this.fetchHabits()
            })
            .catch(err=>console.log(err))
        }



    handleDelete = (id) => {
        fetch(`${baseUrl}/habits/${id}`, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            }
        })
            .then(json => {
                this.setState(prevState =>{
                    const postData = prevState.postData.filter(post=> post.id
                    !==id)
                    return{postData}
                })
            })
            .catch(err=>console.log(err))
        }

    componentDidMount(){
        this.fetchHabits()
    }

    renderTableHeader() {
       let header = ['#','Habit','WeekDays','time','S','M','T','W','Th','F','Sa','']
       return header.map((head,index) => {
          return <th key={index}>{head.toUpperCase()}</th>
       })
    }


    renderTableData() {
    return this.state.postData.map((habits) => (
      <Habit
       key={habits.id}
       postData={habits}
       handleView={this.props.handleView}
       handleDelete={this.handleDelete}
     />

   ))
 }

  // ==============
  // RENDER
  // ==============
  render () {
      return (
     <div>
        <Jumbotron>
        <h1>My Habit Tracker</h1>
        <p>
        <Button variant="primary">Learn more</Button>
        </p>
        </Jumbotron>


        { this.props.view.page === 'home'
            ?(
              <Table striped bordered hover size="sm">
              <tbody>
            <tr>{this.renderTableHeader()}</tr>
            {this.renderTableData()}
            </tbody>
            </Table>
          )
         : <Forms
                handleCreate={this.handleCreate}
                handleUpdate={this.handleUpdate}
                formInputs={this.props.formInputs}
                view={this.props.view}
            />
        }

</div>
    )
  }
}

// =============================
// EXPORT
// =============================
export default Main
