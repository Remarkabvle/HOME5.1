import React, { useState } from "react";
import {
  FaShoppingCart,
  FaSearch,
  FaUser,
  FaCogs,
  FaFire,
} from "react-icons/fa";
import "./Header.scss";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="container navbar-container">
        <div className="logo">PORTEN</div>
        <div className="hamburger" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className={`nav-links ${isOpen ? "open" : ""}`}>
          <a href="#fire">
            <FaFire className="icon" />
            ПОЖАРНОСТЬ
          </a>
          <a href="#personal">
            <FaUser className="icon" />
            ЛИЧНЫЙ КАБИНЕТ
          </a>
          <a href="#settings">
            <FaCogs className="icon" />
            НАСТРОЙКИ
          </a>
          <a href="#cart">
            <FaShoppingCart className="icon" />
          </a>
          <a href="#search">
            <FaSearch className="icon" />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
