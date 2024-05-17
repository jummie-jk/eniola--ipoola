import { RoutePage} from './Routes';
import './App.css';
import { NavBar } from './Components/NavBar/navbar';

function App() {
  return (
    <>
     <NavBar/>
     <RoutePage />
     <div className='footer section'>
      <div className='copyright'>
        <p className='intro-mini'>© 2024 Eniola Ipoola</p>
      </div>
      <div className="footer-socials">
        <p className='intro-mini'>Linkedln</p>
        <p className='intro-mini'>Github</p>
        <p className='intro-mini'>Email</p>
      </div>
     </div>
    
    
    </>
    
  );
}

export default App;

