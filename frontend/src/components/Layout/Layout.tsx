import React from 'react';
import { Navbar } from '../index';
import './Layout.scss';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='layout'>
      <Navbar />
      <main className='layout__content'>
        {children}
      </main>
    </div>
  )
}

export default Layout