import React from 'react'
import Search from './Search'



const background = {
  backgroundImage : `url('https://i.imgur.com/YiXBpcl.png')`,
  backgroundSize : `cover`,
  backgroundRepeat : `no-repeat`,
  backgroundPosition : `fixed`,
  float : 'left'
}

class Slide extends React.Component{
    render(){
        return( 
        <div className="row">
            <div className="col-md-8">
              <div className="card">
                <div className="card-header">
                  <h3 className="card-title"></h3>
                </div>
                <div className="card-body">
                  <div className="jumbotron img-jumbroto" style={background}>
                    <div className="tekst" style={{paddingRight : 500}}>
                    <h1 className="display-3"><img src="https://i.imgur.com/YhODYAw.png"/></h1>
                    <p className="lead">Place for hiring best programmer for your industry.</p>
                    <p className="lead m-0">
                      <a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
                    </p>
                    </div>
                  
                 
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4" style={{marginTop : 70}}>
                <Search/>
            </div>
        </div>
        )
    }
}
export default Slide