import './contact.css';

function Contact(props) {
    return (
        <div id="contact-container">
            
            <p id="title">Get in Touch!</p>
            <p id="job">I'm currently looking for summer 2024 and PEY opportunities!
            If you have something available, I would love to connect with you and learn more!
            My contact information can be found below.</p>
            <p id="phone"><b>Phone:</b> &nbsp; (+1) 647-971-0375</p>
            <p id="email"><b>Email:</b> &nbsp; yanguoft.xu@mail.utoronto.ca</p>
            <a href="https://www.github.com/YangXu-0" id="github"><i class="fab fa-github favicons"></i></a>
            <a href="https://www.linkedin.com/in/yangxu0/" id="linkedin"><i class="fab fa-linkedin favicons"></i></a>
        </div>
    );
}

export default Contact;