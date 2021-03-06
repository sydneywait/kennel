import React, { Component } from 'react'
import "./Owner.css"
import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form"
export default class OwnerList extends Component {
    state = {
        selected: "all"
    }

    createDropdownSort() {
        return (
            <React.Fragment>
                <Form.Group controlId="exampleForm.ControlSelect2">
                    <Form.Control as="select" onChange={this.handleSelect}>
                        <option defaultValue="all">all owners</option>
                        <option value="true">active</option>
                        <option value="false">archived</option>
                    </Form.Control>
                </Form.Group>
            </React.Fragment>
        )
    }

    handleSelect = (evt) => {
        const newState = {}
        newState.selected = evt.target.value
        this.setState(newState)

    }

    render() {
        return (
            <React.Fragment>
                <div className ="ownerHeader">
                    <div className="ownerButton">
                        <button type="button"
                            className="btn btn-success"
                            onClick={() => {
                                this.props.history.push("/owners/new")
                            }
                            }>
                            Add New Owner
                    </button>
                    </div>
                    <div className ="dropDown">{this.createDropdownSort()}</div>
                </div>
                <section className="owners">

                    {
                        this.props.owners.map(owner => {
                            let memberClass = ""
                            if (owner.goldMembership === true && owner.isActive === true) {
                                memberClass = "card-body gold"
                            }
                            else if (owner.isActive === false) {
                                memberClass = "card-body inactive"
                            }
                            else {
                                memberClass = "card-body"
                            }
                            const status = owner.isActive.toString()

                            if (status === this.state.selected||this.state.selected==="all") {
                                return <div key={owner.id} className="card">
                                    <div className={memberClass}>
                                        <h5 className="card-title">
                                            <img src={window.location.origin + owner.image} className="icon--owner" />
                                            <p>{owner.name}</p>
                                            {owner.isActive ? <h6>active member</h6> : <h6>inactive</h6>}
                                            <Link className="nav-link" to={`/owners/${owner.id}`}>Details</Link>

                                        </h5>
                                    </div>
                                </div>
                            }
                        }
                        )
                    }
                </section>
            </React.Fragment>
        )
    }
}