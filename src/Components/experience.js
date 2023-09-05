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

            <h3 id="heading">Experience</h3>

            <div id="table">
                <div id="job-listing-container">
                    <ul id="job-listing">
                        <li data-tab-target="#rocscience" class="active-li job-list">Rocscience</li>
                        <li data-tab-target="#amd" class="job-list">AMD</li>
                        <li data-tab-target="#web-intern" class="job-list">TechForGood Inc.</li>
                        <li data-tab-target="#projects" class="job-list">Projects</li>
                    </ul>
                    <div id="filler"> </div>
                </div>

                <div id="job-descriptions">
                    <div id="rocscience" class="active" data-tab-content>
                        <div class="description-container">
                            <p class="job-heading">Research and Development Engineering Intern @ Rocscience</p>
                            <p class="date">May 2023 - August 2023</p>
                            <ul className="details">
                                <li>Conducted in-depth <b>research in the field of rigid-body impact mechanics with friction</b> in both 2D and 3D settings, aimed at enhancing the accuracy of rockfall simulations in RocFall2 and RocFall3. </li>
                                <li>Researched topics like <b>numerical optimization</b> (linear complementarity problems, quadratic programming, etc.) and theories of <b>impact mechanics</b> (like Stronge) to determine and fix physical inaccuracies in RocFall3.</li>
                                <li>Executed experiments and performed thorough statistical analyses to validate math and software implementation, ensuring the reliability of the research outcomes. </li>
                                <li>Implemented critical modifications to the existing RocFall3 impact engine using C++, resulting in a <b>theoretical accuracy increase of an estimated 50%</b> and a <b>practical performance improvement of an estimated 15%</b>.</li>
                            </ul>
                        </div>
                    </div>
                    <div id="amd" data-tab-content>
                        <div class="description-container">
                            <p class="job-heading">Power and Performance Engineering Intern @ AMD</p>
                            <p class="date">May 2022 - August 2022</p>
                            <ul className="details">
                                <li><b>Programmed Python-based automation scripts and data-analysis tools</b> like data parsers and visualization scripts to streamline experimentation and data analysis work done by the team.</li>
                                <li>Researched and developed a <b>90% accurate machine learning model</b> that scrubs gigabytes of raw data for useful information, reducing the bog of trivial work and enabling the potential for new data analysis tools in the future.</li>
                                <li>Conducted experiments to <b>discover and test new methods of improving CPU and GPU power allocation</b> in Smart Shift to increase performance in future AMD-powered laptops.</li>
                            </ul>
                        </div>
                    </div>
                    <div id="web-intern" data-tab-content>
                        <div class="description-container">
                            <p class="job-heading">Web Development Intern @ TechForGood Inc.</p>
                            <p class="date">June 2021 - August 2021</p>
                            <ul className="details">
                                <li><b>Developed frontend interfaces</b> for an initiative aimed at providing a user-friendly website for educators to build customized interactive activities for students without technical training to support education during the pandemic.</li>
                                <li>Utilized <b>React (TypeScript), CSS, and HTML</b> to lead frontend development, delivering key components like the login page, user profiles, and interactive activity interfaces.</li>
                            </ul>
                        </div>
                    </div>
                    <div id="projects" data-tab-content>
                        <div class="description-container">
                            <p class="job-heading">Featured Projects & Extracurriculars</p>
                            <p class="date"><a href="https://github.com/YangXu-0">Link to all projects</a></p>
                            <ul className="details">
                                <li><a href="https://rsx.squarespace.com/">Robotics for Space Exploration Team (RSX)</a> - Worked with the team in developing a <b>ROS (Robot Operating System) and CAN (Controller Area Network) system</b> to control the <b>robotic arm on the RSX mars rover</b>.</li>
                                <li><a href="https://github.com/YangXu-0/IngredientCheck">IngredientCheck</a> - A <b>convolutional neural network (CNN) with a VGG-like architecture</b> built in <b>PyTorch</b> that classifies ingredients in food photos with <b>~80% accuracy</b>.</li>
                                <li><a href="https://github.com/YangXu-0/MalariArm">MalariArm</a> - An affordable <b>robotic arm that automates malaria microscopy preparation</b> to <b>decrease testing time by 30%</b>.</li>
                                <li><a href="https://github.com/Ti1mmy/CheckinWithme">CheckInWithMe</a> - A Discord bot that uses <b>NLP models</b> to provide mental health support. <b>Won 2 awards</b> at Mental Health Hacks 2021.</li>
                                <li><b>This website!</b> <a href="https://github.com/YangXu-0/personal-website">Built using React and JavaScript</a>.</li>
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