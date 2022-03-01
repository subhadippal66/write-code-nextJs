import React from 'react'
import {Header} from './'

const Layout = ({children}) => {
  return (
    <>
        <Header key={'header'} />
        {children}
    </>
  )
}

export default Layout