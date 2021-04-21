import React from 'react'
import Header from './header'

type props = {
    children: React.ReactNode,
    active: string
}

const Layout: React.FC<props> = ({ children, active }:props) => {
    console.log("From Layout = ", active)
    return (
        <div>
            <Header activeNow={active} />
            {children}
        </div>
    )
}

export default Layout
