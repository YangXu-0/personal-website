import './App.css';
import Top from './Components/top.js'

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
            <h3>About</h3>
          </section>

          <section id="Experience">
            <h3>Where I've Worked</h3>
          </section>

          <section id="Contact">
            <h3>Get in Touch!</h3>
          </section>

          <section id="Credits">
            <p>Designed and Built by Yang Xu</p>
          </section>

        </main>
        
      </body>
    </div>
  );
}

export default App;
