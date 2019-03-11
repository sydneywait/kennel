import React, { Component } from "react"
import "./Owner.css"





export default class OwnerDetail extends Component {
    displayActive = (archive, ownerId) => {
        return (
            <React.Fragment>
                <a href="#"
                    onClick={() => this.props.patchOwner(archive, ownerId)
                    .then(this.props.history.push("/owners"))}
                    className="card-link client">Delete</a>

            </React.Fragment>
        )
    }

    displayInactive = (activate, ownerId) => {
        return (
            <React.Fragment>
                <a href="#"
                    onClick={() => this.props.patchOwner(activate, ownerId)
                        .then(this.props.history.push("/owners"))}
                    className="card-link client">Reinstate</a>
            </React.Fragment>
        )
    }

    downgrade = (downgrade, ownerId) => {
        return (
            <React.Fragment>
                <a href="#"
                    onClick={() => this.props.patchOwner(downgrade, ownerId)
                    .then(this.props.history.push("/owners"))}
                    className="card-link client">downgrade</a>

            </React.Fragment>
        )
    }

    upgrade = (upgrade, ownerId) => {
        return (
            <React.Fragment>
                <a href="#"
                    onClick={() => this.props.patchOwner(upgrade, ownerId)
                    .then(this.props.history.push("/owners"))}
                    className="card-link client">upgrade</a>

            </React.Fragment>
        )
    }
    render() {
        /*
            Using the route parameter, find the animal that the
            user clicked on by looking at the `this.props.animals`
            collection that was passed down from ApplicationViews
        */
        const owner = this.props.owners.find(a => a.id === parseInt(this.props.match.params.ownerId)) || {}
        console.log(this.owner)
        let memberClass = ""
        if (owner.goldMembership === true) {
            memberClass = "card-body gold"
        }
        else {
            memberClass = "card-body"
        }

        console.log(this.props)
        let archive = { "isActive": false }
        let activate = { "isActive": true }
        let upgrade ={ "goldMembership": true }
        let downgrade={ "goldMembership": false }
        return (
            <section className="owner">
                <div key={owner.id} className="card">
                    <div className={memberClass}>
                        <h4 className="card-title">
                            <img src={window.location.origin + owner.image} className="icon--owner" />

                        </h4>
                        <h5 className="card-title">{owner.name}</h5>
                        <p>{owner.phone}</p>

                        {owner.isActive ? this.displayActive(archive, owner.id) : this.displayInactive(activate, owner.id)}
                        {owner.goldMembership ? this.downgrade(downgrade, owner.id) : this.upgrade(upgrade, owner.id)}

                    </div>
                </div>
            </section>
        )
    }
}