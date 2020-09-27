import  React, {Component} from 'react';
import './header.css';

export class header extends Component{
    render() {
        return(
            <div className="upper-section">
                <div className="left-sec">
                <h1>blueBox</h1>
                </div>

                <div className="right-sec">
                    <form className="search-form">
                    <div className="searchbox">
                        <input type="text" placeholder="Search Project" />

                        <button>  <i className="fa fa-search" aria-hidden="true"></i></button>
                    </div>
                    </form>


                    <div className="right-content">
                     <div className="header_admin_image">
                         <span className="img_icon"></span>
                         <b>Angelina Doe</b>
                         <i className="fa fa-square-o" aria-hidden="true"></i>
                     </div>
                     <div className="user_icons">
                        <i className="fa fa-square-o" aria-hidden="true"></i>
                        <i className="fa fa-square-o" aria-hidden="true"></i>
                        <i className="fa fa-square-o" aria-hidden="true"></i>
                     </div>
                    </div>
                </div>


            </div>

        )
    }
}



export default header;
