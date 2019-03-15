import React, { Component } from 'react'
import "./Animal.css"
import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form"
import ResourceCard from "../generics/ResourceCard"

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
                        <option value="">Select a species</option>
                        <option selected="selected">all</option>
                            {this.props.species.map(e => (
                                <option key={e.id} id={e.id} value={e.id}>
                                    {e.name}
                                </option>
                            ))}
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

                                return <ResourceCard
                                    key={animal.id}
                                    resource={animal} {...this.props} />
                            }
                            if (this.state.selected === species && status === this.state.active) {

                                return <ResourceCard
                                    key={animal.id}
                                    resource={animal} {...this.props} />
                            }
                            if (this.state.selected === "all" && this.state.active === "all") {
                                return <ResourceCard
                                    key={animal.id}
                                    resource={animal} {...this.props} />

                            }
                            if (this.state.selected === species && this.state.active === "all")
                                return <ResourceCard
                                    key={animal.id}
                                    resource={animal} {...this.props} />

                            else {

                            }

                        })
                    }
                </section>
            </React.Fragment>
        )
    }
}


