import React, { Component } from "react"


export default class Login extends Component {

    // Set initial state
    state = {
        email: "",
        password: ""
    }

    // Update state whenever an input field is edited
    handleFieldChange = (evt) => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)

    }

    // Simplistic handler for login submit
    handleLogin = (e) => {
        e.preventDefault()
        // fetch employees and check to see if username and password match

        let isEmailMatch = ""
        let isPasswordMatch = ""
        let employee = this.props.employees.find(employee => {
            return employee.email === this.state.email
        })

        if (employee) {
            console.log(employee)
            isEmailMatch = true;
            if (employee.password === this.state.password) {
                isPasswordMatch = true;
            }
            else {
                isPasswordMatch = false
                window.alert("The password does not match")
                //figure out how to clear the form

                this.props.history.push("/login")
            }
        }
        else {
            window.alert("That email does not exist in the database")
            //figure out how to clear the form
            this.props.history.push("/login")
        }
        if (isEmailMatch === true && isPasswordMatch === true) {
            sessionStorage.setItem(
                "credentials",
                JSON.stringify({
                    email: this.state.email,
                    password: this.state.password
                })
            )
            //redirect user to landing page on login
            this.props.history.push("/")
            console.log(this)
        }
    }



    render() {
        return (
            <form onSubmit={this.handleLogin}>
                <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
                <label htmlFor="inputEmail">
                    Email address
                </label>
                <input onChange={this.handleFieldChange} type="email"
                    id="email"
                    placeholder="Email address"
                    required="" autoFocus="" />
                <label htmlFor="inputPassword">
                    Password
                </label>
                <input onChange={this.handleFieldChange} type="password"
                    id="password"
                    placeholder="Password"
                    required="" />
                <button type="submit">
                    Sign in
                </button>
            </form>
        )
    }
}