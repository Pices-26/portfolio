import React from 'react'
import tud from './img/tud.png';
import dc_logo from './img/dc_logo_dark.png';
import dc_fire from './img/dcfire.png';


function Feed(){
    return(

        <div class="expirience">
            <div class ="title">Home</div>
            <span class="employmentRow">
                <span>
                    <img src={tud} alt="tud logo" class="feed_img"/>
                    <div class="feed_heading">Technological University Dublin</div>
                    <div class = "feed_info">Computer Science Infrastructure</div>
                    <div class = "feed_info">Bachelor</div>
                    <div class = "feed_more_info">2016-PRESENT</div>
                </span>
                </span>
                <span class="employmentRow">
                    <div class="feed_heading">Freelance</div>
                    <div class = "feed_info">IT specialist</div>
                    <div class = "feed_more_info">2009-PRESENT</div>
                    <div class = "feed_more_info_top">•Computer Repairs</div>
                    <div class = "feed_more_info">•Teaching Computers</div>
                    <div class = "feed_more_info">•Consulting Advice</div>
                </span>
                <span class="employmentRow">
                    <img src={dc_fire} alt="DCC logo" class="feed_img"/>
                    <div class="feed_heading">Dublin City Council</div>
                    <div class = "feed_info">System Admin</div>
                    <div class = "feed_info">Work Experience</div>
                    <div class = "feed_more_info">2014-2014</div>
                    <div class = "feed_more_info_top">•Hardware Upgrade</div>
                    <div class = "feed_more_info">•System Upgrade</div>
                    <div class = "feed_more_info">•Front Line Support</div>
                </span>
                <span class="employmentRowLast">
                    <img src={dc_logo} alt="DCC logo" class="feed_img"/>
                    <div class="feed_heading">Dublin City Council</div>
                    <div class = "feed_info">System Admin</div>
                    <div class = "feed_info">Work Experience</div>
                    <div class = "feed_more_info">2014-2014</div>
                    <div class = "feed_more_info_top">•Hardware Upgrade</div>
                    <div class = "feed_more_info">•System Upgrade</div>
                    <div class = "feed_more_info">•Hardware Testing</div>
            </span>
        </div>
    )
}

export default Feed