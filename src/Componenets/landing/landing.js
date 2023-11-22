import React from "react";
import video from "../assets/Video1.mp4";
import './landing.css'


const landing = () => {
    return ( 
        <div className="landing">
           <video className="video" src={video} autoPlay muted></video> 
        </div>
     );
}
 
export default landing;