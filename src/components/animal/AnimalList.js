import React, { Component } from 'react'


class AnimalList extends Component {
    render() {
        return (
            <section className="animals">
            <h1>Animal List</h1>
            {
                this.props.animals.map(animal =>
                    <div key={animal.id}>

                        {animal.type}
                    </div>
                )
            }
            </section>
        )
    }
}

export default AnimalList