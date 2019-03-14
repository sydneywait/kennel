import React, { Component } from "react";
import "./Owner.css";


export default class OwnerForm extends Component {

    // Set initial state
    state = {
        name: "",
        phone: "",
        image: "",
        goldMembership: "",
        isActive: true
    };

    // Update state whenever an input field is edited
    handleFieldChange = evt => {
        const stateToChange = {};
        stateToChange[evt.target.id] = evt.target.value;
        this.setState(stateToChange);
    };

    /*
          Local method for validation, creating owner object, and
          invoking the function reference passed from parent component
       */
    constructNewOwner = evt => {
        evt.preventDefault();
        if (this.state.goldMembership === "") {
            window.alert("Please select a membership");

        } else {
            const owner = {
                name: this.state.name,
                phone: this.state.phone,
                image: this.state.image,
                goldMembership: JSON.parse(this.state.goldMembership),
                isActive: true

            };
            console.log(owner)

            // Create the owner and redirect user to owner list
            this.props.addOwner(owner)
            this.props.history.push("/owners")
        }
    };

    render() {
        return (
            <React.Fragment>
                <form className="ownerForm">
                    <div className="form-group">
                        <label htmlFor="ownerName">Owner name</label>
                        <input
                            type="text"
                            required
                            className="form-control"
                            onChange={this.handleFieldChange}
                            id="name"
                            placeholder="Owner name"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="phone">Phone</label>
                        <input
                            type="phone"
                            required
                            className="form-control"
                            onChange={this.handleFieldChange}
                            id="phone"
                            placeholder="phone"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="image"></label>
                        <select
                            defaultValue=""
                            name="image"
                            id="image"
                            onChange={this.handleFieldChange}
                        >
                            <option value="">Select an image</option>
                            <option key="1" id="1" value="/images/people/boy.png">Boy</option>
                            <option key="2" id="2" value="/images/people/girl.png">Girl</option>
                            <option key="3" id="3" value="/images/people/primLady.png">Prim Lady</option>
                            <option key="4" id="4" value="/images/people/suitGuy.png">Suit</option>
                            <option key="5" id="5" value="/images/people/beardPerson.png">Beard</option>
                            <option key="6" id="6" value="/images/people/oldLady.png">old Lady</option>

                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="goldMember"></label>
                        <select
                            defaultValue=""
                            name="goldMembership"
                            id="goldMembership"
                            onChange={this.handleFieldChange}
                        >
                            <option value="">Select a Membership Level</option>

                            <option key="1" id="1" value={true}>Gold
                                </option>
                            <option key="2" id="2" value={false}>Standard
                                </option>

                        </select>
                    </div>
                    <button
                        type="submit"
                        onClick={this.constructNewOwner}
                        className="btn btn-primary"
                    >
                        Submit
          </button>
                </form>
            </React.Fragment>
        );
    }
}