import './top.css';
import profile from './Assets/WebsiteProfilePic.png';

function Top(props) {
    return (
        <div id='top-container'>
            <p id="Hi">Hi, my name is</p>
            <p id="Name">Yang Xu</p>
            <p id="Welcome">Welcome to my website</p>
            <div id="Picture-container">
                <img id="Pic" src={profile} alt="Yang Xu"/>
            </div>
        </div>
    );
}

export default Top;