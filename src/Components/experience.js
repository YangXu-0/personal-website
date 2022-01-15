import "./experience.css";
import Curve from './curve.js';

function Experience (props) {
    return (
        <div id="experience-container">
            <h3>Where I've Worked</h3>
            <div id="curve">
                <Curve />
            </div>
        </div>
    );
}

export default Experience;