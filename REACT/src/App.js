import logo from './si.png';
import './App.css';
import './radio.jpg';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank" 
          rel="noopener noreferrer"
        >
          Estudiante: Joshua Morocho 
        </a>
      </header>
        <h2>Av. Garcia Moreno, 0983695816, joshua.morocho@epn.edu.ec</h2>
        <h3>Formacion Basica: U.E "Gabriel Garcia Moreno".</h3>
        <h3>Formacion Superior: Colegio Fiscal "Raul Andrade".</h3>
        <h4>Formacion Universitaria: Escuela Politecnica Nacional</h4>
        <p>Herramientas utilizadas: Visual Studio Code, App React, Intelij IDEA.</p>
        <div class="Cuerpo">
          <h4>Deportes:</h4>
          <section >
          <div class="deporte1">
          <img src="./fut.jpg" class="sports"/>
          </div>
          <div class="deporte1">
          <img src="./basq.jpg"class="sports"/>
          </div>
          <div class="deporte1">
          <img src="./bici.jpg"class="sports"/>
          </div>            
          </section>

        </div>
    </div>
    
  );
}
export default App;
