import React, { Component } from "react"
import "./Animal.css"




export default class AnimalDetail extends Component {
    render() {
        /*
            Using the route parameter, find the animal that the
            user clicked on by looking at the `this.props.animals`
            collection that was passed down from ApplicationViews
        */
        const animal = this.props.animals.find(a => a.id === parseInt(this.props.match.params.animalId)) || {}
        const speciesLink = animal.species.image
        const owner = animal.owner.name
        console.log(animal)
        console.log(this.props)
        return (
            <section className="animal">
                <div key={animal.id} className="card">
                    <div className="card-body">
                        <h4 className="card-title">
                            <img src={window.location.origin + speciesLink} className="icon--animal" />
                            {animal.name}
                        </h4>
                        <h5 className="card-title">{animal.species.name}</h5>
                        <p className="ownerName">Owner: {owner}</p>
                        <a href="#" onClick={() => {
                            this.props.deleteAnimal(animal.id)
                            this.props.history.push("/animals")
                        }}


                            className="card-link">Delete</a>
                    </div>
                </div>
            </section>
        )
    }
}