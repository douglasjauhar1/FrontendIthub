import React, {Component} from 'react'
import AppHeader from '../global/wrapper/app/AppHeader'
import AppFooter from '../global/wrapper/app/AppFooter'

class WrapperApp extends Component {
    constructor(){
        super();
        this.state={
          title: ''
        }
      }
    changeTitle(title){
        this.setState({
          title
        })
        this.props.changeSearch(title)
      }

    render() {
        return(
        <div className="page">
            <div className="page-main">
                <AppHeader changeTitle={this.changeTitle.bind(this)} title={this.state.title}/>
                <div className="container content-area">
                    {this.props.children}
                    <AppFooter />
                </div>
            </div>
        </div>       
        )
    }

}

export default WrapperApp