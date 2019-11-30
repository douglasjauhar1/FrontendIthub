import React from 'react'
import axios from 'axios'
import {Redirect} from 'react-router-dom'
class Register extends React.Component{
  constructor(props) {
    super(props)
    
    this.state = {
      values: 0,
      formData: {
        username : '',
        email: '' ,
        role_id: 0,
        password: ''
     }
    }
    this.onChange=this.onChange.bind(this)
    this.handleRegister=this.handleRegister.bind(this)
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
  handleRegister(event){
    axios({
      method: 'post',
      url: 'http://localhost:5000/account',
      headers: {'Content-Type': 'application/json'},
      data: this.state.formData
   }).then(res => {
     this.setState({
       values: this.state.formData.role_id
     })
      console.log(this.state.formData.role_id)
   }).catch(err => {
      if (err.response) {
         return console.log(err.response.data)
      }
      if (err.request) {
         return console.log('error from request', err.request);
      }
      else {
         console.log(err)
      }
   })

   event.preventDefault()
  }
  
    render(){
      if (this.state.values == 1) {
        return <Redirect to={'/regengineer'} />
      }
      if (this.state.values == 2) {
        return <Redirect to={'/regcompany'} />
      }
        return(
        <div className="row">
        <div className="col-md-6 mx-auto text-center" style={{marginTop : '150px', alignContent : 'center'}}>
          <div className="card text-center">
            <div className="card-header">
              <h3 className="mb-0 card-title" style={{textAlign : 'center'}}>Register Page</h3>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-md-8">
                  <div className="form-group">
                    <input name='username' type="text" className="form-control"  placeholder="Enter Your Name" onChange={this.onChange}  />
                  </div>
                  <div className="form-group">
                    <input name='email' type="email" className="form-control"  placeholder="Enter Your email" onChange={this.onChange}  />
                  </div>
                  <div className="form-group">
                    <input type="password" name='password' className="form-control" placeholder="Enter Your Password" onChange={this.onChange} />
                  </div>
                  <select name='role_id' class="form-control select2 custom-select" data-placeholder="Choose one" onChange={this.onChange}>
					<option label="Select Register as">
					</option>
					<option value="1">Software Engineer</option>
					<option value="2">Company</option>
					</select>  
                     <br/> 
                    <button type="submit" className="btn btn-primary mt-3" onClick={this.handleRegister}>Register</button>
                </div>
                <div className="col-md-4 mt-3">
                    <img src="https://i.imgur.com/7HqM7LW.png" style={{width : 200, height : 200, marginTop: -30}}/>
                </div>
              </div>
            </div>
          </div>
        </div></div>
        )
    }
}
export default Register