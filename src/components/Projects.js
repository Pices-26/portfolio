import React from 'react'
import sample from './img/sample_project.jpg'

export default function Projects() {
    return (
        <div>
            <div class ="title">Check out some of my projects</div>
            <div class="project_body">
                <div class = "project_container">
                    <img src={sample} alt="sample" className="project_pic"/>
                    <div class="project_title">This is a title</div>
                    <div class="project_paragraph">
                        Some project paragraph
                    </div>
                </div>

                <div class = "project_container">
                    <img src={sample} alt="sample" className="project_pic"/>
                    <div class="project_title">This is a title</div>
                    <div class="project_paragraph">
                        Some project paragraph
                    </div>
                </div>

                <div class = "project_container">
                    <img src={sample} alt="sample" className="project_pic"/>
                    <div class="project_title">This is a title</div>
                    <div class="project_paragraph">
                        Some project paragraph
                    </div>
                </div>
            </div>
        </div>
    )
}
