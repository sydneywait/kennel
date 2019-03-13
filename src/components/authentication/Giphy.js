import React, { Component } from "react"
import './Logs.css'

 export default class Giphy extends Component{

    handleClick=()=>{
        this.props.history.push("/login")
    }

    render(){

        return(


<div className="giphy">
            <h1>You have tried the wrong password too many times!</h1>
            <img src ="https://media.giphy.com/media/Z8bHyY0EEx4qI/giphy-downsized-large.gif" class ="angryGirl"></img>
            <button className = "btn return-btn" onClick={this.handleClick}>Return to Login</button>


            </div>








        )
    }
 }