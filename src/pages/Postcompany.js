import React, {Fragment} from 'react'
import AppHeader from '../global/wrapper/app/AppHeader'
import axios from 'axios'
import {Redirect} from 'react-router-dom'
class Postcompany extends React.Component{
  constructor(props) {
    super(props)
    
    this.state = {
      login: false,
      formData: {
        name : '',
        logo : 'https://icon-library.net/images/avatar-png-icon/avatar-png-icon-23.jpg',
        location: '' ,
        description: '',
        role_id : 2
     }
    }
    this.onChange=this.onChange.bind(this)
    this.handleCompany=this.handleCompany.bind(this)
  }
  onChange(event){
    let dataForm = {...this.state.formData};
    dataForm[event.target.name] = event.target.value;
    this.setState({
       formData: dataForm
    },() => {
       console.log(this.state.formData);
    })

  }
  handleCompany(event){
    axios({
      method: 'post',
      url: 'http://localhost:5000/company',
      headers: {'Content-Type': 'application/json'},
      data: this.state.formData
   }).then(res => {
    const result = res.data
    console.log(result)
    this.setState({
      login: true
    })

 }).catch(err => {
    if (err.response) {
       const result = err.response.data
       return console.log(result)
    }
    if (err.request) {
       return console.log(err.request)
    }
    else {
       return console.log(err)
    }
 })
 

   event.preventDefault()
  }
    render() {
      if (this.state.login) {
        return <Redirect to={'/home'} />
      }
        return(
            <Fragment>
            <AppHeader/>
            <div className="col-lg-12 col-xl-8 col-md-12 col-sm-12 mx-auto" style={{marginTop : 120}}>
            <div className="card">
              <div className="card-header">
                <h3 className="card-title">Register Your Company Details</h3>
              </div>
              <div className="card-body">
                <div className="row">
                  <div className="col-lg-12 col-md-12">
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">Company Name</label>
                  <input type="text" name="name"className="form-control" id="exampleInputEmail1" placeholder="Your Company Name"onChange={this.onChange} />
                </div>
              
                  <input type="hidden" name="logo"className="form-control" id="exampleInputEmail1" placeholder="Your Company Location"onChange={this.onChange} />
             
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">Location</label>
                <input type="text" name="location" className="form-control" id="exampleInputEmail1" placeholder="Your Company Location" onChange={this.onChange}  />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputnumber">Description</label>
                  <textarea className="form-control" name="description" rows={6} defaultValue={"My Company is........."} onChange={this.onChange}/>
                </div>
                  <input type="hidden" name="role_id" className="form-control" id="exampleInputEmail1" placeholder="Your Company Location" onChange={this.onChange} value="2" />
                <div className="form-group mb-0 mt-5">
                  <div className="row">
                    <div className="col-xl-6 col-lg-12 col-md-12 userprofile text-center">
                      <div className="userpic mb-2">
                        <img src="../assets/images/users/female/5.jpg" alt="" className="userpicimg" />
                      </div>
                      <div className="text-center">
                        <a href="#" className="btn btn-primary mt-1"><i className="fe fe-camera  mr-1" />Change Photo</a><br />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-footer text-right">
                <a href="#" className="btn btn-success mt-1" onClick=
                {this.handleCompany}>Save</a>
                <a href="#" className="btn btn-warning mt-1">Cancel</a>
              </div>
            </div>
          </div>
          </Fragment>
        )
    }
}
export default Postcompany