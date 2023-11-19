// import React from 'react';
// import { Nav, NavLink, NavbarContainer, Span, NavLogo, NavItems, GitHubButton, ButtonContainer, MobileIcon, MobileMenu, MobileNavLogo, MobileLink, MobileMenuButton, MobileMenuItems, MobileMenuLink } from './NavbarStyledComponent';
// import { FaBars } from 'react-icons/fa';
// import { Close } from '@mui/icons-material';
// import { useTheme } from 'styled-components';
// import { Bio } from '../../data/constants';

// const Navbar = () => {
//   const [isOpen, setIsOpen] = React.useState(false);
//   const theme = useTheme();

//   return (
//     <Nav>
//       <NavbarContainer>
//         <NavLogo to='/'>
//           <a style={{ display: "flex", alignItems: "center", color: theme.text_primary, marginBottom: '20;', cursor: 'pointer' }}>
//             <Span style={{ color: theme.primary }}>Portfolify</Span>
//           </a>
//         </NavLogo>
//         <MobileIcon>
//           {isOpen ? (
//             <Close onClick={() => setIsOpen(false)} />
//           ) : (
//             <FaBars onClick={() => setIsOpen(true)} />
//           )}
//         </MobileIcon>
//         <NavItems>
//           <NavLink href="#about" style={{ color: theme.text_primary }}>About</NavLink>
//           <NavLink href='#skills' style={{ color: theme.text_primary }}>Skills</NavLink>
//           <NavLink href='#experience' style={{ color: theme.text_primary }}>Experience</NavLink>
//           <NavLink href='#projects' style={{ color: theme.text_primary }}>Projects</NavLink>
//           <NavLink href='#education' style={{ color: theme.text_primary }}>Education</NavLink>
//         </NavItems>
//         <ButtonContainer>
//           <GitHubButton href={Bio.github} target="_blank" style={{ background: theme.primary, color: theme.white }}>Github</GitHubButton>
//         </ButtonContainer>
//         {isOpen && (
//           <MobileMenu isOpen={isOpen}>
//             <MobileMenuItems>
//               <MobileMenuLink href="#about" style={{ color: theme.text_primary }} onClick={() => setIsOpen(false)}>About</MobileMenuLink>
//               <MobileMenuLink href='#skills' style={{ color: theme.text_primary }} onClick={() => setIsOpen(false)}>Skills</MobileMenuLink>
//               <MobileMenuLink href='#experience' style={{ color: theme.text_primary }} onClick={() => setIsOpen(false)}>Experience</MobileMenuLink>
//               <MobileMenuLink href='#projects' style={{ color: theme.text_primary }} onClick={() => setIsOpen(false)}>Projects</MobileMenuLink>
//               <MobileMenuLink href='#education' style={{ color: theme.text_primary }} onClick={() => setIsOpen(false)}>Education</MobileMenuLink>
//             </MobileMenuItems>
//             <MobileMenuButton href={Bio.github} target="_blank" style={{ background: theme.primary, color: theme.white }}>Github Profile</MobileMenuButton>
//           </MobileMenu>
//         )}
//       </NavbarContainer>
//     </Nav>
//   );
// };

// export default Navbar;

import React from 'react'
import { Nav, NavLink, NavbarContainer, Span, NavLogo, NavItems, GitHubButton, ButtonContainer, MobileIcon, MobileMenu, MobileNavLogo, MobileLink } from './NavbarStyledComponent'
import { DiCssdeck } from 'react-icons/di';
import { FaBars } from 'react-icons/fa';
import { Bio } from '../../data/constants';
import { Close, CloseRounded } from '@mui/icons-material';
import { useTheme } from 'styled-components';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const theme = useTheme()
  return (
    <Nav>
      <NavbarContainer>
        <NavLogo to='/'>
          <a style={{ display: "flex", alignItems: "center", color: "white", marginBottom: '20;', cursor: 'pointer' }}>
            {/* <DiCssdeck size="3rem" />  */}
            <Span>Portfolify</Span>
          </a>
        </NavLogo>
        <MobileIcon>
          <FaBars onClick={() => {
            setIsOpen(!isOpen)
          }} />
        </MobileIcon>
        <NavItems>
          <NavLink href="#about">About</NavLink>
          <NavLink href='#skills'>Skills</NavLink>
          <NavLink href='#experience'>Experience</NavLink>
          <NavLink href='#projects'>Projects</NavLink>
          <NavLink href='#education'>Education</NavLink>
        </NavItems>
        <ButtonContainer>
          <GitHubButton href={Bio.github} target="_blank">Github </GitHubButton>
        </ButtonContainer>
        {
          isOpen &&
          <MobileMenu isOpen={isOpen}>
            <MobileLink href="#about" onClick={() => {
              setIsOpen(!isOpen)
            }}>About</MobileLink>
            <MobileLink href='#skills' onClick={() => {
              setIsOpen(!isOpen)
            }}>Skills</MobileLink>
            <MobileLink href='#experience' onClick={() => {
              setIsOpen(!isOpen)
            }}>Experience</MobileLink>
            <MobileLink href='#projects' onClick={() => {
              setIsOpen(!isOpen)
            }}>Projects</MobileLink>
            <MobileLink href='#education' onClick={() => {
              setIsOpen(!isOpen)
            }}>Education</MobileLink>
            <GitHubButton style={{padding: '10px 16px',background: `${theme.primary}`, color: 'white',width: 'max-content'}} href={Bio.github} target="_blank">Github Profile</GitHubButton>
          </MobileMenu>
        }
      </NavbarContainer>
    </Nav>
  )
}

export default Navbar