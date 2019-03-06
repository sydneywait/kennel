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



