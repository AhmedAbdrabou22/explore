import './App.css';
import About from './Component/About';
import Advantage from './Component/Advantage';
import Comments from './Component/Comments';
import Download from './Component/Download';
import ExploreCity from './Component/ExploreCity';
import Footer from './Component/Footer';
import Main from './Component/Main';
import Service from './Component/Service';
import Tours from './Component/Tours';
import Navbar from "./utils/NavbarComponent"
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Main/>
      <Advantage/>
      <ExploreCity/>
      <Service/>
      <About/>
      <Tours/>
      <Download/>
      <Comments/>
      <Footer/>
    </div>  
  );
}

export default App;
