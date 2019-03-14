import React, { Component } from 'react'
import "./Animal.css"
import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form"

export default class AnimalList extends Component {
    state = {
        selected: "all",
        active: "true"
    }
    createDropdownSpeciesSort() {
        return (
            <React.Fragment>

                <Form.Group controlId="exampleForm.ControlSelect1">
                    <Form.Control as="select" onChange={this.handleSelect}>
                        <option selected="selected">all</option>
                        <option>cat</option>
                        <option>dog</option>
                        <option>chicken</option>
                        <option>hamster</option>
                        <option>horse</option>
                        <option>snake</option>
                    </Form.Control>
                </Form.Group>

            </React.Fragment>
        )

    }
    createDropdownActiveSort() {
        return (
            <React.Fragment>

                <Form.Group controlId="exampleForm.ControlSelect1">
                    <Form.Control as="select" onChange={this.handleSelect2}>
                        <option value="all">all</option>
                        <option selected="selected" defaultValue="true">active</option>
                        <option value="false">inactive</option>
                    </Form.Control>
                </Form.Group>

            </React.Fragment>
        )

    }
    // Update state whenever an input field is edited
    handleFieldChange = evt => {
        console.log("this is evt", evt)
        console.log("this is evt.target.id", evt.target.id)
        console.log("this is evt.target.value", evt.target.value)
        const stateToChange = {};
        stateToChange[evt.target.id] = evt.target.value;
        this.setState(stateToChange);
    };

    createAnimalCard(animal) {
        let cardClass = ""
        if (animal.owner.isActive === true) {
            cardClass = "card-body active"
        }
        else {
            cardClass = "card-body inactive"
        }
        return (
            <React.Fragment>

                <div key={animal.id} className="card">
                    <div className={cardClass}>
                        <h5 className="card-title">
                            <img src={window.location.origin + animal.species.image} className="icon--animal" alt="error" />
                            <p>{animal.name}</p>
                            <Link className="nav-link" to={`/animals/${animal.id}`}>Details</Link>

                        </h5>
                    </div>
                </div>

            </React.Fragment>
        )
    }


    handleSelect = (evt) => {
        const newState = {}
        newState.selected = evt.target.value
        this.setState(newState)
    }
    handleSelect2 = (evt) => {
        const newState = {}
        newState.active = evt.target.value
        this.setState(newState)
    }

    render() {
        return (
            <React.Fragment>
                <div className="animalHeader">
                    <div className="speciesSort">{this.createDropdownSpeciesSort()}</div>
                    <div className="activeSort">{this.createDropdownActiveSort()}</div>
                    <div className="animalButton">
                        <button type="button"
                            className="btn btn-success"
                            onClick={() => {
                                this.props.history.push("/animals/new")
                            }
                            }>Admit Animal
                    </button>
                    </div>
                </div>
                <section className="animals">

                    {

                        this.props.animals.map((animal) => {
                            console.log(animal)
                            console.log(animal.owner)
                            const status = animal.owner.isActive.toString()
                            const species = animal.species.name
                            if (this.state.selected === "all" && status === this.state.active) {

                                return <div>{this.createAnimalCard(animal)}
                                </div>
                            }
                            if (this.state.selected === species && status === this.state.active) {

                                return <div>{this.createAnimalCard(animal)}
                                </div>
                            }
                            if (this.state.selected === "all" && this.state.active === "all") {
                                return <div>{this.createAnimalCard(animal)}
                                </div>
                            }
                            if (this.state.selected === species && this.state.active === "all")
                                return <div>{this.createAnimalCard(animal)}
                                </div>

                            else {

                            }

                        })}
                </section>
            </React.Fragment>
        )
    }
}


