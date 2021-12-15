import React, { Fragment } from 'react';
import './Members.css';


const Members = (data) => {
    return (
        <Fragment>
            <div className="col-md-3">
                <div class="card text-left my-3">
                  <div class="card-body">
                    <h4 class="card-title text-success">{data.user.title}</h4>
                 
                      <p className="card-text badge">{data.user.completed ? 'Completed' : 'Pending'}</p>
                     
                    
                  </div>
                </div>           
            </div>
        </Fragment>
    )
}

export default Members
