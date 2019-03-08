// import React, { Component } from "react"
// import { Link } from "react-router-dom"

// export default class AnimalResults extends Component {

// displayAnimals = ()=>{

//     if (this.props.location.state.animals.length) {
//         return (
//             <React.Fragment>
//                 <h3>Matching Animals</h3>
//                 <ul>
//                     {
//                         this.props.location.state.animals.map(item => <div key = {item.id}>{item.name}</div>)
//                     }
//                 </ul>
//             </React.Fragment>
//         )
//     }
// }
// }

import React, { Component } from 'react'
import "./Animal.css"

export default class AnimalResults extends Component {
    displayAnimals = ()=>{
        console.log("inside animal results", this.props.location.state.animals)
// Data Structure
// id: 1
// name: "Oscar"
// owner:
//     goldMembership: true
//     id: 1
//     image: "/images/people/boy.png"
//     isActive: false
//     name: "Ryan Tanay"
//     phone: "304-123-4567"
//     ownerId: "1"
// species:
//     id: 1
//     image: "/images/animals/cat.png"
//     name: "cat"

    return (
            <section className="animals">
                {
                    this.props.location.state.animals.map((animal) => {
                        const species = animal.species.name
                        const image = animal.species.image
                        const owner = animal.owner.name

                        // console.log(species, speciesLink, owner)
                        return <div key={animal.id} className="card">
                            <div className="card-body">
                                <h5 className="card-title">
                                    <img src={window.location.origin + image} className="icon--animal" alt="error" />
                                    <p>{animal.name}</p>
                                    <p className = "ownerName">Owner: {owner}</p>
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







render() {
    return (
        <React.Fragment>

            {this.displayAnimals()}

        </React.Fragment>
    )
}
}
