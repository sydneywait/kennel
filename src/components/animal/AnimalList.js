import React, { Component } from 'react'
import "./Animal.css"

export default class AnimalList extends Component {
    render() {
        console.log(this.props.animals)
        return (
            <section className="animals">
                {
                    this.props.animals.map((animal) => {
                        const species = this.props.species.find(species => species.id === parseInt(animal.speciesId)).name
                        const speciesLink = this.props.species.find(species => species.id === parseInt(animal.speciesId)).image
                        const owner = this.props.owners.find(owner => owner.id===parseInt(animal.ownerId)).name

                        console.log(species, speciesLink, owner)
                        return <div key={animal.id} className="card">
                            <div className="card-body">
                                <h5 className="card-title">
                                    <img src={window.location.origin + speciesLink} className="icon--animal" alt="error" />
                                    <p>{animal.name}</p>
                                    <p class = "ownerName">Owner: {owner}</p>
                                    <a href="#"
                                        onClick={() => this.props.deleteAnimal(animal.id)}
                                        className="card-link">Delete</a>
                                </h5>
                            </div>
                        </div>
                    })
                }
            </section>
        )
    }
}


