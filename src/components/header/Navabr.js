import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCartOutlined } from '@ant-design/icons';
import { useCart } from '../../context/CartContext';

export default function Navabr() {
  const { cartItems } = useCart();
  const [showNav, setShowNav] = useState(false);
  const [isHeaderScrolled, setIsHeaderScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 992);
  console.log(isHeaderScrolled);
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
              <i className="fa-solid fa-leaf me-2"></i> Organic2Buy
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
              {/* <li><Link to='/products' onClick={closeNavOnClick}>Products</Link></li> */}
              {/* <li>
                <div className='dropdown'>
                  <button className='dropdown-link' onClick={closeNavOnClick}>About<IoChevronDownOutline className='icon' /></button>
                </div>
              </li> */}
              {/* <li>
                <div className='dropdown'>
                  <button className='dropdown-link' onClick={closeNavOnClick}>Products<IoChevronDownOutline className='icon' /></button>
                  <ul>
                    <li>
                      <Link to='/services/web-and-app-development' onClick={closeNavOnClick}>Honey</Link>
                    </li>
                  </ul>
                </div>
              </li> */}
              {/* <li><Link to='/contact' onClick={closeNavOnClick}>Contact</Link></li> */}
              <Link className="navbar-brand fw-bold" to="/">My Shop</Link>
              <div className="d-flex align-items-center">
                <Link to="/cart" className="position-relative me-3">
                  <ShoppingCartOutlined style={{ fontSize: '24px' }} />
                  {cartItems.length > 0 && (
                    <span className="position-absolute top-5  translate-middle badge rounded-pill bg-danger">
                      {cartItems.length}
                    </span>
                  )}
                </Link>
              </div>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}
