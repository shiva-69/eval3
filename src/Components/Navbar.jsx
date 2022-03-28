import React from 'react'
import {Link} from "react-router-dom";
import styled from 'styled-components'

const NavbarWrapper = styled.div`
display :flex;
flex-direction : row;
justify-content : center;

`
const Navbar = () => {
  return (
    <NavbarWrapper>
        <Link to="/">Home</Link>
        <Link to="/Login">Login</Link>
        <Link to ="/Register"> Register</Link>
        <Link to ="/Products"> Products</Link>
    </NavbarWrapper>
  )
}

export  {Navbar}