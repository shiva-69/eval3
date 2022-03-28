import React from 'react'
import {Link} from "react-router-dom";
import styled from 'styled-components'

const NavbarWrapper = styled.div`
display :flex;
flex-direction : row;
align-items : center;
justify-content : center;
background-color : #cecece;
color : white;
`
const LinkWrapper = styled.div`
margin : 5px`
const Navbar = () => {
  return (
    <div>
      <NavbarWrapper>
      <LinkWrapper> <Link to="/">Home</Link></LinkWrapper>
      <LinkWrapper> <Link to="/Login">Login</Link></LinkWrapper>
      <LinkWrapper>  <Link to ="/Register"> Register</Link></LinkWrapper>
      <LinkWrapper> <Link to ="/Products"> Products</Link></LinkWrapper>
    </NavbarWrapper>
    </div>
  )
}

export  {Navbar}