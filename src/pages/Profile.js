import React from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import WrapperApp from '../wrapper/WrapperApp'
class Profile extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      arr_engineer: '',
      select : ''
    }
  }

  componentDidMount(){
    //if(this.props.select == '1'){
    var idEng = this.props.match.params.idEngineer
    console.log(idEng);
    
    var token = localStorage.getItem('Authorization');
    axios.defaults.headers.common['Authorization'] = token;
    fetch('http://52.90.6.74:5000/engineer/by/'+idEng  )
    .then(response => response.json())
    .then(data => {
      this.setState({ arr_engineer: data[0] }) 
      console.log(data)
    })
   
    
   // }
  
    //else if(this.props.select == '2'){
    //    var token = localStorage.getItem('Authorization');
    //  axios.defaults.headers.common['Authorization'] = token;
    //  fetch('http://localhost:5000/myhire/by/')
    //  .then(response => response.json())
    //  .then(data => this.setState({ arr_engineer: data[0] })      )
    // }

    let login = localStorage.getItem('Login');
    // console.log('data:'+data);
    // console.log(this.state.arr_engineer);
    
    
    if(login == 0){
        this.setState({
            isLogin: '0'
        });
    }
}



    render(){
        return(
            <WrapperApp>
              {/* {(this.props.category === '0')&&
                <div>

                </div>
              } */}
            <div className="row">
            <div className="col-md-12" style={{marginTop : 100}}>
              <div className="card card-profile  overflow-hidden">
                <div className="card-body text-center profile-bg">
                  <div className=" card-profile">
                    <div className="row justify-content-center">
                      <div className>
                        <div className>
                        
                            <img src={`http://52.90.6.74:5000/myhire/file/`+this.state.arr_engineer.photo} className="avatar-xxl rounded-circle" alt="profile" />
                         
                        </div>
                      </div>
                    </div>
                  </div>
                  <h3 className="mt-3 text-white">{this.state.arr_engineer.name}</h3>
                  <h4 className="mb-2 text-white">{this.state.arr_engineer.skill}</h4>
                  <h5 className="mb-2 text-white">{this.state.arr_engineer.profession}</h5>
                  <div className="text-center mb-4">
                    <span><i className="fa fa-star text-warning" /><p className="text-white">90 % Project Rate</p></span>
                 
                  </div>
                  {/* <a href="#" className="btn btn-info btn-sm"><i className="fas fa-pencil-alt" aria-hidden="true" /> Edit profile</a> */}
                </div>
                <div className="card-body">
                  <div className="nav-wrapper p-0">
                    <ul className="nav nav-pills nav-fill flex-column flex-md-row" id="tabs-icons-text" role="tablist">
                      <li className="nav-item">
                        <a className="nav-link mb-sm-3 mb-md-0 mt-md-2 mt-0 mt-lg-0 active show" id="tabs-icons-text-1-tab" data-toggle="tab" href="#tabs-icons-text-1" role="tab" aria-controls="tabs-icons-text-1" aria-selected="true"><i className="fa fa-home mr-2" />About</a>
                      </li>
                      <li className="nav-item">
                        <Link to={'/edit'} className="nav-link mb-sm-0 mb-md-0 mt-md-2 mt-0 mt-lg-0" id="tabs-icons-text-5-tab" data-toggle="tab" href="#tabs-icons-text-5" role="tab" aria-controls="tabs-icons-text-5" aria-selected="false"><i className="fa fa-cog mr-2" />Edit Profile
                        </Link>
                      </li>
                      <li className="nav-item">
        <a className="nav-link mb-sm-0 mb-md-0 mt-md-2 mt-0 mt-lg-0" id="tabs-icons-text-5-tab" data-toggle="tab" href="#tabs-icons-text-5" role="tab" aria-controls="tabs-icons-text-5" aria-selected="false"><i className="fa fa-cog mr-2" />More</a>
      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-body pb-0">
                  <div className="tab-content" id="myTabContent">
                    <div className="tab-pane fade active show" id="tabs-icons-text-1" role="tabpanel" aria-labelledby="tabs-icons-text-1-tab">
                      <div className="table-responsive mb-3">
                        <table className="table row table-borderless w-100 m-0 border">
                          <tbody className="col-lg-6 p-0">
                            <tr>
                              <td><strong>Full Name :</strong> {this.state.arr_engineer.name}</td>
                            </tr>
                            <tr>
                              <td><strong>Location : {this.state.arr_engineer.location}</strong> Uk</td>
                            </tr>
                            <tr>
                              <td><strong>Skill :</strong>   {this.state.arr_engineer.skill}</td>
                            </tr>
                            <tr>
                              <td><strong>DOB :</strong> {this.state.arr_engineer.date_of_birth}1</td>
                            </tr>
                          </tbody>
                          <tbody className="col-lg-6 p-0">
                            <tr>
                              <td><strong>Occupation :</strong> {this.state.arr_engineer.profession}</td>
                            </tr>
                            <tr>
                              <td><strong>Github :</strong> {this.state.arr_engineer.showcase}</td>
                            </tr>
                            <tr>
                              <td><strong>Email :</strong> {this.state.arr_engineer.email}</td>
                            </tr>
                            <tr>
                              <td><strong>Phone :</strong> {this.state.arr_engineer.phone_number}</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <h4><strong>About Me</strong></h4>
                      <p className="description">{this.state.arr_engineer.description}.</p>
                      <div className="media-heading mt-3">
                        <h4><strong>Biography</strong></h4>
                      </div>
                      <p>Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus</p>
                      <p className="mb-4">because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure.</p>
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
        <p>Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum iphone. Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui.</p>
        <p>Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus</p>
        <p>Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus</p>
        <p>Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus</p>
        <p className="mb-4">because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure.</p>
      </div>
                          
                          </div></div></div></div></div>
                          </WrapperApp>

        )
    }
}
export default Profile