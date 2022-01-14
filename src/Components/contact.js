import './contact.css';

function Contact(props) {
    return (
        <div id="contact-container">
            <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.1/css/all.css"></link>
            
            <p id="title">Get in Touch!</p>
            <p id="job">I'm currently looking for any summer student opportunities!
            If you have something available, I would love to connect with you and learn more!
            My contact information can be found below.</p>
            <p id="phone">Phone: (+1) 647-971-0375</p>
            <p id="email">Email: yangxu.toronto@gmail.com</p>
            <a href="https://www.github.com/YangXu-0" id="github"><i class="fab fa-github favicons"></i></a>
            <a href="https://www.linkedin.com/in/yang-xu-link/" id="linkedin"><i class="fab fa-linkedin favicons"></i></a>
        </div>
    );
}

export default Contact;