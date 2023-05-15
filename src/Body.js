import {  } from 'react-bootstrap';
import logo from './logo.svg';

import 'bootstrap/dist/css/bootstrap.min.css';




function Body() {
  return (  
         <section className='bg-dark text-light p-5 text-center'>
         
            <div className='container'>
            
                <div className='d-sm-flex'>
                    <div className='text-center m-5 p-0'>
                     <h1>welcome to my <span className='text-warning'> website</span> this is just a <span className='text-warning'>prototype</span></h1>

                    </div>
                    <img className='img-fluid w-50 d-none d-sm-block' src={ logo }  alt='he' />
                </div>

                   
                
               
                </div>
            
           
           
            </section>
            

);
}

export default Body;       
