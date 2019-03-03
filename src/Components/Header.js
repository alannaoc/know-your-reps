import React, {Component} from 'react';
import '../styles/Header.css';
import Form from './Form.js';

class Header extends Component {

  render() {
    return(
      <div className='Header'>
        <header>
          <div className="wrapper formHeader">
            <h1>Know Your government</h1>
            <Form handleSubmit={this.props.handleSubmit} handleChange={this.props.handleChange} userPostalCode={this.props.userPostalCode} handleClick={this.props.handleClick} />
          </div>
          
        </header>
      </div>
    )
  }
}
export default Header;