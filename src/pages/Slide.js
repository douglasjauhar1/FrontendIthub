import React from 'react'



// const background = {
//   // backgroundImage : `url('https://i.imgur.com/YiXBpcl.png')`,
//   backgroundSize : `cover`,
//   backgroundRepeat : `no-repeat`,
//   backgroundPosition : `fixed`,
//   float : 'right'
// }

class Slide extends React.Component{
    render(){
        return( 
        <div className="row">
            <div className="col-md-12">
              <div className="card">
                <div className="card-header">
                  <h3 className="card-title"></h3>
                </div>
                <div className="card-body">
                  <div className="row">
                  <div className="col-lg-7">
                    <h1 className="display-3"><img src="https://i.imgur.com/OUEYDxX.png"/></h1>
                  </div>
                    <div className="col-lg-5">
                  <div className="jumbotron img-jumbroton bg-white">
                    <h1 className="display-3"><img src="https://i.imgur.com/YhODYAw.png"/></h1>
                    <p className="lead">Place for hiring best programmer for your industry.</p>
                    <p className="lead m-0">
                      <a className="btn btn-pill btn-primary btn-lg mr-3 lead" href="#" role="button">I Want to Work</a>
                      <a className="btn btn-pill btn-default btn-lglead" href="#" role="button">I Want to Hire</a>
                    </p>
                  </div>
                  </div>
                
                  </div>
                </div>  
              </div>
            </div>
        </div>
        )
    }
}
export default Slide