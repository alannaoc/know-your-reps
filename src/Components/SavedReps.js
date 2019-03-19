import React from 'react';


const SavedReps = (props) => {
    return(
      <div className="Representatives savedRep">
        <div className="repCard">
          <h2>{props.name}</h2>
          <p className="riding">{props.office}</p>
          <p>{props.riding}</p>
          <p>{props.party}</p>
          <div className="repContact clearfix">
            {(props.phone) ?
              (<a href={"tel://" + props.phone}><i className="fas fa-phone" aria-hidden="true"></i><span className="sr-only">Call {props.name}</span>{props.phone}</a>) :
              (<p>Phone number unavailable</p>)
            }
            {(props.email) ?
              (<a href={"mailto:" + props.email}><i className="fas fa-envelope" aria-hidden="true"></i><span className="sr-only">Email {props.name}</span>{props.email}</a>) :
              (<p>Email unavailable</p>)
            }
            {(props.url) ?
              (<a href={props.url} className="url">Visit {props.name}'s website</a>) ||
              (<a href={props.personalUrl} className="url">Visit {props.name}'s website</a>) :
              null
            }
          </div>
        </div>
      </div>
    )
}
export default SavedReps;