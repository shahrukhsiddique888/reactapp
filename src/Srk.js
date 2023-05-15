import logo from './logo.svg';
import  {  Container, Nav, NavLink, Navbar, NavbarBrand } from 'react-bootstrap'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarToggle from 'react-bootstrap/esm/NavbarToggle';
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';




function Srk() {
  return (
           <Navbar className='bg-warning' expand='md'>
            <Container >
           
              <NavbarBrand  className='d-sm-flex'>
                <img  src={ logo } width='30px' height='30px' alt='h'/>
                  hell
              </NavbarBrand>
              <NavbarToggle aria-controls='basic-navbar-nav'></NavbarToggle>
              <NavbarCollapse id='basic-navbar-nav'>
                <Nav className='me-auto' >
               
                    <NavLink>hello</NavLink>
                    <NavLink>hell</NavLink>
                  
                </Nav>
              </NavbarCollapse>
            </Container>
           </Navbar>
           

           
);
}

export default Srk;       
