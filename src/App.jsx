
import './App.css'
import Header from './ReactRouter/Header/Header'
import Footer from './ReactRouter/Footer/Footer'
import { Outlet } from 'react-router-dom'



       function App() {

        return(
          <>
             <Header/>
             <Outlet/>
             <Footer/>
          
          </>
        );
        
        
        }
        

































export default App;
