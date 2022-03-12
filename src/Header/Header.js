import React , {useEffect} from 'react';
import { Link } from 'react-router-dom';
import "./Header.css";
import Aos from 'aos';
import "aos/dist/aos.css";
import Emerald from '../images/emerald.png';

const Header = () => {
    useEffect(() => {
        Aos.init({duration:1500});
        },[]);
    return(
        <>
           <header>
              <div className = "header-welcome">
                  <div data-aos = "fade-down">
                      <img src = {Emerald}  alt = "foto" className = "emerald-foto"/>
                      <h1 className = "welcome-h1">Miresevini ne webfaqen e marteses se Rinorit & Albines</h1>
                  </div>
              </div>  
           </header> 
        </>
    )
}


export default Header;