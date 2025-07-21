import React from "react"
import "./App.css"
import Navbar from "./Components/Navbar";
import LandingPage from "./Components/LandingPage";

const App =()=>{
    return(
      <div className="App">
        <Navbar />
        <LandingPage/>
      </div>
    )
}

export default App;