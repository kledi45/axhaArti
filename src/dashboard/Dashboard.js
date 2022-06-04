import React from 'react';
import {Link} from 'react-router-dom'
import './tavolinat.css'
function Dashboard() {
       return(
         <>
       
        <h2 >Prek tavolinen per ti shikuar te ftuarit se ku jane ulur</h2>
     
         <div className='container'>
   
           <div className='tavolina1'>
             <Link to = "/tavolina1" className='nrTavolines'>1</Link>
           </div>
           <div className='tavolina2'>
             <Link  to = "/tavolina1" className='nrTavolines'>2</Link>
           </div>
           <div className='tavolina3'>
             <Link  to = "/tavolina1" className='nrTavolines'>3</Link>
           </div>
           <div className='tavolina4'>
             <Link  to = "/tavolina1" className='nrTavolines'>4</Link>
           </div>
           <div className='tavolina5'>
             <Link  to = "/tavolina1" className='nrTavolines'>5</Link>
           </div>
           <div className='tavolina6'>
             <Link  to = "/tavolina1" className='nrTavolines'>6</Link>
           </div>
           <div className='tavolina7'>
             <Link  to = "/tavolina1" className='nrTavolines'>7</Link>
           </div>
         </div>
         </>
       )
  };

export default Dashboard;