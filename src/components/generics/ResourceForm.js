import React, { Component } from "react"
import AnimalManager from "../../modules/AnimalManager"

export default class ResourceForm extends Component {
    // Set initial state
    object = {
        id: 1,
        name: "Oscar",
        ownerId: 1,
        speciesId: 1,
        image: "/images/animals/dog.png",
        isActive: true
    }

    newState = [];

    for(const k in object) {
    newState += [
        {k : object.k}
    ]
    console.log(newState)
}

createTextForm = (k) => {

    return <React.Fragment>
        <div className="form-group">
            <label htmlFor={k}></label>
            <input
                type="text"
                required
                className="form-control"
                onChange={this.handleFieldChange}
                id={k}
                {(this.props.match.param(edit) ? placeholder = { k } : value = this.state.k)}
            />
        </div>
    </React.Fragment>

}

createDropDownForm = (k) => {
    return <React.Fragment>
        <div className="form-group">
            <label htmlFor={k}>Species</label>
            <select
                name={k}
                id={k}
                onChange={this.handleFieldChange}
                value={this.state.k}
            >
                <option value="">Select a species</option>
                {this.props[{ key }].map(e => (
                    <option key={e.id} id={e.id} value={e.id}>
                        {e.name}
                    </option>
                ))}
            </select>
        </div>
    </React.Fragment>
}
state = {
    name: "",
    speciesId: "",
    employeeId: "",
    ownerId: ""
}


handleFieldChange = evt => {
    const stateToChange = {}
    stateToChange[evt.target.id] = evt.target.value
    this.setState(stateToChange)
}

updateExistingAnimal = evt => {
    evt.preventDefault()

    if (this.state.employee === "") {
        window.alert("Please select a caretaker");
    } else {
        const editedAnimal = {
            id: this.props.match.params.animalId,
            name: this.state.name,
            speciesId: parseInt(this.state.speciesId),
            employeeId: parseInt(this.state.employeeId),
            ownerId: parseInt(this.state.ownerId),
            image: "/images/placeholder.jpg"
        };

        this.props.editAnimal(editedAnimal)
        this.props.history.push("/animals")
    }
}

componentDidMount() {
    AnimalManager.getSingleAnimal(this.props.match.params.animalId)
        .then(animal => {
            this.setState({
                name: animal.name,
                speciesId: animal.speciesId,
                employeeId: animal.employeeId,
                ownerId: animal.ownerId
            });
        });
}


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
                        value={this.state.name}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="species">Species</label>
                    <select
                        name="species"
                        id="speciesId"
                        onChange={this.handleFieldChange}
                        value={this.state.speciesId}
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
                    <label htmlFor="employee">Assign to caretaker</label>
                    <select
                        name="employee"
                        id="employeeId"
                        onChange={this.handleFieldChange}
                        value={this.state.employeeId}
                    >
                        <option value="">Select an employee</option>
                        {this.props.employees.map(e => (
                            <option key={e.id} id={e.id} value={e.id}>
                                {e.name}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="owner">Select Owner</label>
                    <select
                        name="owner"
                        id="ownerId"
                        onChange={this.handleFieldChange}
                        value={this.state.employeeId}
                    >
                        <option value="">Select Owner</option>
                        {this.props.owners.map(e => (
                            <option key={e.id} id={e.id} value={e.id}>
                                {e.name}
                            </option>
                        ))}
                    </select>
                </div>
                <button
                    type="submit"
                    onClick={this.updateExistingAnimal}
                    className="btn btn-primary"
                >
                    Submit
            </button>
            </form>
        </React.Fragment>
    );
}
}