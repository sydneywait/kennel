import { Route } from 'react-router-dom'
import React, { Component } from "react"
import AnimalList from './animal/AnimalList'
import LocationList from './location/LocationList'
import EmployeeList from './employee/EmployeeList'
import OwnerList from './owner/OwnerList'


class ApplicationViews extends Component {
    employeesFromAPI = [
        { id: 1, name: "Jessica Younker" },
        { id: 2, name: "Jordan Nelson" },
        { id: 3, name: "Zoe LeBlanc" },
        { id: 4, name: "Blaise Roberts" }
    ]

    locationsFromAPI = [
        { id: 1, name: "Nashville North", address: "500 Circle Way" },
        { id: 2, name: "Nashville South", address: "10101 Binary Court" }
    ]

    animalsFromAPI = [
        { id: 1, name: "cat" },
        { id: 2, name: "dog" },
        { id: 3, name: "chicken" },
        { id: 4, name: "hamster" },
        { id: 5, name: "horse" },
        { id: 6, name: "snake" }
    ]
    ownersFromAPI = [
        { id: 1, name: "Ryan Tanay", phone: "304-123-4567" },
        { id: 2, name: "Emma Beaton", phone: "304-123-4567" },
        { id: 3, name: "Dani Adkins", phone: "304-123-4567" },
        { id: 4, name: "Adam Oswalt", phone: "304-123-4567" },
        { id: 5, name: "Fletcher Bangs", phone: "304-123-4567" },
        { id: 6, name: "Angela Lee", phone: "304-123-4567" }
    ]

    petsFromAPI = [
        { id: 1, name: "Oscar", ownerId: 1, animalId: 1 },
        { id: 2, name: "Henny", ownerId: 2, animalId: 2 },
        { id: 3, name: "Peanut", ownerId: 3, animalId: 3 },
        { id: 4, name: "Polly", ownerId: 4, animalId: 4 },
        { id: 5, name: "Charlie", ownerId: 5, animalId: 1 },
        { id: 6, name: "Max", ownerId: 6, animalId: 2 },
        { id: 7, name: "Spot", ownerId: 1, animalId: 3 },
        { id: 8, name: "Sam", ownerId: 2, animalId: 4 }
    ]

    state = {
        employees: this.employeesFromAPI,
        locations: this.locationsFromAPI,
        animals: this.animalsFromAPI,
        owners: this.ownersFromAPI,
        pets: this.petsFromAPI
    }

    render() {
        return (
            <React.Fragment >
                <Route exact path="/" render={(props) => {
                    return <LocationList locations={this.state.locations} />
                }} />
                <Route path="/animals" render={(props) => {
                    return <AnimalList animals={this.state.animals} />
                }} />
                <Route path="/employees" render={(props) => {
                    return <EmployeeList employees={this.state.employees} />
                }} />
                <Route path="/owners" render={(props) => {
                    return <OwnerList owners={this.state.owners} pets={this.state.pets} animals ={this.state.animals}/>
                }} />
            </React.Fragment >
        )
    }
}

export default ApplicationViews