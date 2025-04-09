import Cursor from "./components/Cursor"
import FeaturedWorks from "./components/FeaturedWorks"
import Loadscreen from "./components/Loadscreen"
import Navigation from "./components/Navigation"
import Workflow from "./components/Workflow"
import Front from "./pages/Front"
import Ruler from "./Ruler"



function App() {

  return <> 
  <main className="bg-white">
    <Ruler />
    <Loadscreen />
    <Navigation />
    <Front />
    <Cursor />
    <FeaturedWorks/>
    <Workflow />
  </main>
  </>
  
} 

export default App
