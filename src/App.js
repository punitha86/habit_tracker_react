// =============================
// DEPENDENCIES
// =============================
// packages
import React from 'react';
import Button from 'react-bootstrap/Button';



// =============================
// COMPONENT CLASS
// =============================
class App extends React.Component {

  // ==============
  // RENDER
  // ==============
  render () {
    return (
      <div className="large-container">
        <h1>Hi</h1>
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

      </div>

    )
  }
}



// =============================
// EXPORT
// =============================
export default App
