import React from 'react'
import Header from './header'

const Layout = ({children,active}) => {
    console.log("From Layout = ",active)
    return (
        <div>
            <Header activeNow={active}/>
            {children}
        </div>
    )
}

export default Layout
