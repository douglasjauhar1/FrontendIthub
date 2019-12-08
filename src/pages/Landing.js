import 'dotenv/config'
import React, {Component} from 'react'
import WrapperApp from '../wrapper/WrapperApp'
import Card from './Card'
import Slide from './Slide'
import Searchcard from './Searchcard';
import axios from 'axios'
import {Link} from 'react-router-dom'

class Landing extends Component {
    constructor(){
        super();
        this.state={
          title: '',
          isStart : '1',
          item: []
        }
    }
    async getsearch() {
        var token = localStorage.getItem('Authorization');
        axios.defaults.headers.common['Authorization'] = token;
        axios.get('http://52.90.6.74:5000/'+`/myhire/search/?skill=${this.state.title}`)
            .then(async res => {
                const persons = await res.data.result
                
                await this.setState({ 
                    item: persons 
                })
            })
            await console.log(this.state.item)
        }
    async changeSearch(title){
        await this.setState({
          title
        })
        try{ 
           
        }
        catch(error)
        {
          console.log(error);
        }
        console.log(this.state.title);
        await this.getsearch()
      }
      componentDidMount(){
          this.getsearch()
      }
    render() {
        return(
            <WrapperApp changeSearch={this.changeSearch.bind(this)} title={this.state.title}> 
                <Slide/>
                 {
                     (this.state.isStart === '1')&&
                   <Card
                   />  
                 }
                 {
                     (this.state.isStart === '0')&&
                     <div className="row">
           
                     {
                         this.state.item.map((item, index) =>
                    
                      <div className="col-md-3">   
                        <div className="card"> 
                        
                         <li key ={index} style={{listStyle : 'none'}}>
                         <div className="card-header">
                         <div className="card-title">{item.name}</div>
                             {/* <h1>{item.name}</h1> */}
                             
                             </div>
                             <img src={`http://localhost:5000/myhire/file/`+item.photo} style={{width : '100%', height : 200, objectFit : 'cover'}}/>
                             <div className="card-body">
                                        <h5 className="card-title mb-3">{item.profession}</h5>
                                        <p className="card-text">
                                        <i className="fa fa-map-marker mr-2" style={{color : '#2c5596'}}></i>{item.location}</p>
                                        <p className="card-text">   <i className="fa fa-bookmark mr-2" style={{color : '#2c5596'}}></i>{item.skill}</p>
                                        
                                        <Link to={`/profile/${item.created_by}`} className="btn btn-primary" onClick={this.getUsers}>View More</Link>
                                      
                                    </div>
                          </li>
                          
                          </div>
                          </div>
                        )}
                          </div>
                 }
                 
            </WrapperApp>
       
        )
    }

}

export default Landing