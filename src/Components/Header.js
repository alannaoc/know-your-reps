import React from 'react';

import Form from './Form.js';

const Header = (props) => {
    return(
      <div className='Header'>

        <header>
          {props.user ? <p className="userName">Hi, {props.user.displayName}! 
            {props.savedReps.length > 0 ? <button onClick={props.repsHandleClick} className="button">Click here to see your list of saved reps ({props.savedReps.length}).</button> : <span> You haven't saved any reps yet, start a new search to do so.</span>
            }
            </p> : null}
          {props.user ? <button onClick={props.logout} className="login button">Logout</button> : <button className="login button" onClick={props.login}>Log in</button>}
          <div className="wrapper formHeader">
            <h1>Know Your Reps</h1>
            
            <Form handleSubmit={props.handleSubmit} handleChange={props.handleChange} userPostalCode={props.userPostalCode} handleClick={props.handleClick} />
          </div>
          
        </header>
      </div>
    )
}
export default Header;