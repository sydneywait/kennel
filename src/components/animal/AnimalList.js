import React, { Component } from 'react'
import "./Animal.css"

export default class AnimalList extends Component {
    render() {
        // console.log(this.props.animals)

        return (
            <section className="animals">
                {
                    this.props.animals.map((animal) => {
                        let activeK = ["all", "0"]

                        const species = animal.species.name

                        if (typeof (this.props.location.state) !== "undefined") {
                            activeK = this.props.location.state.activeK

                        }
                        else{
                            activeK=["all", "0"]
                        }

                        if (species === activeK[0] || activeK[0] === "all") {

                            const speciesLink = animal.species.image
                            const owner = animal.owner.name

                            return <div key={animal.id} className="card">
                                <div className="card-body">
                                    <h5 className="card-title">
                                        <img src={window.location.origin + speciesLink} className="icon--animal" alt="error" />
                                        <p>{animal.name}</p>
                                        <p className="ownerName">Owner: {owner}</p>
                                        <a href="#"
                                            onClick={() => this.props.deleteAnimal(animal.id)}

                                            className="card-link">Delete</a>
                                    </h5>
                                </div>
                            </div>
                        }

                        else {
                            console.log("no match", species, activeK[0])
                        }
                    })



                }
            </section>
        )
    }
}


