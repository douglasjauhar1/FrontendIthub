import React, {Fragment} from 'react'
import AppHeader from '../global/wrapper/app/AppHeader'
import axios from 'axios'
import {Redirect} from 'react-router-dom'
class Postcompany extends React.Component{
  constructor(props){
    super(props);
    this.state = {
        name: '',
        // gender: '',
        // date_of_birth:'',
        // email:'',
        // phone_number:'',
        // location:'',
        // skill:'',
        // showcase:'',
        // description:'',
        // profession : '',
        // created_by: '',
        photo: null,
        isSubmit: '0'
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.sendForm = this.sendForm.bind(this);
    this.editForm = this.editForm.bind(this);
}

fileChange = event => {
    console.log(event.target.files[0]); 
    this.setState({
        photo: event.target.files[0]
    });  
}

handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
    [name]: value
    },()=>{
      console.log(this.state)
    });
}

handleSubmit(event) {

   
    this.sendForm();
    this.setState({
        isSubmit: '1'
    })
    event.preventDefault();
}

async editForm() {

    try{
        let formData = new FormData();
        formData.append('name', this.state.name)
        formData.append('photo', this.state.photo, this.state.photo.name);
        
      const response = await axios({
        method: 'put',
        url: 'http://localhost:5000/myhire/edit',
        data: formData
        // data: {
        //     name: this.state.name,
        //     photo: this.state.photo,
        //     gender: this.state.gender,
        //     date_of_birth: this.state.date_of_birth,
        //     email: this.state.email,
        //     phone_number: this.state.phone_number, 
        //     location: this.state.location,
        //     skill: this.state.skill,
        //     showcase: this.state.showcase,
        //     description: this.state.description
        // }
      });/*  */
        console.log(response.data.result.token);
    }catch(error) {/*  */
        console./*  */log(error);
    }
}

async sendForm() {
    try{
        let formData = new FormData();
        formData.append('name', this.state.name)
        formData.append('email', this.state.email)
        formData.append('phone_number', this.state.phone_number)
        formData.append('location', this.state.location)
        formData.append('required_skill', this.state.required_skill)
        formData.append('description', this.state.name)
        formData.append('photo', this.state.photo, this.state.photo.name);
        
      const response = await axios({
        method: 'post',
        url: 'http://localhost:5000/myhire/form/',
        data: formData
    
      });
        console.log(response.data.result.token);
    }catch(error) {
        console.log(error);
    }
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
                  <input type="text" name="name"className="form-control" id="exampleInputEmail1" placeholder="Your Company Name"onChange={this.handleChange} />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">Email</label>
                  <input type="text" name="email"className="form-control" id="exampleInputEmail1" placeholder="Your Company Name"onChange={this.handleChange} />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">Phone Number</label>
                  <input type="text" name="phone_number"className="form-control" id="exampleInputEmail1" placeholder="Your Company Name"onChange={this.handleChange} />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">Location</label>
                <input type="text" name="location" className="form-control" id="exampleInputEmail1" placeholder="Your Company Location" onChange={this.handleChange}  />
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
                        <a href="#" className="btn btn-primary mt-1"><i className="fe fe-camera  mr-1" />
                        Change Photo</a><br /> <input type="file" name='photo'  onChange={this.fileChange} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-footer text-right">
                <a href="#" className="btn btn-success mt-1" onClick=
                {this.handleSubmit}>Save</a>
                <a href="#" className="btn btn-warning mt-1">Cancel</a>
                {(this.state.isSubmit==='1')&&<Redirect to='/home'></Redirect> }
              </div>
            </div>
          </div>
          </Fragment>
        )
    }
}
export default Postcompany