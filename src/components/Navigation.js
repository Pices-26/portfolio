import React from "react"
import{
    BrowserRouter as Router,
    Route,
    Switch,
    Link,
  } from "react-router-dom";

function Navigation(){
    return(
       <nav>
           <ul>
               <li><Link to="/"><a>Home</a><a></a></Link></li>
               <li><Link to="About"><a>About</a></Link></li>
               <li><Link to="Projects"><a>Projects</a></Link></li>
               <li><Link to="Other"><a>Other</a></Link></li>
           </ul>
       </nav>
    )
}
export default Navigation