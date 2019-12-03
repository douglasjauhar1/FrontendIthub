import React, {Fragment} from 'react'
import AppHeader from '../global/wrapper/app/AppHeader'
import axios from 'axios'
import {Redirect} from 'react-router-dom'
import formData from 'form-data';

class Postengineer extends React.Component{
  constructor(props) {
    super(props)
    
    this.state = {
      login: false,
      foto: null,
      formData: {
        name : '',
        description: '',
        location: '' ,
        dob : '',
        showcase : '',
     
     },
    }
    this.onChange=this.onChange.bind(this)
    this.handleEngineer=this.handleEngineer.bind(this)
    this.setData = this.setData.bind(this);
    this.userForm = new FormData()
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
  setData () {
    this.userForm.append('photo', this.state.foto);
    this.userForm.append('name', this.state.formData.name)
    this.userForm.append('dob', this.state.formData.dob)
    this.userForm.append('location', this.state.formData.location)
    this.userForm.append('showcase', this.state.formData.showcase)
    this.userForm.append('description', this.state.formData.description)

  }

  handleEngineer(event){
    // return console.log(this.userForm.get('photo'))
    this.setData()
    axios({
      method: 'post',
      url: 'http://localhost:5000/engineer',
      headers: {'Content-Type': 'multipart/form-data'},
      data: this.userForm
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

  fileSelectedHandler = event => {
    this.setState({
      foto: event.target.files[0]
    }, ()=> {
      console.log(this.state.foto)
    })
  }

  // async fileUploadHandler() {
  //   try {
  //     const fd = new FormData();
  //     fd.append('photo', this.state.foto)
  //     const response = await axiosPost('http://localhost:5000/engineer/', fd)
  //     console.log(response.data)
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }
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
                <h3 className="card-title">Register Your Identity</h3>
              </div>
              <div className="card-body">
                <div className="row">
                  <div className="col-lg-12 col-md-12">
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">Your Name</label>
                  <input type="text" name="name"className="form-control" id="exampleInputEmail1" placeholder="Input Your Name"onChange={this.onChange} />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">Role</label>
                <input type="text" name="description" className="form-control" id="exampleInputEmail1" placeholder="Ex : Fullstuck/ FrontEnd /Backend" onChange={this.onChange}  />
                </div>
              
                  <input type="hidden" name="foto"className="form-control" id="exampleInputEmail1" placeholder="Your Company Location"onChange={this.onChange} />
             
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">Location</label>
                <input type="text" name="location" className="form-control" id="exampleInputEmail1" placeholder="Your Location" onChange={this.onChange}  />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputnumber">Date of Birth</label>
                  <input type="date" name="dob" className="form-control" id="exampleInputEmail1" placeholder="Your Location" onChange={this.onChange}  />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputnumber">Github Link</label>
                  <input type="text" name="showcas" className="form-control" id="exampleInputEmail1" placeholder="Ex : https://github.com/phsycodeid/" onChange={this.onChange}  />
                </div>
                 
                <div className="form-group mb-0 mt-5">
                  <div className="row">
                    <div className="col-xl-6 col-lg-12 col-md-12 userprofile text-center">
                      <div className="userpic mb-2">
                        <img src="../assets/images/users/female/5.jpg" alt="" className="userpicimg" />
                      </div>
                      <div className="text-center">
                        <input type="file"  onChange={this.fileSelectedHandler} 
                      />
                        <a href="#" className="btn btn-primary mt-1"><i className="fe fe-camera  mr-1" />Change Photo</a><br />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-footer text-right">
                <a href="#" className="btn btn-success mt-1" onClick=
                {this.handleEngineer}>Save</a>
                <a href="#" className="btn btn-warning mt-1">Cancel</a>
              </div>
            </div>
          </div>
          </Fragment>
        )
    }
}
export default Postengineer