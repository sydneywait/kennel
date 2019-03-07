import React, { Component } from "react"
import { Link } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"
export default class NavBar extends Component {

    state = { searchTerms: "" }

    render() {
        return (
            <nav className="navbar navbar-light fixed-top light-blue flex-md-nowrap p-0 shadow">
                <ul className="nav nav-pills">
                    <li className="nav-item">
                        <Link className="nav-link" to="/">Locations</Link>
                    </li>
                    <li className="nav-item dropdown">
                        <Link className="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false" to="/animals">Animals</Link>
                        {/* <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Dropdown</a> */}
                        <div class="dropdown-menu">
                            <a class="dropdown-item" href="#">dog</a>
                            <a class="dropdown-item" href="#">cat</a>
                            <a class="dropdown-item" href="#">chicken</a>
                            <div class="dropdown-divider"></div>
                            <a class="dropdown-item" href="#">Separated link</a>
                            </div>
                    </li>


                    <li className="nav-item">
                        <Link className="nav-link" to="/employees">Employees</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/owners">Owners</Link>
                    </li>
                    <li className="nav-item">
                        <input id="searchTerms"
                            type="search"
                            className="form-control"
                            placeholder="search term"
                            onKeyPress={this.handleKeyPress}
                            onChange={this.handleFieldChange} />



                    </li>
                </ul>
            </nav>
        )
    }

    handleFieldChange = (evt) => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }

    handleKeyPress = (evt) => {
        if (evt.key === 'Enter') {
            const searchTerm = evt.target.value
            console.log(evt.target.value)

            const foundItems = {}

            fetch(`http://localhost:5002/employees?name_like=${searchTerm}`)
                .then(r => r.json())
                .then(employees => {
                    foundItems.employees = employees

                    return fetch(`http://localhost:5002/locations?name_like=${searchTerm}`)
                })
                .then(r => r.json())
                .then(locations => {
                    foundItems.locations = locations
                    return fetch(`http://localhost:5002/animals?name_like=${searchTerm}`)
                })
                .then(r => r.json())
                .then(animals => {
                    foundItems.animals = animals
                    return fetch(`http://localhost:5002/owners?name_like=${searchTerm}`)
                })
                .then(r => r.json())
                .then(owners => {
                    foundItems.owners = owners
                    return fetch(`http://localhost:5002/pets?name_like=${searchTerm}`)
                })
                .then(r => r.json())
                .then(pets => {
                    foundItems.pets = pets
                    console.log("foundItems", foundItems)
                    this.setState({ searchTerms: "" })
                    // console.log(this)
                    // console.log(this.props.history)
                    this.props.history.push({
                        pathname: "/search",
                        state: foundItems
                    })
                })
        }
    }
}

