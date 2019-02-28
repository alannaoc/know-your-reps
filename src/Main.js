import React, {Component} from 'react';
import Form from './Form.js';
// import Results from './Results.js';

class Main extends Component {
  render(){
    return(
      <div>
        <Form handleSubmit={this.props.handleSubmit} handleChange={this.props.handleChange} />
        {/* <Results /> */}
      </div>
    )
  }
}

export default Main;