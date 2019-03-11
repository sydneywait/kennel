import React, { Component } from 'react'
import "./Animal.css"
import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form"

export default class AnimalList extends Component {
    state = {
        selected: ""
    }
    createDropdownSort() {
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

    createAnimalCard(animal) {
        return (
            <React.Fragment>

                <div key={animal.id} className="card">
                    <div className="card-body">
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

    render() {
                return (

            <section className="animals">
                <div>{this.createDropdownSort()}</div>
                {

                    this.props.animals.map((animal) => {
                        console.log(animal)
                        if (animal.species.name === this.state.selected || this.state.selected === "all" || this.state.selected === "") {

                            return <div>{this.createAnimalCard(animal)}
                            </div>
                        }
                        else {

                        }

                    })}
            </section>
        )
    }
}


