import React from 'react';
import Representatives from './Representatives';
import SavedReps from './SavedReps.js';

const Main = (props) => {
  return (
    <main className="Main">
      <div className="wrapper">
        {props.show === true ?

          <section>
            <h2 className="titlePC">Representatives for: {props.userPostalCode}</h2>
            <ul className="repInfo">
              {props.userReps.map(rep => {
                if (typeof rep !== 'string') {
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
                    </li>)
                }
              })}
            </ul>
            {props.user ? <button className="button" value={props.userPostalCode} onClick={props.saveButton}>Save reps for {props.userPostalCode}</button> : <button onClick={props.login} className="button">Log in to save reps</button>}


            {props.user && props.savedReps.length > 0 ? <button className="button" onClick={props.repsHandleClick} >Show my saved reps</button> : null}
            <button className="button" onClick={props.handleClickTop}>Back to top</button>
          </section>
          : null
        }


        {props.user && props.savedReps.length > 0 && props.showSaved === true ?

          <section className="savedRepsSection">
            <h2 className="titlePC">My Saved Reps</h2>
            <form>
              <label htmlFor="savedRep">Select a postal code to see saved reps:</label>
              <select id="savedRep" onChange={props.handleChangeSelect} value={props.selectedPostalCode} name="savedRep">
                <option value=""></option>
                {props.savedReps.map(rep => {
                  return rep.title.map(info => {
                    if (typeof info === "string") {
                      return (
                        <option value={info}>{info}</option>
                      )
                    }
                  })
                })}
              </select>
            </form>
            <ul className="repInfo">
              {props.savedReps.map(rep => {
                return rep.title.map(info => {
                  if (info === props.selectedPostalCode) {
                    {
                      return rep.title.map(info => {
                        if (typeof info === "object") {
                          return (
                            < li key={info.key} >
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
                            </li>
                          )
                        }
                      })
                    }
                  }
                })
              })}
            </ul>

            {props.savedReps.map(rep => {
              return rep.title.map(info => {
                if (info === props.selectedPostalCode) {
                  return (
                    <button className="button" onClick={(event) => props.removeButton(event)} id={rep.key}>
                      Remove {props.selectedPostalCode} reps from MyReps</button>
                  )
                }
              })
            })}
            <button className="button" onClick={props.handleClickTop}>Back to top</button>

          </section>
          : null
        }
      </div>
    </main>
  )
}
export default Main;