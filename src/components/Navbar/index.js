import React , {useState,useEffect} from 'react'
import {FaBars} from 'react-icons/fa'
import {Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink} from  './NavbarElements';
import { useAuthContext } from "@asgardeo/auth-react";
import { animateScroll as scroll } from 'react-scroll';




const Navbar = ({toggle}) => {
  const [scrollNav, setScrollNav] = useState(false)
  const { state, signIn, signOut } = useAuthContext();



  

  const changeNav = () => {
    if(window.scrollY >= 80) {
        setScrollNav (true)
            } else {
              setScrollNav(false)
            }
  }

      useEffect (() => {
        window.addEventListener('scroll', changeNav)
      }, [])

    
      const toggleHome =() => {
        scroll.scrollToTop();


        
      }

  return (
    <>
    <Nav to="#" scrollNav = {scrollNav}>
        <NavbarContainer>
            <NavLogo to="#" onClick={toggleHome}>Grama-Check </NavLogo>
            <MobileIcon to="#" onClick={toggle}>
              <FaBars/>
            </MobileIcon >
            
               <NavMenu to="#" >
              <NavItem to="#" > 
                <NavLinks to='about' smooth={true} duration={500} spy={true} exact = 'true' offset={-80}>About</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to='services'  smooth={true} duration={500} spy={true} exact = 'true' offset={-80}>Services</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to='apply'  smooth={true} duration={500} spy={true} exact = 'true' offset={-80}>Apply</NavLinks>
              </NavItem>  
              
              <NavItem>
              <NavLinks to="#" as="a" href='https://gramachecksupport.slack.com' >Help        
              </NavLinks>
              </NavItem>
                
              

             
              
            </NavMenu>
           
            {state.isAuthenticated
          ? (
            <NavBtn to="#">
            <NavBtnLink to ="button" onClick={() => signOut()}>Logout</NavBtnLink>
            </NavBtn>
            )
          : <NavBtn to="#">

         <NavBtnLink to ="button" onClick={() => signIn()}>Login</NavBtnLink>
         </NavBtn>
          
            }
            </NavbarContainer>    
    </Nav>
    
    </>
  );
};

export default Navbar;