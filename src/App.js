import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

class App extends Component {
  constructor(){
    super();
    this.state = {
      userReps: [],
      userMayor: [],
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


            let uniqueRepsResult = repsResult.map(reps => {
              return reps.elected_office
            })
            
            // [... new Set(repsResult)]
            console.log(uniqueRepsResult);
            this.setState({
            userReps: repsResult
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
        <h1>Know your government</h1>
        <h2>Find your local representatives.</h2>
        <form action="submit" onSubmit={this.handleSubmit}>
          <label htmlFor="postCode">Enter your postal code:</label>
          <input type="text" placeholder="enter your postal code (i.e A1A1A1" onChange={this.handleChange}/>
          <button type="submit">Find out!</button>
        </form>
        {/* {
          this.state.userReps.map(rep => {
            return(
              <div key={rep.i}>
                <Reps 
                  title={rep.name}
                  district={rep.district_name}
                  office={rep.elected_office}
                  party={rep.party_name}
                  leg={rep.representative_set_name}
                  website={rep.url}
                  email={rep.email}
                  phone={rep.offices[0].type, rep.offices[0].tel}
                />
              </div>
            )
          })
        } */}
      </div>
    );
  }
}

export default App;
