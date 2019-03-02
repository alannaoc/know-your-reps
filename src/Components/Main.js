import React, {Component} from 'react';
import Representatives from './Representatives';

class Main extends Component {
  render(){
    return(
      <div>
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
                  phoneLocation={rep.offices[0].type}
                  url={rep.url}
                />
              </li>
            )
          })}
        </ul>
      </div>
    )
  }
}

export default Main;