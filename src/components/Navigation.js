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
               <li><a href="/">Home</a></li>
               <li><a href="/About">About</a></li>
               <li><a href="/Projects">Projects</a></li>
               <li><a href="/Other">Other</a></li>
               <li><a href="/Contact">Contact</a></li>
           </ul>
       </nav>
    )
}
export default Navigation