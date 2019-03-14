import React, { Component } from "react";
import "./Employee.css";


export default class EmployeeForm extends Component {

    // Set initial state
    state = {
        name: "",
        image: "",
        email: "",
        password:"",
        locationId: ""

    };

    // Update state whenever an input field is edited
    handleFieldChange = evt => {
        const stateToChange = {};
        stateToChange[evt.target.id] = evt.target.value;
        this.setState(stateToChange);
    };

    /*
          Local method for validation, creating Employee object, and
          invoking the function reference passed from parent component
       */
    constructNewEmployee = evt => {
        evt.preventDefault();

            const employee = {
                name: this.state.name,
                image: this.state.image,
                password: this.state.password,
                email: this.state.email,
                locationId: this.state.locationId
            };
            console.log(employee)

            // Create the Employee and redirect user to Employee list
            this.props.addEmployee(employee)
            this.props.history.push("/employees")
        }


    render() {
        return (
            <React.Fragment>
                <form className="EmployeeForm">
                    <div className="form-group">
                        <label htmlFor="EmployeeName">Employee name</label>
                        <input
                            type="text"
                            required
                            className="form-control"
                            onChange={this.handleFieldChange}
                            id="name"
                            placeholder="Employee name"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="EmployeeName">Employee Email</label>
                        <input
                            type="text"
                            required
                            className="form-control"
                            onChange={this.handleFieldChange}
                            id="email"
                            placeholder="Email Address"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="EmployeeName">Employee Password</label>
                        <input
                            type="text"
                            required
                            className="form-control"
                            onChange={this.handleFieldChange}
                            id="password"
                            placeholder="Employee Password"
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="location"></label>
                        <select
                            defaultValue=""
                            name="location"
                            id="location"
                            onChange={this.handleFieldChange}
                        >
                            <option value="">Select a Location</option>
                            {this.props.locations.map(e => (
                                <option key={e.id} id={e.id} value={e.id}>
                                    {e.name}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="image"></label>
                        <select
                            defaultValue=""
                            name="image"
                            id="image"
                            onChange={this.handleFieldChange}
                        >
                            <option value="">Select an image</option>
                            <option key="1" id="1" value="/images/people/vestLady.png">Vest</option>
                            <option key="2" id="2" value="/images/people/farmerLady.png">Farmer</option>
                            <option key="3" id="3" value="/images/people/maleEmployee.png">Male</option>
                            <option key="4" id="4" value="/images/people/suitGuy.png">Suit</option>
                            <option key="5" id="5" value="/images/people/beardPerson.png">Beard</option>
                            <option key="6" id="6" value="/images/people/hardHatguy.png">Hard Hat</option>
                        </select>
                    </div>

                    <button
                        type="submit"
                        onClick={this.constructNewEmployee}
                        className="btn btn-primary"
                    >
                        Submit
          </button>
                </form>
            </React.Fragment>
        );
    }
}