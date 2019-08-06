import React, {Component} from 'react';
import {Input} from "./designer/Input";

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            id: '',
            joiningDate: ''
        };
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.handleValueChange = this.handleValueChange.bind(this);
    };

    handleFormSubmit(event) {
        alert(`Employee name is ${this.state.name} and age is ${this.state.id}`);
        event.preventDefault()
    }

    handleValueChange(e) {
        const key = e.target.name;
        const value = e.target.value;
        this.setState({...this.state, [key]: value})
    }

    render() {
        return (
            <form onSubmit={this.handleFormSubmit}>
                Employee Name:<Input name="name" type="text" value={this.state.name}
                                     onValueChange={this.handleValueChange}/>
                Employee Id: <Input name="id" type="numeric" value={this.state.id}
                                    onValueChange={this.handleValueChange}/>
                <br/>
                <button>Submit</button>
            </form>
        )
    }
}

export default Form;



