import React, { Component } from 'react'
import "./Employee.css"
import EmployeeCard from "./EmployeeCard"


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
                                    <EmployeeCard
                        key={employee.id}
                        employee={employee} {...this.props} />
                    )

                    }</div>
            </React.Fragment>
        )
    }
}