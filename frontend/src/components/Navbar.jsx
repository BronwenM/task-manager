import React from 'react'
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