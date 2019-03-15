import React, { Component } from 'react'
import "./Employee.css"
import ResourceCard from "../generics/ResourceCard"


export default class EmployeeList extends Component {
    render() {
        console.log(this.props)
        return (
            <React.Fragment>

                <div className="employeeHeader">
                    <div className="employeeButton">
                        <button type="button"
                            className="btn btn-success"
                            onClick={() => {
                                this.props.history.push("/employees/new")
                            }
                            }>Add New Employee
                    </button>
                    </div>
                </div>
                <div className="employee-container">
                    {this.props.employees.map(employee =>
                                    <ResourceCard
                        key={employee.id}
                        resource={employee} route="employees" {...this.props} />
                    )

                    }</div>
            </React.Fragment>
        )
    }
}