import React, {Component} from 'react'
import { Link } from "react-router-dom";
import "./Animal.css"


export default class AnimalCard extends Component{

render(){

    let cardClass = ""
    if (this.props.animal.owner.isActive === true) {
        cardClass = "card-body active"
    }
    else {
        cardClass = "card-body inactive"
    }
    return (
        <React.Fragment>

            <div key={this.props.animal.id} className="card">
                <div className={cardClass}>
                    <h5 className="card-title">
                        <img src={window.location.origin + this.props.animal.species.image} className="icon--animal" alt="error" />
                        <p>{this.props.animal.name}</p>
                        <Link className="nav-link" to={`/animals/${this.props.animal.id}`}>Details</Link>

                    </h5>
                </div>
            </div>
            </React.Fragment>
        )


}

}
