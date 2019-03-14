import React, { Component } from "react"
import "./Location.css"
import EmployeeCard from "../employee/EmployeeCard"




export default class LoactionDetail extends Component {
    render() {
        /*
            Using the route parameter, find the animal that the
            user clicked on by looking at the `this.props.animals`
            collection that was passed down from ApplicationViews
        */
        const location = this.props.locations.find(a => a.id === parseInt(this.props.match.params.locationId)) || {}
console.log(this.location)

        console.log(this.props)
        return (
            <section className="location">
                <div key={location.id} className="card">
                    <div className="card-body">
                        <h4 className="card-title">
                            <img src={window.location.origin + location.image} className="icon--location" />

                        </h4>
                        <h5 className="card-title">{location.name}{"\n"}
                        {location.address}</h5>

                        <a href="#"
                            onClick={() => this.props.deleteLocation(location.id)
                                            .then(() => this.props.history.push("/"))}
                            className="card-link">Delete</a>
                    </div>
                </div>

                <h2>Employees:</h2>
                <div className="employee-container">
                {this.props.employees.filter(employee => employee.locationId === location.id).map(employeeMatch => <EmployeeCard
                                            key={employeeMatch.id}
                                            employee={employeeMatch} {...this.props} />)}</div>
                    )


            </section>
        )
    }
}