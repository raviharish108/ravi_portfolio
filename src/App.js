import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Home } from "./components/home/home";
import { Header } from "./components/navbar/navbar";
import { About } from "./components/about/about";
import { Serv } from "./components/serv/serv";
import { Skills } from "./components/skills/skills";
import { Exp } from "./components/experience/exp";
import { Works } from "./components/works/works";
import { Contact } from "./components/contact/contact";
function App() {
  return (
     <>
     <ul className="sidenav">
  <li><a className="active" href="#home">Home</a></li>
  <li><a href="#about">About</a></li>
  <li><a href="#skills">Skills</a></li>
  <li><a href="#service">Service</a></li>
  <li><a href="#experience">Experience</a></li>
  <li><a href="#works">Works</a></li>
  <li><a href="#contact">Contact</a></li>
</ul>
     <div className="content">
     <Home/>
      <About/>
      <Skills/>
      <Serv/>
      <Exp/>
      <Works/>
      <Contact/>
     </div>
     
    </>
  );
}

export default App;
