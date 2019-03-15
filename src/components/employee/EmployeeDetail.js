import React, { Component } from "react"
import "./Employee.css"
import AnimalCard from "../animal/AnimalCard"
import ResourceCard from "../generics/ResourceCard"




export default class EmployeeDetail extends Component {
    render() {
        /*
            Using the route parameter, find the animal that the
            user clicked on by looking at the `this.props.animals`
            collection that was passed down from ApplicationViews
        */
        const employee = this.props.employees.find(a => a.id === parseInt(this.props.match.params.employeeId)) || {}
        console.log(this.employee)

        console.log(this.props)
        return (
            <section className="employee">
                <div key={employee.id} className="card">
                    <div className="card-body">
                        <h4 className="card-title">
                            <img src={window.location.origin + employee.image} className="icon--resource" />

                        </h4>
                        <h5 className="card-title">{employee.name}</h5>

                        <div className="button-div">
                            <button
                                type="button"
                                className="btn btn-success"
                                onClick={() => {
                                    this.props.history.push(`/employees/${employee.id}/edit`);
                                }}
                            >
                                Edit
</button>
                            <button
                                type="submit"
                                className="btn btn-danger"
                                onClick={() => {
                                    this.props.deleteEmployee(employee.id)
                                    this.props.history.push("/employees")}}
                            >Delete</button>

                        </div>
                    </div>
                </div>
                <div><h2>Animals in care:</h2>{this.props.animals.filter(animal => animal.employeeId === employee.id).map(animalMatch => <ResourceCard
                                            key={animalMatch.id}
                                            resource={animalMatch} route="animals" {...this.props} />)}</div>
            </section>
        )
    }
}