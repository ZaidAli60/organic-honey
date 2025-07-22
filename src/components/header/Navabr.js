import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { IoChevronDownOutline } from 'react-icons/io5';
// import { Image } from 'antd';

import lightLogo from 'assests/kightlogo.webp';
import darkLogo from 'assests/darklogo.webp';
import { Image } from 'antd';

export default function Navabr() {
  const [showNav, setShowNav] = useState(false);
  const [isHeaderScrolled, setIsHeaderScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 992);

  const toggleNavItems = () => {
    setShowNav(!showNav);
  };

  const closeNavOnClick = () => {
    if (showNav) {
      setShowNav(false);
    }
  };

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    if (scrollPosition >= 60) {
      setIsHeaderScrolled(true);
    } else {
      setIsHeaderScrolled(false);
    }
  };

  const handleResize = () => {
    if (window.innerWidth > 992) {
      setShowNav(false);
      setIsMobile(false);
      document.body.style.overflow = 'auto';
    } else {
      setIsMobile(true);
    }
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    if (isMobile) {
      document.body.style.overflow = showNav ? 'hidden' : 'auto';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [showNav, isMobile]);

  useEffect(() => {
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const body = document.querySelector('body');
    if (showNav) {
      body.style.overflow = 'hidden';
    } else {
      body.style.overflow = 'auto';
    }
  }, [showNav]);
  return (
    <header id='frontend-header' >
      <nav className='shadow-lg'>
        <div className='navbar-container py-3'>
          <div className='logo'>
            <Link className='main-link' to='/'>
              <Image src="https://sweetmielo.like-themes.com/wp-content/uploads/2018/08/logo-1.png" preview={false}  className='company-nav-logo' />
              {/* <h3 className={isHeaderScrolled ? "text-white" : "text-primary"}>HyperColab</h3> */}
            </Link>
          </div>  
          <div>
            <input type='checkbox' id='checkbox1' className='checkbox1 visuallyHidden' checked={showNav} onChange={toggleNavItems} />
            <label className='menu-icon' htmlFor='checkbox1'>
              <div className='hamburger hamburger1'>
                <span className='bar bar1'></span>
                <span className='bar bar2'></span>
                <span className='bar bar3'></span>
                <span className='bar bar4'></span>
              </div>
            </label>
          </div>
          <div className={`nav-elements ${showNav ? 'active' : ''}`}>
            <ul className={`m-0 ${!showNav && 'flex-center'}`}>
              <li><Link to='/' onClick={closeNavOnClick}>Home</Link></li>
              <li>
                <div className='dropdown'>
                  <button className='dropdown-link' onClick={closeNavOnClick}>About<IoChevronDownOutline className='icon' /></button>
                </div>
              </li>
              <li>
                <div className='dropdown'>
                  <button className='dropdown-link' onClick={closeNavOnClick}>Products<IoChevronDownOutline className='icon' /></button>
                  <ul>
                    <li>
                      <Link to='/services/web-and-app-development' onClick={closeNavOnClick}>Honey</Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li><Link to='/contact' onClick={closeNavOnClick}>Contact</Link></li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}
