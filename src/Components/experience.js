import "./experience.css";
import "./table.css";
import Curve from './curve.js';
import './description.css';
import React from "react";

function Experience (props) {

    React.useEffect(() => {
        const tabs = document.querySelectorAll('[data-tab-target]');
        const tabContents = document.querySelectorAll('[data-tab-content]');

        tabs.forEach(tab => {
            tab.addEventListener('click', () => {
                const target = document.querySelector(tab.dataset.tabTarget);

                tabContents.forEach(tabContent => {
                    tabContent.classList.remove('active');
                })

                tabs.forEach(tab2 => {
                    tab2.classList.remove('active-li');
                })

                target.classList.add('active');
                tab.classList.add('active-li');
            });
        });
    });

    return (
        <div id="experience-container">

            <h3 id="heading">Where I've Worked</h3>

            <div id="table">
                <div id="job-listing-container">
                    <ul id="job-listing">
                        <li data-tab-target="#web-intern" class="active-li job-list">TechForGood Inc.</li>
                        <li data-tab-target="#wells" class="job-list">Well's Academy</li>
                        <li data-tab-target="#swim" class="job-list">City of Richmond Hill</li>
                    </ul>
                    <div id="filler"> </div>
                </div>

                <div id="job-descriptions">
                    <div id="web-intern" class="active" data-tab-content>
                        <div class="description-container">
                            <p class="job-heading">Web Development Intern @ TechForGood Inc.</p>
                            <p class="date">June 2021 - August 2021</p>
                            <ul className="details">
                                <li>Developed the frontend for an education-focused website from scratch using node.JS, HTML/CSS, react, bootstrap, and jQuery.</li>
                                <li>Effectively coordinated work remotely within a team of developers across the world to accomplish projects.</li>
                            </ul>
                        </div>
                    </div>
                    <div id="wells" data-tab-content>
                        <div class="description-container">
                            <p class="job-heading">Instructor @ Wells Academy</p>
                            <p class="date">June 2021 - August 2021</p>
                            <ul className="details">
                                <li>Taught a business class to high school students.</li>
                                <li>Communicated with supervisors and parents to ensure student success.</li>
                            </ul>
                        </div>
                    </div>
                    <div id="swim" data-tab-content>
                        <div class="description-container">
                            <p class="job-heading">Swimming Instructor @ City of Richmond Hill</p>
                            <p class="date">Sept. 2019 - Nov. 2019</p>
                            <ul className="details">
                                <li>Led swimming classes ranging from 1-10 students.</li>
                                <li>Communicated clearly with supervisors to ensure patron safety.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div id="curve">
                <Curve />
            </div>

        </div>
    );
}

export default Experience;