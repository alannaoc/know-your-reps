import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header.js';
import Main from './Components/Main.js';
import Representatives from './Components/Representatives';
import Footer from './Components/Footer.js';
import axios from 'axios';

class App extends Component {
  constructor(){
    super();
    this.state = {
      userReps: [],
      userPostalCode: '',
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    axios({
      method: 'GET',
      url: 'http://proxy.hackeryou.com',
      dataResponse: 'json',
      params: {
        reqUrl: `https://represent.opennorth.ca/postcodes/${this.state.userPostalCode}`,
        xmlToJSON: false,
      }}).then((res) => {
            const apiResult = res.data.representatives_centroid;
            const dataArray = [];
            const checkArray = []; 
            apiResult.forEach(rep => {
              if (checkArray.includes(rep.name) === false){
                checkArray.push(rep.name);
                dataArray.push(rep);
              } 
            })
            this.setState({
              userReps: dataArray,
            })
        });
    }
 //handle change converts the user's input from lower case to uppercase and removes any white spaces. 
  handleChange = (e) => {
   e.target.value = e.target.value.toUpperCase();
    if (e.target.value.indexOf(' ') >= 0) {
      this.setState({
        userPostalCode: e.target.value.replace(/\s/g, '')
      })
    } else {
        this.setState({
        userPostalCode: e.target.value
        })
      }
  }
  render() {
    return (
      <div className="App">
        <div className="wrapper">
          <Header handleSubmit={this.handleSubmit} handleChange={this.handleChange} userPostalCode={this.state.userPostalCode} />
          <Main id="results" userReps={this.state.userReps} />   
          <Footer />
        </div> 
      </div>
    );
  }
}

export default App;
