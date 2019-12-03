import React, {Component} from 'react'

class AppFooter extends Component {
    
    render() {
        return(
			<div className="row">
			<div className="col-12">
			  <div className="card">
				<div className="card-body">
				  <div className="top-footer">
					<div className="row">
					  <div className="col-lg-4 col-md-12">
						<h6>About</h6>
						<p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
						<p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur Excepteur sint occaecat .</p>
					  </div>
					  <div className="col-lg-2 col-md-12">
						<h6>Pages</h6>
						<ul className="list-unstyled">
						  <li><a href="javascript:;">Dashboard</a></li>
						  <li><a href="javascript:;">Elements</a></li>
						  <li><a href="javascript:;">Forms</a></li>
						  <li><a href="javascript:;">Charts</a></li>
						  <li><a href="javascript:;">Tables</a></li>
						  <li><a href="javascript:;">Other Pages</a></li>
						</ul>
					  </div>
					  <div className="col-lg-2 col-md-12">
						<h6>Information</h6>
						<ul className="list-unstyled">
						  <li><a href="javascript:;">Our Team</a></li>
						  <li><a href="javascript:;">Contact US</a></li>
						  <li><a href="javascript:;">About</a></li>
						  <li><a href="javascript:;">Services</a></li>
						  <li><a href="javascript:;">Blog</a></li>
						  <li><a href="javascript:;">Terms and Services</a></li>
						</ul>
					  </div>
					  <div className="col-lg-4 col-md-12">
						<h6>Location</h6>
						<ul className="list-unstyled">
						  <li><a href="javascript:;">Address1:7363 Old Livingston Drive Dyersburg</a></li>
						  <li><a href="javascript:;">Address2:4 Harrison St.Fairborn, OH 45324</a></li>
						  <li><a href="javascript:;">Phno1: +123 456 8976</a></li>
						  <li><a href="javascript:;">Phno2: +567 234 7865</a></li>
						  <li><a href="javascript:;">Mail1: yourdomain@gmail.com</a></li>
						  <li><a href="javascript:;">Mail2: infodomain@gmail.com</a></li>
						</ul>
					  </div>
					</div>
				  </div>
				  <footer className="main-footer pl-0 pr-0">
					<div className="row">
					  <div className="col-xl-8 col-lg-12 col-md-12 footer1">
						Copyright ©Splite 201	8. Design By<a href="https://spruko.com/"> Spruko</a>
					  </div>
					  <div className="col-xl-4 col-lg-12 col-md-12 ml-auto text-right">
						<ul className="footer-social-list ">
						  <li><a href="javascript:;"><i className="fa fa-facebook" /></a></li>
						  <li><a href="javascript:;"><i className="fa fa-google" /></a></li>
						  <li><a href="javascript:;"><i className="fa fa-twitter" /></a></li>
						  <li><a href="javascript:;"><i className="fa fa-linkedin" /></a></li>
						</ul>
					  </div>
					</div>
				  </footer>
				</div>
			  </div>
			</div>
		  </div>
        )
    }

}

export default AppFooter