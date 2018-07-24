import React, { Component } from 'react';
import './App.css';
import ImageUploader from './ImageUpload'
import Filter from './Filter'

export const localhostName = 'http://localhost:3000/'

class App extends Component {
  constructor(){
    super()
    this.state = {} 
    this.state.filter   = []
    this.state.getClass = this.getClass
    }

    getFilter(filter){
      console.log(filter);
      this.setState({
        filter  : filter
      })
    }
   
      
  render() {
   return(
      <section className="wrapper">
          <h2>Image Editing</h2>
          <ImageUploader filter={this.state.filter}/>
          <Filter getClass= {filter => this.getFilter(filter)}/>
      </section>
    )
  }
}

export default App;
