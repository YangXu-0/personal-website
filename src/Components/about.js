import "./about.css";
import pic from "./Assets/aboutPic.png";

function About(props) {
    return (
        <div id="about-container">
            <h2 id="about-heading">About Me</h2>
            <div id="about-body">
                <p>
                    Hi! My name is Yang, I am a 3rd year Engineering Science student at the University of Toronto majoring
                    in Robotics Engineering and minoring in AI Engineering.
                </p>
                <br></br>
                <p>
                    I'm interested in research and development in robotics-related fields, 
                    from computational physics to machine learning.
                </p>
                <br></br>
                <p>
                    Outside of tech, I enjoy skateboarding and playing music on my guitar and drum set!
                </p>
            </div>
            <div id="pic-container">
                <img id="pic" src={pic} alt="Yang doing an ollie"/>
            </div>
        </div>
    );
}

export default About;