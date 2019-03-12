import React, { Component } from 'react'
import { Link } from "react-router-dom";
import "./Employee.css"

export default class EmployeeList extends Component {
    render() {
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
                <section className="employees">
                    {
                        this.props.employees.map(employee =>
                            <div key={employee.id} className="card">
                                <div className="card-body">
                                    <h5 className="card-title">
                                        <img src={window.location.origin + employee.image} className="icon--employee" />
                                        {employee.name}

                                        <Link className="nav-link" to={`/employees/${employee.id}`}>Details</Link>

                                    </h5>
                                </div>
                            </div>
                        )
                    }
                </section>
            </React.Fragment>
        )
    }
}