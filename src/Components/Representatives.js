import React, {Component} from 'react';
import './Representatives.css';


class Representatives extends Component {
  render(){
    return(
      <div className="Representatives">
        <div className="repCard">
          <h2>{this.props.name}</h2>
          <p>{this.props.office}</p>
          <p>{this.props.riding}</p>
          <p>{this.props.party}</p>
          <div className="repContact">
            <a href={this.props.phoneType}>{this.props.phoneType}</a>
            <a href={this.props.email}>{this.props.email}</a>
            <a href={this.props.url}>Visit {this.props.name}'s website</a>
          </div>
        </div>
      </div>
      
    )    
  }
}

export default Representatives;