import React, { Component } from 'react';
import './App.css';
import Header from './Header.js';
import Main from './Main.js';
import Representatives from './Representatives';
import Footer from './Footer.js';
import MyReps from './MyReps.js';
import firebase from './firebase.js';
import axios from 'axios';

class App extends Component {
  constructor(){
    super();
    this.state = {
      userReps: [],
      userPostalCode: '',
      savedUserReps: [],
    }
  }

  removeButton = () => {
    console.log('bye');
    // const dbRef = firebase.database().ref(userReps)
    // dbRef.remove();

    // accept parameter 
  }

  saveButton = () => {
    console.log('hi')
    // const dbref=firebase.database().ref();

    // dbref.push(this.state.userReps)
    // this.setState({
    //   savedUserReps: this.state.userReps
    //accept object 
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

            console.log(dataArray);
            apiResult.forEach(rep => {
              if (checkArray.includes(rep.name) === false){
                checkArray.push(rep.name);
                dataArray.push(rep);
              } 
            })

            //for each on data array 
            this.setState({
              userReps: dataArray,
              userPostalCode: ''
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
          <Main handleSubmit={this.handleSubmit} handleChange={this.handleChange} userPostalCode={this.state.userPostalCode}/>
          <ul className="repInfo">
            {this.state.userReps.map(rep => {
              return(   
               <li key={rep.last_name}>
                  <Representatives
                   name= {rep.name}
                   office = {rep.elected_office}
                   riding = {rep.district_name}
                   party = {rep.party_name}
                   email = {rep.email}
                   phoneType = {rep.offices[0].tel} 
                   phoneLocation= {rep.offices[0].type}
                   url = {rep.url}   
                   
                    saveButton={this.saveButton} removeButton={this.removeButton}
                  />
               </li>
              )
            })}
          </ul>
        {this.state.userReps.map(rep => {
          return(
            <li key={rep.last_name}>
              <MyReps
                name={rep.name}
                office={rep.elected_office}
                riding={rep.district_name}
                party={rep.party_name}
                email={rep.email}
                phoneType={rep.offices[0].tel}
                phoneLocation={rep.offices[0].type}
                url={rep.url}
              />
            </li>
        )
        })}
        <Footer />
        </div> 
      </div>
    );
  }
}

export default App;
