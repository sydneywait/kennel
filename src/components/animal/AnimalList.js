import React, { Component } from 'react'
import "./Animal.css"
import { Link } from "react-router-dom";

export default class AnimalList extends Component {
    // state = {
    //     activeK: []
    // }

    // handleChange(activeKey) {this.setState({ activeK: activeKey });}



    // componentDidMount() {
    //     const newState = []
    //     if (typeof (this.props.location.state) !== "undefined") {
    //         let activeK = this.props.location.state.activeK
    //         newState.activeK = activeK
    //         this.setState(newState)

    //         console.log("state did mount", this.state)
    //     }
    // }
    // componentWillReceiveProps(prevProps) {
    //     const newState = []
    //     console.log("prevProps", prevProps)
    //     if (typeof (this.props.location.state) !== "undefined" && typeof (prevProps.location.state) !== "undefined") {
    //         let active = this.props.location.state.activeK
    //         let prev = prevProps.location.state.activeK
    //         console.log("compare", active, prev)
    //         if (active !== prev) {
    //             newState.activeK = prev
    //             this.setState(newState)
    //             console.log("state did update**", this.state)
    //         }
    //     }
    //     else if (typeof (this.props.location.state) !== "undefined" && typeof (prevProps.location.state) === "undefined") {
    //         console.log("prev undefinded, here's active", this.props.location.state.activeK)
    //         let active = this.props.location.state.activeK
    //         newState.activeK = active
    //         this.setState(newState)
    //         console.log("prevProps", prevProps)
    //         console.log("current props", this.props)
    //         console.log("state did update after delete**", this.state)

    //         //why isn't it refreshing the state before render???

    //     }
    // }
    render() {
        // let activeK = ["all", "0"]
        // console.log("what is the state", this.state)
        // console.log("what are the props", this.props.location)

        return (
            <section className="animals">
                {
                    this.props.animals.map((animal) => {
                        // console.log("state", this.state)


                        const species = animal.species.name
                        // activeK = this.state.activeK

                        // if (species === activeK[0] || activeK[0] === "all") {

                            const speciesLink = animal.species.image
                            const owner = animal.owner.name

                            return <div key={animal.id} className="card">
                                <div className="card-body">
                                    <h5 className="card-title">
                                        <img src={window.location.origin + speciesLink} className="icon--animal" alt="error" />
                                        <p>{animal.name}</p>

                                        <Link className="nav-link" to={`/animals/${animal.id}`}>Details</Link>


                                    </h5>
                                </div>
                            </div>
                        // }

                        // else {
                        //     // console.log("no match", species, activeK[0])
                        // }
                    })



                }
            </section>
        )
    }
}


