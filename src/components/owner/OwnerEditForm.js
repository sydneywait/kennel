import React, { Component } from "react"
import OwnerManager from "../../modules/OwnerManager"

export default class OwnerEditForm extends Component {
    // Set initial state
    state = {
        name: "",
        phone: "",
        image: "",
        goldMembership: "",
        isActive: ""
    }


    handleFieldChange = evt => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }

    updateExistingOwner = evt => {
        evt.preventDefault()

        if (this.state.employee === "") {
            window.alert("Please select a caretaker");
        } else {
            const editedOwner = {

                id: this.props.match.params.ownerId,
                name: this.state.name,
                phone: this.state.phone,
                image: this.state.image,
                goldMembership: JSON.parse(this.state.goldMembership),
                isActive: JSON.parse(this.state.isActive),


            };

            this.props.editOwner(editedOwner)
            this.props.history.push("/owners")
        }
    }

    componentDidMount() {
        OwnerManager.getSingleOwner(this.props.match.params.ownerId)
            .then(owner => {
                this.setState({
                    name: owner.name,
                    phone: owner.phone,
                    image: owner.image,
                    goldMembership: owner.goldMembership,
                    isActive: owner.isActive
                });
            });
    }

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
                            value={this.state.name}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="ownerPhone">Owner Phone</label>
                        <input
                            type="text"
                            required
                            className="form-control"
                            onChange={this.handleFieldChange}
                            id="phone"
                            value={this.state.phone}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="image">Image</label>
                        <select
                            name="image"
                            id="image"
                            onChange={this.handleFieldChange}
                            value={this.state.image}
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
                        <label htmlFor="goldMember">Membership Level</label>
                        <select
                            value={this.state.goldMembership}
                            name="goldMembership"
                            id="goldMembership"
                            onChange={this.handleFieldChange}
                        >


                            <option key="1" id="1" value={true}>Gold
                                </option>
                            <option key="2" id="2" value={false}>Standard
                                </option>

                        </select>
                    </div>

                    <div className="form-group">
                        <label htmlFor="isActive">Kennel Status</label>
                        <select
                            value ={this.state.isActive}
                            name="isActive"
                            id="isActive"
                            onChange={this.handleFieldChange}
                        >
                            <option key="1" id="1" value={true}>Active
                                </option>
                            <option key="2" id="2" value={false}>Inactive
                                </option>

                        </select>
                    </div>



                    <button
                        type="submit"
                        onClick={this.updateExistingOwner}
                        className="btn btn-primary"
                    >
                        Submit
            </button>
                </form>
            </React.Fragment>
        );
    }
}