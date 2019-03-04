import React, {Component} from 'react';
import '../styles/Main.css';
import Representatives from './Representatives';
import SavedReps from './SavedReps.js';

class Main extends Component {
  render(){
    return(
      <div className="Main">
        <main className="wrapper">
          <section>
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
            <button className="button" onClick={this.props.saveButton}>Save reps for {this.props.userPostalCode}</button>
            <button className="button" onClick={this.props.handleClick}>Show my saved reps</button>
          </ul>
          <button className="button" onClick={this.props.handleClickTop}>Back to top</button>
        </section>
        <section>
          <h2 className="titlePC">My Saved Reps</h2>
            <div>
              <ul className="repInfo savedRep">
                {this.props.savedReps.map(rep => {
                    console.log(rep.key)
                   return rep.title.map(info => {
                    
                    return (
                      <li key={info.key}>
                        <SavedReps
                          name={info.name}
                          office={info.office}
                          riding={info.riding}
                          party={info.party}
                          email={info.email}
                          phone={info.phone}
                          url={info.url}
                          personalUrl={info.personalUrl}
                        />
                        <button className="button" onClick={() => this.props.removeButton(info.key)}>Remove rep</button>
                      </li>
                    )});
                  })}
              </ul>
            </div>
            
          <button className="button" onClick={this.props.handleClickTop}>Back to top</button>
        </section>
        </main>        
      </div>
    )
  }
}
export default Main;