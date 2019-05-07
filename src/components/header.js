import React, { Component } from 'react';


class Header extends Component {
    render() {
        return (

            <header>

                <div className="navbar navbar-expand-lg navbar-light bg-info">

                    <button className="navbar-toggler" type="button" data-toggle="collapse"
                            data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false"
                            aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                            <li className="nav-item">
                                <a href="#" className="nav-link">
                                    <i className="fa fa-home"></i> &nbsp;
                                    <strong>Current</strong>
                                </a>
                            </li>

                            <li className="nav-item">
                                <a href="#/elderly" className="nav-link">
                                    <i className="fa fa-list"></i> &nbsp;
                                    <strong>Elderly</strong>
                                </a>
                            </li>
                        </ul>

                    </div>
                </div>


            </header>

        );
    }
}

export default Header;
