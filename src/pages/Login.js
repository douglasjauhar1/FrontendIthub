import  React from 'react'
import axios from 'axios'
import connect from 'react-redux'
import action from '../../src/Public/Redux/Action/Engineer'
import {Link, Redirect} from 'react-router-dom'
 class Login extends React.Component{
  constructor(props){
    super(props);
    this.state = {
        username: '',
        password: '',
        isvalid: '0',
        
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
    this.sendLogin();
    event.preventDefault();

}

async sendLogin() {
    try{
      const response = await axios({
        method: 'post',
        url: 'http://localhost:5000/myhire/login',
        data: {
          username: this.state.username,
          password: this.state.password
        }
      });
      console.log(response.data.result.category)
      axios.defaults.headers.common['Authorization'] = response.data.result.token;
      localStorage.setItem("Authorization", response.data.result.token);
      localStorage.setItem("Category", response.data.result.category);
      localStorage.setItem("Login", '1');
      this.setState({
        isvalid: '2'
      })
      
      
      }catch(error) {
        console.log(error);
        this.setState({
          isvalid: '1'
        })
      }
  }
 
     render(){
      //  if (this.state.login) {
      //    return <Redirect to={'/home'} />
      //  }
         return(
        <div className="row">
        <div className="col-md-6 mx-auto text-center" style={{marginTop : '150px', alignContent : 'center'}}>
          <div className="card text-center">
            <div className="card-header">
              <h3 className="mb-0 card-title" style={{textAlign : 'center'}}>Login Page</h3>
            </div>
           
            <div className="card-body">
              {/* {(this.state.alert === true)
               <div className="alert alert-icon alert-danger" role="alert">
               <i className="fa fa-frown-o mr-2" aria-hidden="true" /> Oh snap!Change a few things up and try submitting again.
             </div>
              }
    */}
          {(this.state.isvalid === '1')?<div className="alert alert-danger" role="alert">the username or password invalid</div>:null}
            <form onSubmit={this.handleSubmit}>
           
              <div className="row">
                <div className="col-md-8">
                  <div className="form-group">
                    <input type="text" className="form-control" name="username" placeholder="Enter Your Username" onChange={this.handleChange} />
                  </div>
                  <div className="form-group">
                    <input type="password" className="form-control" name="password" placeholder="Enter Your Password" onChange={this.handleChange}  />
                  </div>  
                     <br/> 
                  <button type="submit" className="btn btn-primary mt-3" >Login</button>
                  <br/>
                  <p className="mt-3">Don't Have Account?, <Link to ={'/register'}>Register Now!</Link> </p>
                </div>
                <div className="col-md-4 mt-3">
                    <img src="https://i.imgur.com/iDsN33z.png" style={{width : 200, height : 200, marginTop: -30}}/>
                </div>
              </div>
              </form>
              {(this.state.isvalid==='2')&&<Redirect push to='/home'></Redirect> }
            </div>
          </div>
        </div></div>
         )                                                                    
     }
 }
 export default Login