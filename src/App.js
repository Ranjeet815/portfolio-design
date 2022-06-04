import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Intro from './components/Intro/Intro';
import Services from './components/Services/Services';
import Experience from './components/Experience/Experience';
import Works from './components/works/works';
import Portfolio from './components/Portfolio/Portfolio';
import Testimonil from './components/Testimoniol/Testimonil';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import {themeContaxt} from './Contact'
import {useContaxt} from "react"

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <Services/>
      <Experience/>
      <Works/>
    <Portfolio/>
   <Testimonil/>
   <Contact/>
   <Footer/>
    </div>
  );
}

export default App;
