import React,{Component} from 'react'

export default class Iheader extends Component {
    render(){
        const {Oheader} = this.props
        return(
            <React.Fragment>
                <h1>{Oheader}</h1>
            </React.Fragment>
        )
    }
}