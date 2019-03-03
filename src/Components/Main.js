import React, {Component} from 'react';
import '../styles/Main.css';
import Representatives from './Representatives';

class Main extends Component {
  render(){
    return(
      <div className="Main">
        <div className="wrapper">
          <h2 className="titlePC">Representatives for: {this.props.userPostalCode}</h2>
          <ul className="repInfo">
            {this.props.userReps.map(rep => {
              return (
                <li key={rep.last_name}>
                  <Representatives
                    name={rep.name}
                    office={rep.elected_office}
                    riding={rep.district_name}
                    party={rep.party_name}
                    email={rep.email}
                    phoneType={rep.offices[0].tel}
                    url={rep.url}
                  />
                </li>
              )
            })}
          </ul>
        </div>        
      </div>
    )
  }
}

export default Main;