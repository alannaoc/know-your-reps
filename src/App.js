import React, { Component } from 'react';
import './App.css';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import axios from 'axios';

const Representatives = (props) => {
  return(
    <div className="repCard">
        <h2>{props.name}</h2>
        <p>{props.office}</p>
        <p>{props.level}</p>
        <p>{props.district_name}</p>
        <p>{props.party}</p>
        <div className="repContact">
          <p>{props.phoneLocation}</p>
          <a href={props.phoneType}>{props.phoneType}</a>
          <a href={props.email}>{props.email}</a>
          <a href={props.url}>{props.url}</a>
        </div>

    </div>
       
  )
}

class App extends Component {
  constructor(){
    super();
    this.state = {
      userReps: [],
      userPostalCode: '',
      query: '',
    }
  }



  handleSubmit = (e) => {
    e.preventDefault();
    const queryReset = this.state.query;
    axios({
      method: 'GET',
      url: 'http://proxy.hackeryou.com',
      dataResponse: 'json',
      params: {
        reqUrl: `https://represent.opennorth.ca/postcodes/${this.state.userPostalCode}`,
        xmlToJSON: false,
        q: queryReset
      }}).then((res) => {
            const apiResult = res.data.representatives_centroid;
            const dataArray = [];
            const checkArray = [];

            apiResult.forEach(rep => {
              if (checkArray.includes(rep.name) === false){
                checkArray.push(rep.name);
                dataArray.push(rep);
              } 
              console.log(dataArray);
            })
            this.setState({
              userReps: dataArray
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
        console.log(e.target.value.replace(/\s/g, ''));
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
          <Header />
        <Main handleSubmit={this.handleSubmit} handleChange={this.handleChange} />
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
            })
            }
        </ul>
        <Footer />
        </div> 
      </div>
    );
  }
}

export default App;
