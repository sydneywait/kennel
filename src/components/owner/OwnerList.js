import React, { Component } from 'react'
import "./Owner.css"

export default class OwnerList extends Component {
    render() {
        return (
            <section className="owners">
                {
                    this.props.owners.map(owner => {
                        let memberClass = ""
                        if (owner.goldMembership === true) {
                            memberClass = "card-body gold"
                        }
                        else {
                            memberClass = "card-body"
                        }
                        let archive = { "isActive": false }
                        if (owner.isActive === true) {
                            return <div key={owner.id} className="card">
                                <div className={memberClass}>
                                    <h5 className="card-title">
                                        <img src={window.location.origin + owner.image} className="icon--owner" />
                                        <p>{owner.name}</p>
                                        {owner.phone}
                                        <a href="#"
                                            onClick={() => this.props.patchOwner(archive, owner.id)}
                                            className="card-link">Delete</a>
                                    </h5>
                                </div>
                            </div>

                        }
                    }
                    )
                }
            </section>
        )
    }
}