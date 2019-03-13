import React, { Component } from "react"
import { Link } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
export default class NavBar extends Component {

  state = { searchTerms: "" }
  isAuthenticated = () => sessionStorage.getItem("credentials") !== null

  addLogoutButton() {
    if (this.isAuthenticated()) {
      return (
        <React.Fragment>
          <Nav.Item>
            <Link className="nav-link" to="/logout">Logout</Link>
          </Nav.Item>
        </React.Fragment>)
    }
  }


  render() {
    const activeTab = this.state.activeTab
    return (
      <Nav >
        <Nav.Item>
          <Link className="nav-link" to="/">Locations</Link>

        </Nav.Item>
        <Nav.Item>
          <Link className="nav-link" to="/employees">Employees</Link>
        </Nav.Item>
        <Nav.Item>
          <Link className="nav-link" to="/owners">Owners</Link>
          {/* <NavDropdown title ="Owners" id ="nav-dropdown-owner" onSelect={k => this.handleOwnerSelect(k)}>
          <NavDropdown.Item eventKey="all">All Owners</NavDropdown.Item>
          <NavDropdown.Item eventKey="active">Active Owners</NavDropdown.Item>
          <NavDropdown.Item eventKey="inactive">Inactive Owners</NavDropdown.Item>
          </NavDropdown> */}
        </Nav.Item>
        <Nav.Item>
          <Link className="nav-link" to="/animals">Animals</Link>
          {/* <NavDropdown title="Animals" id="nav-dropdown" onSelect={k => this.handleAnimalSelect(k)}>
          <NavDropdown.Item eventKey="all-0">All Animals</NavDropdown.Item>
          <NavDropdown.Item eventKey="cat-1">cats</NavDropdown.Item>
          <NavDropdown.Item eventKey="dog-2">dogs</NavDropdown.Item>
          <NavDropdown.Item eventKey="chicken-3">chickens</NavDropdown.Item>
          <NavDropdown.Item eventKey="hamster-4">hamsters</NavDropdown.Item>
          <NavDropdown.Item eventKey="horse-5">horses</NavDropdown.Item>
          <NavDropdown.Item eventKey="snake-6">snakes</NavDropdown.Item>
        </NavDropdown> */}
        </Nav.Item>
        <Nav.Item className="nav-item">
          <input id="searchTerms"
            type="search"
            className="form-control"
            placeholder="search term"
            onKeyPress={this.handleKeyPress}
            onChange={this.handleFieldChange} />
        </Nav.Item>
        {this.addLogoutButton()}
      </Nav>



    );
  }




  handleFieldChange = (evt) => {
    const stateToChange = {}
    stateToChange[evt.target.id] = evt.target.value
    this.setState(stateToChange)
  }


  handleAnimalSelect = (k) => {
    const activeK = k.split("-")
    const activeKName = { "activeK": activeK }
    console.log("active key", activeKName)
    this.setState({ searchTerms: "" })
    this.props.history.push({
      pathname: "/animals",
      state: activeKName

    })

  }

  handleOwnerSelect = (k) => {
    const activeK = { "activeK": k }
    console.log("active key", activeK)
    this.setState({ searchTerms: "" })
    this.props.history.push({
      pathname: "/owners",
      state: activeK

    })

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

