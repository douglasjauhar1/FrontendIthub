import React, { Component } from 'react'
import axios from 'axios'
import WrapperApp from '../wrapper/WrapperApp'
import Listproject from './Listproject'

export class Project extends Component {
  constructor(props){
    super(props);
    this.state = {
        name: '',
        skill: '',
        price : '',
        description: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.sendProject = this.sendProject.bind(this);
    // this.editForm = this.editForm.bind(this);
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

 
  this.sendProject();
  this.setState({
      isSubmit: '1'
  })
  event.preventDefault();
}
async sendProject(){
  axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
    var token = localStorage.getItem('Authorization');
      axios.defaults.headers.common['Authorization'] = token;  
  try{  
    const response = await axios({
      method: 'POST',
      url: 'http://localhost:5000/myhire/createproject',
      data: {
             name: this.state.name,
             skill: this.state.skill,
             price: this.state.price,
             description: this.state.description
      }
    })
  }catch(error) {
      console.log(error);
  }
}
    render() {
        return (
          
            <div className="row">
            <div className="col-sm-12 ">
                  <table className="table card-table">
                    <tbody><tr>
                        <td className="border-top-0">Name of Project</td>
                        <td className="border-top-0"><input type="text" name="name" className="form-control" placeholder="Tell me name about your project" id="title" onChange={this.handleChange}/></td>
                      </tr>
                      <tr>
                        <td className="border-top-0">Reqruitment Skill</td>
                        <td className="border-top-0"><textarea name="skill" className="form-control" placeholder="Ex : Must have skill about javascript, php, etc" id="message" onChange={this.handleChange}/></td>
                      </tr>
                      <tr>
                        <td className="border-top-0">Description</td>
                        <td className="border-top-0"><input type="text" name="description"className="form-control" placeholder="Tell the concepts about your project.." id="message" onChange={this.handleChange}/></td>
                      </tr>
                      <tr>
                        <td className="border-top-0">Salary</td>
                        <td className="border-top-0"><input type="number" name="price"className="form-control" placeholder="Ex : Arround 4-8 Million Rupiah" id="message" onChange={this.handleChange}/></td>
                      </tr>
                      <tr>
                        <td colSpan={2} className="mt-5 text-center border-top-0">
                         
                          <input type="button" className="btn btn-primary mt-2" defaultValue="Submit" id="but2" onClick={this.handleSubmit}/>&nbsp;
                        </td>
                      </tr>
                    </tbody></table>
              
              </div>
            </div>
         
      
      
          
        )
    }
}

export default Project
