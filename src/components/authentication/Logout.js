import React, { Component } from "react"
import './Logs.css'

export default class Logout extends Component {
    handleLogout() {
        sessionStorage.removeItem("credentials")
    }


    handleClick=()=>{
        this.props.history.push("/login")
    }

    render() {
        {this.handleLogout()}
        return(
        <React.Fragment>
            <div className="logout">
            <h1>You have logged out</h1>
            <button className = "btn return-btn" onClick={this.handleClick}>Return to Login</button>


            </div>
            </React.Fragment>
            )
       }
}