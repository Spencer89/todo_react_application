import React from 'react';

import './TaskItem.css';

function TaskItem() {
  return (
    <div className="TaskItem">
        <div class="container">
         <div class ="row">    
           

            <div class = "col-12 col-md-4">
                
            <div class="form-group">
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
                
                    <button type="button" class="btn btn-success">Done! </button>
                    <button type="button" class="btn btn-danger">Delete</button>
            </div>
        </div>     
       </div>
      
    </div>
  );
}

export default TaskItem;