import React, { Component } from 'react'
import LocationIcon from "./LocationIcon.png"
import { Link } from "react-router-dom";
import "./Location.css"

export default class LocationList extends Component {
    render () {
        return (
            <section className="locations">
            {
                this.props.locations.map(location =>
                    <div key={location.id} className="card">
                        <div className="card-body">
                            <h5 className="card-title">
                                <img src={LocationIcon} className="icon--location" />
                                {location.name}
                                <Link className="nav-link" to={`/locations/${location.id}`}>Details</Link>
                            </h5>
                        </div>
                    </div>
                )
            }
            </section>
        )
    }
}