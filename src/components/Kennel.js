// import React, {Component} from 'react';
// import EmployeeList from "./employee/EmployeeList"
// import LocationList from "./location/LocationList"
// import "./Kennel.css"


// class Kennel extends Component {
//     render() {
//         return (
//             <div>
//                 <LocationList />
//                 <EmployeeList />

//             </div>
//         );
//     }
// }

// export default Kennel;

import React, { Component } from "react"
import EmployeeList from "./employee/EmployeeList"
import LocationList from "./location/LocationList"
import AnimalList from "./animal/AnimalList"
import PetList from "./pet/PetList"
import "./Kennel.css"


class Kennel extends Component {

    /*
        Although you will eventually be pulling your objects
        from your json-server API, for this chapter, we're
        faking it and just creating those arrays in the component
        itself
    */
    employeesFromAPI = [
        { id: 1, name: "Jessica Younker" },
        { id: 2, name: "Jordan Nelson" },
        { id: 3, name: "Zoe LeBlanc" },
        { id: 4, name: "Blaise Roberts" }
    ]

    // This will eventually get pulled from the API
    locationsFromAPI = [
        { id: 1, name: "Nashville North", address: "500 Circle Way" },
        { id: 2, name: "Nashville South", address: "10101 Binary Court" }
    ]

    animalsFromApi = [

        { id: 1, type: "cat" },
        { id: 2, type: "chicken" },
        { id: 3, type: "hamster" },
        { id: 4, type: "parrot" },
    ]

    ownersFromAPI = [
        { id: 1, name: "Ryan Tanay" },
        { id: 2, name: "Emma Beaton" },
        { id: 3, name: "Dani Adkins" },
        { id: 4, name: "Adam Oswalt" },
        { id: 5, name: "Fletcher Bangs" },
        { id: 6, name: "Angela Lee" }
    ]

    petsFromAPI = [
        { id: 1, name: "Oscar", ownerId: "1", animalId: "1" },
        { id: 2, name: "Henny", ownerId: "2", animalId: "2" },
        { id: 3, name: "Peanut", ownerId: "3", animalId: "3" },
        { id: 4, name: "Polly", ownerId: "4", animalId: "4" },
        { id: 5, name: "Charlie", ownerId: "5", animalId: "1" },
        { id: 1, name: "Max", ownerId: "6", animalId: "2" },
        { id: 1, name: "Spot", ownerId: "1", animalId: "3" },
        { id: 1, name: "Sam", ownerId: "2", animalId: "4" },
    ]

    state = {
        employees: this.employeesFromAPI,
        locations: this.locationsFromAPI,
        animals: this.animalsFromApi,
        owners: this.ownersFromAPI,
        pets: this.petsFromAPI
    }

    render() {
        return (
            <article className="kennel">
                <LocationList locations={this.state.locations} />
                <EmployeeList employees={this.state.employees} />
                <AnimalList animals={this.state.animals} />
                {/* <PetList pets = {this.state.pets} /> */}
            </article>
        )
    }
}

export default Kennel

