// =============================
// DEPENDENCIES
// =============================
// packages
import React from 'react';
import Button from 'react-bootstrap/Button';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import Navigation from './components/Navigation.js';
import Habit from './components/Habit.js';



let baseUrl = '';
if (process.env.NODE_ENV === 'development') {
  baseUrl = 'http://localhost:8888'
} else {
  baseUrl = 'http://habit-tracker-api-test.herokuapp.com/api'
}


// =============================
// COMPONENT CLASS
// =============================
class App extends React.Component {
  constructor(props){
    super(props)
    this.state ={
      habits_list:[]
    }

  }
  fetchPosts = () => {
     fetch(`${baseUrl}/habits`)
     .then(data=>data.json())
     .then(jData=>{
       this.setState({habits_list:jData});
       console.log(jData);
     })
    .catch(err=>console.log(err))
   }

  componentDidMount() {
  this.fetchPosts()
}
  // ==============
  // RENDER
  // ==============
  render () {
    return (
      <div className="large-container">
      <h1 >Hi</h1>
      <ButtonToolbar>
        <Button variant="primary">Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="success">Success</Button>
        <Button variant="warning">Warning</Button>
        <Button variant="danger">Danger</Button>
        <Button variant="info">Info</Button>
        <Button variant="light">Light</Button>
        <Button variant="dark">Dark</Button>
        <Button variant="link">Link</Button>
      </ButtonToolbar>
      <Navigation/>
      <ParentComponent/>

      {this.state.habits_list.map((habits) =>(
      <Habit
                  key={habits.id}
                  postData={habits}
                />
              ))
            }
      </div>

    )
  }
}

class ParentComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: "1990-06-05",
      format: "YYYY-MM-DD",
      inputFormat: "DD/MM/YYYY",
      mode: "date"
    };
  }

  handleChange = (newDate) => {
    console.log("newDate", newDate);
    return this.setState({date: newDate});
  }

  render() {
    const {date, format, mode, inputFormat} = this.state;
    return <DateTimeField
      dateTime={date}
      format={format}
      viewMode={mode}
      inputFormat={inputFormat}
      onChange={this.handleChange}
    />;
  }
}



// =============================
// EXPORT
// =============================
export default App
