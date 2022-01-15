import "./about.css";
import pic from "./Assets/aboutPic.png";

function About(props) {
    return (
        <div id="about-container">
            <h2 id="about-heading">About Me</h2>
            <div id="about-body">
                <p>
                    Hi! My name is Yang, I am an Engineering Science student at the University 
                    of Toronto planning to specialize in Robotics Engineering or Machine Intelligence.
                </p>
                <br></br>
                <p>
                    I love working with all sorts of technology! Recently, I've been getting really into 
                    machine learning with Tensorflow and web development using tools like React and JavaScript 
                    (which is what I made this website with!).
                </p>
                <br></br>
                <p>
                    Outside of tech, I enjoy skateboarding (there's a picture of me doing an ollie on the right) 
                    and playing music on my guitar and drum set.
                </p>
                <br></br>
                <p>
                    Nice to meet you!
                </p>
            </div>
            <div id="pic-container">
                <img id="pic" src={pic} alt="Yang doing an ollie"/>
            </div>
        </div>
    );
}

export default About;