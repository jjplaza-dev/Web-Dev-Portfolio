import Cursor from "./components/Cursor"
import Loadscreen from "./components/Loadscreen"
import Navigation from "./components/Navigation"
import Works from "./components/Works"
import Front from "./components/Front"
import Ruler from "./Ruler"
import Footer from "./components/Footer"
import Services from "./components/Services"
import Workflow from "./components/Workflow"
import Skills from "./components/Skills"
import CTA from "./components/CTA"



function App() {

  return <> 
    <section className="relative ">
      <Ruler />
      <Loadscreen />
      <Cursor />
      <Navigation />
      <Front/>
      <Works />
      <Services/>
      <Workflow />
      <CTA />
      <Skills />
      <Footer />
    </section>
    
  </>
  
} 

export default App
