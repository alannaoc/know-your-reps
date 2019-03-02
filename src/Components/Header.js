import React, {Component} from 'react';
import './Header.css';
import Form from './Form.js';

class Header extends Component {

  render() {
    return(
      <div className='Header'>
        <a href="#mainContent" className="skipLink">Skip to main content.</a>
        <header>
          <h1>Know your government</h1>
          <h2>Find your local representatives</h2>
          <Form handleSubmit={this.props.handleSubmit} handleChange={this.props.handleChange} userPostalCode={this.props.userPostalCode} />
        </header>
      </div>
    )
  }
}
export default Header;