import { RoutePage} from './Routes';
import './App.css';
import { NavBar } from './Components/navbar/navbar';
import {Footer}  from "./Components/footer/footer"

function App() {
  return (
    <>
     <NavBar/>
     <RoutePage />
     <Footer/>
    </>
    
  );
}

export default App;

