import React, { Component } from 'react';
import { Link, animateScroll as scroll } from "react-scroll";
import './Form.css'
class Form extends Component {


  render(){
    return (
      <form action="submit" onSubmit={this.props.handleSubmit} >
        <fieldset>
          <label htmlFor="postCode">Enter your postal code:</label>
          <input type="text" placeholder="(i.e A1A1A1)" onChange={this.props.handleChange} value={this.props.userPostalCode} required pattern="[A-Z][0-9][A-Z][0-9][A-Z][0-9]|[A-Z][0-9][A-Z] [0-9][A-Z][0-9]"/>
          <Link 
            activeClass="active" 
            className="results"
            to="results" 
            spy={true} 
            smooth={true}
            duration={500}
            offset={170}
            > 
           Find out!
            </Link>
        </fieldset>  
      </form>
    )
  }
}
export default Form;