import React, { Component } from 'react';
import './styles/App.css';
import Header from './Components/Header.js';
import Main from './Components/Main.js';
import Footer from './Components/Footer.js';
import {animateScroll as scroll } from "react-scroll";
import firebase from './Components/firebase.js';
import axios from 'axios';

class App extends Component {
  constructor(){
    super();
    this.state = {
      userReps: [],
      savedReps: [],
      userPostalCode: '',
      show: false,
    }
  }

  //function for smooth scroll to results
  handleClick = () => {
    scroll.scrollMore(700, {
      duration: 2800,
      delay: 200,
      smooth: true
    })
  }

  //function for smooth scroll to top of page
  handleClickTop = () => {
    scroll.scrollToTop({
      duration: 2800,
      delay: 200,
      smooth: true
    })
  }

  //firebase function to store saved results
  componentDidMount(){
    const dbref = firebase.database().ref();
    dbref.on('value', response => {
      const newState = [];
      const data = response.val();
      for (let key in data){
        newState.push({
        key: key,
        title: data[key]
        }) 
      }
      this.setState({
        savedReps: newState
      })
    })
  }

  //function to save user reps to firebase
  saveButton = (e) => {
    e.preventDefault();
    const dbRef = firebase.database().ref();
    dbRef.push(this.state.userReps);
  }

  // function to remove user reps from firebase
  removeButton = (e) => {
    this.state.savedReps.forEach(rep => {
      if(rep.key){
        rep.title.forEach(item => {
        if (item.key === e){
          const dbRef = firebase.database().ref(rep.key);
          dbRef.remove();
        }
      })
      }
    })
  }

  //function for axios call 
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
          const finalArray = [];
             
          apiResult.forEach(rep => {
            if (checkArray.includes(rep.name) === false){
              checkArray.push(rep.name);
              dataArray.push(rep);
            } 
          })

          dataArray.forEach(rep => {
            const key = rep.last_name;
            const name = rep.name;
            const office = rep.elected_office;
            const riding = rep.district_name;
            const party = rep.party_name;
            const email = rep.email;
            const phone = rep.offices[0].tel;
            const url = rep.url;
            const personalUrl= rep.personal_url;
            const repInfo = {key, name, office, riding, party, email, phone, url, personalUrl};
            finalArray.push(repInfo);
          })

          this.setState({
            userReps: finalArray,
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
          (<Main id="results" handleClickTop={this.handleClickTop} userReps={this.state.userReps} savedReps={this.state.savedReps} handleClick={this.handleClick} userPostalCode={this.state.userPostalCode} saveButton={this.saveButton} removeButton={this.removeButton}/>) : (
            null
          )
        }
        <Footer />
      </div>
    );
  }
}
export default App;
