import React, { Component } from 'react';
import './styles/App.css';
import Header from './Components/Header.js';
import Main from './Components/Main.js';
import Footer from './Components/Footer.js';
import {animateScroll as scroll } from "react-scroll";
import axios from 'axios';

class App extends Component {
  constructor(){
    super();
    this.state = {
      userReps: [],
      userPostalCode: '',
      show: false
    }
  }
  handleClick = () => {
    scroll.scrollMore(1000, {
      duration: 2800,
      delay: 200,
      smooth: true
    })
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
              show: true
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
        <Header handleSubmit={this.handleSubmit} handleChange={this.handleChange} userPostalCode={this.state.userPostalCode} handleClick={this.handleClick}/>
        {(this.state.show === true) ?
          (<Main id="results" userReps={this.state.userReps} userPostalCode={this.state.userPostalCode}/>) : (
            <div></div>
          )
        }
        <Footer />
      </div>
    );
  }
}

export default App;
