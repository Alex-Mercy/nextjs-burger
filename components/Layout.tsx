import React, { FC } from 'react'

import Footer from './Footer'
import Header from './Header'

type LayoutProps = {
  children: React.ReactNode
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div className='content'>
      <Header />
      {children}
      <Footer />
    </div>
  )
}

export default Layout
