import 'dotenv/config'
import React from 'react'
import axios from 'axios'
import swal from 'sweetalert';
import {Redirect} from 'react-router-dom'
class Register extends React.Component{
  constructor(props){
    super(props);
    this.state = {
        username: '',
        password: '',
        category: '',
        isChange: null,
       
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.sendLogin = this.sendLogin.bind(this);
}

handleChange(event) {
    const target = event.target;
    const value =  target.value;
    const name = target.name;

    this.setState({
    [name]: value
    });
}

handleSubmit(event) {
    console.log('submit!');
    this.sendLogin()
    event.preventDefault();
}

async sendLogin() {
    try{
      const response = await axios({
        method: 'post',
        url: 'http://52.90.6.74:5000/myhire/regis',
        data: {
          username: this.state.username,
          password: this.state.password,
          category: this.state.category
        }
      
      });
      const regist = await swal({
        title: "Welcome to ithubs",
        text: "Use your username and password for login",
        icon: "success",
        dangerMode: false,
      });
      if (regist) {
        swal("Welcome!", "Please Completed your profile", "success");
      }
      axios.defaults.headers.common['Authorization'] = response.data.result.token;
      localStorage.setItem("Authorization", response.data.result.token);
        console.log(response.data.result.token);
        this.setState({
            isChange: 2,
            values : this.state.category

        })
      }catch(error) {
        console.log(error);
        this.setState({
            isChange: 1,
            
        })
      }
  }
    render(){
      if (this.state.values == 0) {
        return <Redirect to={'/regengineer'} />
      }if (this.state.values == 1){
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
            {/* {(this.state.isValid === 1)?<div className="alert alert-danger mb-5" role="alert">oops ... the username is already registered, please provide another username</div>:null} */}
              <div className="row">
                <div className="col-md-8">
                  <div className="form-group">
                    <input name='username' type="text" className="form-control"  placeholder="Enter Your Name" onChange={this.handleChange}  required/>
                  </div>
                  <div className="form-group">
                    <input type="password" name='password' className="form-control" placeholder="Enter Your Password" onChange={this.handleChange} required />
                  </div>
                  <select name='category' class="form-control select2 custom-select" data-placeholder="Choose one" onChange={this.handleChange} required>
					<option label="Select Register as">
					</option>
					<option value="0">Software Engineer</option>
					<option value="1">Company</option>
					</select>  
                     <br/> 
                    <button type="submit" className="btn btn-primary mt-3" onClick={this.handleSubmit}>Register</button>
                </div>
                <div className="col-md-4 mt-3">
                    <img src="https://i.imgur.com/7HqM7LW.png" style={{width : 200, height : 200, marginTop: -20}}/>
                </div>
              </div>
            </div>
          </div>
        </div></div>
        )
    }
}
export default Register