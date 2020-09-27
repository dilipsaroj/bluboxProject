import React, { Component } from 'react';
import './dashboard.css';

export class dashboard extends Component {
    state={
        name:'Angelina Doe',
        heading1:'stock total',
        price1:'$150000',
        increment1:' Increased by 60%',
        heading2:' total profit',
        price2:'$25000',
        increment2:' Increased by 30%',
        heading3:'unique visitors',
        price3:'$250000',
        increment3:' Increased by 80%',
        isTabBoxStockVisible:false,
        isTabBoxProfitVisible:false,
        isTabBoxUniqueVisible:false
    }
    toggleBoxStock = () => {
        this.setState(prevState => ({ isTabBoxStockVisible: !prevState.isTabBoxStockVisible }));
        // set false other tabs
        this.setState(prevState => ({ isTabBoxProfitVisible: false }));
        this.setState(prevState => ({ isTabBoxUniqueVisible: false }));
        // console.log(isMenuVisible, 14);
      };

      toggleBoxProfit = () => {
        this.setState(prevState => ({ isTabBoxProfitVisible: !prevState.isTabBoxProfitVisible }));

          // set false other tabs
          this.setState(prevState => ({ isTabBoxStockVisible: false }));
          this.setState(prevState => ({ isTabBoxUniqueVisible: false }));
        // console.log(isMenuVisible, 14);
      };

      toggleBoxUnique = () => {
        this.setState(prevState => ({ isTabBoxUniqueVisible: !prevState.isTabBoxUniqueVisible }));


          // set false other tabs
          this.setState(prevState => ({ isTabBoxStockVisible: false }));
          this.setState(prevState => ({ isTabBoxProfitVisible: false }));
        // console.log(isMenuVisible, 14);
      };


    render() {
        const { isTabBoxStockVisible } = this.state;
        const { isTabBoxProfitVisible } = this.state;
        const { isTabBoxUniqueVisible } = this.state;

        return (
            <div className="dash">


                  <div className="dash-content">
                            <ul className="title_list">
                                <li className="square"></li>
                                <li><h3>Dashboard</h3></li>
                            </ul>
                        <div >


                            <div className="cards">
                                <div className="card card-1" onClick={this.toggleBoxStock}>
                                    <i className="fa fa-square-o" aria-hidden="true"></i>
                                    <h4>{this.state.heading1}</h4>
                                    <h2>{this.state.price1}</h2>
                                    <p>{this.state.increment1}</p>
                                </div>

                                <div className="card card-2" onClick={this.toggleBoxProfit}>
                                    <i className="fa fa-square-o" aria-hidden="true"></i>
                                    <h4>{this.state.heading2}</h4>
                                    <h2>{this.state.price2}</h2>
                                    <p>{this.state.increment2}</p>
                                </div>

                                <div className="card card-3" onClick={this.toggleBoxUnique}>
                                    <i className="fa fa-square-o" aria-hidden="true"></i>
                                    <h4>{this.state.heading3}</h4>
                                    <h2>{this.state.price3}</h2>
                                    <p>{this.state.increment3}</p>
                                </div>
                          </div>

                            <div className="standard">
                                <div className={`stan-content ${isTabBoxStockVisible ? "" : "hide"}`}>
                                    <h2>Stock Table Design</h2>
                                    <div className="table-design">
                                        <ul>
                                            <li>
                                                <ul>
                                                    <li>Name</li>
                                                    <li>Email</li>
                                                    <li>User Type</li>
                                                    <li>Joined</li>
                                                    <li>Status</li>
                                                </ul>
                                            </li>

                                            <li>
                                                <ul>
                                                    <li>Mike Bhand</li>
                                                    <li>mikebhand@email.com</li>
                                                    <li>Admin</li>
                                                    <li>25th Apr,2018</li>
                                                    <li className="color purple"> Pending</li>
                                                </ul>
                                            </li>

                                            <li>
                                                <ul>
                                                    <li>Andrew Strauss</li>
                                                    <li>info@yourmail.com</li>
                                                    <li>Editor</li>
                                                    <li>25th Apr,2018</li>
                                                    <li className="color blue">Approved</li>
                                                </ul>
                                            </li>

                                            <li>
                                                <ul>
                                                    <li>Ross Kopelman</li>
                                                    <li>rosskopelman@emial.com</li>
                                                    <li>Subscriber</li>
                                                    <li>25th Apr,2018</li>
                                                    <li className="color blue">Approved</li>
                                                </ul>
                                            </li>

                                            <li>
                                                <ul>
                                                    <li>Mike Hussy</li>
                                                    <li>mikehussy@email.com</li>
                                                    <li>Admin</li>
                                                    <li>25th Apr,2018</li>
                                                    <li className="color orange"> Reject</li>
                                                </ul>
                                            </li>

                                            <li>
                                                <ul>
                                                    <li>kevin Pietersen</li>
                                                    <li>kpieterson@email.com</li>
                                                    <li>Admin</li>
                                                    <li>25th Apr,2018</li>
                                                    <li className="color purple"> Pending</li>
                                                </ul>
                                            </li>
                                        </ul>

                                    </div>
                                </div>

                                <div className={`stan-content ${isTabBoxProfitVisible ? "" : "hide"}`}>
                                    <h2>Total Profit Table Design</h2>
                                    <div className="table-design">
                                        <ul>
                                            <li>
                                                <ul>
                                                    <li>Name</li>
                                                    <li>Email</li>
                                                    <li>User Type</li>
                                                    <li>Joined</li>
                                                    <li>Status</li>
                                                </ul>
                                            </li>

                                            <li>
                                                <ul>
                                                    <li>Mike Bhand</li>
                                                    <li>mikebhand@email.com</li>
                                                    <li>Admin</li>
                                                    <li>25th Apr,2018</li>
                                                    <li className="color purple"> Pending</li>
                                                </ul>
                                            </li>

                                            <li>
                                                <ul>
                                                    <li>Andrew Strauss</li>
                                                    <li>info@yourmail.com</li>
                                                    <li>Editor</li>
                                                    <li>25th Apr,2018</li>
                                                    <li className="color blue">Approved</li>
                                                </ul>
                                            </li>

                                            <li>
                                                <ul>
                                                    <li>Ross Kopelman</li>
                                                    <li>rosskopelman@emial.com</li>
                                                    <li>Subscriber</li>
                                                    <li>25th Apr,2018</li>
                                                    <li className="color blue">Approved</li>
                                                </ul>
                                            </li>

                                            <li>
                                                <ul>
                                                    <li>Mike Hussy</li>
                                                    <li>mikehussy@email.com</li>
                                                    <li>Admin</li>
                                                    <li>25th Apr,2018</li>
                                                    <li className="color orange"> Reject</li>
                                                </ul>
                                            </li>

                                            <li>
                                                <ul>
                                                    <li>kevin Pietersen</li>
                                                    <li>kpieterson@email.com</li>
                                                    <li>Admin</li>
                                                    <li>25th Apr,2018</li>
                                                    <li className="color purple"> Pending</li>
                                                </ul>
                                            </li>
                                        </ul>

                                    </div>
                                </div>

                                <div className={`stan-content ${isTabBoxUniqueVisible ? "" : "hide"}`}>
                                    <h2>Unique visitors Table Design</h2>
                                    <div className="table-design">
                                        <ul>
                                            <li>
                                                <ul>
                                                    <li>Name</li>
                                                    <li>Email</li>
                                                    <li>User Type</li>
                                                    <li>Joined</li>
                                                    <li>Status</li>
                                                </ul>
                                            </li>

                                            <li>
                                                <ul>
                                                    <li>Mike Bhand</li>
                                                    <li>mikebhand@email.com</li>
                                                    <li>Admin</li>
                                                    <li>25th Apr,2018</li>
                                                    <li className="color purple"> Pending</li>
                                                </ul>
                                            </li>

                                            <li>
                                                <ul>
                                                    <li>Andrew Strauss</li>
                                                    <li>info@yourmail.com</li>
                                                    <li>Editor</li>
                                                    <li>25th Apr,2018</li>
                                                    <li className="color blue">Approved</li>
                                                </ul>
                                            </li>

                                            <li>
                                                <ul>
                                                    <li>Ross Kopelman</li>
                                                    <li>rosskopelman@emial.com</li>
                                                    <li>Subscriber</li>
                                                    <li>25th Apr,2018</li>
                                                    <li className="color blue">Approved</li>
                                                </ul>
                                            </li>

                                            <li>
                                                <ul>
                                                    <li>Mike Hussy</li>
                                                    <li>mikehussy@email.com</li>
                                                    <li>Admin</li>
                                                    <li>25th Apr,2018</li>
                                                    <li className="color orange"> Reject</li>
                                                </ul>
                                            </li>

                                            <li>
                                                <ul>
                                                    <li>kevin Pietersen</li>
                                                    <li>kpieterson@email.com</li>
                                                    <li>Admin</li>
                                                    <li>25th Apr,2018</li>
                                                    <li className="color purple"> Pending</li>
                                                </ul>
                                            </li>
                                        </ul>

                                    </div>
                                </div>
                            </div>

                        </div>
                  </div>

            </div>
        )
    }
}

export default dashboard;
