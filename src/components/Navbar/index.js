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
    <Nav scrollNav = {scrollNav}>
        <NavbarContainer>
            <NavLogo onClick={toggleHome}>Grama-Check </NavLogo>
            <MobileIcon onClick={toggle}>
              <FaBars/>
            </MobileIcon >
            
               <NavMenu>
              <NavItem> 
                <NavLinks to='about' smooth={true} duration={500} spy={true} exact = 'true' offset={-80}>About</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to='services'  smooth={true} duration={500} spy={true} exact = 'true' offset={-80}>Services</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to='apply'  smooth={true} duration={500} spy={true} exact = 'true' offset={-80}>Apply</NavLinks>
              </NavItem>  
              <NavItem>
                <NavLinks to='help'>Help</NavLinks>
              </NavItem>   
              {/* <NavItem>
                <NavLinks to='signup'>Sign Up</NavLinks>
              </NavItem>        */}
            </NavMenu>
           
            {state.isAuthenticated
          ? (
            <NavBtn >
            <NavBtnLink className="button" onClick={() => signOut()}>Logout</NavBtnLink>
            </NavBtn>
            )
          : <NavBtn >

         <NavBtnLink  className="button" onClick={() => signIn()}>Login</NavBtnLink>
         </NavBtn>
          
            }
            </NavbarContainer>    
    </Nav>
    
    </>
  );
};

export default Navbar;