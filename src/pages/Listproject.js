import React from 'react'
import axios from 'axios'
import Project from './Project';

class Listproject extends React.Component{
    constructor(props) {
        super(props);
        this.state = { 
          projects: []
        }
      }

    componentDidMount(){
        this.getMyProject();
    }

    async getMyProject(){
        try{
          var token = localStorage.getItem('Authorization');
            axios.defaults.headers.common['Authorization'] = token;
            const project =  await axios.get('http://52.90.6.74:2000/myhire/readproject')
            console.log(project);
            console.log(project.data.result);
            // .then(async res => {
            //    const project = res.data;
            //   console.log(project.result);
             await this.setState({ projects: project.data.result });
            // })
          }catch(error) {
            console.log(error);
          }
      }
    render(){
      console.log(this.state.projects)
        return(
      
            <div className="col-md-12" style={{marginTop : 30}}>
               <button type="button" className="btn btn-primary mb-5" data-toggle="modal" data-target="#exampleModal">Create Project</button>
               <div className="modal fade" id="exampleModal" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              <Project/>
            </div>
          </div>
        </div>
      </div>
            {this.state.projects.map((item, index) =>{
             return( <div className="activities" >
                  <section className="event card border">
                  <li key ={index} style={{listStyle : 'none'}}>
                    <div className="d-flex">
                    {this.props.name}
                      <span className="thumb-sm  pull-left mr-sm"><img className="avatar avatar-md brround" src="../assets/images/users/female/18.jpg" alt="..." /></span>
                      <div>
                        <h4 className="event-heading">{item.name}</h4>
                        <p className="text-lg text-strong"> Description : {item.description}</p>
                        <p className="text-lg mr-3">Requied Skill :  {item.skill}</p>
                        <p className="text-lg mr-3">Badget : Rp. {item.price}</p>
                      </div>
                    </div>
                  
                    <div className="border-top post-comments">
                    
                    </div>
                    </li>
                  </section>
                </div>
            )
        
         }
      
            )
    }
    </div>

    )
  }
}
export default Listproject