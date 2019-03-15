import React, { Component } from 'react'
import LocationIcon from "./LocationIcon.png"
import { Link } from "react-router-dom";
import ResourceCard from "../generics/ResourceCard"
import "./Location.css"

export default class LocationList extends Component {
    render () {
        return (
            <section className="locations">
             {
                this.props.locations.map(location =>

                        <ResourceCard
                        key={location.id}
                        resource={location} {...this.props} route ="locations" />
                )
            }
            </section>
        )
    }
}