import React, {Component} from 'react';

class Filter extends Component {
    constructor(props){
        super(props)
        this.state = {}
       }
       clickButton = (e) => {
           this.setState({
                filter : e.target.value
            }, () => { 
                this.props.getClass(this.state.filter)
            })
          }
      

  render(){
    return(
        <section>
            <button className="btn" value="invert" onClick={this.clickButton}>invert</button>
            <button className="btn" value="greyscale"  onClick={this.clickButton}>greyscale</button>
            <button className="btn" value="opacity"  onClick={this.clickButton}>opacity</button>
            <button className="btn" value="brightness"  onClick={this.clickButton}>Brightness</button>
            <button className="btn" value="blur" onClick={this.clickButton}>blur</button>
            <button className="btn" value="" onClick={this.clickButton}>reset</button>
        </section>
    )
}
  }

export default Filter;