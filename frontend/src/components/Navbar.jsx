import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const SideNav = styled.nav`
  height: 100vh;
  width: 150px;
  background-color:rgb(103, 153, 234);
  color: #fff;
  padding: 3rem 1rem;
  text-align: left;
  position:fixed
`
const NavLink = styled(Link)`
  display: block;
  color: white;
  margin-bottom: 1.5rem;
`
const Navbar = () => {
  return (
    <>
      <SideNav>
        <NavLink to='/'>HOME</NavLink>
        <NavLink to='/tasks/new'>NEW TASK +</NavLink>
      </SideNav>
    </>
  )
}

export default Navbar