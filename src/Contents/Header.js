import React, { Component } from 'react';

class Header extends Component {

    render() {
        let inlinestyle = {
            backgroundColor: "white"
        };
        return (
            <div className="row">
                <div className="col-xs-12" style={inlinestyle}>test header </div>
                <header class="navbar navbar-light">
                    <button class="navbar-toggler sidebar-toggler" type="button" data-toggle="sidebar-show">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                </header>
            </div>
        );
    }
}

export default Header;