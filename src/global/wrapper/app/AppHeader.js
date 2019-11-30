import React, {Component} from 'react'
import { Link } from 'react-router-dom'


class AppHeader extends Component {
    
    render() {
        return(
<div className="app-header header hor-topheader d-flex">
        <div className="container">
          <div className="d-flex">
            <Link to ={'/'} className="header-brand">
              <img src="https://i.imgur.com/YhODYAw.png" className="header-brand-img main-logo" alt="Hogo logo" />
            </Link>
            <a id="horizontal-navtoggle" className="animated-arrow hor-toggle"><span /></a>
            <div className="header-form">
            </div>
            <div className="d-flex order-lg-2 ml-auto header-rightmenu">
              <div className="dropdown">
                <a className="nav-link icon full-screen-link" id="fullscreen-button">
                  <i className="fe fe-maximize-2" />
                </a>
              </div>
              <div className="dropdown header-user">
                <Link to={'/profile'} className="nav-link leading-none siderbar-link" data-toggle="sidebar-right" data-target="sidebar-right">
                  <span className="mr-3 d-none d-lg-block ">
                    <span className="text-gray-white"><span className="ml-2">Alison</span></span>
                  </span>
                  <span className="avatar avatar-md brround"><img src="../assets/images/users/female/33.png" alt="Profile-img" className="avatar avatar-md brround" /></span>
                </Link>
                <div className="dropdown-menu dropdown-menu-right dropdown-menu-arrow">
                  <div className="header-user text-center mt-4 pb-4">
                    <span className="avatar avatar-xxl brround"><img src="../assets/images/users/female/33.png" alt="Profile-img" className="avatar avatar-xxl brround" /></span>
                    <a href="#" className="dropdown-item text-center font-weight-semibold user h3 mb-0">Username</a>
                    <small>Web Designer</small>
                  </div>
                  <a className="dropdown-item" href="#">
                    <i className="dropdown-icon mdi mdi-account-outline " /> Spruko technologies
                  </a>
                  <a className="dropdown-item" href="#">
                    <i className="dropdown-icon  mdi mdi-account-plus" /> Add another Account
                  </a>
                  <div className="card-body border-top">
                    <div className="row">
                      <div className="col-6 text-center">
                      <i className="dropdown-icon mdi  mdi-message-outline fs-30 m-0 leading-tight" />
                        <div>Inbox</div>
                      </div>
                      <div className="col-6 text-center">
                        <i className="dropdown-icon mdi mdi-logout-variant fs-30 m-0 leading-tight" />
                        <div>Sign out</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="dropdown">
                <a className="nav-link icon siderbar-link" data-toggle="sidebar-right" data-target=".sidebar-right">
                  <i className="fe fe-more-horizontal" />
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