import { Route, Redirect } from "react-router-dom"
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
import OwnerForm from './owner/OwnerForm'
import EmployeeForm from './employee/EmployeeForm'
import Login from './authentication/Login'
import Logout from './authentication/Logout'
import Register from './authentication/Register'
import Giphy from './authentication/Giphy'
import AnimalEditForm from './animal/AnimalEditForm'
import OwnerEditForm from './owner/OwnerEditForm'
import EmployeeEditForm from './employee/EmployeeEditForm'
import Callback from './authentication/Callback'
import Auth0Client from "./authentication/Auth"
export default class ApplicationViews extends Component {


    state = {
        locations: [],
        animals: [],
        employees: [],
        owners: [],
        species: [],

    }
    // Check if credentials are in local storage
    isAuthenticated = () => sessionStorage.getItem("credentials") !== null

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
        addAnimal: animalObject => {
            AnimalAPIManager.addNewAnimal(animalObject)
                .then(() => AnimalAPIManager.getAllAnimals())
                .then(animals =>
                    this.setState({
                        animals: animals
                    })
                )
        },

        addOwner: ownerObject => {
            OwnerAPIManager.addNewOwner(ownerObject)
                .then(() => OwnerAPIManager.getAllOwners())
                .then(owners =>
                    this.setState({
                        owners: owners
                    })
                )
        },
        addEmployee: EmployeeObject => {
            EmployeeAPIManager.addNewEmployee(EmployeeObject)
                .then(() => EmployeeAPIManager.getAllEmployees())
                .then(employees =>
                    this.setState({
                        employees: employees
                    })
                )
        }

    }

    // patchEmployee: (id) => {
    //     EmployeeAPIManager.patchEmployee(id)
    //         .then(employees => this.setState({
    //             employees: employees
    //         })
    //         )
    // }


    edit = {
        editAnimal: (object) => {
            AnimalAPIManager.editAnimal(object)
                .then(() => AnimalAPIManager.getAllAnimals())
                .then(animals => {
                    this.setState({
                        animals: animals
                    })
                })
        },

        editOwner: (object) => {
            OwnerAPIManager.editOwner(object)
                .then(() => OwnerAPIManager.getAllOwners())
                .then(owners => {
                    this.setState({
                        owners: owners
                    })
                })
        },
        editEmployee: (object) => {
            EmployeeAPIManager.editEmployee(object)
                .then(() => EmployeeAPIManager.getAllEmployees())
                .then(employees => {
                    this.setState({
                        employees: employees
                    })
                })
        },

    }

    render() {
        return (
            <React.Fragment >
                <Route exact path="/callback" component={Callback} />
                <Route exact path="/" render={(props) => {
                    if (Auth0Client.isAuthenticated()) {
                        return <LocationList {...props}
                            locations={this.state.locations}
                            deleteLocation={this.delete.deleteLocation} />
                    }
                    else {
                        Auth0Client.signIn();
                        return null;
                    }

                }} />
                <Route path="/locations/:locationId(\d+)" render={(props) => {
                    if (Auth0Client.isAuthenticated()) {
                        return <LocationDetail {...props}
                            locations={this.state.locations}
                            deleteLocation={this.delete.deleteLocation}
                            employees={this.state.employees}
                            animals={this.state.animals} />
                    }
                    else {
                        Auth0Client.signIn();
                        return null;
                    }
                }} />
                <Route exact path="/animals" render={(props) => {
                    if (Auth0Client.isAuthenticated()) {
                        return <AnimalList {...props}
                            animals={this.state.animals} />
                    }

                    else {
                        Auth0Client.signIn();
                        return null;  };

                    }
                } />
                <Route path="/animals/new" render={(props) => {
                    if (Auth0Client.isAuthenticated()) {
                        return <AnimalForm {...props}
                            addAnimal={this.add.addAnimal}
                            employees={this.state.employees}
                            owners={this.state.owners}
                            species={this.state.species}
                        />
                    }
                    else {
                        Auth0Client.signIn();
                        return null;  }
                    }
                } />
                <Route exact path="/animals/:animalId(\d+)" render={(props) => {
                    if (Auth0Client.isAuthenticated()) {
                        return <AnimalDetail {...props}
                            animals={this.state.animals}
                            species={this.state.species}
                            owners={this.state.owners}
                            deleteAnimal={this.delete.deleteAnimal} />
                    }
                    else {
                        Auth0Client.signIn();
                        return null;  }
                    }
                } />
                <Route
                    path="/animals/:animalId(\d+)/edit" render={props => {
                        return <AnimalEditForm {...props}
                            employees={this.state.employees}
                            editAnimal={this.edit.editAnimal}
                            species={this.state.species}
                            owners={this.state.owners} />
                    }}
                />
                <Route exact path="/employees" render={(props) => {
                    if (Auth0Client.isAuthenticated()) {
                        return <EmployeeList {...props}
                            employees={this.state.employees}
                            animals={this.state.animals}
                            locations={this.state.locations}
                            deleteEmployee={this.delete.deleteEmployee} />
                    }
                    else {
                        Auth0Client.signIn();
                        return null;  }
                    }
                } />
                <Route exact path="/employees/:employeeId(\d+)" render={(props) => {
                    if (Auth0Client.isAuthenticated()) {
                        return <EmployeeDetail {...props}
                            employees={this.state.employees}
                            animals={this.state.animals}
                            deleteEmployee={this.delete.deleteEmployee} />
                    }
                    else {
                        Auth0Client.signIn();
                        return null;  }
                    }
                } />
                <Route path="/employees/:employeeId(\d+)/edit" render={props => {
                    return <EmployeeEditForm {...props}
                        employees={this.state.employees}
                        editEmployee={this.edit.editEmployee}
                        locations={this.state.locations}
                    />
                }} />
                <Route path="/employees/new" render={(props) => {
                    if (Auth0Client.isAuthenticated()) {
                        return <EmployeeForm {...props}
                            employees={this.state.employees}
                            addEmployee={this.add.addEmployee}
                            locations={this.state.locations}
                        />
                    }
                    else {
                        Auth0Client.signIn();
                        return null;  }
                    }
                } />
                <Route exact path="/owners" render={(props) => {
                    if (Auth0Client.isAuthenticated()) {
                        return <OwnerList
                            {...props}
                            owners={this.state.owners}
                            animals={this.state.animals}
                            deleteOwner={this.delete.deleteOwner}
                            patchOwner={this.patch.patchOwner
                            } />
                    }
                    else {
                        Auth0Client.signIn();
                        return null;  }

                    }
                } />
                <Route exact path="/owners/:ownerId(\d+)" render={(props) => {
                    if (Auth0Client.isAuthenticated()) {
                        return <OwnerDetail {...props}
                            owners={this.state.owners}
                            deleteOwner={this.delete.deleteOwner}
                            patchOwner={this.patch.patchOwner} />
                    }
                    else {
                        Auth0Client.signIn();
                        return null;  }
                    }
                } />
                <Route path="/owners/:ownerId(\d+)/edit" render={props => {
                    return <OwnerEditForm {...props}
                        owners={this.state.owners}
                        editOwner={this.edit.editOwner}
                    />
                }} />
                <Route path="/owners/new" render={(props) => {
                    if (Auth0Client.isAuthenticated()) {
                        return <OwnerForm {...props}
                            owners={this.state.owners}
                            addOwner={this.add.addOwner}
                        />
                    }
                    else {
                        Auth0Client.signIn();
                        return null;  }

                    }
                } />
                <Route path="/search" render={(props) => {
                    if (Auth0Client.isAuthenticated()) {
                        return <SearchResults {...props} />
                    }
                    else {
                        Auth0Client.signIn();
                        return null;  }
                    }
                } />
                <Route path="/login" render={(props) => {
                    return <Login {...props}
                        employees={this.state.employees} />
                }} />
                <Route path="/logout" render={(props) => {
                    return <Logout {...props}
                    />
                }} />
                <Route path="/register" render={(props) => {
                    return <Register {...props}
                        employees={this.state.employees}
                        addEmployee={this.add.addEmployee} />

                }} />
                <Route path="/giphy" render={(props) => {
                    return <Giphy {...props} />

                }} />



            </React.Fragment >
        )
    }
}


