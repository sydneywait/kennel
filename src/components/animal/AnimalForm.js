import React, { Component } from "react";
import "./Animal.css";


export default class AnimalForm extends Component {

    // Set initial state
    state = {
        name: "",
        ownerId:"",
        speciesId: "",
        employeeId: ""
    };

    // Update state whenever an input field is edited
    handleFieldChange = evt => {
        const stateToChange = {};
        stateToChange[evt.target.id] = evt.target.value;
        this.setState(stateToChange);
    };

    /*
          Local method for validation, creating animal object, and
          invoking the function reference passed from parent component
       */
    constructNewAnimal = evt => {
        evt.preventDefault();
        if (this.state.employee === "") {
            window.alert("Please select a caretaker");
        }
        else if (this.state.owner === "") {
            window.alert("Please select an owner");
        }else {
            const animal = {
                name: this.state.name,
                // Make sure the Ids are saved to the database as a number since it is a foreign key.
                ownerId: parseInt(this.state.ownerId),
                speciesId: parseInt(this.state.speciesId),
                employeeId: parseInt(this.state.employeeId),
                image:"/images/placeholder.jpg"

            };

            // Create the animal and redirect user to animal list
            this.props.addAnimal(animal)
                this.props.history.push("/animals")
        }
    };

    render() {
        return (
            <React.Fragment>
                <form className="animalForm">
                    <div className="form-group">
                        <label htmlFor="animalName">Animal name</label>
                        <input
                            type="text"
                            required
                            className="form-control"
                            onChange={this.handleFieldChange}
                            id="name"
                            placeholder="Animal name"
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="owner"></label>
                        <select
                            defaultValue=""
                            required
                            name="owner"
                            id="ownerId"
                            onChange={this.handleFieldChange}
                        >
                            <option value="">Select an owner</option>
                            {this.props.owners.map(e => (
                                <option key={e.id} id={e.id} value={e.id}>
                                    {e.name}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="species"></label>
                        <select
                            defaultValue=""
                            required
                            name="species"
                            id="speciesId"
                            onChange={this.handleFieldChange}
                        >
                            <option value="">Select a species</option>
                            {this.props.species.map(e => (
                                <option key={e.id} id={e.id} value={e.id}>
                                    {e.name}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="employee">Assign to caretaker</label>{"\n"}
                        <select
                            defaultValue=""
                            required
                            name="employee"
                            id="employeeId"
                            onChange={this.handleFieldChange}
                        >
                            <option value="" required>Select an employee</option>
                            {this.props.employees.map(e => (
                                <option key={e.id} id={e.id} value={e.id}>
                                    {e.name}
                                </option>
                            ))}
                        </select>
                    </div>
                    <button
                        type="submit"
                        onClick={this.constructNewAnimal}
                        className="btn btn-primary"
                    >
                        Submit
          </button>
                </form>
            </React.Fragment>
        );
    }
}