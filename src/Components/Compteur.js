import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
class Compteur extends Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0,
            memory: null
             
        }
     
console.log("constructor()");
        
    }
    componentDidMount=() => { 
      this.setState({memory :setInterval(() => {
        this.setState({count: this.state.count +1})     
         }, 1000)
        }) 
        console.log("componentDidMount()")
        
    }
   componentDidUpdate=() => {
       console.log(this.state.memory);
       console.log("componentDidUpdate()")
       
   }
   componentWillUnmount=() => {
       clearInterval(this.state.memory);
       console.log("componentWillUnmount()")
       
   }
 plus =() => {this.setState({count: this.state.count +1})   }

 moins =() => {this.setState({count: this.state.count -1})   }
    render() {
        return (
            <div>
                <Button onClick={this.plus} variant="success">+</Button>{' '}
                {this.state.count}
                <Button onClick={this.moins}  variant="success">-</Button>{' '}
            </div>
        );
    }
}

export default Compteur;
