import React, { Component } from 'react'
import "./Owner.css"
import { Link } from "react-router-dom";
export default class OwnerList extends Component {
    state = {
        activeK: ""
    }





    render() {
        return (
            <section className="owners">
                {
                    this.props.owners.map(owner => {
                        let activeK = "all"
                        let memberClass = ""
                        if (owner.goldMembership === true) {
                            memberClass = "card-body gold"
                        }
                        else {
                            memberClass = "card-body"
                        }


                        if (typeof (this.props.location.state) !== "undefined") {
                            activeK = this.props.location.state.activeK
                            this.setState.activeK=activeK

                        }
                        else {
                            this.setState.activeK = "all"
                        }

                        return <div key={owner.id} className="card">
                            <div className={memberClass}>
                                <h5 className="card-title">
                                    <img src={window.location.origin + owner.image} className="icon--owner" />
                                    <p>{owner.name}</p>
                                    <Link className="nav-link" to={`/owners/${owner.id}`}>Details</Link>

                                                                    </h5>
                            </div>
                        </div>
                    }
                    )
                }
            </section>
        )
    }
}