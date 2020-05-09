import React from 'react';

import './AddNewTask.css';

function AddNewTask() {
  return (
    <div ClassName="input-group mb-3">

        
        <input type="text" ClassName="form-control"placeholder="Add something to your list..." aria-label="Recipient's username" aria-describedby="button-addon2"/>
        <div ClassName="input-group-append">
            <button ClassName="btn btn-outline-secondary" type="button" id="button-addon2">+</button>
        </div>

       
    </div>      

       
         
  );
}

export default AddNewTask;