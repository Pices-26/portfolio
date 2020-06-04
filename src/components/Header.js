import React from 'react'
import my_image from './img/my_img.jpg';
import me2 from './img/me2.png';


function Header(){
    return(
        <header>
            <div class="p-4">
                <span class="block text-gray-400 font-sans">
                    Marcel Kowalczyk
                </span>
                <span class="block ">
                    <img src={me2} alt="Image of me" className="my_image"/>
                </span>
                <span class="block text-gray-400 font-sans">
                    <p>Final Year</p>
                    Computer Science
                    <p>Student</p>
                </span>
            </div>
        </header>

    )
}

export default Header