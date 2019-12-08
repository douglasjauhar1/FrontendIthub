import React, { Component } from 'react'
import WrapperApp from '../wrapper/WrapperApp'
import Listproject from './Listproject'
import axios from 'axios'

export class Pageproject extends Component {
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
            axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
          var token = localStorage.getItem('Authorization');
            axios.defaults.headers.common['Authorization'] = token;
            axios.get('http://localhost:5000/myhire/readproject')
            .then(res => {
              const project = res.data;
              console.log(project.result);
              this.setState({ projects: project.result });
            })
          }catch(error) {
            console.log(error);
          }
      }
    render() {
        return (
          <WrapperApp>
                         {
                            this.state.projects.map((project, index) => {
                              return(
                                    <div className='sm-8' >
                                        <Listproject
                                            name={project.name}
                                            // photo={person.photo}
                                            skill={project.skill}
                                            // profesion={person.profesion}
                                            // project={person.project}
                                            // rate={person.rate}
                                            // id={person.id}
                                            style={{marginTop : 200}}/>
                                    </div>
                              )
                            })
                        }
          
          </WrapperApp>
        )
    }
}

export default Pageproject
