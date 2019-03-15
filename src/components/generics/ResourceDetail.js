import React, { Component } from "react"
import "./Resource.css"




export default class ResourceDetail extends Component {

    render() {


        const resource = this.props.resource.find(a => a.id === parseInt(this.props.match.params.resourceId)) || {}
console.log(resource)

        return (
            <React.Fragment>

                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">
                            <img src={window.location.origin + resource.image} className="icon--resource" alt="error" />
                            <p>{resource.name}</p>
                            <button className="btn btn-primary"
                                type="button"
                                onClick={() => {
                                    this.props.history.push(`/${this.props.route}/${resource.id}/edit`);
                                }}
                            >Edit</button>
                            <button className="btn btn-danger"
                                type="button"
                                onClick={() => {
                                    this.props.deleteResource(resource.id, this.props.route)
                                    this.props.history.push(`/${this.props.route}`)
                                }}
                            >Delete </button>
                        </h5>
                    </div>
                </div>
            </React.Fragment>
        )


    }

}
