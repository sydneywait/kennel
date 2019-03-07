// import React, { Component } from 'react'


// class OwnerList extends Component {
//     render() {
//         return (
//             <section className="owners">
//                 <h1>Owner List</h1>
//                 {
//                     this.props.pets.map(pet => {
//                         console.log(this.props.owners.find(owner => owner.id === parseInt(pet.ownerId)).name)
//                         return <div key={pet.id}>
//                     {pet.name} - ({this.props.animals.find(animal => animal.id === parseInt(pet.animalId)).name}) - -{this.props.owners.find(owner => owner.id === parseInt(pet.ownerId)).name}
//                         </div>

//                     })

//                 }
//             </section>
//         )
//     }
// }

// export default OwnerList

import React, { Component } from 'react'
import OwnerIcon from "./OwnerIcon.png"
import "./Owner.css"

export default class OwnerList extends Component {
    render () {
        return (
            <section className="owners">
            {
                this.props.owners.map(owner =>
                    <div key={owner.id} className="card">
                        <div className="card-body">
                            <h5 className="card-title">
                                <img src={OwnerIcon} className="icon--owner" />
                                <p>{owner.name}</p>
                                {owner.phone}
                                <a href="#"
                                    onClick={() => this.props.deleteOwner(owner.id)}
                                    className="card-link">Delete</a>
                            </h5>
                        </div>
                    </div>
                )
            }
            </section>
        )
    }
}