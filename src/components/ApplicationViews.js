import { Route } from 'react-router-dom'
import React, { Component } from "react"
import AnimalList from './animal/AnimalList'
import LocationList from './location/LocationList'
import EmployeeList from './employee/EmployeeList'
import OwnerList from './owner/OwnerList'
import SearchResults from './search/SearchResults'
import AnimalAPIManager from "../modules/AnimalManager"
import EmployeeAPIManager from "../modules/EmployeeManager"
import LocationAPIManager from "../modules/LocationManager"
import OwnerAPIManager from "../modules/OwnerManager"
import SpeciesManager from "../modules/SpeciesManager"


export default class ApplicationViews extends Component {


    state = {
        locations: [],
        animals: [],
        employees: [],
        owners: [],
        species: [],

    }


    componentDidMount() {
        const newState = {}

        AnimalAPIManager.getAllAnimals()
            .then(animals => newState.animals = animals)
        EmployeeAPIManager.getAllEmployees()
            .then(employees => newState.employees = employees)
        LocationAPIManager.getAllLocations()
            .then(locations => newState.locations = locations)
        OwnerAPIManager.getAllOwners()
            .then(owners => newState.owners = owners)
        SpeciesManager.getAllSpecies()
            .then(species => newState.species = species)
            .then(() => this.setState(newState))

        // create an array for pets with info?
    }


    delete = {
        deleteAnimal: (id) => {
            AnimalAPIManager.deleteAnimal(id)
                .then(animals => this.setState({
                    animals: animals
                })
                )
        },
        deleteLocation: (id) => {
            LocationAPIManager.deleteLocation(id)
                .then(locations => this.setState({
                    locations: locations
                })
                )
        },
        deleteOwner: (id) => {
            OwnerAPIManager.deleteOwner(id)
                .then(owners => this.setState({
                    owners: owners
                })
                )
        },
        deleteEmployee: (id) => {
            EmployeeAPIManager.deleteEmployee(id)
                .then(employees => this.setState({
                    employees: employees
                })
                )
        }
    }









    render() {
        return (
            <React.Fragment >
                <Route exact path="/" render={(props) => {
                    return <LocationList locations={this.state.locations} deleteLocation={this.delete.deleteLocation} />
                }} />
                <Route path="/animals" render={(props) => {
                    return <AnimalList animals={this.state.animals} species={this.state.species} owners={this.state.owners} deleteAnimal={this.delete.deleteAnimal} />
                }} />
                <Route path="/employees" render={(props) => {
                    return <EmployeeList employees={this.state.employees} deleteEmployee={this.delete.deleteEmployee} />
                }} />
                <Route path="/owners" render={(props) => {
                    return <OwnerList owners={this.state.owners} pets={this.state.pets} animals={this.state.animals} deleteOwner={this.delete.deleteOwner} />
                }} />
                <Route path="/search" render={(props) => {
                    return <SearchResults {...props} petsWithInfo={this.state.petsWithInfo} />
                }} />

            </React.Fragment >
        )
    }
}


