import React from "react"
import "./Info.css"


const Info=()=>{
    return(
        <div className="Upper">
            <div className="ab">
                <span id="a">I Am</span>
                <span id="b">Ayush Upase</span><br></br>
            </div>
            <div className="Below">
                <div className="Text">
                    <div className="TextA">
                        <div className="Text1">
                            <span id="c">Full Stack Developer</span>
                        </div>
                        <div className="Text2">
                            <span id="d">AND</span>
                        </div>
                    </div>
                    <span id="e">Android Developer</span>
                </div>
                <div className="Video">
                    <div className="VFrame">
                        <video src="../Images/InfoV.mp4" autoplay muted loop></video>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Info