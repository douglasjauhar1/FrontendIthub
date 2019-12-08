import React from 'react'
import WrapperApp from '../wrapper/WrapperApp'
import {Link} from 'react-router-dom'
class Work extends React.Component{
    render(){
        return(
          <WrapperApp>
           
            <div className="row text-white bg-gradient-primary " style={{marginTop : 120, marginBottom : 100}}>
                <div className="col-lg-6">
             
          <div className="card-body">
            <img src="https://www.f-cdn.com/assets/img/how-it-works/how-to-employer-c433ccda.png"/>
          </div>
        
        </div>  
                <div className="col-lg-6">  
               
          <div className="card-body" style={{marginTop : 120}}>
            <h2>How it works?</h2>
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
                </WrapperApp>
          
           
        )
    }
}
export default Work