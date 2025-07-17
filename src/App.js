import React from "react"
import Intro from "./Components/Intro";
import "./App.css"
import Navbar from "./Components/Navbar";
import Projects from "./Components/Projects";

const App =()=>{
    return(
      <div className="App">
        <Navbar/>
        <Intro/>
        <Projects/>
      </div>
    )
}

export default App;