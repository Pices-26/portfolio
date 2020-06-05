import React from 'react'
import git from './img/git.png'
import linkedin from './img/linkedin.png'
import yt from './img/yt.png'
import tw from './img/tw.png'
import cv from './img/cv.png'


function Footer(){
    
    return(
        <footer>
            <div class = "footer_text">&copy; Marcel Kowalczyk 2020</div>
            <ul class = "footer_icon_box">
                    <li class = "footer_icon"><a href={"https://github.com/Pices-26"} target="_blank"><img src={git} alt="git" className="footer_icon"/></a></li>

                
                    <li class = "footer_icon"><a href={"https://www.linkedin.com/in/marcelkowalczyk98/"} target="_blank"><img src={linkedin} alt="git" className="footer_icon"/></a></li>
                
                
                    <li class = "footer_icon"><a href={"https://www.youtube.com/user/garfmaster1"} target="_blank"><img src={yt} alt="git" className="footer_icon"/></a></li>
               
                
                    <li class = "footer_icon"><a href={"https://www.twitch.tv/pices26"} target="_blank"><img src={tw} alt="git" className="footer_icon"/></a></li>
                
                
                    <li class = "footer_icon"><a href={"https://drive.google.com/file/d/1x0tHcGHWdrSUDagjdKEG5hM8SiKplSan/view?usp=sharing"} target="_blank"><img src={cv} alt="git" className="footer_icon"/></a></li>
            </ul>
        </footer>
    )
}

export default Footer