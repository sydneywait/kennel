// import React, {Component} from 'react';


// class LocationList extends Component {
//     render() {
//         return (
//             <article>
//                 <h1>Location List</h1>
//                 <h3>Student Kennels</h3>
//                 <section>
//                 <h4>Nashville North Location</h4>
//                 <h5>500 Puppy Way</h5>
//                 </section>
//                 <section>
//                 <h4>Nashville South Location</h4>
//                 <h5>123 Main St</h5>
//                 </section>
//             </article>
//         );
//     }
// }

// export default LocationList;

import React, { Component } from 'react'


class LocationList extends Component {
    render() {
        return (
            <section className="Locations">
            <h1>Location List</h1>
            {
                this.props.locations.map(location =>
                    <div key={location.id}>
                        {location.name} - {location.address}
                    </div>
                )
            }
            </section>
        )
    }
}

export default LocationList