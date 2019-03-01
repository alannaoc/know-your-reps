import React, {Component} from 'react';


class Button extends Component {
  render(){
    return(
      <div>
        <button onClick = {this.props.saveButton}>Save to My Reps</button>
        <button onClick={this.props.removeButton}>Remove from My Reps</button>
      </div>
    )
  }
}

export default Button;