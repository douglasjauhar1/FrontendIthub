import React from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
class Card extends React.Component{
    constructor(props){
        super()
        this.state = {
            users: []
         };
        this.getUsers = this.getUsers.bind(this)
    }
     componentDidMount() {
        this.getUsers();
     }
     getUsers = async () => {
        let res = await axios.get("http://localhost:5000/engineer");
        let { data } = res.data;
        this.setState({ users: data });
        console.log(this.state.users);
        
    };
     render(){
        return( 
  
        <div className="col-md-3">
            <div className="card">
                <div className="card-header"><div className="card-title">Yusuf Abdillah</div></div>
                    {/* <img src="https://pbs.twimg.com/profile_images/469818631514124288/xXKVOFTq.jpeg=" alt="image" /> */}
                    <div className="card-body">
                        <h5 className="card-title mb-3">Backend Engineer</h5>
                        <p className="card-text">One disadvantage of Lorum Ipsum is that in Latin certain letters appear more frequently than others.</p>
                        <Link to className="btn btn-primary" onClick={this.getUsers}>View More</Link>
                    </div>
                </div>
            </div>
        )
    }
}
export default Card