import React, {Component} from 'react'
import AppHeader from '../global/wrapper/app/AppHeader'
import AppFooter from '../global/wrapper/app/AppFooter'

class WrapperApp extends Component {
    
    render() {
        return(
        <div className="page">
            <div className="page-main">
                <AppHeader />
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