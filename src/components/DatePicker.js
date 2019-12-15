import React from 'react';

// Import Datepicker
import DatePicker from "react-bootstrap-date-picker";

// Import Bootstrap components
import FormGroup from 'react-bootstrap/FormGroup';
import ControlLabel from 'react-bootstrap/ControlLabel';
import HelpBlock from 'react-bootstrap/HelpBlock';

class App extends React.Component {
    constructor(props, context) {
        super(props, context);

        // Initial state with date
        this.state = {
            selectedDate: new Date().toISOString()
        };

        // This binding is necessary to make `this` work in the callback
        this.onChange = this.onChange.bind(this);
    }

    onChange(value, formattedValue) {
		this.setState({
            value: value, // ISO String, ex: "2016-11-19T12:00:00.000Z"
            formattedValue: formattedValue // Formatted String, ex: "11/19/2016"
        });
	}

    componentDidUpdate() {
        // Access ISO String and formatted values from the DOM.
        var hiddenInputElement = document.getElementById("example-datepicker");
        console.log(hiddenInputElement.value); // ISO String, ex: "2016-11-19T12:00:00.000Z"
        console.log(hiddenInputElement.getAttribute('data-formattedvalue')) // Formatted String, ex: "11/19/2016"
    }

    render() {
        return (
            <div>
                <FormGroup>
                    <ControlLabel>Testing Calendar</ControlLabel>
                    <DatePicker id="example-datepicker" value={this.state.selectedDate} onChange={this.onChange} />
                    <HelpBlock>Help</HelpBlock>
                </FormGroup>
            </div>
        );
    }
}

export default App
