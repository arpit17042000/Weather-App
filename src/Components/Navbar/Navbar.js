import React from 'react'

import classes from './Navbar.module.css'

const Navbar = () => {
    return (
        <div className={classes.Navbar}>
            <a href="/">Home</a>
            <a href="/">About</a>
            <a href="/">Contact</a>
            <a href="/">Anouncement</a>
        </div>
    )
}

export default Navbar
