import React, { Component } from 'react'


class AnimalList extends Component {
    render() {
        return (
            <section className="animals" key="animals">
                <h1>Animal List</h1>


                {this.props.animals.map(animal =>
                    <div key={animal.id}>
                        {animal.name}

                    </div>)}

            </section>
        )
    }
}

export default AnimalList


// this.props.pets.map(pet =>
//     <div key={pet.id}>
//         <strong><div>Name: {pet.name}</div></strong>
//         <div>Type: {this.props.animals.find(animal=>animal.id===pet.animalId).type}</div>
//         <div>Owner: {this.props.owners.find(owner =>owner.id === pet.ownerId).name}</div><br></br>
//     </div>
// )

