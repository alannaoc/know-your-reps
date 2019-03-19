import React, { Component } from 'react';
import './styles/App.css';
import Header from './Components/Header.js';
import Main from './Components/Main.js';
import Footer from './Components/Footer.js';
import { animateScroll as scroll } from "react-scroll";
import firebase from './Components/firebase.js';
import Swal from 'sweetalert2';
import axios from 'axios';

//Google auth
const provider = new firebase.auth.GoogleAuthProvider()
const auth = firebase.auth()

class App extends Component {
  constructor() {
    super();
    this.state = {
      userReps: [],
      savedReps: [],
      selectedPostalCode: "",
      userPostalCode: '',
      show: false,
      showSaved: false,
      user: null,
      userId: "",
    }
  }

  login = () => {
    auth.signInWithPopup(provider)
      .then((result) => {
        const user = result.user;
        const userId = result.user.uid;
      this.initialFirebaseCall(userId)
        this.setState({
          user: user,
          userId: userId
        });
      });
  }

  logout = () => {
    auth.signOut()
      .then(() => {
        this.setState({
          user: null
        });
      });
  }

  //function for smooth scroll to results
  handleClick = () => {
    scroll.scrollMore(700, {
      duration: 2800,
      delay: 200,
      smooth: true
    })

  }

  repsHandleClick = () => {
    console.log('hi')
    scroll.scrollMore(700, {
      duration: 2800,
      delay: 200,
      smooth: true
    })
    this.setState({
      showSaved: true
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
  initialFirebaseCall = (userId) => {

  const dbref = firebase.database().ref(`${userId}`)

    dbref.on('value', response => {
      const newState = [];
      const data = response.val();
      for (let key in data) {
        newState.push({
          key: key,
          title: data[key],
        })
      }
      const postalCode = {};

      newState.forEach(item => {
        item.title.forEach(code => {
          if (typeof code === "string")
            postalCode.code = code;
        })
      })


      this.setState({
        savedReps: newState
      })

      
      auth.onAuthStateChanged((user) => {
        if (user) {   
          this.setState({
            user: user,
            userId: user.uid
          });
        }
      });

    })
  }

  checkUserList = (repValue) => {

    return this.state.savedReps.map(rep => {
      return rep.title.findIndex((item) => {
        return item === repValue;
      })
    })
  }

  //function to save user reps to firebase
  saveButton = (e) => {
    e.preventDefault();

    const repValue = e.target.value
    const listCheck = this.checkUserList(repValue)
    const review = [];
    const userId = this.state.userId;

    listCheck.forEach(item => {
      if (item !== -1) {
        review.push(item)
      }
    })

    if (this.state.userPostalCode.length < 6) {
      Swal.fire(`Oops! The postal code you entered has been altered. Double check to ensure it's correct and try again.`)
    }

    else if (review.length > 0) {

      Swal.fire(`Reps for ${this.state.userPostalCode} have already been saved. See your list!`)
    }
    else if (this.state.userReps) {
      const dbRef = firebase.database().ref(`${userId}`);

      dbRef.push(this.state.userReps);

      Swal.fire(`Reps for ${this.state.userPostalCode} have been saved.`)

    }
  }

  // function to remove user reps from firebase
  removeButton = (e) => {
    const userId = this.state.userId
    const key = e.target.id
    const dbRef = firebase.database().ref(`${userId}/${key}`);
    dbRef.remove();

  }

  //function for axios call 
  handleSubmit = (e) => {
    e.preventDefault();
    axios({
      method: 'GET',
      url: 'https://proxy.hackeryou.com',
      dataResponse: 'json',
      params: {
        reqUrl: `https://represent.opennorth.ca/postcodes/${this.state.userPostalCode}`,
        xmlToJSON: false,
      }
    }).then((res) => {

      const apiResult = res.data.representatives_centroid;
      const test = res.data.code;
      const dataArray = [];
      const checkArray = [];
      const finalArray = [];

      apiResult.forEach(rep => {
        if (checkArray.includes(rep.name) === false) {
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
        const personalUrl = rep.personal_url;
        const repInfo = { key, name, office, riding, party, email, phone, url, personalUrl };
        finalArray.push(repInfo);
      })

      finalArray.push(test)

      this.setState({
        userReps: finalArray,
        userPostalCode: test,
        show: true,
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
        userPostalCode: e.target.value,
      })
    }

  }

  handleChangeSelect = (e) => {
    this.setState({
      selectedPostalCode: e.target.value
    })
  }

  render() {
    return (
        <div className="App">
          <Header
            handleSubmit={this.handleSubmit}
            handleChange={this.handleChange}
            userPostalCode={this.state.userPostalCode}
            handleClick={this.handleClick}
            repsHandleClick={this.repsHandleClick}
            login={this.login}
            user={this.state.user}
            logout={this.logout}
            savedReps={this.state.savedReps}
          />

          {(this.state.show === true || this.state.showSaved === true) ?
            (<Main id="results" 
              handleClickTop={this.handleClickTop} 
              userReps={this.state.userReps} 
              savedReps={this.state.savedReps} 
              handleClick={this.handleClick} 
              repsHandleClick={this.repsHandleClick}
              handleChangeSelect={this.handleChangeSelect} 
              selectedPostalCode={this.state.selectedPostalCode} 
              userPostalCode={this.state.userPostalCode} 
              saveButton={this.saveButton} 
              removeButton={this.removeButton} 
              login={this.login} 
              user={this.state.user} 
              show={this.state.show}
              showSaved={this.state.showSaved}
            />) : (
              null
            )
          }
          <Footer />
        </div>
      
    );
  }
}
export default App;
