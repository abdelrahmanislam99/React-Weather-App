import React from 'react';

const Form = (props) => {
    return(
      <div>
        <form onSubmit={props.getInfo} className="form-group app-form" >
        <input type='text' name='city' placeholder='Enter the city' className="form-control"/>
        <input type='text' name='country' placeholder='Enter the country' className="form-control"/>
        <button className="btn btn-info form-btn">Press me</button>
      </form>
      </div>

    )
}

export default Form;
