import './App.css';
import Advantage from './Component/Advantage';
import ExploreCity from './Component/ExploreCity';
import Main from './Component/Main';
// import Service from './Component/Service';
import Navbar from "./utils/NavbarComponent"
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Main/>
      <Advantage/>
      <ExploreCity/>
      {/* <Service/> */}
      
    </div>  
  );
}

export default App;
