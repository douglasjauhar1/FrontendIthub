import React from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import WrapperApp from '../wrapper/WrapperApp';
class ListCompany extends React.Component{
    constructor(){
     super();
     //mengirimkan state ke bagian render 
     //props itu berbentuk objek
     this.state = {
       items : []
     };
   
   }
   componentDidMount(){
    axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
    var token = localStorage.getItem('Authorization');
    axios.defaults.headers.common['Authorization'] = token;
    try{
      axios.get('http://52.90.6.74:2000/company/read')
        .then(res => {
          const persons = res.data;
         
          this.setState({ items: persons });
          
        })
      }catch(error) {
        console.log(error);
      }
}
     render(){
      // console.log(this.state.items);
        return( 
          <WrapperApp>
          
  
            <div className="row" style={{marginBottom : 100, marginTop : 200}}>
            <div className="card-body">
       
      </div>
     {this.state.items.map((item, index) =>
          
      <div className="col-md-3">   
        <div className="card"> 
        
         <li key ={index} style={{listStyle : 'none'}}>
         <div className="card-header">
         <div className="card-title">{item.name}</div>
             {/* <h1>{item.name}</h1> */}
             
             </div>
             <img src={`http://52.90.6.74:2000/myhire/file/`+item.logo} style={{width : '100%', height : 200, objectFit : 'cover'}}/>
      
             <div className="card-body">
                        <h5 className="card-title mb-3">{item.description}</h5>
                        <p className="card-text">{item.location}</p>
                        <p className="card-text">{item.skill_name}</p>
                        <Link to className="btn btn-primary" onClick={this.getUsers}>View More</Link>
                    </div>
          </li>
          
          </div>
          </div>
        )}
          </div>
            
      
          </WrapperApp>
       
        )
    }
}
export default ListCompany