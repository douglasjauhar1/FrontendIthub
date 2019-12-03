import React, {Component} from 'react'
import { Link } from 'react-router-dom'


class AppHeader extends Component {
    
    render() {
        return(
<div className="app-header header hor-topheader d-flex">
        <div className="container">
          <div className="d-flex">
            <Link to ={'/home'} className="header-brand">
              <img src="https://i.imgur.com/YhODYAw.png" className="header-brand-img main-logo" alt="Hogo logo" />
            </Link>
            <a id="horizontal-navtoggle" className="animated-arrow hor-toggle"><span /></a>
            <div className="default header">
            <form className="input-icon mt-3 mr-2 pr-3 ">
        <input type="search" className="form-control header-search" placeholder="Search…" tabIndex={1} />
        <div className="input-icon-addon pr-3">
          <i className="fe fe-search" />
        </div>
      </form>
            </div>
      
            <div className="d-flex order-lg-2 ml-auto header-rightmenu">
              <div className="dropdown">
                <a className="nav-link icon full-screen-link" id="fullscreen-button">
                  <i className="fe fe-maximize-2" />
                </a>
              </div>
              <div className="ml-auto mt-3 pl-3">
        <Link to={'/register'} className="btn btn-pill btn-primary btn-md mr-3">Register</Link>
        <Link to={'/login'} className="btn btn-pill btn-primary btn-md">Login</Link>
      </div>
              <div className="dropdown header-user">
                <Link to={'/profile'} className="nav-link leading-none siderbar-link" data-toggle="sidebar-right" data-target="sidebar-right">
                  <span className="mr-3 d-none d-lg-block ">
                    <span className="text-gray-white"><span className="ml-2">Alison</span></span>
                  </span>
                  <span className="avatar avatar-md brround"><img src="../assets/images/users/female/33.png" alt="Profile-img" className="avatar avatar-md brround" /></span>
                </Link>
              </div>
              <div className="dropdown">
                <a className="nav-link icon siderbar-link" data-toggle="sidebar-right" data-target=".sidebar-right">
                  <i className="fe fe-log-out" />
                </a>
              </div>
            </div>
          </div>
        </div>
        
      </div>
      
        )
    }

}

export default AppHeader