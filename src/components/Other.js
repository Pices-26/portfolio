import React from 'react'
import deep from "./img/cert_deep.png"

export default function Other() {
    return (
        <div>
        <div class ="title">Other information</div>
            <div class = "other_body">
                <div class = "other_box">
                    <div class="other_title_cert">Certificates</div>
                    <div class="other_click">(Clickable)</div>
                    <div class = "about_block">
                        <li class="lists"><a href={"https://www.coursera.org/account/accomplishments/specialization/8GBQMUVKJVGK"} target="_blank">Deep Learning Specialization</a></li>
                        <li class="lists"><a href={"http://coursera.org/verify/specialization/QWXN7PG93V5N"} target="_blank">Algorithms Specialization</a></li>
                        <li class="lists"><a href={"https://courses.nvidia.com/certificates/738cdc995277423596ed74768a507611"} target="_blank">Getting Started with AI on Jetson Nano</a></li>
                        <li class="lists"><a href={"https://drive.google.com/drive/folders/111BaS4L30SaZHDedJRfxGXHSq375feFS?usp=sharing"} target="_blank">CCNA</a></li>
                        <li class="lists"><a href={"http://coursera.org/verify/professional-cert/R4BKBDGJQ9ND"} target="_blank">Google IT Automation with Python Specialization </a></li>
                    </div>
                </div>

                <div class = "other_box">
                <div class="other_title">Books I've liked</div>
                    <div class = "about_block">
                        <li class="lists">Essential Discrete Mathematics For Computer Science</li>
                        <li class="lists">Introduction to Algorithms (3rd edition)</li>
                        <li class="lists">Hands on Machine Learning with Scikit and TensorFlow</li>
                    </div>
                </div>

                <div class = "other_box">
                <div class="other_title">Where do I do what</div>
                    <div class = "about_block">
                        <li class="lists">GitHub - Host some of my code to make it more accessible for myself</li>
                        <li class="lists">Linked In - Most up to date qualification</li>
                        <li class="lists">Youtube - Create educational content</li>
                        <li class="lists">Twitch - Stream project creation and problem solving</li>
                    </div>
                </div>
            </div>
        </div>
    )
}
