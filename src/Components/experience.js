import "./experience.css";
import "./table.css";
import Curve from './curve.js';
import React from "react";

function Experience (props) {

    React.useEffect(() => {
        const tabs = document.querySelectorAll('[data-tab-target]');

        tabs.forEach(tab => {
            tab.addEventListener('click', () => {
                const target = document.querySelector(tab.dataset.tabTarget);
                target.classList.add('active');
            });
        });
    });

    return (
        <div id="experience-container">

            <h3 id="heading">Where I've Worked</h3>

            <div id="table">
                <ul id="job-listing">
                    <li data-tab-target="#web-intern">Web Development Intern</li>
                    <li data-tab-target="#wells">Instructor</li>
                    <li data-tab-target="#swim">Swimming Instructor</li>
                </ul>

                <div id="job-descriptions">
                    <div id="web-intern" data-tab-content>
                        Web intern
                    </div>
                    <div id="wells" data-tab-content>
                        Wells
                    </div>
                    <div id="swim" data-tab-content>
                        Swim
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