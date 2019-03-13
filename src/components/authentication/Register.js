import React, { Component } from "react"
import './Logs.css'
import ImageUploader from 'react-images-upload';



export default class Register extends Component {

    state = {
        name: "",
        image: "",
        email: "",
        password: ""
    }
    constructor(props) {
        super(props);
        // this.state = { pictures: [] };
        this.onDrop = this.onDrop.bind(this);
    }

    onDrop(picture) {
        console.log(picture[0].name)
        this.setState({
            image: `/images/people/${picture[0].name}`
        });
    }



    // Update state whenever an input field is edited
    handleFieldChange = (evt) => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)

    }

    constructNewEmployee = () => {


        const employee = {
            name: this.state.name,
            email: this.state.email,
            image: this.state.image,
            password: this.state.password
        };
        console.log(employee)

        this.props.addEmployee(employee)
    }

    handleRegister=(evt)=>{
        evt.preventDefault();
        console.log("inside handleRegister")
        this.constructNewEmployee()
        sessionStorage.setItem(
            "credentials",
            JSON.stringify({
                email: this.state.email,
                password: this.state.password
            }))
        this.props.history.push("/")
    }



    render() {
        return (
            <section className="registerForm">
            <ImageUploader
                        withIcon={true}
                        buttonText='Choose image'
                        onChange={this.onDrop}
                        imgExtension={['.jpg', '.gif', '.png', '.gif']}
                        maxFileSize={5242880}
                    />
                {/* <form onSubmit={this.handleRegister}> */}
                    <h1 className="h3 mb-3 font-weight-normal">Please Register</h1>
                    <label htmlFor="inputName">
                        Name
                    </label>
                    <input onChange={this.handleFieldChange} type="name"
                        id="name"
                        placeholder="Name (first and last)"
                        required="" autoFocus="" />
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
                    <label htmlFor="inputPicture">Profile Picture</label>

                    <button type="submit" onClick={this.handleRegister}>
                        Register
                    </button>
                {/* </form> */}




            </section>

        )
    }
}
