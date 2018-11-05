import React,{PureComponent} from 'react'
import Iheader from './Iheader'

export default class ItemButton extends PureComponent {
    onHandleClick = (x)=> {
        console.log("Click "+ x)
    }
     render(){
         const {text, values} = this.props
         return(
         
                  <div>
                  <button style={styles.button}onClick={()=>this.onHandleClick(values)}>{text}</button>
                  </div>      
         )
     }
}
const styles = {
     button:{
          backgroundColor:"green"
     }
} 