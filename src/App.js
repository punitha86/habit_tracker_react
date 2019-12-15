// =============================
// DEPENDENCIES
// =============================
// packages
import React from 'react';
import Button from 'react-bootstrap/Button';

let baseUrl = '';
if (process.env.NODE_ENV === 'development') {
  baseUrl = 'http://localhost:8888'
} else {
  baseUrl = 'https://cors-anywhere.herokuapp.com/https://habit-tracker-api-test.herokuapp.com/api'
}


// =============================
// COMPONENT CLASS
// =============================
class App extends React.Component {
  constructor(props){
    super(props)
    this.state ={
      posts:[]
    }

  }
  fetchPosts = () => {
     fetch(`${baseUrl}/habits`)
     .then(data=>console.log(data);)
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
      <div>

  <Button variant="primary">Primary</Button>
  <Button variant="secondary">Secondary</Button>
  <Button variant="success">Success</Button>
  <Button variant="warning">Warning</Button>
  <Button variant="danger">Danger</Button>
  <Button variant="info">Info</Button>
  <Button variant="light">Light</Button>
  <Button variant="dark">Dark</Button>
  <Button variant="link">Link</Button>
</div>
      </div>

    )
  }
}



// =============================
// EXPORT
// =============================
export default App
