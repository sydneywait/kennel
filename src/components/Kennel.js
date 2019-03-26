import React, { Component } from "react"
import NavBar from "./nav/NavBar"
import { Route } from "react-router-dom"
import ApplicationViews from "./ApplicationViews"
// withRouter passes ...props to a component
import {withRouter} from 'react-router-dom'
import auth0Client from "./authentication/Auth"
import "./Kennel.css"
import './nav/NavBar.css'
import "bootstrap/dist/css/bootstrap.min.css"


class Kennel extends Component {
    async componentDidMount() {
        if (this.props.location.pathname === '/callback') return;
        try {
          await auth0Client.silentAuth();
          this.forceUpdate();
        } catch (err) {
          if (err.error !== 'login_required') console.log(err.error);
        }
      }
    render() {
        return (
            <React.Fragment>
                <Route render={history => (
                    <NavBar { ...history } />
                )} />
                <ApplicationViews />
            </React.Fragment>
        )
    }
}

export default withRouter(Kennel);

