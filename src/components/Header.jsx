import React from 'react';
import {Link} from 'react-router-dom';
import logo1 from '../assets/logo1.png';
import logo2 from '../assets/logo2.png';
import logo3 from '../assets/logo3.png';
import {FaUserAlt,FaSearch,FaShoppingCart} from 'react-icons/fa';
import {IoReorderThree} from 'react-icons/io5';

const Header = () => {
  return (
    <header>
        <div className="logo">
            <img src={logo1} alt="" />
        </div>
        <div className="navbar">
            <Link to={'/'}>Home</Link>
            <Link to={'/categories'}>Categories</Link>
            <Link to={'/diamond'}>Diamond</Link>
            <Link to={'/blog'}>Blog</Link>
            <Link to={'/pages'}>Pages</Link>
            <Link to={'/shops'}>Shops</Link>
            <Link to={'/contact'}>Contact</Link>
        </div>
        <div className="navicons">
            <FaUserAlt/>
            <FaSearch/>
            <IoReorderThree/>
            <FaShoppingCart/>
        </div>
    </header>
  )
}

export default Header