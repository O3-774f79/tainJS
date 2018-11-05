import React,{PureComponent} from 'react'

export default class ItemButton extends PureComponent {
    onHandleClick = (x)=> {
        console.log("Click "+ x)
    }
     render(){
         const {text, values} = this.props
         return(
              <React.Fragment>
                  <button onClick={this.onHandleClick(values)}>{text}</button>
              </React.Fragment>
         )
     }
} 