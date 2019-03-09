import React, { Component } from 'react'
import "./Owner.css"

export default class OwnerList extends Component {
    state = {
        activeK: ""
    }

    displayActive = (archive, ownerId) => {
        return (
            <React.Fragment>
                <a href="#"
                    onClick={() => this.props.patchOwner(archive, ownerId)}
                    className="card-link client">Delete</a>
            </React.Fragment>
        )
    }

    displayInActive = (activate, ownerId) => {
        return (
            <React.Fragment>
                <a href="#"
                    onClick={() => this.props.patchOwner(activate, ownerId)}
                    className="card-link client">Reinstate</a>
            </React.Fragment>
        )
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
                        let archive = { "isActive": false }
                        let activate = { "isActive": true }

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
                                    {owner.phone}
                                    {owner.isActive ? this.displayActive(archive, owner.id) : this.displayInActive(activate, owner.id)}
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