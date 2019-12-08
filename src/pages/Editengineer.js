import React, {Fragment} from 'react'
import AppHeader from '../global/wrapper/app/AppHeader'
import axios from 'axios'
import {Redirect} from 'react-router-dom'
axios.defaults.headers.post['Content-Type'] = 'multipart/form-data'

class Editengineer extends React.Component{
  constructor(props){
    super(props);
    this.state = {
        name: this.props.name,
        gender: '',
        date_of_birth:'',
        email:'',
        phone_number:'',
        location:'',
        skill:'',
        showcase:'',
        description:'',
        profession : '',
        created_by: '',
        photo: null,
        isSubmit: '0',
        arr_engineer: ''
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

   
        this.editForm();
    this.setState({
        isSubmit: '1'
    })
    event.preventDefault();
}

async editForm() {

    try{
        let formData = new FormData();
        formData.append('name', this.state.name)
        formData.append('gender', this.state.gender)
        formData.append('date_of_birth', this.state.date_of_birth)
        formData.append('email', this.state.email)
        formData.append('phone_number', this.state.phone_number)
        formData.append('location', this.state.location)
        formData.append('skill', this.state.skill)
        formData.append('showcase', this.state.showcase)
        formData.append('description', this.state.description)
        formData.append('profession', this.state.profession)
        formData.append('photo', this.state.photo, this.state.photo.name);
        
      const response = await axios({
        method: 'put',
        url: 'edit',
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
        formData.append('photo', this.state.photo, this.state.photo.name);
        
      const response = await axios({
        method: 'post',
        url: 'http://52.90.6.74:5000/myhire/form/',
        data: formData
    
      });
        console.log(response.data.result.token);
    }catch(error) {
        console.log(error);
    }
}
componentDidMount(){
  var idEng = this.props.match.params.idEngineer
  // console.log(idEng);
  
  var token = localStorage.getItem('Authorization');
  axios.defaults.headers.common['Authorization'] = token;
  fetch('http://localhost:5000/engineer/by/'+idEng  )
  .then(response => response.json())
  .then(data => this.setState({ arr_engineer: data[0] })      )
  let login = localStorage.getItem('Login');
  // console.log('data:'+data);
  // console.log(this.state.arr_engineer);
  
  
  if(login == 0){
      this.setState({
          isLogin: '0'
      });
  }
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
      // if (this.state.login) {
      //   return <Redirect to={'/home'} />
      // }
        return(
            <Fragment>
            <AppHeader/>
            <div className="col-lg-12 col-xl-8 col-md-12 col-sm-12 mx-auto" style={{marginTop : 120}}>
            <div className="card">
              <div className="card-header">
                <h3 className="card-title">Edit Your Identity</h3>
              </div>
              <div className="card-body">
                <div className="row">
                  <div className="col-lg-12 col-md-12">
                  </div>
                </div>
              
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">Your Name</label>
                  <input type="text" name="name"className="form-control" id="exampleInputEmail1" onChange={this.handleChange} />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputnumber">Date of Birth</label>
                 <select name='gender' type='text' className="form-control" onChange={this.handleChange} >
                 <option value='0'>Male</option>
                 <option value='1'>Female</option>
                 </select>
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputnumber">Date of Birth</label>
                  <input type="date" name="date_of_birth" className="form-control" id="exampleInputEmail1" placeholder="Your Location" onChange={this.handleChange}  />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">Email</label>
                  <input type="email" name="email"className="form-control" id="exampleInputEmail1" placeholder="Input Your Email"onChange={this.handleChange} />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">Phone Number</label>
                  <input type="number" name="phone_number"className="form-control" id="exampleInputEmail1" placeholder="Ex : 08xxxxx"onChange={this.handleChange} />
                </div>

                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">Location</label>
                <input type="text" name="location" className="form-control" id="exampleInputEmail1" placeholder="Your Location" onChange={this.handleChange}  />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">Skil</label>
                <input type="text" name="skill" className="form-control" id="exampleInputEmail1" placeholder="Ex : Ruby, JavaScript, Python, HTML" onChange={this.handleChange}  />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputnumber">Github Link</label>
                  <input type="text" name="showcase" className="form-control" id="exampleInputEmail1" placeholder="Ex : https://github.com/phsycodeid/" onChange={this.handleChange}  />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">Description</label>
                <input type="text" name="description" className="form-control" id="exampleInputEmail1" placeholder="Ex : Im is programmer with 2 years experience" onChange={this.handleChange}  />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">Profession</label>
                <input type="text" name="profession" className="form-control" id="exampleInputEmail1" placeholder="Ex : Im a Fullstuck/ FrontEnd /Backend" onChange={this.handleChange}  />
                </div>
  
  
             
                 
                <div className="form-group mb-0 mt-5">
                  <div className="row">
                    <div className="col-xl-6 col-lg-12 col-md-12 userprofile text-center">
                      <div className="userpic mb-2">
                        <img src="../assets/images/users/female/5.jpg" alt="" className="userpicimg" />
                      </div>
                      <div className="text-center">
                        <input type="file" name='photo'  onChange={this.fileChange} 
                      />
                        {/* <a href="#" className="btn btn-primary mt-1"><i className="fe fe-camera  mr-1" />Change Photo</a><br /> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-footer text-right">
                <a href="#" className="btn btn-success mt-1" onClick=
                {this.handleSubmit}>Save</a>
                <a href="#" className="btn btn-warning mt-1">Cancel</a>
                {(this.state.isSubmit==='1')&&<Redirect push to='/home'></Redirect> }
              </div>
            </div>
          </div>
          </Fragment>
        )
    }
}
export default Editengineer