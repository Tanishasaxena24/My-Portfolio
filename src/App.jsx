import "./app.scss"
import Experience from "./components/Experience/Experience"
import Hero from "./components/Hero/Hero"
import Navbar from "./components/Navbar/Navbar"
import Services from "./components/Services/Services"
import Contact from "./components/contact/Contact"
import Cursor from "./components/cursor/Cursor"
import Parallax from "./components/parallax/Parallax"
import Portfolio from "./components/portfolio/Portfolio"


function App() {
   

  return (
    <>
     <Cursor/>
      <section id="Homepage">
            <Navbar/>  
            <Hero/>
      </section>
      <section id="Competencies"><Parallax type="competencies"/></section>
      <section><Services/></section>
      <section id="Projects"><Parallax type="projects"/></section>
      <Portfolio/>
      
      <section id="Contact"><Contact/></section>
     
    </>
  )
}

export default App
