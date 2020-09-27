import React, { Component } from 'react';

import './admin.css';

export class admin extends Component {
    state={
        name:'Angelina Doe',
        profile:'Project Manager',
        isMenuVisible:false
    }

    toggleBox = () => {
        this.setState(prevState => ({ isMenuVisible: !prevState.isMenuVisible }));
        // console.log(isMenuVisible, 14);
      };

    render() {
        const { isMenuVisible } = this.state;
        return (
            <div className="container">
                    {/* <h1>blueBox</h1> */}

                    <div className="admin-panel">
                        <div className="admin-ptofile">
                                <div className="admin-image"></div>
                                <div className="admin-status">
                                    <h3>{this.state.name}</h3>
                                    <p>{this.state.profile}</p>
                                </div>
                        </div>

                        <div className={`admin-content ${!isMenuVisible ? "" : "hide"}`}>
                             <ul >
                                <li><h4>Dashboard </h4>   <i className="fa fa-square-o" aria-hidden="true"></i></li>
                                <li><h4>UI Elements</h4>  <i className="fa fa-square-o" aria-hidden="true"></i></li>
                                <li><h4>Forms Stuff</h4>  <i className="fa fa-square-o" aria-hidden="true"></i></li>
                                <li><h4>Data Table</h4>  <i className="fa fa-square-o" aria-hidden="true"></i></li>
                                <li><h4>Icons</h4>  <i className="fa fa-square-o" aria-hidden="true"></i></li>
                                <li><h4>Simple Page</h4>  <i className="fa fa-square-o" aria-hidden="true"></i></li>
                                <li><h4>Extra</h4>  <i className="fa fa-square-o" aria-hidden="true"></i></li>
                            </ul>
                        </div>

                        <button className="btnpro" onClick={this.toggleBox}>Add Project</button>
                    </div>
            </div>
        )
    }
}

export default admin;
