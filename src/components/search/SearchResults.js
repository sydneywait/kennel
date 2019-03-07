import React, { Component } from "react"
import { Link } from "react-router-dom"
// import Animal from "./Animal";
// import Employee from "./Employee";


export default class SearchResults extends Component {

    state = {
        petsWithInfo:[],

    }

    componentDidUpdate(){
// create the pet array info
// call display pets to use data from state

    }

    displayLocations = () => {
        console.log(this.props)
        if (this.props.location.state.locations.length) {
            return (
                <React.Fragment>
                    <h3>Matching Locations</h3>
                    <ul>
                        {
                            this.props.location.state.locations.map(loc => <li key={loc.id}>{loc.name}</li>)
                        }
                    </ul>
                </React.Fragment>
            )
        }
    }

    displayEmployees = () => {
        if (this.props.location.state.employees.length) {
            return (
                <React.Fragment>
                    <h3>Matching Employees</h3>
                    <ul>
                        {
                            this.props.location.state.employees.map(item => (
                                <div key = {item.id}>{item.name}</div>))
                        }
                    </ul>
                </React.Fragment>
            )
        }
    }

    displayAnimals = () => {
        if (this.props.location.state.animals.length) {
            return (
                <React.Fragment>
                    <h3>Matching Animals</h3>
                    <ul>
                        {
                            this.props.location.state.animals.map(item => <div key = {item.id}>{item.name}</div>)
                        }
                    </ul>
                </React.Fragment>
            )
        }
    }
    displayPets =()=>{
        if (this.props.location.state.pets.length) {
            return (
                <React.Fragment>
                    <h3>Matching Pets</h3>
                    <ul>
                        {
                            this.props.location.state.pets.map(item => {

                                console.log(this.props.animals.find(animal => animal.name ==="cat").name)
                        //  console.log(this.props.animals.find(animal =>animal.id===parseInt(item.animalId)).name)


                            return <div key={item.id}>{item.name} owned by </div>
                        })}
                    </ul>
                </React.Fragment>
            )
        }

    }

    render() {
        return (
            <React.Fragment>

                {this.displayLocations()}
                {this.displayEmployees()}
                {this.displayAnimals()}
                {/* {this.displayPets()} */}
            </React.Fragment>
        )
    }
}