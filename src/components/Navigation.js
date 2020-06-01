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
               <li><a><Link to="/">Home</Link></a></li>
               <li><a><Link to="About">About</Link></a></li>
               <li><a><Link to="Projects">Projects</Link></a></li>
               <li><a><Link to="Other">Other</Link></a></li>
               <li><a><Link to="Contact">Contact</Link></a></li>
           </ul>
       </nav>
    )
}
export default Navigation