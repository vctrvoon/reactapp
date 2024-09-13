import React from 'react'

const NavigationBar = () => {
  return (
    <>
      <header id="header" className="header d-flex align-items-center fixed-top">
        <div className="container-fluid container-xl position-relative d-flex align-items-center">

        <nav id="navmenu" className="navmenu">
            <ul>
            <li><a href="/" className="active">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/team">Team</a></li>
            </ul>
            <i className="mobile-nav-toggle d-xl-none bi bi-list"></i>
        </nav>

        <a className="btn-getstarted" href="/search">Get Searching</a>

        </div>
    </header>
    </>
  )
}

export default NavigationBar
