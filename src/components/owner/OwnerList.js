import React, { Component } from 'react'
import OwnerIcon from "./OwnerIcon.png"
import "./Owner.css"

export default class OwnerList extends Component {
    render () {
        return (
            <section className="owners">
            {
                this.props.owners.map(owner =>
                    <div key={owner.id} className="card">
                        <div className="card-body">
                            <h5 className="card-title">
                                <img src={window.location.origin + owner.image}  className="icon--owner" />
                                <p>{owner.name}</p>
                                {owner.phone}
                                <a href="#"
                                    onClick={() => this.props.deleteOwner(owner.id)}
                                    className="card-link">Delete</a>
                            </h5>
                        </div>
                    </div>
                )
            }
            </section>
        )
    }
}