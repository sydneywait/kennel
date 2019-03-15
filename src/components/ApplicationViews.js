import { Route, Redirect } from "react-router-dom"
import React, { Component } from "react"
import SearchResults from './search/SearchResults'
import AnimalAPIManager from "../modules/AnimalManager"
import EmployeeAPIManager from "../modules/EmployeeManager"
import LocationAPIManager from "../modules/LocationManager"
import OwnerAPIManager from "../modules/OwnerManager"
import ResourceAPIManager from "../modules/ResourceManager"
import OwnerForm from './owner/OwnerForm'
import EmployeeForm from './employee/EmployeeForm'
import AnimalForm from './animal/AnimalForm'
import Login from './authentication/Login'
import Logout from './authentication/Logout'
import Register from './authentication/Register'
import Giphy from './authentication/Giphy'
import AnimalEditForm from './animal/AnimalEditForm'
import OwnerEditForm from './owner/OwnerEditForm'
import EmployeeEditForm from './employee/EmployeeEditForm'
import ResourceList from './generics/ResourceList'
import ResourceDetail from './generics/ResourceDetail'
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

        ResourceAPIManager.getAllResources("animals")
            .then(animals => newState.animals = animals)
            .then(()=>ResourceAPIManager.getAllResources("employees"))
            .then(employees => newState.employees = employees)
            .then(()=>ResourceAPIManager.getAllResources("locations"))
            .then(locations => newState.locations = locations)
            .then(()=>ResourceAPIManager.getAllResources("owners"))
            .then(owners => newState.owners = owners)
            .then(ResourceAPIManager.getAllResources("species"))
            .then(species => newState.species = species)
            .then(() => this.setState(newState))

        // create an array for pets with info?
    }




    delete = {
        deleteAnimal: (id) => {
            return ResourceAPIManager.deleteResource(id, "animals")
                .then(animals => this.setState({
                    animals: animals

                })
                )
        },
        deleteLocation: (id) => {
            return ResourceAPIManager.deleteResource(id, "locations")
                .then(locations => this.setState({
                    locations: locations
                })
                )
        },
        deleteOwner: (id) => {
            return ResourceAPIManager.deleteResource(id, "owners")
                .then(owners => this.setState({
                    owners: owners
                })
                )
        },
        deleteEmployee: (id) => {
            return ResourceAPIManager.deleteResource(id, "employees")
                .then(employees => this.setState({
                    employees: employees
                })
                )
        }
    }

    patch = {

        patchOwner: (patchObject, id) => {
            return ResourceAPIManager.patchResource(patchObject, id, "owners")
                .then(owners => this.setState({
                    owners: owners
                })
                )
        }
    }
    add = {
        addAnimal: animalObject => {
            ResourceAPIManager.addNewResource(animalObject, "animals")
                .then(() => ResourceAPIManager.getAllResources("animals"))
                .then(animals =>
                    this.setState({
                        animals: animals
                    })
                )
        },

        addOwner: ownerObject => {
            ResourceAPIManager.addNewResource(ownerObject, "owners")
                .then(() => ResourceAPIManager.getAllResources("owners"))
                .then(owners =>
                    this.setState({
                        owners: owners
                    })
                )
        },
        addEmployee: employeeObject => {
            ResourceAPIManager.addNewResource(employeeObject, "employees")
                .then(() => ResourceAPIManager.getAllResources("employees"))
                .then(employees =>
                    this.setState({
                        employees: employees
                    })
                )
        }

    }




    edit ={
        editAnimal: (object) => {
            ResourceAPIManager.editResource(object, "animals")
            .then(() => ResourceAPIManager.getAllResources("animals"))
            .then(animals => {
              this.setState({
                animals: animals
                })
            })
        },

        editOwner: (object) => {
            ResourceAPIManager.editResource(object, "owners")
            .then(() => ResourceAPIManager.getAllResources("owners"))
            .then(owners => {
              this.setState({
                owners: owners
                })
            })
        },
        editEmployee: (object) => {
            ResourceAPIManager.editResource(object, "employees")
            .then(() => ResourceAPIManager.getAllResources("employees"))
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
                <Route exact path="/" render={(props) => {
                     if (this.isAuthenticated()) {
                        return <ResourceList {...props}
                            resource={this.state.locations}
                            ResourceName="Location"
                            resourceNames="locations"
                            />
                    }
                    else {
                        return <Redirect to="/login" />
                    }

                }} />
                <Route path="/locations/:locationId(\d+)" render={(props) => {

                        if (this.isAuthenticated()) {
                            return <ResourceDetail {...props}
                                resource={this.state.locations}
                                resourceName="location"
                                route ="locations"
                                deleteResource={this.delete.deleteLocation} />
                        }
                    else {
                        return <Redirect to="/login" />
                    }
                }} />

                <Route exact path="/animals" render={(props) => {
                    if (this.isAuthenticated()) {
                        return <ResourceList {...props}
                            resource={this.state.animals}
                            ResourceName="Animal"
                            resourceNames="animals"

                            species={this.state.species}/>
                    }

                    else { return <Redirect to="/login" /> };

                }} />
                <Route path="/animals/new" render={(props) => {
                    if (this.isAuthenticated()) {
                        return <AnimalForm {...props}
                            addAnimal={this.add.addAnimal}
                            employees={this.state.employees}
                            owners={this.state.owners}
                            species={this.state.species}
                        />
                    }
                    else { return <Redirect to="/login" /> }
                }} />
                <Route exact path="/animals/:animalId(\d+)" render={(props) => {
                    if (this.isAuthenticated()) {
                        return <ResourceDetail {...props}
                            resource={this.state.animals}
                            resourceName="animal"
                            route ="animals"
                            deleteResource={this.delete.deleteAnimal} />
                    }
                    else { return <Redirect to="/login" /> }
                }} />
                <Route
                    path="/animals/:animalId(\d+)/edit" render={props => {
                        return <AnimalEditForm {...props}
                        employees={this.state.employees}
                        editAnimal={this.edit.editAnimal}
                        species ={this.state.species}
                        owners={this.state.owners}/>
                    }}
                />
                <Route exact path="/employees" render={(props) => {
                     if (this.isAuthenticated()) {
                        return <ResourceList {...props}
                            resource={this.state.employees}
                            ResourceName="Employee"
                            resourceNames="employees"
                            />
                    }
                    else { return <Redirect to="/login" /> }
                }} />
                <Route exact path="/employees/:employeeId(\d+)" render={(props) => {
                    if (this.isAuthenticated()) {
                        return <ResourceDetail {...props}
                            resource={this.state.employees}
                            resourceName="employee"
                            route ="employees"
                            deleteResource={this.delete.deleteEmployee} />
                    }
                    else { return <Redirect to="/login" /> }
                }} />
                <Route path="/employees/:employeeId(\d+)/edit" render={props => {
                        return <EmployeeEditForm {...props}
                        employees={this.state.employees}
                        editEmployee={this.edit.editEmployee}
                        locations={this.state.locations}
                        />
                    }}/>
                <Route path="/employees/new" render={(props) => {
                    if (this.isAuthenticated()) {
                        return <EmployeeForm {...props}
                            employees={this.state.employees}
                            addEmployee={this.add.addEmployee}
                            locations={this.state.locations}
                        />
                    }
                    else { return <Redirect to="/login" /> }
                }} />
                <Route exact path="/owners" render={(props) => {
                    if (this.isAuthenticated()) {
                        return <ResourceList {...props}
                            resource={this.state.owners}
                            ResourceName="Owner"
                            resourceNames="owners"
                            />
                    }
                    else { return <Redirect to="/login" /> }

                }} />
                <Route exact path="/owners/:ownerId(\d+)" render={(props) => {
                    if (this.isAuthenticated()) {
                        return <ResourceDetail {...props}
                            resource={this.state.owners}
                            resourceName="owner"
                            route ="owners"
                            deleteResource={this.delete.deleteOwners} />
                    }
                    else { return <Redirect to="/login" /> }
                }} />
                <Route path="/owners/:ownerId(\d+)/edit" render={props => {
                        return <OwnerEditForm {...props}
                        owners={this.state.owners}
                        editOwner={this.edit.editOwner}
                        />
                    }}/>
                <Route path="/owners/new" render={(props) => {
                    if (this.isAuthenticated()) {
                        return <OwnerForm {...props}
                            owners={this.state.owners}
                            addOwner={this.add.addOwner}
                        />
                    }
                    else { return <Redirect to="/login" /> }

                }} />
                <Route path="/search" render={(props) => {
                    if (this.isAuthenticated()) {
                        return <SearchResults {...props} />
                    }
                    else { return <Redirect to="/login" /> }
                }} />
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


