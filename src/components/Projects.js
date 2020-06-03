import React from 'react'
import sample from './img/sample_project.jpg'

export default function Projects() {
    return (
        <div>
            <div class ="title">Check out some of my projects</div>
            <img src={sample} alt="sample" className="project_pic"/>
            <div class="project_paragraph">
                <div class="project_title">This is a title</div>
                Some project paragraph
            </div>

            <img src={sample} alt="sample" className="project_pic"/>
            <div class="project_paragraph">
                <div class="project_title">This is a title</div>
                Some other project paragraph
            </div>
        </div>
    )
}
