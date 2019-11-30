import React, {Component} from 'react'
import WrapperApp from '../wrapper/WrapperApp'
import Card from './Card'
import Slide from './Slide'


class Landing extends Component {
    
    render() {
        return(
            <WrapperApp> 
                <Slide/>
                 <Card/>
            </WrapperApp>
       
        )
    }

}

export default Landing