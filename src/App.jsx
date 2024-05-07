import './App.css';
import Navbar from './components/navbar/Navbar';
import Hero from './components/hero/Hero';
import Projects from './components/projects/Projects';
import Skills from './components/skills/Skills';
import About from './components/about/About';
import Service from './components/serv/Serv';
function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Skills/>
      <Service/>
      <Projects/>
    </div>

  );
}

export default App;
