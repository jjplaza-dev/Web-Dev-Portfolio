import Cursor from "./components/Cursor"
import Extra from "./components/Extra"
import FeaturedWorks from "./components/FeaturedWorks"
import Loadscreen from "./components/Loadscreen"
import Navigation from "./components/Navigation"
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
    <Extra />
  </main>
  </>
  
} 

export default App
