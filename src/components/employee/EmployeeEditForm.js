import React, { Component } from "react"
import EmployeeManager from "../../modules/EmployeeManager"


// this.props.match (route)
// pass a boolean on edit or not
export default class EmployeeEditForm extends Component {
    // Set initial state
    state = {
        name: "",
        image: "",
        email: "",
        password: "",
        locationId:""
    }


    handleFieldChange = evt => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }

    updateExistingEmployee = evt => {
        evt.preventDefault()

            const editedEmployee = {
// this line is added
                id: this.props.match.params.employeeId,
                name: this.state.name,
                image: this.state.image,
                email: this.state.email,
                password: this.state.password,
                locationId: this.state.locationId


            };
// this line is edit instead of add
            this.props.editEmployee(editedEmployee)
            this.props.history.push("/employees")
        }

//this is optional on form
    componentDidMount() {
        EmployeeManager.getSingleEmployee(this.props.match.params.employeeId)
            .then(employee => {
                this.setState({
                    name: employee.name,
                    image: employee.image,
                    email: employee.email,
                    password: employee.password,
                    locationId: employee.locationId
                });
            });
    }

    render() {
        return (
            <React.Fragment>
                <form className="employeeForm">
                    <div className="form-group">
                        <label htmlFor="employeeName">Employee name</label>
                        <input
                            type="text"
                            required
                            className="form-control"
                            onChange={this.handleFieldChange}
                            id="name"
                            //populated value instead of placeholder
                            value={this.state.name}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="location"></label>
                        <select
                            defaultValue=""
                            name="location"
                            id="location"
                            onChange={this.handleFieldChange}
                            // value instead of placeholder
                            value={this.state.locationId}
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
                        <label htmlFor="image">Image</label>
                        <select
                            name="image"
                            id="image"
                            onChange={this.handleFieldChange}
                            //value instead of placeholder
                            value={this.state.image}
                        >

                            <option key="1" id="1" value="/images/people/vestLady.png">Vest</option>
                            <option key="2" id="2" value="/images/people/farmerLady.png">Farmer</option>
                            <option key="3" id="3" value="/images/people/maleEmployee.png">Male</option>
                            <option key="4" id="4" value="/images/people/suitGuy.png">Suit</option>
                            <option key="5" id="5" value="/images/people/beardPerson.png">Beard</option>
                            <option key="6" id="6" value="/images/people/hardHatguy.png">Hard Hat</option>

                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="employeeEmail">Employee Email</label>
                        <input
                            type="email"
                            required
                            className="form-control"
                            onChange={this.handleFieldChange}
                            id="email"
                            // value instead of placeholder
                            value={this.state.email}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="employeePassword">Employee Password</label>
                        <input
                            type="text"
                            required
                            className="form-control"
                            onChange={this.handleFieldChange}
                            id="password"
                            value={this.state.password}
                        />
                    </div>







                    <button
                        type="submit"
                        // update instead of construct new
                        onClick={this.updateExistingEmployee}
                        className="btn btn-primary"
                    >
                        Submit
            </button>
                </form>
            </React.Fragment>
        );
    }
}