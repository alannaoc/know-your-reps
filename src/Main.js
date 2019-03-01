import React, {Component} from 'react';
import Form from './Form.js';
// import Results from './Results.js';

class Main extends Component {
  render(){
    return(
      <div>
        <h2>{this.props.userPostalCode}</h2>
        <Form handleSubmit={this.props.handleSubmit} handleChange={this.props.handleChange} userPostalCode={this.props.userPostalCode} />
        {/* <Results /> */}
      </div>
    )
  }
}

export default Main;