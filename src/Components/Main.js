import React, {Component} from 'react';
import '../styles/Main.css';
import Representatives from './Representatives';

class Main extends Component {
  render(){
    return(
      <div className="Main">
        <main className="wrapper">
          <h2 className="titlePC">Representatives for: {this.props.userPostalCode}</h2>
          <ul className="repInfo">
            {this.props.userReps.map(rep => {
              return (
                <li key={rep.key}>
                  <Representatives
                    name={rep.name}
                    office={rep.office}
                    riding={rep.riding}
                    party={rep.party}
                    email={rep.email}
                    phone={rep.phone}
                    url={rep.url}
                    personalUrl={rep.personalUrl}
                  />
                </li>
              )
            })}
          </ul>
          <button className="buttonTop" onClick={this.props.handleClickTop}>Back to top</button>
        </main>        
      </div>
    )
  }
}

export default Main;