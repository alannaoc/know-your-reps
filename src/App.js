import React, { Component } from 'react';
import './App.css';
import Header from './Header.js';
import Main from './Main.js';
import Representatives from './Representatives';
import Footer from './Footer.js';
import firebase from 'firebase';
import axios from 'axios';


const config = {
  apiKey: "AIzaSyB35apiwRzurbwgK47HavC3uT4YUlkAHsM",
  authDomain: "know-your-government-35104.firebaseapp.com",
  databaseURL: "https://know-your-government-35104.firebaseio.com",
  projectId: "know-your-government-35104",
  storageBucket: "know-your-government-35104.appspot.com",
  messagingSenderId: "690763001616"
};

firebase.initializeApp(config);

class App extends Component {
  constructor(){
    super();
    this.state = {
      userReps: [],
      userPostalCode: '',
      savedUserReps: []
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

  componentDidMount() {
    const dbRef = firebase.database().ref();
    dbRef.on('value', (response) => {
      const newState =[];
      const data = response.val();
      for (let key in data) {
        newState.push(data[key]);
      }
      this.setState({
        savedUserReps: newState
      });
      
    });
  }

  render() {
    return (
      <div className="App">
        <div className="wrapper">
          <Header />
          <Main handleSubmit={this.handleSubmit} handleChange={this.handleChange} />
          <h2>
            {
            this.state.userPostalCode
          }
          </h2>
          
          <ul className="repInfo">
            {this.state.userReps.map(rep => {
              return(
               
               <li key={rep.last_name}>
                  <Representatives
                   name= {rep.name}
                   office = {rep.elected_office}
                   level= {rep.representative_set_name}
                   riding = {rep.district_name}
                   party = {rep.party_name}
                   email = {rep.email}
                   phoneType = {rep.offices[0].tel} 
                   phoneLocation= {rep.offices[0].type}
                   url = {rep.url}            
                  />
               </li>
               
              )
            })}
          </ul>
          <button>Save Representatives</button>
        <Footer />
        </div> 
      </div>
    );
  }
}

export default App;
