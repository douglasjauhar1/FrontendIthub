import React, {Component} from 'react'
import WrapperApp from '../wrapper/WrapperApp'
import Card from './Card'
import Slide from './Slide'


class Landing extends Component {
    
    render() {
        return(
            <WrapperApp> 
                <Slide/>
                 <Card
                    id_engineer='17'
                 />
            </WrapperApp>
       
        )
    }

}

export default Landing