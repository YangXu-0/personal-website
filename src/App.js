import './App.css';
import Top from './Components/top.js';
import About from './Components/about.js';
import Experience from './Components/experience.js';
import Contact from './Components/contact.js';
import Credits from './Components/credits.js';
import Resume from './Components/Assets/Yang_Xu_Resume.pdf';
import React from 'react';

function App() {

  React.useEffect(() => {
    const body = document.body;
    let lastScroll = 0;

    window.addEventListener('scroll', () => {

      console.log("ran");
      const currentScroll = window.pageYOffset;

      if (currentScroll <= 0) {
        body.classList.remove("scroll-up");
      }

      if (currentScroll > lastScroll && !body.classList.contains("scroll-down")) {
        body.classList.remove("scroll-up")
        body.classList.add("scroll-down")
      }

      if (currentScroll < lastScroll && !body.classList.contains("scroll-up")) {
        body.classList.remove("scroll-down")
        body.classList.add("scroll-up")
      }

      lastScroll = currentScroll;
    })
  })

  return (
    <div className="App">

      <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
      <link href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400&display=swap" rel="stylesheet"/>

      <body>
        <section id="Heading" className="header-animation">
          <a id="Welcome-head" href="#Top">Welcome</a>
          <a id="About-head" href="#About">About</a>
          <a id="Experience-head" href="#Experience">Work Experience</a>
          <a id="Contact-head" href="#Contact">Contact</a>
          <a id="Resume-head" href={Resume}>Resume</a>
        </section>

        <main>
          <section id="Top">
            <Top />
          </section>

          <section id="About">
            <About />
          </section>

          <section id="Experience">
            <Experience />
          </section>

          <section id="Contact">
            <Contact />
          </section>

          <section id="Credits">
            <Credits />
          </section>
        </main>
        
      </body>
    </div>
  );
}

export default App;

/* TODO:
    - media query
    - make the current tab highlighted in the header
*/