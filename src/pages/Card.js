import React from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
class Card extends React.Component{
    constructor(){
     super();
     //mengirimkan state ke bagian render 
     //props itu berbentuk objek
     this.state = {
       items : []
     };
   
   }
   componentDidMount(){
     fetch("http://localhost:5000/engineer")
     .then(response => response.json())
     .then(data => this.setState({ items : data }))
   }
     render(){
        const {items} = this.state
        return( 
  
            <div className="row">
           
     {items.map((item, index) =>
          
      <div className="col-md-3">   
        <div className="card"> 
        
         <li key ={index} style={{listStyle : 'none'}}>
         <div className="card-header">
         <div className="card-title">{item.name}</div>
             {/* <h1>{item.name}</h1> */}
             
             </div>
             <img src={`http://localhost:5000/image/`+item.foto} style={{width : '100%', height : 200, objectFit : 'cover'}}/>
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
            
      
           
       
        )
    }
}
export default Card