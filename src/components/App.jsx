import {BrowserRouter, Routes, Route} from "react-router-dom"
import Nav from "./nav/Nav"
import Home from "./home/Home"
import "./app.scss"
import About from "./about/About"
import Skills from "./skills/Skills"
import Projects from "./projects/Projects"
import Contact from "./contact/Contact"
import Err from "./err/Err"
import "../style.scss"

const App = () => {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Nav />}>
          <Route index element={<Home />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/skills" element={<Skills />}/>
          <Route path="/projects" element={<Projects />}/>
          <Route path="/contact" element={<Contact />}/>
          <Route path="*" element={<Err />}/>
        </Route>
      </Routes>
    </BrowserRouter>
    
    </>
  )
}

export default App
