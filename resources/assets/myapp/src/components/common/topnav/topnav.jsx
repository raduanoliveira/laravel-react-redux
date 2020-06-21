import React, { Component } from "react";
import { Link } from "react-router-dom";
import Signout from '../signout'

class TopNav extends Component {
    render() {
        return (
                <nav className="main-header navbar navbar-expand navbar-white navbar-light">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a
                                className="nav-link"
                                data-widget="pushmenu"
                                href="/"
                                role="button"
                                data-toggle="offcanvas"
                            >
                                <i className="fa fa-bars"></i>
                            </a>
                        </li>
                        {/* <li className="nav-item d-none d-sm-inline-block">
                            <Link to="home" className="nav-link">
                                Home
                            </Link>
                        </li>
                        <li className="nav-item d-none d-sm-inline-block">
                            <a href="" className="nav-link">
                                Contact
                            </a>
                        </li> */}
                    </ul>
                    <Signout function={this.props.logout}/>
                </nav>
        )
    }
}
export default TopNav