import React from 'react'
import WrapperApp from '../wrapper/WrapperApp'
import {Link} from 'react-router-dom'
class Work extends React.Component{
    render(){
        return(
          <WrapperApp>
             <div className="row">
            <div className="col-md-12" style={{marginTop : 100}}>
              <div className="card card-profile  overflow-hidden">
                <div className="card-body text-center profile-bg">
                  <div className=" card-profile">
                    <div className="row justify-content-center">
                      <div className>
                        <div className>
                     <h1 className="text-white mt-5"> How it Works</h1>
                        </div>
                      </div>
                    </div>
                  </div>
                  <h3 className="mb-2 text-white">Guide for the Application</h3>
                </div>
                <div className="card-body ">
                  <div className="nav-wrapper p-0">
                    <ul className="nav nav-pills nav-fill flex-column flex-md-row" id="tabs-icons-text" role="tablist">
                      <li className="nav-item">
                        <a className="nav-link mb-sm-3 mb-md-0 mt-md-2 mt-0 mt-lg-0 active show" id="tabs-icons-text-1-tab" data-toggle="tab" href="#tabs-icons-text-1" role="tab" aria-controls="tabs-icons-text-1" aria-selected="true"><i className="fa fa-handshake-o mr-2" />I Want to Hire</a>
                      </li>
                      <li className="nav-item">
        <a className="nav-link mb-sm-0 mb-md-0 mt-md-2 mt-0 mt-lg-0" id="tabs-icons-text-5-tab" data-toggle="tab" href="#tabs-icons-text-5" role="tab" aria-controls="tabs-icons-text-5" aria-selected="false"><i className="fa fa-telegram mr-2" />I Want to Work</a>
      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="card bg-gradient-primary">
                <div className="card-body pb-0">
                  <div className="tab-content" id="myTabContent">
                    <div className="tab-pane fade active show" id="tabs-icons-text-1" role="tabpanel" aria-labelledby="tabs-icons-text-1-tab">
                    <div className="row text-white bg-gradient-primary ">
                <div className="col-lg-6">
             
          <div className="card-body">
            <img src="https://www.f-cdn.com/assets/img/how-it-works/how-to-employer-c433ccda.png"/>
          </div>
        
        </div>  
                <div className="col-lg-6">  
               
          <div className="card-body">
            <h2>For Hiring Partner</h2>
            <h3 className="mt-1">1. Create a Project</h3>
            <h4>Always free to create your project. You will automatically begin to receive a list of our engineers. Or, you can browse the talents available on our site and make an offer directly to a freelancer.</h4>
            <h3 className="mt-1">2. Choosing the right engineers</h3>
            <ul>
           <li> <h4>Browse Engineers Profile </h4></li>
            <h4>Compare portfolios and choose the best </h4>
            <h4>Give your project and your engineers a start </h4>
            </ul>
            <h3>3. Employment contract and pay with your satisfaction</h3>
            <Link to={'/register'} className="btn btn-pill btn-default btn-md mr-3">Register Now</Link>
          </div>
       
                </div>
                </div>
                   
                    </div>
                    <div aria-labelledby="tabs-icons-text-2-tab" className="tab-pane fade" id="tabs-icons-text-2" role="tabpanel">
                      <div className="row">
                        <div className="col-md-12">
                          <div className="content content-full-width" id="content">

                            <div className="profile-content">
                             
                              <div className="tab-content p-0">
                               
                                <div className="tab-pane fade in active show" id="profile-friends">
                                </div>
                              </div>
                            </div>
                          </div></div></div>
       
                          
                          
                          </div>
                          <div className="tab-pane fade" id="tabs-icons-text-5" role="tabpanel" aria-labelledby="tabs-icons-text-5-tab">
                          <div className="row text-white  ">
                          <div className="col-lg-6">  
               
               <div className="card-body">
                 <h2>For Job Seekers</h2>
                 <h3 className="mt-1">
You can find any job you can imagine. We have various types of work from shipping to website development. You can find a variety of jobs that suit you at ithub.

</h3>
<br/>
<h3 className="mt-1">


Complete your profile and tell us your expertise so we can find jobs that are suitable for you.</h3>
             
                 <Link to={'/register'} className="btn btn-pill btn-default btn-md mr-3">Track a Job</Link>
               </div>
            
                     </div>
                <div className="col-lg-6 bg-light">
             
          <div className="card-body">
            <img src="https://www.f-cdn.com/assets/img/how-it-works/jobs-3a2ec70b.png"/>
          </div>
        
        </div>  
      
                </div>
      </div>
                          
                          </div></div></div></div></div>
          
                </WrapperApp>
          
           
        )
    }
}
export default Work