import React, { Component } from 'react'
import { Link } from "react-router-dom";
import "./Employee.css"


export default class EmployeeCard extends Component {

    render() {
        return (
        <React.Fragment>

            {

                    <div key={this.props.employee.id} className="card">
                        <div className="card-body">
                            <h5 className="card-title">
                                <img src={window.location.origin + this.props.employee.image} className="icon--employee" />
                                {this.props.employee.name}{"\n"}

                                <ul className="animalList">
                                    {this.props.animals.filter(animal => animal.employeeId === this.props.employee.id).map(animalMatch => <li className="animalListItem">{animalMatch.name}</li>)}
                                </ul>
                                <Link className="nav-link" to={`/employees/${this.props.employee.id}`}>Details</Link>


                            </h5>
                        </div>
                    </div>

            }

        </React.Fragment>
        )



    }



}