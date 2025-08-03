import React from "react"
import "./App.css"
import Navbar from "./Components/Navbar";
import LandingPage from "./Components/LandingPage";
import CustomCursor from "./Components/CustomCursor";

const App =()=>{
    return(
      <div className="App">
        <LandingPage/>
        <CustomCursor/>
      </div>
    )
}

export default App;