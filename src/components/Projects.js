import React from 'react'
import sample from './img/sample_project.jpg'
import slam from './img/slamimg.png'
import rlearn from './img/rlearn.png'
import weather from './img/weather.png'
import tinderbot from './img/ai_tinder_bot_project.png'

export default function Projects() {
    return (
        <div>

            <div class ="title">Check out some of my projects</div>
            <div class="project_body">

                <div class = "project_container">
                    <img src={tinderbot} alt="sample" className="project_pic"/>
                    <div class="project_title">AI Tinder Bot</div>
                    <div class="project_paragraph">
                        This bot allows you to collect your own data from the website. The data will be used to classify, like or dislike, a person on tinder.
                        You can also add some images from outside of tinder. Each image is prepared (downloading, extracting features and preparing it for our CNN).
                        We are liking or disliking based on facial features.
                    </div>
                </div>

                <div class = "project_container">
                    <img src={slam} alt="sample" className="project_pic"/>
                    <div class="project_title">Point Detection for SLAM</div>
                    <div class="project_paragraph">
                        In this project I'm using ORB algorithm provide by openCV which allows me to capture
                        key points in the scene. Each current point transitions from the previous point. This will allow for 3D
                        mapping of points in a virtual environment like Pangolin.
                    </div>
                </div>

                <div class = "project_container">
                    <img src={rlearn} alt="sample" className="project_pic"/>
                    <div class="project_title">Mountain Car RN Learning</div>
                    <div class="project_paragraph">
                        In this project I'm using GYM interface to implement Reinforcement Learning. 
                        In this scenario there is a car which is trying to reach the flag. In the beginning the car doesn't know it's goal.
                        When it gets closer to it's goal, it's given reward. When it moves further out the reward get smaller. This allows the agent
                        to understand it's goal and environment.
                    </div>
                </div>

                <div class = "project_container">
                    <img src={weather } alt="sample" className="project_pic"/>
                    <div class="project_title">Current Weather</div>
                    <div class="project_paragraph">
                        In this project I'm creating a simple interface which displays current weather. I'm using pyqt5 to create the interface.
                        Input, which is name of town, is taken and makes contact with the weather API to return the current weather alongside
                        pressure, humidity and some description provided by the API.
                    </div>
                </div>
            </div>
        </div>
    )
}
