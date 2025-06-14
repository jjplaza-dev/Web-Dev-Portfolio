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
import CodeTesting from "./components/CodeTesting"
import FillerComponent from "./components/FillerComponent"




function App() {

  return <> 
    <section className="relative">
      <Ruler />
      {/* <Loadscreen /> */}
      {/* <Cursor /> */}
      <Navigation />
      <Front/>
      <Services/>
      <FillerComponent />
      <Skills />
      <Works />
     
    </section>
    
  </>
  
} 

export default App
