import Form from "react-bootstrap/Form"
import React, { Component } from 'react'
import "./Resource.css"
import ResourceCard from "./ResourceCard"


export default class ResourceList extends Component {
    render() {

        return (
            <React.Fragment>

                <div className="resourceHeader">
                    <div className="resourceButton">
                        <button type="button"
                            className="btn btn-success"
                            onClick={() => {
                                this.props.history.push(`/${this.props.resourceNames}/new`)
                            }
                            }>{`Add New ${this.props.ResourceName}`}
                    </button>
                    </div>
                </div>
                <div className="resource-container">
                    {this.props.resource.map(resource =>
                                    <ResourceCard
                        key={resource.id}
                        resource={resource} route={this.props.resourceNames}  />
                    )

                    }</div>
            </React.Fragment>
        )
    }
}