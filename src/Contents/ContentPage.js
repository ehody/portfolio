import React, { Component } from 'react';
import SideBar from '../SideBar/SideBar';
class ContentPage extends Component {

    render() {
        let inlinestyle = {
            backgroundColor: "white"
        };
        return (
            <div className="row">
                <div className="col-xs-12" style={inlinestyle}></div>
                <SideBar></SideBar>
            </div>
        );
    }
}

export default ContentPage;