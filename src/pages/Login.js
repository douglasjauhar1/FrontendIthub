import  React from 'react'
import axios from 'axios'
import {Link, Redirect} from 'react-router-dom'
 class Login extends React.Component{
   state = {
     login: false,
     users: {
      username : '',
      password : ''
     }
   }
   handleChange = (e)=>{
    const data = {...this.state.users};
    data[e.target.name] = e.target.value;
    this.setState({
       users : data
    }, ()=> {console.log(this.state.users)})
   }

   handleSubmit = (event) =>{
    
    axios({
      method: 'post',
      url: 'http://localhost:5000/login',
      headers: {'Content-Type': 'application/json'},
      data: this.state.users

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
 
     render(){
       if (this.state.login) {
         return <Redirect to={'/home'} />
       }
         return(
        <div className="row">
        <div className="col-md-6 mx-auto text-center" style={{marginTop : '150px', alignContent : 'center'}}>
          <div className="card text-center">
            <div className="card-header">
              <h3 className="mb-0 card-title" style={{textAlign : 'center'}}>Login Page</h3>
            </div>
           
            <div className="card-body">
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
            </div>
          </div>
        </div></div>
         )                                                                    
     }
 }
 export default Login