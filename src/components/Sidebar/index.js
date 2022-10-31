 import React from "react";
 import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink, SideBtnWrap, SidebarRoute } from "./SidebarElements";
 import { useAuthContext } from "@asgardeo/auth-react";

 const Sidebar = ({isOpen, toggle}) => {
    const { state, signIn, signOut } = useAuthContext();
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon/>

 
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                <SidebarLink to="about"  onClick={toggle}>
                    About
                    </SidebarLink>
                    <SidebarLink to="services"  onClick={toggle}>
                    Services
                        </SidebarLink>
                        <SidebarLink to="help"  onClick={toggle}>
                    Help
                         </SidebarLink>
                         <SidebarLink to="signup"  onClick={toggle}>
                    Sign Up
                        </SidebarLink>
                    
                </SidebarMenu>

                {state.isAuthenticated
          ? (
                <SideBtnWrap >
                   
                   
                    <SidebarRoute className="button" onClick={() => signOut()}> Logout </SidebarRoute>

                </SideBtnWrap>
                ) : <SideBtnWrap>

                     <SidebarRoute  className="button" onClick={() => signIn()}>Login</SidebarRoute>
                     </SideBtnWrap>
                }

            </SidebarWrapper>
        
        
        
        </SidebarContainer>




    )


 }

 export default Sidebar