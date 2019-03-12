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
import AnimalDetail from './animal/AnimalDetail'
import EmployeeDetail from './employee/EmployeeDetail'
import OwnerDetail from './owner/OwnerDetail'
import LocationDetail from './location/LocationDetail'
import AnimalForm from './animal/AnimalForm'

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
            .then(EmployeeAPIManager.getAllEmployees)
            .then(employees => newState.employees = employees)
            .then(LocationAPIManager.getAllLocations)
            .then(locations => newState.locations = locations)
            .then(OwnerAPIManager.getAllOwners)
            .then(owners => newState.owners = owners)
            .then(SpeciesManager.getAllSpecies)
            .then(species => newState.species = species)
            .then(() => this.setState(newState))

        // create an array for pets with info?
    }


    delete = {
        deleteAnimal: (id) => {
            return AnimalAPIManager.deleteAnimal(id)
                .then(animals => this.setState({
                    animals: animals

                })
                )
        },
        deleteLocation: (id) => {
            return LocationAPIManager.deleteLocation(id)
                .then(locations => this.setState({
                    locations: locations
                })
                )
        },
        deleteOwner: (id) => {
            return OwnerAPIManager.deleteOwner(id)
                .then(owners => this.setState({
                    owners: owners
                })
                )
        },
        deleteEmployee: (id) => {
            return EmployeeAPIManager.deleteEmployee(id)
                .then(employees => this.setState({
                    employees: employees
                })
                )
        }
    }

    patch = {
        // patchAnimal: (id) => {
        //     AnimalAPIManager.patchAnimal(id)
        //         .then(animals => this.setState({
        //             animals: animals
        //         })
        //         )
        // },
        // patchLocation: (id) => {
        //     LocationAPIManager.patchLocation(id)
        //         .then(locations => this.setState({
        //             locations: locations
        //         })
        //         )
        // },
        patchOwner: (patchObject, id) => {
            return OwnerAPIManager.patchOwner(patchObject, id)
                .then(owners => this.setState({
                    owners: owners
                })
                )
        }
    }
    add = {
        addAnimal: animalObject =>
            AnimalAPIManager.addNewAnimal(animalObject)
                .then(() => AnimalAPIManager.getAllAnimals())
                .then(animals =>
                    this.setState({
                        animals: animals
                    })
                )
    }

    // patchEmployee: (id) => {
    //     EmployeeAPIManager.patchEmployee(id)
    //         .then(employees => this.setState({
    //             employees: employees
    //         })
    //         )
    // }


    // edit ={
    //     editAnimal: (id) => {
    //         AnimalAPIManager.editAnimal(id)
    //             .then(animals => this.setState({
    //                 animals: animals
    //             })
    //             )
    //     },
    //     editLocation: (id) => {
    //         LocationAPIManager.editLocation(id)
    //             .then(locations => this.setState({
    //                 locations: locations
    //             })
    //             )
    //     },
    //     editOwner: (id) => {
    //         OwnerAPIManager.editOwner(id)
    //             .then(owners => this.setState({
    //                 owners: owners
    //             })
    //             )
    //     },
    //     editEmployee: (id) => {
    //         EmployeeAPIManager.editEmployee(id)
    //             .then(employees => this.setState({
    //                 employees: employees
    //             })
    //             )
    //     }

    // }

    render() {
        return (
            <React.Fragment >
                <Route exact path="/" render={(props) => {
                    return <LocationList {...props} locations={this.state.locations} deleteLocation={this.delete.deleteLocation} />
                }} />
                <Route path="/locations/:locationId(\d+)" render={(props) => {
                    return <LocationDetail {...props} locations={this.state.locations} deleteLocation={this.delete.deleteLocation} />
                }} />
                <Route exact path="/animals" render={(props) => {
                    return <AnimalList {...props}
                        animals={this.state.animals} />
                }} />
                <Route path="/animals/new" render={(props) => {
                    return <AnimalForm {...props}
                        addAnimal={this.add.addAnimal}
                        employees={this.state.employees}
                        owners={this.state.owners}
                        species={this.state.species}
                    />
                }} />
                <Route path="/animals/:animalId(\d+)" render={(props) => {
                    return <AnimalDetail {...props} animals={this.state.animals} species={this.state.species} owners={this.state.owners} deleteAnimal={this.delete.deleteAnimal} />
                }} />
                <Route exact path="/employees" render={(props) => {
                    return <EmployeeList {...props} employees={this.state.employees} deleteEmployee={this.delete.deleteEmployee} />
                }} />
                <Route path="/employees/:employeeId(\d+)" render={(props) => {
                    return <EmployeeDetail {...props} employees={this.state.employees} deleteEmployee={this.delete.deleteEmployee} />
                }} />
                <Route exact path="/owners" render={(props) => {
                    return <OwnerList
                        {...props}
                        owners={this.state.owners}
                        animals={this.state.animals}
                        deleteOwner={this.delete.deleteOwner}
                        patchOwner={this.patch.patchOwner
                        } />
                }} />
                <Route path="/owners/:ownerId(\d+)" render={(props) => {
                    return <OwnerDetail {...props} owners={this.state.owners} deleteOwner={this.delete.deleteOwner} patchOwner={this.patch.patchOwner} />
                }} />
                <Route path="/search" render={(props) => {
                    return <SearchResults {...props} petsWithInfo={this.state.petsWithInfo} />
                }} />


            </React.Fragment >
        )
    }
}


