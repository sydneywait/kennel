import React, { Component } from 'react'


class OwnerList extends Component {
    render() {
        return (
            <section className="owners">
                <h1>Owner List</h1>
                {
                    this.props.pets.map(pet => {
                        console.log(this.props.owners.find(owner => owner.id === parseInt(pet.ownerId)).name)
                        return <div key={pet.id}>
                    {pet.name} - ({this.props.animals.find(animal => animal.id === parseInt(pet.animalId)).name}) - -{this.props.owners.find(owner => owner.id === parseInt(pet.ownerId)).name}
                        </div>

                    })

                }
            </section>
        )
    }
}

export default OwnerList

