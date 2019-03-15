import React, {Component} from 'react'
import { Link } from "react-router-dom";



export default class ResourceCard extends Component{

render(){


    return (
        <React.Fragment>

            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">
                        <img src={window.location.origin + this.props.resource.image} className="icon--resource" alt="error" />
                        <p>{this.props.resource.name}</p>
                        <Link className="nav-link" to={`/${this.props.route}/${this.props.resource.id}`}>Details</Link>

                    </h5>
                </div>
            </div>
            </React.Fragment>
        )


}

}
