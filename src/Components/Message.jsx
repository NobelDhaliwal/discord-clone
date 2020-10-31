import { Avatar } from '@material-ui/core';
import React from 'react';

const Message=() =>{
    return (
        <div className="message">
          <Avatar/>  
         
          <div className="message_info">
              <h4>
                  Nobel
                  <span className="message_timestamp">
                       This is a Timestamp 
                  </span>
              </h4>

              <p>This is Message</p>
          </div>

         </div>
    );
};

export default Message;



