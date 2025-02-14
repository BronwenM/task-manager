import React from 'react'
import styled from 'styled-components'

const SideNav = styled.nav`
  height: 100vh;
  min-width: 150px;
  background-color: #4287f5;
  color: #fff;
  padding: 3rem 1rem;
  text-align: left;
`

const Navbar = () => {
  return (
    <>
      <SideNav>
        <p>HOME</p>
        <p>NEW TASK +</p>
      </SideNav>
    </>
  )
}

export default Navbar