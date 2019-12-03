import React from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
class Card extends React.Component{
    constructor(props){
        super()
        this.state = {
            users: []
         };
        this.getUsers = this.getUsers.bind(this)
    }
     componentDidMount() {
        this.getUsers();
     }
     getUsers = async () => {
        let res = await axios.get("http://localhost:5000/engineer");
        let { data } = res.data;
        this.setState({ users: data });
        console.log(this.state.users);
        
    };
     render(){
        return( 

             <div className="header collapse d-lg-flex p-0" id="headerMenuCollapse2">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg order-lg-first">
                  <ul className="nav nav-tabs border-0 flex-column flex-lg-row">
                    <li className="nav-item">
                      <a href="javascript:void(0)" className="nav-link " data-toggle="dropdown"><i className="fa fa-home" />DASHBOARD </a>
                      <div className="dropdown-menu dropdown-menu-arrow">
                        <a href="#" className="dropdown-item ">Dashboard 01</a>
                        <a href="#" className="dropdown-item ">Dashboard 02</a>
                        <a href="#" className="dropdown-item ">Dashboard 03</a>
                        <a href="#" className="dropdown-item ">Dashboard 04</a>
                      </div>
                    </li>
                    <li className="nav-item dropdown">
                      <a href="widgets.html" className="nav-link "><i className="fa fa-window-restore" /> WIDGETS</a>
                    </li>
                    <li className="nav-item">
                      <a href="javascript:void(0)" className="nav-link" data-toggle="dropdown"><i className="fa fa-snowflake-o" />UI DESIGN</a>
                      <div className="dropdown-menu dropdown-menu-arrow mega-menu">
                        <div className="row">
                          <div className="col-md-6">
                            <a href="#" className="dropdown-item ">Graph Charts</a>
                            <a href="#" className="dropdown-item ">line Charts</a>
                            <a href="#" className="dropdown-item ">Donut Charts</a>
                            <a href="#" className="dropdown-item ">Pie Charts</a>
                            <a href="#" className="dropdown-item ">Cards design</a>
                            <a href="#" className="dropdown-item ">Maps</a>
                            <a href="#" className="dropdown-item ">Sweet alert</a>
                          </div>
                          <div className="col-md-6">
                            <a href="#" className="dropdown-item ">Timeline</a>
                            <a href="#" className="dropdown-item ">Default Chat</a>
                            <a href="#" className="dropdown-item ">Counters</a>
                            <a href="#" className="dropdown-item ">Loaders</a>
                            <a href="#" className="dropdown-item ">Notifications</a>
                            <a href="#" className="dropdown-item ">Range slider</a>
                            <a href="#" className="dropdown-item ">Content Scroll bar</a>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="nav-item">
                      <a href="javascript:void(0)" className="nav-link active" data-toggle="dropdown"><i className="fa fa-pencil-square-o" />UI ElEMENTS</a>
                      <div className="dropdown-menu dropdown-menu-arrow mega-menu">
                        <div className="row">
                          <div className="col-md-6">
                            <a href="#" className="dropdown-item ">Alerts</a>
                            <a href="#" className="dropdown-item ">Buttons</a>
                            <a href="#" className="dropdown-item ">Colors</a>
                            <a href="#" className="dropdown-item ">Sample Charts</a>
                            <a href="#" className="dropdown-item ">Avatars</a>
                            <a href="#" className="dropdown-item ">RoundAvatars</a>
                            <a href="#" className="dropdown-item ">RadiusAvatars</a>
                            <a href="#" className="dropdown-item ">Accordion</a>
                            <a href="#" className="dropdown-item ">Dropdown</a>
                            <a href="#" className="dropdown-item ">List</a>
                            <a href="#" className="dropdown-item ">Tags</a>
                            <a href="#" className="dropdown-item ">Pagination</a>
                          </div>
                          <div className="col-md-6">
                            <a href="#" className="dropdown-item ">Modal</a>
                            <a href="#" className="dropdown-item ">Navigation</a>
                            <a href="#" className="dropdown-item ">Progress</a>
                            <a href="#" className="dropdown-item ">Typography</a>
                            <a href="#" className="dropdown-item ">Tooltip &amp; Popover</a>
                            <a href="#" className="dropdown-item ">Breadcrumbs</a>
                            <a href="#" className="dropdown-item ">Badges</a>
                            <a href="#" className="dropdown-item ">Jumbotron</a>
                            <a href="#" className="dropdown-item ">Panel</a>
                            <a href="#" className="dropdown-item ">Thumbnails</a>
                            <a href="#" className="dropdown-item ">Mediaobject</a>
                            <a href="#" className="dropdown-item ">Tabs</a>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="nav-item dropdown">
                      <a href="javascript:void(0)" className="nav-link" data-toggle="dropdown"><i className="fa fa-newspaper-o" />PAGES</a>
                      <div className="dropdown-menu dropdown-menu-arrow">
                        <a href="#" className="dropdown-item ">Profile</a>
                        <a href="#" className="dropdown-item ">Edit Profile</a>
                        <a href="#" className="dropdown-item ">Login</a>
                        <a href="#" className="dropdown-item ">Register</a>
                        <a href="#" className="dropdown-item ">Forgot password</a>
                        <a href="#" className="dropdown-item ">Email</a>
                        <a href="#" className="dropdown-item ">Email Inbox</a>
                        <a href="#" className="dropdown-item ">Empty page</a>
                        <a href="#" className="dropdown-item ">Under Construction</a>
                        <a href="#" className="dropdown-item ">Lock screen</a>
                        <a href="#" className="dropdown-item ">400 error</a>
                        <a href="#" className="dropdown-item ">401 error</a>
                        <a href="#" className="dropdown-item ">403 error</a>
                        <a href="#" className="dropdown-item ">404 error</a>
                        <a href="#" className="dropdown-item ">500 error</a>
                        <a href="#" className="dropdown-item ">503 error</a>
                      </div>
                    </li>
                    <li className="nav-item dropdown">
                      <a href="javascript:void(0)" className="nav-link" data-toggle="dropdown"><i className="fa fa-file-text-o" /> FORMS</a>
                      <div className="dropdown-menu dropdown-menu-arrow">
                        <a href="#" className="dropdown-item ">Form Elements</a>
                        <a href="#" className="dropdown-item ">form-wizard Elements</a>
                        <a href="#" className="dropdown-item ">Text Editor</a>
                      </div>
                    </li>
                    <li className="nav-item">
                      <a href="#" className="nav-link"><i className="fa fa-picture-o" /> GALLERY</a>
                    </li>
                    <li className="nav-item dropdown">
                      <a href="javascript:void(0)" className="nav-link" data-toggle="dropdown"><i className="fa fa-cubes" /> COMPONENTS</a>
                      <div className="dropdown-menu dropdown-menu-arrow">
                        <a href="#" className="dropdown-item ">Pricing tables</a>
                        <a href="#" className="dropdown-item ">Crypto-currencies</a>
                        <a href="#" className="dropdown-item ">User-list</a>
                        <a href="#" className="dropdown-item ">Icons</a>
                        <a href="#" className="dropdown-item ">Icons 2</a>
                        <a href="#" className="dropdown-item ">Tables</a>
                        <a href="#" className="dropdown-item ">Data Tables</a>
                        <a href="#" className="dropdown-item ">Store</a>
                        <a href="#" className="dropdown-item ">Blog</a>
                        <a href="#" className="dropdown-item ">Invoice</a>
                        <a href="#" className="dropdown-item ">Carousel</a>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )
    }
}
export default Card