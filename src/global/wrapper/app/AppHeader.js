import React, {Component} from 'react'
import { Link, Redirect } from 'react-router-dom'
import swal from 'sweetalert';
const axios = require('axios');
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'




class AppHeader extends Component {
  constructor(props){
    super(props);
    this.state = {
        islogout: '0',
        isLogin : '1',
        getUser : 1,
        arr_engineer: '',
    }
    this.sendLogout = this.sendLogout.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  async sendLogout() {
    try{
     
      const response = await axios({
        method: 'get',
        url: 'http://52.90.6.74:5000/myhire/logout',
      });
        console.log(response.data.result);
        localStorage.removeItem("Authorization");
     
      }catch(error) {
        console.log(error);
      }

  }

  async componentDidMount(){

    var token = localStorage.getItem('Authorization');
    axios.defaults.headers.common['Authorization'] = token;
    // var idEng = this.props.ideng
    // console.log(idEng);
    
    var token = localStorage.getItem('Authorization');
    axios.defaults.headers.common['Authorization'] = token;
    console.log(token);
    const profile = await axios.get('http://52.90.6.74:5000/myhire/by')
    
    this.setState({ arr_engineer: profile.data.result[0] })
    console.log(this.state.arr_engineer===undefined);
    // fetch('http://localhost:5000/myhire/by')
    // .then(response => response.json())
    // .then(data => {
    //   console.log(data)
    //   this.setState({ arr_engineer: data[0] })
    // }
      
      
    //   )
      
   
    let login = localStorage.getItem('Login');
    if(login == 0){
        this.setState({
            isLogin: '1'
        });
    }else {
      this.setState({
        isLogin: '2'
    });
    }
}
  handleSubmit(event) {
    event.preventDefault()
    swal("Are you sure to Logout?", "You will redirect to login page!", "warning")
    .then((value) => {
      if (value) {
        console.log('submit!');
      this.sendLogout() 
      this.setState({
          islogout: '1'
      })
      localStorage.setItem("Login", '0');
      }
    })
      
      
  }

  async handleChange(event) {
    const target = event.target;
    const value =  target.value;
    await this.props.changeTitle(value)
    
  }

    
    render() {
        if(this.state.arr_engineer===undefined)return(<Redirect to='/'/>)
        return(
<div className="app-header header hor-topheader d-flex">
        <div className="container">
          <div className="d-flex">
            <Link to ={'/home'} className="header-brand">
              <img src="https://i.imgur.com/YhODYAw.png" className="header-brand-img main-logo" />
            </Link>
           
    
            {/* <a id="horizontal-navtoggle" className="animated-arrow hor-toggle"><span /></a> */}

        
            <form className="input-icon mt-3">
        <input name="search" 
                type="text" 
                className="form-control" 
                placeholder="Search" 
                value={this.props.title}
                onChange={this.handleChange.bind(this)}/>
        <div className="input-icon-addon pr-3">
          <i className="fe fe-search "style={{marginTop :-10}} />
        </div>
      </form>
      
            <div className="d-flex order-lg-2 ml-auto header-rightmenu">
              <div className="dropdown">
                <a className="nav-link icon full-screen-link" id="fullscreen-button">
                  <i className="fe fe-maximize-2" />
                </a>
              </div>
      {
        (this.state.isLogin == '1')&&         <div className="ml-auto mt-3 pl-3">
        <Link to={'/register'} className="btn btn-pill btn-primary btn-md mr-3">Register</Link>
        <Link to={'/'} className="btn btn-pill btn-primary btn-md ">Login</Link>
      </div>

      }
      {
        (this.state.isLogin == '2') &&      <div className="dropdown">
      <Link to ={'/allcomp'} >
        <h4 className="mt-5">Company</h4>
       </Link>
       
      </div> 
  
        
      }
         {
        (this.state.isLogin == '2') &&      <div className="dropdown">
      <Link to ={'/project'} >
        <h4 className="mt-5 ml-5">Projects</h4>
       </Link>
       
      </div> 
  
        
      }

      {
        (this.state.isLogin == '2') &&     
         <div className="dropdown header-user">
      
                 <Link to={`/myprofile`}  className="nav-link leading-none siderbar-link" data-toggle="sidebar-right" data-target="sidebar-right">
                 <span className="mr-3 d-none d-lg-block ">
                   <span className="text-gray-white">{this.state.name}<span className="ml-2"></span></span>
                 </span>
                 <span className="avatar avatar-md brround"><img src="../assets/images/users/female/33.png" alt="Profile-img" className="avatar avatar-md brround" /></span>
               </Link>
        
           

          
 
         
    
        {/* <Link to={'/editengineer'} className="nav-link leading-none siderbar-link" data-toggle="sidebar-right" data-target="sidebar-right">
          <span className="mr-3 d-none d-lg-block ">
            <span className="text-gray-white"><span className="ml-2">Alison</span></span>
          </span>
          <span className="avatar avatar-md brround"><img src="../assets/images/users/female/33.png" alt="Profile-img" className="avatar avatar-md brround" /></span>
        </Link> */}
      </div>
  
        
      }


      {
        (this.state.isLogin == '2') &&      <div className="dropdown">
        <a className="nav-link icon siderbar-link" data-toggle="sidebar-right" data-target=".sidebar-right" onClick={this.handleSubmit}>
          <i className="fe fe-log-out" />
        </a>
       
      </div> 
  
        
      }
          
      {(this.state.islogout=='1')&&<Redirect push to='/'></Redirect> }
         
            </div>
          </div>
        </div>
        
      </div>
      
        )
    }

}

export default AppHeader