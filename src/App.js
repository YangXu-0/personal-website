import './App.css';
import Top from './Components/top.js';
import About from './Components/about.js';
import Contact from './Components/contact.js';
import Credits from './Components/credits.js';

function App() {
  return (
    <div className="App">

      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400&display=swap" rel="stylesheet"/>
      </head>

      <body>

        <main>

          <section id="Top">
            <Top />
          </section>

          <section id="About">
            <About />
          </section>

          <section id="Experience">
            <h3>Where I've Worked</h3>
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
    - finish all sections
    - header
    - media query
    - fade in or smth
*/