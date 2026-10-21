import React from "react";
import "./Navbar.css";
import { CiHome } from "react-icons/ci";
import { IoLayersOutline } from "react-icons/io5";
import { FiUser } from "react-icons/fi";
import { IoDocumentTextOutline } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import { CiShoppingCart } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";
import { MdLogout } from "react-icons/md";


export default function Navbar() {
  return (
    <header className="navbar">
      <div className="left-section">
        {/* Logo */}
        <div className="logo">
          <img src="./images/logo.png" alt="logo" />
        </div>

        {/* Menu */}
        <nav className="menu">
          <ul>
            <li>
              <a href="#">
                <span>
                  <CiHome />
                </span>
                Home <IoIosArrowDown />

              </a>
            </li>
            <li>
              <a href="#">
                <IoLayersOutline />
                Listings Layouts <IoIosArrowDown />

              </a>
            </li>
            <li>
              <a href="#">
                <FiUser />
                User Panel <IoIosArrowDown />

              </a>
            </li>
            <li>
              <a href="#">
                <IoDocumentTextOutline />
                Pages <IoIosArrowDown />
              </a>
            </li>
          </ul>
        </nav>
      </div>

      {/* Actions */}
      <div className="actions">
        {/* Cart */}
        <div className="cart">
          <CiShoppingCart />
          <span className="badge">0</span>
        </div>

        {/* Sign In */}
        <a href="#" className="signin">
          <MdLogout />

          Sign In
        </a>

        {/* Add Listing Button */}
        <a href="#" className="btn">
          <CiLocationOn />

          Add Listing
        </a>
      </div>
    </header>
  );
}
