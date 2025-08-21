import { useState } from "react";
import api from './api/posts'
import { Link } from "react-router-dom";


const Messagebox = ({handlepost,handlemessage}) => {


return(
    <>
            <div className="chatgpt-input-wrap">
                    <div className="chatgpt-input">
                        <button className="chatgpt-icon-btn" title="Attach">📎</button>
                        <textarea 
                        className="chatgpt-textarea" 
                        placeholder="Message Gokul ChatApp...."
                        onChange={handlemessage}
                        rows="1"></textarea>
                       <button className="chatgpt-send-btn" onClick={handlepost} title="Send" >➤</button>
                </div>
            </div>
    </>
)
}

export default Messagebox;


