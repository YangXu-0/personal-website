import './App.css';
import Top from './Components/top.js';
import About from './Components/about.js';
import Experience from './Components/experience.js';
import Contact from './Components/contact.js';
import Credits from './Components/credits.js';
import Resume from './Components/Assets/Yang_Xu_Resume.pdf';

function App() {
  return (
    <div className="App">

      <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
      <link href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400&display=swap" rel="stylesheet"/>

      <body>
        <section id="Heading">
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
    - header
    - media query
    - fade in or smth
*/