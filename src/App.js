import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

class App extends Component {
  constructor(){
    super();
    this.state = {
      userReps: [],
      userPostalCode: '',
      query: ''
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
            const repsResult = res.data.representatives_centroid;
            console.log(repsResult);
            this.setState({
            userReps: repsResult
          })
        });
    }

    handleChange = (e) => {
      this.setState({
        userPostalCode: e.target.value
      })
    }
//     componentDidMount(){
//       // axios({
//       //   method:'GET',
//       //   url:'http://represent.opennorth.ca/postcodes/M6P2S1',
//       //   dataType: 'json',
//       // }).then(response => {
//       //   console.log(response)
//       // })
// //proxy server
      
//     }


  render() {
    return (
      <div className="App">
        <h1>Engaged Citizens</h1>
        <h2>Find out who your local represenatives are and how to contact them.</h2>
        <form action="submit" onSubmit={this.handleSubmit}>
          <label htmlFor="postCode">Enter your postal code:</label>
          <input type="text" placeholder="enter your postal code (i.e A1A1A1" onChange={this.handleChange} value={this.state.query}/>
          <button type="submit">Find out!</button>
        </form>
      </div>
    );
  }
}

export default App;
