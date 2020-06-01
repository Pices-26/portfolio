import React from "react"
import{
    BrowserRouter as Router,
    Route,
    Switch,
    Link,
  } from "react-router-dom";

function Navigation(){
    return(
        /*
        <nav className = "block text-black">
            <div class="flex mb-4">
                <div class="w-1/2"></div>
                <div class="w-1/2">
                    <div class="flex mb-4">
                        <div class="flex-1 text-center text-teal-700">Home</div>
                        <div class="flex-1 text-center text-teal-700">About</div>
                        <div class="flex-1 text-center text-teal-700">Projects</div>
                        <div class="flex-1 text-center text-teal-700">Research</div>
                        <div class="flex-1 text-center text-teal-700">Contact</div>
                    </div>
                </div>
            </div>
        </nav>
        */
       <nav>
           <ul>
               <li><Link to="/"><a>Home</a><a></a></Link></li>
               <li><Link to="About"><a>About</a></Link></li>
               <li><Link to="Projects"><a>Projects</a></Link></li>
               <li><Link to="Other"><a>Other</a></Link></li>
               <li><Link to="Contact"><a>Contact</a></Link></li>
           </ul>
       </nav>
    )
}
export default Navigation