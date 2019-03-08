import React, { Component } from "react"
import { Link } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
export default class NavBar extends Component {

  state = { searchTerms: "" }

  render() {
    const activeTab = this.state.activeTab
    return (
      <Nav >
        <Nav.Item>
          <Link className="nav-link"  to="/">Locations</Link>

        </Nav.Item>
        <Nav.Item>
          <Link className="nav-link"  to="/employees">Employees</Link>

        </Nav.Item>
        <Nav.Item>
          <NavDropdown title ="Owners" id ="nav-dropdown-owner" onSelect={k => this.handleOwnerSelect(k)}></NavDropdown>
          <Link className="nav-link"  to="/owners">Owners</Link>
        </Nav.Item>
        <NavDropdown title="Animals" id="nav-dropdown" onSelect={k => this.handleAnimalSelect(k)}>
          {/* <Link className="nav-link" to="/animals">All Animals</Link> */}
          <NavDropdown.Item eventKey="all-0">All Animals</NavDropdown.Item>
          <NavDropdown.Item eventKey="cat-1">cats</NavDropdown.Item>
          <NavDropdown.Item eventKey="dog-2">dogs</NavDropdown.Item>
          <NavDropdown.Item eventKey="chicken-3">chickens</NavDropdown.Item>
          <NavDropdown.Item eventKey="hamster-4">hamsters</NavDropdown.Item>
          <NavDropdown.Item eventKey="horse-5">horses</NavDropdown.Item>
          <NavDropdown.Item eventKey="snake-6">snakes</NavDropdown.Item>
        </NavDropdown>
        <Nav.Item className="nav-item">
          <input id="searchTerms"
            type="search"
            className="form-control"
            placeholder="search term"
            onKeyPress={this.handleKeyPress}
            onChange={this.handleFieldChange} />
        </Nav.Item>
      </Nav>
    );
  }


  // render() {
  //     return (
  //         <nav className="navbar navbar-light fixed-top light-blue flex-md-nowrap p-0 shadow">
  //             <ul className="nav nav-pills">
  //                 <li className="nav-item">
  //                     <Link className="nav-link" to="/">Locations</Link>
  //                 </li>
  //                 <li className="nav-item dropdown">
  //                     <Link className="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false" to="/animals">Animals</Link>
  //                     {/* <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Dropdown</a> */}
  //                     <div className="dropdown-menu">
  //                         <a className="dropdown-item" href="#">dog</a>
  //                         <a className="dropdown-item" href="#">cat</a>
  //                         <a className="dropdown-item" href="#">chicken</a>
  //                         <div className="dropdown-divider"></div>
  //                         <a className="dropdown-item" href="#">Separated link</a>
  //                         </div>
  //                 </li>


  //                 <li className="nav-item">
  //                     <Link className="nav-link" to="/employees">Employees</Link>
  //                 </li>
  //                 <li className="nav-item">
  //                     <Link className="nav-link" to="/owners">Owners</Link>
  //                 </li>
  //                 <li className="nav-item">
  //                     <input id="searchTerms"
  //                         type="search"
  //                         className="form-control"
  //                         placeholder="search term"
  //                         onKeyPress={this.handleKeyPress}
  //                         onChange={this.handleFieldChange} />



  //                 </li>
  //             </ul>
  //         </nav>
  //     )
  // }

  handleFieldChange = (evt) => {
    const stateToChange = {}
    stateToChange[evt.target.id] = evt.target.value
    this.setState(stateToChange)
  }


  handleAnimalSelect = (k) => {
    // if(k==="all"){
      const activeK =k.split("-")
      const activeKName= {"activeK": activeK}
console.log("active key", activeKName)
this.setState({ searchTerms: "" })
        this.props.history.push({
          pathname: "/animals",
          state: activeKName

        })
    // }
    // else{
    // // console.log('k', k)
    // const target = k.split("-")
    // const speciesId = target[1]
    // console.log(speciesId)

    // const sortItems = {}
    // fetch(`http://localhost:5002/animals/?speciesId=${speciesId}&_expand=species&_expand=owner
    // `)
    //   .then(r => r.json())
    //   .then(animals => {
    //     sortItems.animals = animals
    //     console.log('animals', animals)

  //       this.setState({ searchTerms: "" })
  //       this.props.history.push({
  //         pathname: "/animals",
  //         state: sortItems
  //       })
  //     })
  // }
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

