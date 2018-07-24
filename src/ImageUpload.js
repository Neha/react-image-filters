import React, { Component} from 'react';
import SampleImage from './sample.png';

class ImageUploader extends Component {
   constructor(props){
       super(props)
   }
   render(){
        return(
        <section>
           <img src={SampleImage} className={this.props.filter}/>
        </section>
    )
   }
}

export default ImageUploader;