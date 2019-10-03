import React from 'react'
import { Link } from 'gatsby'
// import github from '../img/github-icon.svg'
import logo from '../img/logo.svg'

const Navbar = () => {

  function revealMobileMenu() {
    let menu = document.querySelector('.navbar-end');
    menu.classList.toggle('open');
  }

  return (
  <nav className="navbar is-transparent">
    <div className="container">
      <div className="navbar-brand">
        <Link to="/" className="navbar-item">
          <figure className="image">
            <img src={logo} alt="Sasha Tran" />
          </figure>
        </Link>
      </div>
      {/* <div className="navbar-start">
        <Link className="navbar-item" to="/about">
          About
        </Link>
        <Link className="navbar-item" to="/products">
          Products
        </Link>
      </div> */}
      <div className="navbar-mobile">
        <div className="hamburger-menu" onClick={revealMobileMenu}> 
          <i className="fa fa-bars"></i>
        </div>
      </div>
      <div className="navbar-end">
      <a
          className="navbar-item"
          href="http://www.sashatran.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
           <i className="fa fa-file"></i>
           Website
        </a>
        <a
          className="navbar-item"
          href="https://github.com/sashatran"
          target="_blank"
          rel="noopener noreferrer"
        >
           <i className="fa fa-github"></i>
            Github
        </a>
        <a
          className="navbar-item"
          href="http://instagram.com/sasha.codes/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa fa-instagram"></i>
          Instagram
        </a>
        <a
          className="navbar-item"
          href="http://codepen.io/sashatran/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa fa-codepen"></i>
          Codepen
        </a>
        <a
          className="navbar-item"
          href="https://medium.com/@sashatran"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa fa-medium"></i>
          Medium
        </a>
        <a
          className="navbar-item"
          href="https://twitter.com/sa_sha26"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa fa-twitter"></i>
          Twitter
        </a>
      </div>
    </div>
  </nav>
)
    }

export default Navbar
