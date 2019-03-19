import React from 'react';


const Form = (props) => {
    return (
      <form action="submit" onSubmit={props.handleSubmit} >
        <fieldset>
          <label htmlFor="postCode">Enter a postal code to find local representatives:</label>

          <input className="headerInput" type="text" placeholder="(e.g. A1A1A1)" onChange={props.handleChange} value={props.userPostalCode} pattern="[A-Z][0-9][A-Z][0-9][A-Z][0-9]|[A-Z][0-9][A-Z] [0-9][A-Z][0-9]" required name="postal"/>

          <button className="formSubmit headerInput" type="submit" onClick={props.handleClick}>Show me!</button>
        </fieldset>  
      </form>
    )
}
export default Form;